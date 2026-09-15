# PURE Siegel — Mark Usage License v0.2

> **Document version:** 0.2
> **Status:** in force from the date of publication
> **Supersedes:** v0.1 (submissions that accepted v0.1 remain bound to v0.1)
> **Applicability:** Every certificate-holder must accept this licence
> for each submission before certification is issued.
> **Hash:** computed at runtime over this document's exact text and
> recorded on every submission. See `submissions.license_version` and
> `submissions.license_hash`.

---

## 1. Parties

- **Licensor:** PURE Media Certification GmbH, Glanzerstraße 32,
  9873 Döbriach, Austria — company register FN 676263f, Landesgericht
  Klagenfurt (referred to as *the Registry*).
- **Licensee:** the natural or legal person who attests to a submission
  and accepts this licence in the submission portal (referred to as
  *the Mark Holder*).

---

## 2. Grant

Conditional on the Mark Holder's continuing compliance with this licence
and with the PURE Siegel Authenticity Standard (current version
referenced at attestation time), the Registry grants the Mark Holder a
**non-exclusive, worldwide, royalty-free, revocable** right to use the
PURE Siegel certification mark in connection with the specific work
identified by the certificate ID, in the following permitted uses
(Section 3).

---

## 3. Permitted uses

The Mark Holder may:

1. Display the official PURE Siegel mark with the certificate's QR code
   in promotional and editorial materials about the specific certified
   work (e.g. book cover, press release, retailer listing, author
   website).
2. Reference the certificate ID and link to the public verification page
   (`/v/<cert_id>`) in any context referring to the certified work.
3. Embed the `<pure-seal>` widget on websites referencing the certified
   work.
4. Reproduce the assurance level (AAA / AA) and category labels
   ("Human-Authored" / "Human-Led") with the certificate ID, in
   accordance with the Brand Guidelines (separate document, referenced
   by URL at acceptance time).

---

## 4. Prohibited uses

The Mark Holder may **not**:

1. Use the PURE Siegel mark on any work other than the specific work
   identified by the certificate ID.
2. Imply a PURE Siegel endorsement of any other content, product,
   service, or person.
3. Modify the PURE Siegel mark (colour, proportions, glyph) in a way
   that misrepresents the assurance level.
4. Use the PURE Siegel mark in a manner suggesting that PURE Siegel
   verified facts, quality, opinions, or any property of the work other
   than its categorical authenticity per the Standard.
5. Continue to use the mark after revocation of the certificate.
6. Sub-license, transfer, or otherwise pass the right to use the mark
   to any third party not also a Mark Holder for the same work.

---

## 5. Mark Holder warranties

By accepting this licence, the Mark Holder warrants that:

1. The information they provided in the submission (declared category,
   AI disclosure, evidence) is true and complete in all material respects.
2. They have the legal right to use the work's content and the right
   to publish the certificate.
3. They will notify the Registry within 14 days of becoming aware of
   any material change of fact bearing on the certificate (e.g. the
   discovery of undisclosed AI usage).

---

## 6. Termination

This licence terminates automatically if:

1. The Registry revokes the certificate per Section 7 of the Standard.
2. The Mark Holder breaches any term of this licence and does not cure
   the breach within 30 days of written notice.
3. The Mark Holder ceases to be the legal-person owner of the rights
   to the work (e.g. work-for-hire transfer to a publisher who then
   declines to take over the certificate).

Termination does not impair the Registry's right to keep the historical
fact of the certificate's existence (and its revocation, if any) in the
public ledger. The append-only ledger is GDPR-safe and is not subject
to right-to-erasure under Article 17 GDPR, by design.

---

## 7. No warranty by the Registry

The Registry provides certification on a best-effort basis based on the
information the Mark Holder provides and the evidence the Mark Holder
attaches. The Registry does **not** warrant:

- That the work is original, novel, or non-infringing
- That the work's facts are true or its opinions sound
- That the AI-disclosure profile is exhaustive of every machine
  involvement (the Mark Holder bears that obligation)

The Registry's liability for any breach of this licence or for any
failure of the certification process is limited to the fees paid by
the Mark Holder for the specific certificate, except in cases of gross
negligence or wilful misconduct.

---

## 8. Governing law and jurisdiction

This licence is governed by Austrian law. Exclusive jurisdiction for
any dispute arising under this licence is the competent court at the
Registry's registered seat — Klagenfurt, Austria — except where
mandatory consumer-protection law provides otherwise.

---

## 9. Trademark

The PURE Siegel name, logo, and mark are intended to be filed as
trademarks at the European Union Intellectual Property Office (EUIPO)
and/or the Austrian Patent Office (Österreichisches Patentamt) under
Nice classes 9, 35, and 42. Until registration is granted, the
unregistered trademark common-law protections apply.

Use of the mark after revocation, beyond the terms of this licence, or
by any party not granted a licence by the Registry, constitutes
trademark infringement and unfair-competition activity, actionable in
the competent forum.

---

## 10. Acceptance

Acceptance is recorded electronically in the submission portal. The
submission records the following on the `submissions` document:

- `license_version`: the version identifier of this document (e.g. `v0.1`)
- `license_hash`: SHA-256 of the exact licence text the Mark Holder was shown
- `license_accepted_at`: ISO-8601 UTC timestamp of acceptance

The Mark Holder's IP address and user agent are recorded on the
attestation, not the licence acceptance, to limit duplicate PII storage.

Acceptance of this licence is a precondition for the issuance of the
certificate. A submission may not be `submit`-ted to the reviewer queue
without `license_accepted_at` present.

---

## 11. Changes from v0.1

v0.2 corrects the Registry's identity, which v0.1 stated incorrectly.
No permitted or prohibited use, no warranty and no representation has
changed.

| § | v0.1 | v0.2 |
|---|---|---|
| 1 | „PURE Siegel Registry, Vienna, Austria" | PURE Media Certification GmbH, Glanzerstraße 32, 9873 Döbriach — FN 676263f, Landesgericht Klagenfurt |
| 8 | competent court in Vienna | competent court at the Registry's registered seat (Klagenfurt) |

The § 8 change is substantive, not editorial: it moves the agreed venue.
It aligns the venue with the Registry's actual seat and with the court
that holds its company register. Mandatory consumer-protection venue
rules were unaffected in v0.1 and are unaffected here.

Certificates issued under v0.1 remain bound to v0.1, which stays
permanently retrievable at `/license/v0.1`. See PS-GOV-04 § 6.
