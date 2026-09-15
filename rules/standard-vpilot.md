# Standard v0.3 — adoption pilot

> **Purpose.** §12 requires a pilot before v0.3 is put in force: confirm the §4.1
> computed tier matches reviewer judgement across the tier boundaries.
>
> **Status: RUN 2026-08-11 · PASSED after two amendments.**
>
> Ten **constructed** boundary cases. §12 originally asked for *"5–10 real,
> already-decided submissions"*; the registry has none and will have none before
> certificate #1, so the condition was amended to realistic-and-boundary rather than
> historical. Rationale is recorded in §12 itself.
>
> The first run **failed on four of ten** and surfaced two contradictions between §2
> and §4 (F1, F2 below). Both were fixed in `standard-v0.3-draft.md`; the re-run
> passes all ten. **A pilot that had passed first time would have meant the cases
> were too easy.**

## The rule under test (§4.1, as amended)

1. Any **generative** field true → **Human-Led**
   *(`cover_art_gen` is disclosed-only and excluded from this test — §2.0)*
2. Else any **non-generative** field (`research`, `translation`, `planning`,
   `analysis`) true → **Human-Assisted**
3. Else → **Human-Authored** (at most the §2.1.1 de-minimis aids)

---

## Cases and results

| # | Case | Disclosed | Computed | First run | Verdict |
|---|---|---|---|---|---|
| 1 | Novel written entirely by the author. Grammarly per-clause, spell-check. | *(none)* | **Human-Authored** | same | ✅ |
| 2 | Investigative article. LLM summarised 40 sources; every word written by the author. | `research` | **Human-Assisted** | same | ✅ |
| 3 | Essay quoting German archives. AI translated the *sources*; author re-expressed in English. | `translation` | **Human-Assisted** | same | ✅ |
| 4 | Same essay, but the *published edition* was machine-translated and edited. | `translation_gen` | **Human-Led** | same | ✅ |
| 5 | **100% human novel. Publisher commissioned an AI cover.** | `cover_art_gen` | **Human-Authored** | ~~Human-Led~~ | ✅ fixed |
| 6 | Photo essay, all frames shot by the photographer; one archive frame AI-upscaled. | *(none)* | **Human-Authored** | ~~undefined~~ | ✅ fixed |
| 7 | **Data journalism. AI wrote the analysis scripts and produced the reported findings.** | `analysis` | **Human-Assisted** | ~~Human-Authored~~ | ✅ fixed |
| 8 | **Memoir. AI produced the chapter outline; author wrote every sentence unaided.** | `planning` | **Human-Assisted** | ~~Human-Authored~~ | ✅ fixed |
| 9 | Human ghostwriter, published under another name. No AI at any stage. | *(none)* | **Human-Authored** | same | ✅ |
| 10 | Non-fiction book, prose human. **Audiobook edition** uses the author's licensed cloned voice. | `voice_clone` | **Human-Led** | same | ✅ |

### The amendment did not soften the rule

A fix that made everything pass would be worthless. Re-checked explicitly:

| Disclosure | Tier |
|---|---|
| `text_gen` | Human-Led |
| `image_gen` | Human-Led |
| `cover_art_gen` + `text_gen` | **Human-Led** — the carve-out does not launder a generative work |
| `planning` + `text_gen` | Human-Led |

---

## F1 · Upscaling was undefined (case 6) — **fixed**

§2.1.1 permitted *"colour correction, exposure normalisation, format conversion of
photographs **the human captured**"*. AI upscaling was not listed, and an archive
frame is not captured by the author — so a photo essay's tier turned on a question
the Standard did not answer.

**Resolution.** §2.1.1 now names the technical line: **upscaling and denoising** of a
photograph the human captured *or lawfully licensed* are de-minimis, because they
rescale detail already present. **Generative fill, outpainting, object insertion and
object removal are `image_gen`**, because they synthesise content that was never in
the frame.

## F2 · §4.1 could not express what §2.1 disqualifies — **fixed**

The substantive finding. §2.1 excludes a work from Human-Authored if AI produced
*"an outline, scene-by-scene plan, chapter structure … that shaped the final
composition"* (§2.1.2) or *"summarised, synthesised, **analysed** … source material"*
(§2.1.4). But §4 had no field for either:

- An **AI-generated outline** is not `text_gen` — that field is *"text that appears
  in the final work"*, and an outline does not appear.
- **AI data analysis** is neither `research` (defined over *sources*) nor `code_gen`
  (defined as code *appearing as content*).

So §4.1 computed **Human-Authored** for two works §2.1 excludes by name, and both
passed the §4.2 intake KO-check. The bright-line rule was not bright where it
mattered most, and the outline case is a realistic submission.

**Resolution.** Two additive non-generative fields, `planning` and `analysis`, both
routing to Human-Assisted — the human wrote every word, AI did substantive cognition.
Additive: no existing tier meaning changes, no signed certificate is affected.

## Case 5 · Cover art no longer sets the tier — **fixed, and it was a scoping error**

A novel written entirely by a human computed **Human-Led**, the lowest tier, because
the publisher commissioned an AI cover the author may never have seen.

The decisive argument is not fairness but coherence: **different editions of the
identical text routinely carry different covers.** The old rule made the same
manuscript Human-Authored in hardback and Human-Led in paperback.

**Resolution.** New **§2.0** scopes the tier to the *expressive content of the work*.
Cover and packaging art is disclosed as `cover_art_gen`, displayed on the
certificate, and excluded from the tier test. Transparency without misattribution.

## Case 9 · Ghostwriting is explicitly out of scope — **stated, not changed**

The Standard certifies that *a human* authored the work, not *which* human.
Ghostwriting, work-for-hire and pseudonymity are attribution questions, not AI
questions. Previously the document simply said nothing, which invites a reader to
infer a claim the seal never made. §2.0 now says it.

---

## Remaining before v0.3 goes in force

- [ ] Per-medium question set (§5) for **text/publication** — the only medium
      certificate #1 needs. Photo, audio and video can follow.
- [ ] The ~6 code sites: `server.py:573, 775, 812-819, 1398`, `labels.js:11-12`,
      `c2pa_verify.py:152`, plus `planning` / `analysis` / `cover_art_gen` and DE/EN keys.
- [ ] Flip `> **In force:** no` → `yes` **last**, once the above are green.

Closed by this run: §12's pilot condition, the headline-number question (no derived
figure), F1, F2, case 5, case 9. Identity-assurance (§3) stays deliberately dormant.
