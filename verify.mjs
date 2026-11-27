// PURE — static fallback verifier (D-128).
//
// A port of scripts/verify-snapshot.py to the browser, so a printed QR code
// `verify.pure-certification.com/v/<id>` keeps answering after PURE's servers
// are gone: DNS points at a static host, this file loads the newest published
// snapshot and checks it with WebCrypto. No server, no API, no third-party
// script. The same module runs under node >= 22 for the tests.
//
// It must reach EXACTLY the answer verify-snapshot.py reaches. Every rule here
// mirrors a rule there; the cross-check test in backend/tests/unit/
// test_static_verify.py runs both against one snapshot.

export const SNAPSHOT_SCHEMA = "pure-registry-snapshot/1";
export const GENESIS_HASH = "0".repeat(64);
export const V2_SIGNED_FIELDS = ["schema_version", "seq", "event_type", "cert_id",
  "created_at", "key_id", "payload"];
export const STATUS_FROM_EVENT = {
  issue: "valid", revoke: "revoked", reinstate: "valid",
  scope_revoke: "revoked", scope_reinstate: "valid",
};

// ---------------------------------------------------------------------------
// JSON that keeps number literals. The registry hashes Python's json.dumps
// output; JSON.parse would turn `1.0` into `1` and the hash of any event
// carrying a float would no longer match. A number is kept as a PyNum holding
// the literal text, which is exactly what Python wrote.
// ---------------------------------------------------------------------------

export class PyNum {
  constructor(raw) { this.raw = raw; }
  valueOf() { return Number(this.raw); }
  toString() { return this.raw; }
  toJSON() { return Number(this.raw); }
}

export function parseJson(text) {
  let i = 0;
  const ws = () => { while (i < text.length && " \t\n\r".includes(text[i])) i++; };
  const fail = (m) => { throw new SyntaxError(`${m} at ${i}`); };
  function value() {
    ws();
    const c = text[i];
    if (c === "{") {
      i++; const o = {}; ws();
      if (text[i] === "}") { i++; return o; }
      for (;;) {
        ws(); if (text[i] !== '"') fail("expected key");
        const k = str(); ws();
        if (text[i++] !== ":") fail("expected :");
        o[k] = value(); ws();
        if (text[i] === ",") { i++; continue; }
        if (text[i] === "}") { i++; return o; }
        fail("expected , or }");
      }
    }
    if (c === "[") {
      i++; const a = []; ws();
      if (text[i] === "]") { i++; return a; }
      for (;;) {
        a.push(value()); ws();
        if (text[i] === ",") { i++; continue; }
        if (text[i] === "]") { i++; return a; }
        fail("expected , or ]");
      }
    }
    if (c === '"') return str();
    if (text.startsWith("true", i)) { i += 4; return true; }
    if (text.startsWith("false", i)) { i += 5; return false; }
    if (text.startsWith("null", i)) { i += 4; return null; }
    // Python also writes these for non-finite floats.
    for (const lit of ["NaN", "Infinity", "-Infinity"]) {
      if (text.startsWith(lit, i)) { i += lit.length; return new PyNum(lit); }
    }
    const m = /^-?\d+(\.\d+)?([eE][+-]?\d+)?/.exec(text.slice(i, i + 64));
    if (!m) fail("unexpected token");
    i += m[0].length;
    return new PyNum(m[0]);
  }
  function str() {
    // JSON.parse on the exact literal handles every escape correctly.
    const start = i; i++;
    while (i < text.length && text[i] !== '"') i += text[i] === "\\" ? 2 : 1;
    if (i >= text.length) fail("unterminated string");
    i++;
    return JSON.parse(text.slice(start, i));
  }
  const out = value(); ws();
  if (i !== text.length) fail("trailing data");
  return out;
}

// json.dumps(obj, sort_keys=True, separators=(",", ":")) with ensure_ascii.
function pyString(s) {
  let out = '"';
  for (let k = 0; k < s.length; k++) {
    const ch = s[k]; const code = s.charCodeAt(k);
    if (ch === '"') out += '\\"';
    else if (ch === "\\") out += "\\\\";
    else if (ch === "\n") out += "\\n";
    else if (ch === "\r") out += "\\r";
    else if (ch === "\t") out += "\\t";
    else if (ch === "\b") out += "\\b";
    else if (ch === "\f") out += "\\f";
    else if (code < 0x20 || code > 0x7e) out += "\\u" + code.toString(16).padStart(4, "0");
    else out += ch;
  }
  return out + '"';
}

// Python sorts keys by code point; JS sorts by UTF-16 unit. Equal except for
// astral characters, which this comparison handles too.
function cmpCodePoints(a, b) {
  const A = Array.from(a), B = Array.from(b);
  for (let k = 0; k < Math.min(A.length, B.length); k++) {
    const d = A[k].codePointAt(0) - B[k].codePointAt(0);
    if (d) return d;
  }
  return A.length - B.length;
}

export function canonical(obj) {
  if (obj === null || obj === undefined) return "null";
  if (obj === true) return "true";
  if (obj === false) return "false";
  if (obj instanceof PyNum) return obj.raw;
  if (typeof obj === "number") return Number.isInteger(obj) ? String(obj) : fail(obj);
  if (typeof obj === "string") return pyString(obj);
  if (Array.isArray(obj)) return "[" + obj.map(canonical).join(",") + "]";
  const keys = Object.keys(obj).sort(cmpCodePoints);
  return "{" + keys.map((k) => pyString(k) + ":" + canonical(obj[k])).join(",") + "}";
  function fail(n) { throw new TypeError(`cannot canonicalise float ${n} without its literal`); }
}

const enc = new TextEncoder();
const hex = (buf) => Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0")).join("");

export async function sha256Hex(data) {
  const bytes = typeof data === "string" ? enc.encode(data) : data;
  return hex(await crypto.subtle.digest("SHA-256", bytes));
}

export function b64decode(s) {
  const bin = atob(s);
  return Uint8Array.from(bin, (c) => c.charCodeAt(0));
}

export function b64urlDecode(s) {
  const t = s.replace(/-/g, "+").replace(/_/g, "/");
  return b64decode(t + "=".repeat((4 - (t.length % 4)) % 4));
}

export async function ed25519Supported() {
  try {
    await crypto.subtle.importKey("raw", new Uint8Array(32).fill(1), { name: "Ed25519" },
      false, ["verify"]);
    return true;
  } catch { return false; }
}

export async function ed25519Verify(pubkeyB64, sigBytes, message) {
  try {
    const key = await crypto.subtle.importKey("raw", b64decode(pubkeyB64),
      { name: "Ed25519" }, false, ["verify"]);
    return await crypto.subtle.verify({ name: "Ed25519" }, key, sigBytes,
      typeof message === "string" ? enc.encode(message) : message);
  } catch { return false; }
}

const num = (x) => (x === null || x === undefined ? undefined : Number(x));

export async function eventHashes(ev) {
  const material = num(ev.schema_version ?? 1) >= 2
    ? canonical(Object.fromEntries(V2_SIGNED_FIELDS.map((k) => [k, ev[k] ?? null])))
    : canonical(ev.payload || {});
  const ph = await sha256Hex(material);
  return { payload_hash: ph, hash: await sha256Hex(ph + (ev.prev_hash || "")) };
}

export function scopeCovers(payload, cert) {
  const field = { org: "org_id", programme: "programme_id" }[payload.scope_type || ""];
  const sid = payload.scope_id;
  if (!field || !sid || cert[field] !== sid) return false;
  const issued = cert.issued_at || "";
  return Boolean(issued) && (payload.window_from || "") <= issued
    && issued <= (payload.window_to || "");
}

// ---------------------------------------------------------------------------
// The snapshot. Returns {ok, checks:[{ok, level, code, text}], ...}; stops at the
// first failure, as the CLI does.
// ---------------------------------------------------------------------------

export async function verifySnapshot(blob, pubkeyB64) {
  const checks = [];
  const add = (level, code, text) => { checks.push({ level, code, text }); };
  const fail = (code, text) => { add("fail", code, text); return { ok: false, checks }; };

  if (blob.schema !== SNAPSHOT_SCHEMA) return fail("schema", `unknown schema ${blob.schema}`);
  if (!pubkeyB64) return fail("no_key", "no public key obtained independently of the file");
  if (blob.signature_pubkey_b64 && blob.signature_pubkey_b64 !== pubkeyB64) {
    return fail("key_mismatch", "the file advertises a different key than the published one");
  }
  const payload = blob.payload || {};
  const body = canonical(payload);
  if ((await sha256Hex(body)) !== blob.payload_sha256) return fail("payload_sha256", "payload hash");
  add("ok", "payload_sha256", "payload hash");

  let sig;
  try { sig = b64decode(blob.signature || ""); } catch { sig = new Uint8Array(); }
  if (!(await ed25519Verify(pubkeyB64, sig, body))) return fail("signature", "snapshot signature");
  add("ok", "signature", `snapshot signature (key_id ${blob.signature_key_id})`);

  const ledger = payload.ledger || {};
  const events = ledger.events || [];
  let prev = GENESIS_HASH;
  for (let i = 0; i < events.length; i++) {
    const ev = events[i];
    if (num(ev.seq) !== i + 1) return fail("seq", `ledger seq not contiguous at index ${i}`);
    if (ev.prev_hash !== prev) return fail("chain", `chain break at seq ${ev.seq}`);
    const rec = await eventHashes(ev);
    if (rec.payload_hash !== ev.payload_hash || rec.hash !== ev.hash) {
      return fail("event_hash", `hash mismatch at seq ${ev.seq}`);
    }
    prev = ev.hash;
  }
  add("ok", "chain", `ledger chain: ${events.length} events`);

  const head = ledger.head || {};
  if (events.length && head.hash !== prev) return fail("head", "head does not match the last event");
  add("ok", "head", `head matches the last event (seq ${head.seq ?? "–"})`);

  const counts = payload.counts || {};
  const certs = payload.certificates || [];
  if (num(counts.events) !== events.length || num(counts.certificates) !== certs.length) {
    return fail("counts", "counts disagree with contents");
  }
  add("ok", "counts", `${certs.length} certificates, ${events.length} events`);

  const anchored = (payload.anchors || []).filter((a) => a.ots_proof);
  if (!anchored.length) add("warn", "no_anchor", "no OpenTimestamps anchor in this snapshot");

  return { ok: true, checks, payload, events, certs,
           generated_at: payload.generated_at, issuer: payload.issuer };
}

async function verifyJws(jws, keys) {
  const parts = String(jws).split(".");
  if (parts.length !== 3) return { ok: false, error: "not a compact JWS" };
  let header, payload;
  try {
    const dec = new TextDecoder();
    header = JSON.parse(dec.decode(b64urlDecode(parts[0])));
    payload = JSON.parse(dec.decode(b64urlDecode(parts[1])));
  } catch (e) { return { ok: false, error: "undecodable JWS" }; }
  const kid = header.kid || payload.key_id;
  const pub = keys[kid];
  if (!pub) return { ok: false, error: `no public key for kid ${kid}`, payload };
  const ok = await ed25519Verify(pub, b64urlDecode(parts[2]), `${parts[0]}.${parts[1]}`);
  return { ok, kid, payload };
}

// One certificate, from a snapshot verifySnapshot() accepted. Status comes from
// the LEDGER (latest applicable event, scope events included), facts from the
// VERIFIED JWS payload — never from the stored row, exactly like the CLI.
export async function checkCertificate(report, certId) {
  const { events, certs, payload } = report;
  const row = certs.find((c) => c.cert_id === certId);
  if (!row) return { found: false, cert_id: certId };

  let latestType = null, latestSeq = -1, viaScope = false;
  for (const ev of events) {
    const etype = ev.event_type; const seq = num(ev.seq) ?? -1;
    if (!(etype in STATUS_FROM_EVENT) || seq <= latestSeq) continue;
    if (ev.cert_id === certId) { latestType = etype; latestSeq = seq; viaScope = false; }
    else if (etype.startsWith("scope_") && scopeCovers(ev.payload || {}, row)) {
      latestType = etype; latestSeq = seq; viaScope = true;
    }
  }
  const out = {
    found: true, cert_id: certId, title: row.title || null,
    status: STATUS_FROM_EVENT[latestType] || null,
    status_seq: latestType ? latestSeq : null, via_scope: viaScope,
    row_disagrees: row.status !== (STATUS_FROM_EVENT[latestType] || null),
    jws: null, facts: {}, trial: false, file_sha256: null, work_type: null, warnings: [],
  };
  if (out.row_disagrees) out.warnings.push("row_status");

  if (!row.jws) { out.warnings.push("no_jws"); return out; }
  const keys = {};
  for (const k of payload.keys || []) {
    const pub = k.pubkey_b64 || k.verify_key_b64;
    if (k.key_id && pub) keys[k.key_id] = pub;
  }
  const v = await verifyJws(row.jws, keys);
  out.jws = { ok: v.ok, kid: v.kid || null, error: v.error || null };
  if (!v.ok) return out;
  const p = v.payload || {};
  for (const f of ["issuer", "category", "assurance_level", "content_sha256",
                   "issued_at", "standard_version"]) {
    if (p[f] !== undefined && p[f] !== null) out.facts[f] = p[f];
  }
  out.trial = p.trial === true;
  const work = p.work && typeof p.work === "object" ? p.work : {};
  // Same shape checks as server.cert_signed_file_sha256 / cert_signed_work_type:
  // a value that is not a hex digest or a plain form key is not shown at all.
  out.file_sha256 = /^[0-9a-f]{64}$/.test(work.file_sha256 || "") ? work.file_sha256 : null;
  out.work_type = /^[a-z_]{1,40}$/.test(work.type || "") ? work.type : null;
  if ((row.trial === true) !== out.trial) out.warnings.push("row_trial");
  return out;
}

// Convenience for callers holding the raw file text.
export async function verifyText(text, pubkeyB64, certId) {
  const blob = parseJson(text);
  const report = await verifySnapshot(blob, pubkeyB64);
  const cert = report.ok && certId ? await checkCertificate(report, certId) : null;
  return { ok: report.ok, checks: report.checks, generated_at: report.generated_at,
           issuer: report.issuer, cert };
}
