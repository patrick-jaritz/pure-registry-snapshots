# PURE — registry snapshots

Signed, self-contained snapshots of the **PURE** authenticity registry.

PURE certifies the authorship of books, journalism and cultural works. A
certificate's URL gets printed inside a physical book, so it has to outlive the
company that issued it. This repository is how.

Each snapshot is one JSON file containing every certificate PURE has ever issued,
the complete hash-chained event ledger, the key directory and the Bitcoin
timestamps — signed with the registry's Ed25519 key. Given one snapshot and the
public key below, **any certificate can be verified with no server, no API and no
code from PURE.**

Registry: <https://www.pure-certification.at> · Verify a certificate:
`https://www.pure-certification.at/v/<id>`

## Public key

```
issuer:     PURE Siegel
key_id:     pure-key-v1
algorithm:  Ed25519
public key: gyjrZudUezo/+G0rpfZvKyY1eazV3I8yU15IU//Tlwo=
```

This is one of several independent places the key is published, and that is
deliberate. The verification tool **refuses to trust the key carried inside a
snapshot file** — verifying a file against a key taken from that same file proves
only that whoever wrote it also signed it, which is exactly what a forger does.
Take the key from here, from
`https://www.pure-certification.at/api/.well-known/pure-pubkey` while the registry
exists, or from your own records.

## Status

**Not yet populated.** The publishing job is being built; this README is a
placeholder and will be replaced by a generated one carrying the full verification
instructions, a committed copy of the verifier, and the versioned rulesets each
certificate was judged against.

Until then, the current snapshot is available from the registry itself:
`https://pure-backend-production.up.railway.app/api/transparency/snapshot/latest`

## Licence

MIT for the tooling. The registry facts in the snapshots are published so they can
be checked by anyone, without restriction.
