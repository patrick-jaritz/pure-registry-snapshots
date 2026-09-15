# PURE Siegel — Authenticity Standard v0.1

> **Document version:** 0.1 (draft for public review)
> **Status:** in force from 18 June 2026 for all certifications issued by the PURE Siegel Registry
> **Canonical URL:** `/standard/v0.1` (and via API `GET /api/standard/current`)
> **Hash:** computed at runtime over this document's exact text and recorded on every attestation. See `attestations.standard_version` and `attestations.standard_hash`.

---

## 1. Purpose

This Standard defines the two assurance categories that the PURE Siegel
Registry certifies and the disclosure required of every applicant.
Adherence to this Standard is the basis for issuance, and breach of its
terms is a basis for revocation.

The Standard is intentionally narrow. It does not police literary
quality, factual accuracy, or editorial choices — only the **provenance
of the human or non-human labour** that produced the work.

---

## 2. Categories

PURE Siegel certifies works in exactly two categories. There is no
"hybrid" tier, no partial badge, no marketing-graded levels.

### 2.1 · Human-Authored (assurance level **AAA**)

A work is **Human-Authored** when **no generative artificial intelligence
contributed any expressive content to the final work**.

The applicant attests that:

1. No generative model produced any portion of the text, image, audio,
   video, or other expressive content that appears in the published work,
   either verbatim or in paraphrase.
2. No generative model produced an outline, scene-by-scene plan, chapter
   structure, character description, or other substantive plan that
   shaped the final composition.
3. No translation, summary, or restatement of the work — for the
   published edition — was machine-generated.
4. The disclosed *de-minimis aids* below are the only AI involvement.

#### 2.1.1 · Permitted *de-minimis* aids

The following uses are explicitly **not** disqualifying. They are
considered mechanical aids, not generative authorship:

- Spell-checking and grammar-checking of text the human composed
- Style suggestions accepted or rejected on a per-clause basis by the
  author (e.g. Grammarly suggestions on a sentence the author wrote)
- Single-word or short-phrase machine translation of a quoted foreign
  source already in the work
- Keyword extraction or full-text search across the author's own notes
- OCR / handwriting-to-text conversion of the author's own manuscripts
- Reference look-ups and bibliographic search returning links the human
  then reads (search retrieval — not AI summarisation of those sources)
- Image background removal, colour correction, exposure normalisation,
  format conversion of photographs the human captured

The presence of these aids does not need to be disclosed for
Human-Authored status. **Anything beyond them disqualifies the work
from this category.**

### 2.2 · Human-Led (assurance level **AA**)

A work is **Human-Led** when **a human exercises the substantive
creative decisions, AI is used as an assistant for portions of the
production, and that AI involvement is disclosed truthfully**.

The applicant attests that:

1. A specific natural person (or named persons) made the substantive
   creative decisions — what to say, in what order, with what evidence,
   under what argument, in what voice.
2. The AI involvement is enumerated in the `ai_disclosure` profile
   recorded on the certificate, and that enumeration is true.
3. The AI did not autonomously produce the final published artefact.

A Human-Led work is **not** Human-Authored. The PURE Siegel mark for a
Human-Led work is visually distinct (assurance level AA, not AAA) and
the public verification page lists the AI uses disclosed.

### 2.3 · Out of scope

PURE Siegel does **not** certify:

- AI-generated works without human authorship (no category exists)
- Anonymous works (a named natural person must attest)
- Works whose authorship is genuinely disputed at the time of
  submission (a public-registry seal would be evidence in such a
  dispute and cannot be issued mid-dispute)

---

## 3. Disclosure profile (`ai_disclosure`)

Every certification records a structured disclosure profile. For
Human-Authored works, every field is `false`. For Human-Led works,
each `true` field must be accompanied by a brief description in the
submission questionnaire.

| Field            | Meaning                                                        |
|------------------|----------------------------------------------------------------|
| `research`       | AI used for literature search, summarising sources, or related |
| `text_gen`       | AI generated text that appears in the final work               |
| `translation`    | AI translated source material into the working language        |
| `translation_gen`| AI generated the published-edition translation                 |
| `image_gen`      | AI generated images that appear in the final work              |
| `code_gen`       | AI generated code that appears as content (not as authoring tool) |

If the applicant declares Human-Authored, the registry will reject the
submission at intake if any of `text_gen`, `translation_gen`, or
`image_gen` are `true`.

---

## 4. Cryptographic cross-check

Where evidence files carry C2PA Content Credentials (or other
cryptographically-signed provenance manifests), the registry inspects
them and compares against the declared category.

Specifically, if an evidence file's manifest carries an IPTC
`digitalSourceType` of:

- `trainedAlgorithmicMedia`,
- `compositeWithTrainedAlgorithmicMedia`, or
- `algorithmicMedia`

…and the declared category is **Human-Authored**, the submission is
flagged for **deep audit** and cannot be issued until either (a) the
applicant switches to **Human-Led** with appropriate disclosure, or
(b) the applicant replaces the contradicting evidence.

The absence of Content Credentials is informationless: most upload
pipelines strip metadata. Lack of a manifest never penalises an
applicant; **only present-and-contradictory** manifests do.

---

## 5. Attestation

Every certification requires a per-submission attestation signed by the
applicant. The attestation records:

- The exact version of this Standard the applicant attested under
  (`attestations.standard_version` + `standard_hash`)
- The exact license-text version accepted (see Mark Usage License v0.1)
- A timestamp, IP, and identity reference
- A SHA-256 hash of the canonical attestation statement

False attestation is a basis for revocation under Section 7.

---

## 6. Public registry & seal

A certificate appears in the public registry at `/v/<cert_id>` with:

- The certificate ID and current status (`valid` / `revoked`)
- Category and assurance level
- Work fingerprint (SHA-256 of canonical text content)
- AI disclosure profile
- Provenance summary (C2PA findings + evidence-type list + consistency check)
- Issuance timestamp and ledger position
- The Ed25519 JWS for offline verification

The registry never publishes PII (author identity, IPs, evidence
filenames, signer DNs) on the public verification page.

---

## 7. Revocation

The registry may revoke a certificate when:

1. A new fact comes to light showing the attestation was false
   (e.g. an unmasked AI ghostwriting tool, a discovered C2PA manifest
   asserting AI involvement on a Human-Authored claim)
2. The applicant requests revocation (right to retract)
3. A court of competent jurisdiction orders revocation
4. The applicant's licence to use the PURE Siegel mark is terminated
   under the Mark Usage License v0.1

Revocation is a **registry signal**, not a DMCA notice or content
takedown. The work continues to exist; the certificate is marked as
revoked in the public registry, with an immutable ledger entry recording
the reason and timestamp.

---

## 8. Amendments

Future versions of this Standard will be published at new versioned
URLs (e.g. `/standard/v0.2`). **Certificates remain bound to the
Standard version they were issued under.** A change to the Standard
does not retroactively change existing certifications.

---

## 9. References

- [IPTC Photo Metadata digital-source type codes](http://cv.iptc.org/newscodes/digitalsourcetype/)
- [C2PA · Coalition for Content Provenance and Authenticity](https://c2pa.org/)
- [RFC 8032 — Ed25519 Signature Scheme](https://datatracker.ietf.org/doc/html/rfc8032)
- [RFC 7515 — JWS](https://datatracker.ietf.org/doc/html/rfc7515)
- The Authors Guild authenticity-mark programme (the inspiration for
  the AAA / AA two-tier structure)
