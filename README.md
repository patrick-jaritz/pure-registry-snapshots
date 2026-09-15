# PURE — registry snapshots

Signed, self-contained snapshots of the **PURE** authenticity registry.

PURE certifies the authorship of books, journalism and cultural works. A
certificate's URL gets printed inside a physical book, so it has to outlive the
company that issued it. This repository is how.

Each snapshot contains every certificate PURE has ever issued, the complete
hash-chained event ledger, the key directory and the Bitcoin timestamps, signed
with the registry's Ed25519 key. Given one snapshot and the public key below,
**any certificate can be verified with no server, no API and no code from PURE.**

## Verify a certificate

```bash
pip install cryptography
python3 verify-snapshot.py snapshots/pure-registry-snapshot-YYYY-MM.json \
    --pubkey "gyjrZudUezo/+G0rpfZvKyY1eazV3I8yU15IU//Tlwo=" \
    --cert PS-XXXXXXXX
```

`verify-snapshot.py` is **committed in this repository**, not linked. A link into
PURE's own infrastructure would die with PURE, which is the situation this
repository exists for. It depends on `cryptography` and the Python standard
library and nothing else, contacts no network, and imports nothing from PURE.

## Public key

```
issuer:     PURE Siegel
key_id:     pure-key-v1
algorithm:  Ed25519
public key: gyjrZudUezo/+G0rpfZvKyY1eazV3I8yU15IU//Tlwo=
```

The key is published here, in the registry's Impressum, in DNS, and at
`https://pure-certification.com/api/.well-known/pure-pubkey` while the registry exists.

**The verifier refuses the key carried inside a snapshot file, and you should
too.** Verifying a file against a key taken from that same file proves only that
whoever wrote the file also signed it — which is precisely what a forger does. Take
the key from a source the file cannot control.

## What the rules were

`rules/` carries the versioned Authenticity Standard, the Mark Usage Licence and
the governance documents, each with a `.sha256` sidecar. A certificate records the
version it was issued under; the checksum bound into its attestation matches the
text here. Without these, "verifiable" would mean checking a signature over claims
you can no longer read.

## Completeness — how to tell if something is missing

1. **One file per month.** `snapshots/` is named `pure-registry-snapshot-YYYY-MM`,
   so a gap is visible from the directory listing alone. No index is published,
   because a listing cannot lie and an index can.
2. **Every snapshot carries the whole chain from seq 1.** Deleting a file removes a
   dated witness, never an event — any later snapshot still contains everything the
   deleted one did.
3. **A later snapshot must extend an earlier one.** Take any two files: the later
   file's ledger must contain the earlier file's head hash at the same `seq`. If it
   does not, one of them has been tampered with. This is checkable with two
   downloads and no server.

Git history is the record. Files are amended in place, never rewritten; the branch
blocks force-pushes and deletion.

## Where this came from

Published automatically by the PURE registry — <https://pure-certification.com> — repository
`patrick-jaritz/pure-registry-snapshots`. Issued certificates are also verifiable at `https://pure-certification.com/v/<id>` for as long as
the registry exists. That is a convenience, not the authority; this repository is.
