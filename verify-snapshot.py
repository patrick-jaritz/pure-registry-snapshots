#!/usr/bin/env python3
"""Verify a PURE registry snapshot, and a certificate inside it, without PURE.

This script is the point of the whole exit-proof snapshot (hardening plan § 3.1).
If PURE ceases to exist tomorrow, anyone holding one snapshot file plus PURE's
public key can still answer "is this certificate genuine, and what is its status?"

It depends on `cryptography` and the Python standard library. Nothing else. It does
not import from `backend/`, does not call any API, and does not need a network
connection.

    pip install cryptography
    python3 verify-snapshot.py snapshot.json --pubkey <base64> --cert PS-XXXXXXXX

Where to get the public key WITHOUT trusting the file:

  * https://<registry>/api/.well-known/pure-pubkey   (while the registry exists)
  * the README of the public snapshot repository
  * a key you recorded yourself when you received your certificate

Verifying the file against the key printed inside it proves only that whoever wrote
the file also signed it. That is what a forger does. The script will do it if you
insist, and it will say loudly that it proved nothing.
"""
from __future__ import annotations

import argparse
import base64
import hashlib
import json
import sys
from typing import Any, Dict, Optional

SNAPSHOT_SCHEMA = "pure-registry-snapshot/1"
GENESIS_HASH = "0" * 64

# Must match backend/server.py `_V2_SIGNED_FIELDS`. Written out rather than
# imported, because a verifier that needs PURE's source is not a verifier.
V2_SIGNED_FIELDS = ("schema_version", "seq", "event_type", "cert_id",
                    "created_at", "key_id", "payload")

# `scope_*` events apply to every certificate in a scope and time window — one
# event revoking a whole corpus. A verifier that ignored them would report a
# mass-revoked certificate as valid, which is the worst answer this script could
# give, so they are understood here and not only by the registry.
STATUS_FROM_EVENT = {"issue": "valid", "revoke": "revoked", "reinstate": "valid",
                     "scope_revoke": "revoked", "scope_reinstate": "valid"}


def scope_covers(payload, cert):
    """Does a scope event cover this certificate? Membership plus the window."""
    stype, sid = payload.get("scope_type"), payload.get("scope_id")
    field = {"org": "org_id", "programme": "programme_id"}.get(stype or "")
    if not field or not sid or cert.get(field) != sid:
        return False
    issued = cert.get("issued_at") or ""
    return bool(issued) and payload.get("window_from", "") <= issued <= payload.get("window_to", "")


def canonical(obj: Any) -> bytes:
    """Sorted keys, no whitespace, default ensure_ascii. Must match the registry."""
    return json.dumps(obj, sort_keys=True, separators=(",", ":")).encode("utf-8")


def sha256_hex(b: bytes) -> str:
    return hashlib.sha256(b).hexdigest()


def event_hashes(ev: Dict[str, Any]) -> Dict[str, str]:
    if int(ev.get("schema_version", 1)) >= 2:
        material = canonical({k: ev.get(k) for k in V2_SIGNED_FIELDS})
    else:
        material = canonical(ev.get("payload") or {})
    ph = sha256_hex(material)
    return {"payload_hash": ph,
            "hash": sha256_hex((ph + (ev.get("prev_hash") or "")).encode("utf-8"))}


def ed25519_verify(pubkey_b64: str, signature_b64: str, message: bytes) -> bool:
    from cryptography.exceptions import InvalidSignature
    from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PublicKey
    try:
        Ed25519PublicKey.from_public_bytes(base64.b64decode(pubkey_b64)).verify(
            base64.b64decode(signature_b64), message)
        return True
    except (InvalidSignature, ValueError, TypeError):
        return False


def b64url_decode(s: str) -> bytes:
    return base64.urlsafe_b64decode(s + "=" * (-len(s) % 4))


def verify_jws(jws: str, keys: Dict[str, str]) -> Dict[str, Any]:
    """Verify a compact JWS against a key directory. Returns a small report."""
    try:
        header_b64, payload_b64, sig_b64 = jws.split(".")
    except ValueError:
        return {"ok": False, "error": "not a compact JWS"}
    try:
        header = json.loads(b64url_decode(header_b64))
        payload = json.loads(b64url_decode(payload_b64))
    except Exception as e:  # noqa: BLE001
        return {"ok": False, "error": f"undecodable JWS: {e}"}
    kid = header.get("kid") or payload.get("key_id")
    pub = keys.get(kid)
    if not pub:
        return {"ok": False, "error": f"no public key for kid {kid!r} in the snapshot",
                "payload": payload}
    signing_input = f"{header_b64}.{payload_b64}".encode("ascii")
    sig = base64.b64encode(b64url_decode(sig_b64)).decode("ascii")
    return {"ok": ed25519_verify(pub, sig, signing_input),
            "kid": kid, "payload": payload}


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("snapshot", help="path to pure-registry-snapshot-YYYY-MM.json")
    ap.add_argument("--pubkey", help="PURE's Ed25519 public key, base64, obtained "
                                     "independently of this file")
    ap.add_argument("--cert", help="a certificate ID to check, e.g. PS-XXXXXXXX")
    ap.add_argument("--trust-embedded-key", action="store_true",
                    help="verify against the key printed inside the file. Proves "
                         "internal consistency only — NOT authenticity.")
    args = ap.parse_args()

    with open(args.snapshot, "r", encoding="utf-8") as fh:
        blob = json.load(fh)

    if blob.get("schema") != SNAPSHOT_SCHEMA:
        print(f"FAIL  unknown schema {blob.get('schema')!r}")
        return 2

    pubkey = args.pubkey
    if not pubkey:
        if not args.trust_embedded_key:
            print("FAIL  no --pubkey given.\n"
                  "      Fetch it from /api/.well-known/pure-pubkey, from the\n"
                  "      snapshot repository's README, or from your own records.\n"
                  "      Re-run with --trust-embedded-key only if you accept that\n"
                  "      this proves nothing about authenticity.")
            return 2
        pubkey = blob.get("signature_pubkey_b64")
        print("WARN  verifying against the key inside the file. This proves the\n"
              "      file is internally consistent and NOTHING about who made it.")
    elif blob.get("signature_pubkey_b64") and blob["signature_pubkey_b64"] != pubkey:
        print("FAIL  the file advertises a different key than the one you supplied.\n"
              f"      file: {blob['signature_pubkey_b64']}\n"
              f"      you:  {pubkey}\n"
              "      Either this file is not PURE's, or the key has rotated — check\n"
              "      the key directory before trusting either.")
        return 2

    payload = blob.get("payload") or {}
    body = canonical(payload)

    ok_hash = sha256_hex(body) == blob.get("payload_sha256")
    print(f"{'OK  ' if ok_hash else 'FAIL'}  payload_sha256")
    if not ok_hash:
        return 2

    ok_sig = ed25519_verify(pubkey, blob.get("signature", ""), body)
    print(f"{'OK  ' if ok_sig else 'FAIL'}  snapshot signature "
          f"(key_id {blob.get('signature_key_id')})")
    if not ok_sig:
        return 2

    events = (payload.get("ledger") or {}).get("events") or []
    prev = GENESIS_HASH
    for i, ev in enumerate(events):
        # Contiguity as well as linkage. prev_hash alone cannot see a truncated
        # tail: a chain with its last events removed still links perfectly.
        if ev.get("seq") != i + 1:
            print(f"FAIL  ledger seq not contiguous at index {i}: "
                  f"expected {i + 1}, found {ev.get('seq')}")
            return 2
        if ev.get("prev_hash") != prev:
            print(f"FAIL  chain break at seq {ev.get('seq')}")
            return 2
        rec = event_hashes(ev)
        if rec["payload_hash"] != ev.get("payload_hash") or rec["hash"] != ev.get("hash"):
            print(f"FAIL  hash mismatch at seq {ev.get('seq')} — the event was altered")
            return 2
        prev = ev["hash"]
    print(f"OK    ledger chain: {len(events)} events, contiguous, hashes recomputed")

    head = (payload.get("ledger") or {}).get("head") or {}
    if events and head.get("hash") != prev:
        print("FAIL  head does not match the last event — events removed from the end")
        return 2
    print(f"OK    head matches the last event (seq {head.get('seq')})")

    counts = payload.get("counts") or {}
    certs = payload.get("certificates") or []
    if counts.get("events") != len(events) or counts.get("certificates") != len(certs):
        print("FAIL  counts disagree with contents — the file is truncated")
        return 2
    print(f"OK    counts: {len(certs)} certificates, {len(events)} events, "
          f"{len(payload.get('anchors') or [])} anchors")

    anchored = [a for a in (payload.get("anchors") or []) if a.get("ots_proof")]
    if anchored:
        newest = max(anchored, key=lambda a: a.get("seq", 0))
        print(f"INFO  newest Bitcoin anchor: seq {newest.get('seq')} "
              f"({newest.get('ots_status')}) — verify with `ots verify`")
    else:
        print("WARN  no OpenTimestamps anchor in this snapshot: the chain's "
              "contents are provable, its AGE is not")

    if not args.cert:
        print("\nSnapshot verified. Pass --cert PS-XXXXXXXX to check one certificate.")
        return 0

    keys = {k.get("key_id"): (k.get("pubkey_b64") or k.get("verify_key_b64"))
            for k in (payload.get("keys") or [])
            if k.get("key_id") and (k.get("pubkey_b64") or k.get("verify_key_b64"))}

    row: Optional[Dict[str, Any]] = next(
        (c for c in certs if c.get("cert_id") == args.cert), None)
    if row is None:
        print(f"\nFAIL  {args.cert} is not in this snapshot")
        return 1

    # Status from the LEDGER, not from the row. The row is a projection; the chain
    # is the record, and the whole architecture exists so you need not trust the row.
    # The LATEST applicable event wins — per-certificate events and any scope
    # event whose window covers this one. That ordering is what lets an individual
    # reinstate rescue a certificate out of a mass revocation, offline.
    latest_type, latest_seq, via_scope = None, -1, False
    for ev in events:
        etype, seq = ev.get("event_type"), ev.get("seq", -1)
        if etype not in STATUS_FROM_EVENT or seq <= latest_seq:
            continue
        if ev.get("cert_id") == args.cert:
            latest_type, latest_seq, via_scope = etype, seq, False
        elif etype.startswith("scope_") and scope_covers(ev.get("payload") or {}, row):
            latest_type, latest_seq, via_scope = etype, seq, True
    status = STATUS_FROM_EVENT.get(latest_type)
    print(f"\nOK    {args.cert} found: {row.get('title') or '(untitled)'}")
    print(f"OK    status derived from the ledger: {status} "
          f"(event seq {latest_seq if latest_type else None}"
          + (", via a scope-wide revocation" if via_scope else "") + ")")
    if row.get("status") != status:
        print(f"WARN  the stored row says {row.get('status')!r} — the ledger wins, "
              "and the disagreement is itself a finding")

    if row.get("jws"):
        v = verify_jws(row["jws"], keys)
        print(f"{'OK  ' if v.get('ok') else 'FAIL'}  certificate JWS signature "
              f"(kid {v.get('kid')})" + ("" if v.get("ok") else f" — {v.get('error','')}"))
        if not v.get("ok"):
            return 1
        p = v.get("payload") or {}
        for field in ("issuer", "category", "assurance_level", "content_sha256",
                      "issued_at", "standard_version"):
            if p.get(field) is not None:
                print(f"      {field}: {p[field]}")
    else:
        print("WARN  no JWS stored for this certificate — only the ledger attests it")

    print("\nVerified from the file alone. No PURE server was contacted.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
