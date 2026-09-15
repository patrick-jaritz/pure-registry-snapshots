# PURE Siegel — Authenticity Standard v0.3 (DRAFT)

> **Document version:** 0.3 — **DRAFT for review** (not in force)
> **In force:** no
> **Status:** draft. Not yet binding on any certification. Open items are listed in §12. Adopt only after a pilot (§12).
> **Supersedes (when adopted):** v0.2. Certifications already issued under v0.1/v0.2 remain bound to the version they were issued under and are **not** re-tiered.
> **Canonical URL (on adoption):** `/standard/v0.3` (and via API `GET /api/standard/current`)
> **Hash:** on adoption, computed at runtime over this document's exact text and recorded on every attestation (`attestations.standard_version` + `standard_hash`). Draft text is not hashed onto live certificates.
> **Diff:** on adoption, a line-level delta from v0.2 is published at `GET /api/standard/v0.3/diff/v0.2`.

---

## 1. Purpose

This Standard defines the **authorship tiers** that the PURE Siegel Registry
certifies and the disclosure required of every applicant. Adherence to this
Standard is the basis for issuance; breach of its terms is a basis for
revocation.

The Standard is intentionally narrow. It does not police literary quality,
factual accuracy, or editorial choices — only the **provenance of the human or
non-human labour** that produced the work.

**What changed in v0.3 (summary; full list in §11).** v0.2 certified two
categories and used the labels *AAA* / *AA* as synonyms for them. v0.3 makes
two changes:

1. It adds a **third, middle tier — Human-Assisted** — between Human-Authored
   and Human-Led, so that an author who used AI only *non-generatively* (to
   research or to translate source material, with **no AI-generated content in
   the published work**) is no longer forced to declare Human-Led.
2. It **separates the authorship tier from the assurance level** (§3). "How
   human is the work" and "how strongly is the applicant's identity verified"
   are two different questions and are no longer expressed with the same
   AAA/AA label.

The measure of "enough human input" is **the ruleset below**, not a score. A
work either meets a tier's bright-line rules or it does not; there is no
percentage and no pass-mark on a dial.

---

## 2. Authorship tiers

PURE Siegel certifies works in exactly **three** tiers. There is no partial
badge and no marketing-graded number. Two bright-line questions place every
work:

- **Did any AI tool beyond the de-minimis aids of §2.1.1 touch the work?**
  No → **Human-Authored**.
- **Does any AI-generated content appear in the published work?**
  No (but non-generative AI was used) → **Human-Assisted**.
  Yes (disclosed, human-directed) → **Human-Led**.

| Tier | Bright-line rule | `declared_category` |
|------|------------------|---------------------|
| **Human-Authored** | No generative AI **and** no substantive non-generative AI; only the de-minimis aids of §2.1.1, or nothing. | `human_authored` |
| **Human-Assisted** | Substantive **non-generative** AI assistance, disclosed; **no AI-generated content in the final work.** | `human_assisted` *(new)* |
| **Human-Led** | **AI-generated content appears in the final work**, disclosed and evidenced, with a human as director and author. | `human_led` |

### 2.0 · What the tier is *about* — scope

The tier describes the **expressive content of the work itself**: the text of a
book or article, the frames of a photo essay, the footage of a film. Two things
are deliberately outside it:

**Packaging and cover art.** A cover, jacket, or promotional image commissioned by
a publisher is a publishing decision, not authorship — the author frequently has no
say in it, and **different editions of the identical text routinely carry different
covers**. A rule that let cover art set the tier would make the same manuscript
Human-Authored in hardback and Human-Led in paperback, which is incoherent. Cover
and packaging art is therefore **disclosed** as `cover_art_gen` and shown on the
certificate, but it does **not** move the tier. Transparency without
misattribution.

**Who the human was.** This Standard certifies that a *human* authored the work,
not *which* human. Ghostwriting, collaboration, work-for-hire and pseudonymity are
long-standing publishing practices and raise attribution questions, not AI
questions. A ghostwritten book with no AI involvement is Human-Authored, and the
seal makes no claim about the name on the cover.

### 2.1 · Human-Authored

A work is **Human-Authored** when **no generative artificial intelligence
contributed any expressive content to the final work, and no AI performed
substantive non-generative work on the author's behalf** beyond the de-minimis
aids in §2.1.1.

The applicant attests that:

1. No generative model produced any portion of the text, image, audio, video,
   or other expressive content that appears in the published work, either
   verbatim or in paraphrase.
2. No generative model produced an outline, scene-by-scene plan, chapter
   structure, character description, or other substantive plan that shaped the
   final composition.
3. No translation, summary, or restatement of the work — for the published
   edition — was machine-generated.
4. No AI summarised, synthesised, analysed, or translated source material on
   the author's behalf beyond the de-minimis aids in §2.1.1. (Use of such
   assistance is permitted, but it is **Human-Assisted**, not Human-Authored.)
5. The disclosed de-minimis aids below are the only AI involvement.

#### 2.1.1 · Permitted *de-minimis* aids

The following uses are explicitly **not** disqualifying and do **not** move a
work out of Human-Authored. They are mechanical aids, not generative authorship
and not substantive cognition:

- Spell-checking and grammar-checking of text the human composed
- Style suggestions accepted or rejected **on a per-clause basis** by the
  author (e.g. Grammarly suggestions on a sentence the author wrote)
- Single-word or short-phrase machine translation of a quoted foreign source
  already in the work
- Keyword extraction or full-text search across the author's own notes
- OCR / handwriting-to-text conversion of the author's own manuscripts
- Reference look-ups and bibliographic search **returning links the human then
  reads** (search retrieval — **not** AI summarisation of those sources)
- Image background removal, colour correction, exposure normalisation, format
  conversion, **denoising and resolution upscaling** of photographs the human
  captured or lawfully licensed — these recover or rescale detail already present.
  **Generative fill, outpainting, object insertion or object removal are NOT
  de-minimis**: they synthesise content that was never in the frame, and are
  `image_gen`.
- Auto-generated alt-text for accessibility, **provided the alt-text is
  reviewed and edited by the human author before publication**
- Audio-to-text transcription of the author's own voice recordings, where the
  human then edits the transcript into the work

The presence of these aids does not need to be disclosed for Human-Authored
status. **Anything beyond them is disclosed and places the work in
Human-Assisted (non-generative assistance) or Human-Led (AI-generated content
in the work).**

### 2.2 · Human-Assisted *(new in v0.3)*

A work is **Human-Assisted** when **a human created every piece of expressive
content that appears in the final work, AI was used only non-generatively to
assist the process, and that AI involvement is disclosed truthfully.**

The applicant attests that:

1. **No AI-generated content of any kind appears in the published work** — no
   AI-written text, no AI-generated image, audio, voice, published translation,
   or content-bearing code. Every expressive element is human-made.
2. AI was used for **non-generative assistance only** — for example: AI
   summarisation or synthesis of sources for the author's own reading; AI
   research assistance beyond simple search retrieval; AI translation of source
   material that the author then re-expressed in their own words; AI structural
   or developmental feedback that the author evaluated and applied by hand.
3. Every such use is enumerated in the `ai_disclosure` profile (§4) and that
   enumeration is true.

Human-Assisted sits **above** Human-Led: the public seal states that the work
contains **no AI-generated content**, and that AI only assisted the human's
process. It is **not** Human-Authored, because substantive non-generative AI
was involved; the seal and verification page say so.

### 2.3 · Human-Led

A work is **Human-Led** when **a human exercises the substantive creative
decisions, AI is used as an assistant for portions of the production —
including generating content that appears in the final work — and that AI
involvement is disclosed truthfully.**

The applicant attests that:

1. A specific natural person (or named persons) made the substantive creative
   decisions — what to say, in what order, with what evidence, under what
   argument, in what voice.
2. The AI involvement is enumerated in the `ai_disclosure` profile recorded on
   the certificate, and that enumeration is true.
3. The AI did not autonomously produce the final published artefact.
4. The human exercised editorial review over **every AI-generated segment**
   that survives in the final work, not merely accepted-as-is.

A Human-Led work is **not** Human-Authored or Human-Assisted. Its public
verification page lists the AI uses disclosed, and the seal's profile shows
**which** generative uses occurred (e.g. *"AI-generated cover image; text fully
human"*). Resolution within Human-Led is provided by **which** dimensions of
the profile are present, **never** by an estimate of *how much* AI was used.

### 2.4 · Out of scope

PURE Siegel does **not** certify:

- AI-generated works without human authorship — i.e. where the human only
  performed cosmetic cleanup of AI output (no tier exists; the human is not the
  author)
- Anonymous works (a named natural person must attest)
- Works whose authorship is genuinely disputed at the time of submission (a
  public-registry seal would be evidence in such a dispute and cannot be issued
  mid-dispute)

---

## 3. Assurance is a separate axis *(new in v0.3)*

v0.2 used **AAA** / **AA** as synonyms for Human-Authored / Human-Led. v0.3
retires that overloading. **Authorship tier** (§2 — *how human is the work*) and
**assurance level** (*how strongly the applicant's identity is verified*) are
orthogonal:

- A Human-Authored work by an unverified applicant and a Human-Led work by an
  identity-verified applicant are different combinations of two independent
  facts.
- The authorship tier is the primary, public claim and is always present.
- The identity-assurance flag is **optional and currently dormant on the
  commercial surface** (it is not requested at application or pricing). The
  backend may still record whether an applicant completed identity verification;
  where present it is surfaced as a separate attribute, never merged into the
  tier name.

This document does not define the identity-assurance procedure; it only fixes
that assurance is **not** the same axis as the authorship tier. Existing v0.1/v0.2
certificates keep their AAA/AA labels under the version they were issued.

---

## 4. Disclosure profile (`ai_disclosure`)

Every certification records a structured disclosure profile. For Human-Authored
works, every field is `false`. For Human-Assisted and Human-Led works, each
`true` field must be accompanied by a brief description in the submission
questionnaire (§5).

| Field            | Class           | Meaning                                                        |
|------------------|-----------------|----------------------------------------------------------------|
| `research`       | non-generative  | AI used for literature search, summarising or synthesising sources |
| `translation`    | non-generative  | AI translated **source** material into the working language (author re-expresses) |
| `planning`       | non-generative  | AI produced an outline, chapter structure, scene plan or other substantive plan that shaped the composition (§2.1(2)) |
| `analysis`       | non-generative  | AI analysed data, computed findings, or synthesised material on the author's behalf, where the result shaped the work (§2.1(4)) |
| `text_gen`       | generative      | AI generated text that appears in the final work               |
| `translation_gen`| generative      | AI generated the **published-edition** translation             |
| `image_gen`      | generative      | AI generated images that appear in the final work              |
| `code_gen`       | generative      | AI generated code that appears as content (not as authoring tool) |
| `audio_gen`      | generative      | AI generated audio or music in the final work                  |
| `voice_clone`    | generative      | AI synthesised or cloned a human voice in the work             |
| `video_gen`      | generative      | AI generated moving-image content in the final work *(guarded in code since v0.2; added to this table 2026-08-11)* |
| `cover_art_gen`  | **disclosed only** | AI generated the cover, jacket or packaging art. Recorded and displayed; does **not** determine the tier (§2.0) |

### 4.1 · Tier is computed from the profile

The tier follows mechanically from the disclosed fields — there is no score and
no human-set threshold:

1. If **any generative field** is `true` → **Human-Led**. (`cover_art_gen` is
   disclosed-only and is excluded from this test — see §2.0.)
2. Else if **any non-generative field** (`research`, `translation`, `planning`,
   `analysis`) is `true` → **Human-Assisted**.
3. Else (all fields `false`; at most the de-minimis aids of §2.1.1) →
   **Human-Authored**.

### 4.2 · Intake checks (KO-criteria)

The registry rejects a submission at intake when the declared tier contradicts
the disclosure:

- **Declared Human-Authored** — rejected if **any** `ai_disclosure` field is
  `true`.
- **Declared Human-Assisted** — rejected if **any generative field**
  (`text_gen`, `translation_gen`, `image_gen`, `code_gen`, `audio_gen`,
  `voice_clone`) is `true`.
- **Declared Human-Led** — rejected if no generative field is `true` (there is
  nothing generative to lead; the work is Human-Assisted or Human-Authored).

These intake rejections are the **KO-criteria**: bright-line disqualifiers that
no reviewer discretion can override. Beyond them, two independent reviewers
must still find the disclosure **plausible and complete** before issuance
(§7), and any false field is a basis for revocation (§9).

---

## 5. Per-medium questionnaire *(new in v0.3)*

The three tiers are **medium-agnostic** — a book, a photograph, a video and a
website all sit on the same ladder. What differs per medium is **which
disclosure questions are asked**: a photograph's authenticity turns on capture
and image-generation; a book's on drafting and translation; journalism adds
sourcing and editorial process.

Accordingly:

- The submission **questionnaire is per-medium** (the set of questions and the
  evidence requested vary by work type and vertical, per the registry
  taxonomy).
- Each questionnaire answer maps onto the medium-agnostic `ai_disclosure`
  fields of §4, from which the tier is computed (§4.1).
- **Evidence is required**, not optional, for any disclosed AI use that bears
  on the tier (e.g. a content-credentials manifest, a version history, a
  drafts bundle). De-minimis aids (§2.1.1) need no evidence.

**Text publications: specified.** See
[`docs/questionnaire-text-publication.md`](questionnaire-text-publication.md) — ten
questions, nine tier-bearing plus cover art, bilingual, with the field mapping and
the evidence requirement stated per question. The registry derives `ai_disclosure`
from the answers server-side; a client-supplied field map is not authoritative.

The remaining per-medium question sets (photo, audio, video, website) are **out of
scope for this draft** and are tracked as an open item (§12); they will be specified once the medium list
and per-medium criteria are fixed, and will be published alongside this
Standard so applicants can see exactly what is asked.

---

## 6. Cryptographic cross-check

Where evidence files carry C2PA Content Credentials (or other
cryptographically-signed provenance manifests), the registry inspects them and
compares against the declared tier.

If an evidence file's manifest carries an IPTC `digitalSourceType` of
`trainedAlgorithmicMedia`, `compositeWithTrainedAlgorithmicMedia`, or
`algorithmicMedia` — or its C2PA assertions include the action verbs
`c2pa.created.aiGenerated` or `c2pa.edited.aiEdited` — and the declared tier is
**Human-Authored or Human-Assisted**, the submission is flagged for **deep
audit** and cannot be issued until either (a) the applicant moves to the
correct tier with appropriate disclosure, or (b) the applicant replaces the
contradicting evidence.

*(v0.3 change: the cross-check now guards both no-AI-content tiers —
Human-Authored and Human-Assisted — because neither may contain AI-generated
content. Under v0.2 it guarded only Human-Authored.)*

The absence of Content Credentials is informationless: most upload pipelines
strip metadata. Lack of a manifest never penalises an applicant; **only
present-and-contradictory** manifests do.

---

## 7. Attestation

Every certification requires a per-submission attestation signed by the
applicant. The attestation records:

- The exact version of this Standard the applicant attested under
  (`attestations.standard_version` + `standard_hash`)
- The exact license-text version accepted (see Mark Usage License v0.1)
- A timestamp, IP, and identity reference
- A SHA-256 hash of the canonical attestation statement

Issuance additionally requires **two independent reviewers** to approve the
submission, finding the declared tier consistent with the disclosure and
evidence and the disclosure plausible and complete. False attestation is a
basis for revocation under §9.

---

## 8. Public registry & seal

A certificate appears in the public registry at `/v/<cert_id>` with:

- The certificate ID and current status (`valid` / `revoked`)
- **Authorship tier** (and, where present, the separate identity-assurance
  attribute per §3)
- Work fingerprint (SHA-256 of canonical text content)
- AI disclosure profile, shown as a plain-language **profile** (not a score)
- Provenance summary (C2PA findings + evidence-type list + consistency check)
- Issuance timestamp and ledger position
- The Ed25519 JWS for offline verification
- A link to the exact Standard version and Mark Usage License version under
  which the certificate was issued

The registry never publishes PII (author identity, IPs, evidence filenames,
signer DNs) on the public verification page.

### 8.1 · Seal copy (bilingual)

The public seal and verification page use the following display strings.
German is default; English is the toggle. (The machine value is data, not
display copy, and is never localised.)

| `declared_category` | Badge (DE) | Badge (EN) | One-line meaning (DE) | One-line meaning (EN) |
|---------------------|------------|------------|------------------------|------------------------|
| `human_authored` | **Human-Authored** | **Human-Authored** | Ohne KI-Einsatz erstellt. | Created without AI. |
| `human_assisted` | **Human-Assisted** | **Human-Assisted** | Menschlich verfasste Inhalte; KI nur unterstützend, offengelegt. | Human-made content; AI assisted the process, disclosed. |
| `human_led` | **Human-Led** | **Human-Led** | KI offengelegt, menschlich geführt. | AI disclosed, human-directed. |

The English category names are retained untranslated in the German UI, as in
v0.2, because they are the registry's terms of art.

> **DECIDED 2026-08-11: the badge is a GERMAN coined mark, not an English one.**
> This paragraph is superseded. See `docs/trademark-prep.md` §"Tier marks" for the
> reasoning and the naming brief. In short: the Authors Guild's mark is literally
> "Human Authored", so an English badge would make PURE's mark word-for-word
> identical to its only head-to-head competitor's — and "Human-Authored" is
> descriptive in English, therefore weak and hard to register. A German mark is
> distinctive in the EU, registrable, and carries the origin signal that untranslated
> marks exist to carry (AOC, DOC, Reinheitsgebot, Demeter, TÜV).
>
> The **machine value is unaffected**: `declared_category` stays
> `human_authored` / `human_assisted` / `human_led`. It is data, never display, and
> no signed certificate changes. This decision is display-only and reversible until
> something is printed.
>
> **Not yet done:** the three tier names themselves. The existing German strings
> (*"Von Menschen verfasst"*, *"Von Menschen geleitet"*) are descriptive phrases, not
> marks — they inherit the same weak-trademark problem in German that the English
> ones have in English. Naming brief in `trademark-prep.md`. Table below still shows
> the old English badges and is **pending that naming decision**.
>
> **⚠️ Superseded — original note (found 2026-08-11):** `de.json` does
> translate the badges: `human_authored` renders as *"Von Menschen verfasst"* and
> `human_led` as *"Von Menschen geleitet"*. So either this paragraph is wrong about
> v0.2, or the UI diverged from it. **Decide before v0.3 goes in force**, because
> changing an established badge is a visible change to existing German copy and to
> anything already printed. Arguments for untranslated: it matches the machine value
> and the English Standard, and real certification marks (FSC, Fairtrade, ISO) are
> not translated. Arguments for translated: German is the default language of the
> product. `human_assisted` currently follows the *implementation*, so the UI stays
> internally consistent whichever way this goes. The one-line meaning is
localised. For Human-Led, the seal additionally renders the **profile** — which
generative uses were disclosed (e.g. *"Bild: KI · Text: Mensch"* /
*"Image: AI · Text: human"*).

---

## 9. Revocation

The registry may revoke a certificate when:

1. A new fact comes to light showing the attestation was false (e.g. an unmasked
   AI ghostwriting tool, a discovered C2PA manifest asserting AI involvement on
   a Human-Authored or Human-Assisted claim)
2. The applicant requests revocation (right to retract)
3. A court of competent jurisdiction orders revocation
4. The applicant's licence to use the PURE Siegel mark is terminated under the
   Mark Usage License v0.1

Revocation is a **registry signal**, not a DMCA notice or content takedown. The
work continues to exist; the certificate is marked as revoked in the public
registry, with an immutable ledger entry recording the reason and timestamp.

---

## 10. Amendments

Future versions of this Standard will be published at new versioned URLs.
**Certificates remain bound to the Standard version they were issued under.** A
change to the Standard does not retroactively change existing certifications.
Each new version publishes a machine-readable line-level diff against the
immediately-prior version at `GET /api/standard/<new>/diff/<old>`, rendered in
the public document viewer.

---

## 11. Changes from v0.2

1. **New middle tier — Human-Assisted** (§2.2). Non-generative AI assistance
   with no AI-generated content in the work now has its own tier, between
   Human-Authored and Human-Led.
2. **Tier separated from assurance** (§3). AAA/AA are no longer used as
   category synonyms; identity-assurance is an orthogonal, currently-dormant
   attribute.
3. **`research` / `translation` are non-generative** (§4). They place a work in
   Human-Assisted rather than (as in v0.2) forcing Human-Led.
4. **Tier is computed from the disclosure** (§4.1) by a fixed three-way rule —
   no score, no threshold.
5. **Cross-check guards both no-AI-content tiers** (§6) — Human-Authored and
   Human-Assisted.
6. **Per-medium questionnaire** formalised as the intake surface (§5), mapping
   to the medium-agnostic disclosure fields.
7. **Bilingual seal copy** fixed for all three tiers (§8.1).

### 11.1 · Compatibility & data model

- `declared_category` gains one **additive** value, `human_assisted`. The
  existing values `human_authored` and `human_led` and their meanings are
  **unchanged**; signed certificates and the fields asserted by tests do not
  move.
- Certificates issued under v0.1/v0.2 stay bound to their version and are **not**
  re-tiered. The finer ladder applies to new submissions and to recertifications
  under v0.3.
- A v0.2 Human-Led certificate whose only disclosed uses were `research` /
  `translation` would qualify as **Human-Assisted** when recertified under v0.3.

---

## 12. Open items (must close before adoption)

- **Per-medium question sets** (§5): **text publication is done**
  (`docs/questionnaire-text-publication.md`, 2026-08-11) — which is the only medium
  certificate #1 needs. Photo, audio, video and website remain open, pending the
  fixed medium list and per-medium criteria. Photo's two hard questions were already
  settled by the adoption pilot: `cover_art_gen` (§2.0) and the upscaling-versus-
  generative-fill line (§2.1.1).
- ~~**Headline-number decision**~~ — **closed 2026-08-11: no.** The seal shows the
  tier name plus the disclosure profile. No derived figure, no score.
- **Identity-assurance procedure** (§3): if/when revived, define it as a
  separate, rule-based attribute, not a tier.
- **Pilot:** confirm the §4.1 computed tier matches reviewer judgement across at
  least 10 cases spanning the tier boundaries, before the Standard is put in force.
  Cases may be **constructed** — the requirement is that they are realistic and sit
  on the boundaries, not that they are historical.
  *(Amended 2026-08-11. This item originally read "5–10 real, already-decided
  submissions". It was drafted imagining a registry that already had history; the
  registry has none, and will have none before certificate #1, so as written the
  condition could never be met and would have blocked adoption indefinitely for a
  reason unrelated to the Standard's quality. The pilot's purpose — does the
  mechanical rule agree with a reviewer? — is served by realistic cases. The first
  run is `docs/standard-v0.3-pilot.md`, and it immediately found two contradictions
  between §2.1 and §4.1, both since fixed. Amending a condition to make it passable
  is a bad habit; recording exactly why, and having the amended condition still bite,
  is the safeguard.)*

---

## 13. References

- [IPTC Photo Metadata digital-source type codes](http://cv.iptc.org/newscodes/digitalsourcetype/)
- [C2PA · Coalition for Content Provenance and Authenticity](https://c2pa.org/)
- [RFC 8032 — Ed25519 Signature Scheme](https://datatracker.ietf.org/doc/html/rfc8032)
- [RFC 7515 — JWS](https://datatracker.ietf.org/doc/html/rfc7515)
- The Authors Guild authenticity-mark programme (the inspiration for the
  original tiered structure)
