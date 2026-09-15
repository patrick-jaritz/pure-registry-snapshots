# PURE — Unparteilichkeitsrichtlinie v0.1

> **Dokument-ID:** PS-GOV-01
> **Dokumentversion:** 0.1
> **Kanonische Fassung:** **Deutsch.** Anders als beim Echtheitsstandard und
> bei der Markennutzungslizenz — dort bindet die englische Fassung — ist bei
> den Governance-Dokumenten der deutsche Text maßgeblich. Grund: das Register
> ist eine österreichische Rechtsperson, und eine spätere Begutachtung durch
> Akkreditierung Austria erfolgt in deutscher Sprache. Eine englische
> Übersetzung ist geplant und wird als Übersetzung gekennzeichnet.
> **Status:** in Kraft ab dem 26. August 2026
> **Ersetzt:** —
> **Bezug:** ISO/IEC 17065:2012 Abschnitte 4.2 und 5.2 (vorbereitend, ohne
> Anspruch auf Konformität — siehe Abschnitt 10)

---

## 1. Zweck und Geltungsbereich

Diese Richtlinie regelt, wie das PURE-Register — betrieben von der
**PURE Media Certification GmbH**, Glanzerstraße 32, 9873 Döbriach,
Österreich (FN 676263f, Landesgericht Klagenfurt), im Folgenden *das Register* —
seine Unparteilichkeit sichert.

Sie gilt für alle Personen, die an einer Zertifizierungsentscheidung mitwirken:
Geschäftsführung, Prüferinnen und Prüfer, Zertifizierungsentscheiderinnen und
-entscheider, Administratorinnen und Administratoren, Mitglieder des
Fachbeirats sowie beauftragte Externe.

---

## 2. Grundsatz

Unparteilichkeit ist keine Zusatzeigenschaft des Registers, sondern seine
Geschäftsgrundlage. Ein Siegel, dessen Vergabe von der Zahlungsbereitschaft
oder Bekanntheit der antragstellenden Person beeinflusst werden kann, hat
keinen Aussagewert.

Daraus folgen drei Sätze, die das Register als bindend behandelt:

1. **Eine Zertifizierungsentscheidung darf nicht davon abhängen, wer den
   Antrag stellt** — sondern ausschließlich davon, ob die vorgelegten
   Nachweise die beantragte Kategorie nach dem jeweils in Kraft stehenden
   Echtheitsstandard tragen.
2. **Das Register verkauft keine positiven Entscheidungen.** Das Entgelt
   entgilt die Prüfung, nicht das Ergebnis. Eine abgelehnte Einreichung wird
   nicht rückerstattet, und eine Ablehnung darf für das Register nicht teurer
   sein als eine Ausstellung.
3. **Das Register berät nicht darüber, wie man seine Prüfung besteht.**
   Siehe Abschnitt 4.

---

## 3. Funktionstrennung

| Funktion | Wer | Trennung |
|---|---|---|
| Antragsannahme und Vollständigkeitsprüfung | Register (Betrieb) | — |
| Fachliche Prüfung der Einreichung | Prüferin/Prüfer (Rolle `reviewer`) | mindestens **zwei voneinander unabhängige** Prüfende müssen zustimmen |
| Zertifizierungsentscheidung und Ausstellung | Rolle `reviewer` oder `admin` | **soll** nicht durch dieselbe Person erfolgen, die den Fall geprüft hat (siehe Abschnitt 10) |
| Aussetzung, Entzug, Wiedereinsetzung | Rolle `admin` | siehe PS-GOV-05 |
| Entwicklung des Standards | Geschäftsführung, begutachtet durch den Fachbeirat | siehe PS-GOV-04 |
| Bearbeitung von Einsprüchen | Person, die an der angefochtenen Entscheidung **nicht** mitgewirkt hat | siehe PS-GOV-02 |

Eine einzelne Zustimmung reicht für keine Ausstellung. Widerspricht eine
prüfende Person, ist die Einreichung abgelehnt; ein „Übersteuern" durch die
Geschäftsführung ist nicht vorgesehen und wäre ein meldepflichtiger Verstoß
nach Abschnitt 9.

---

## 4. Unzulässige Tätigkeiten

Das Register und die für es tätigen Personen dürfen **nicht**:

1. Beratungsleistungen anbieten, die darauf gerichtet sind, ein konkretes Werk
   oder eine konkrete Organisation zertifizierungsfähig zu machen
   („Wir bringen Sie durch die Prüfung");
2. an der Erstellung eines Werks mitwirken, das anschließend beim Register
   eingereicht wird — insbesondere kein Lektorat, Ghostwriting, keine
   Übersetzung und keine Erstellung der Nachweise;
3. das Ergebnis einer laufenden Prüfung gegenüber der antragstellenden Person
   in Aussicht stellen, bevor die Entscheidung getroffen ist;
4. das Prüfergebnis von einer über das veröffentlichte Entgelt hinausgehenden
   Leistung abhängig machen;
5. die Reihenfolge oder Tiefe der Prüfung nach der wirtschaftlichen Bedeutung
   der antragstellenden Person richten. Die Priorisierung der Prüfwarteschlange
   erfolgt nach Risiko, nicht nach Kundenwert.

Allgemeine, für alle gleichermaßen zugängliche Erläuterung des Standards, der
Fragebögen und der geforderten Nachweise ist **keine** Beratung im Sinne
dieses Abschnitts und ausdrücklich erwünscht.

---

## 5. Analyse der Unparteilichkeitsrisiken

Das Register führt ein Risikoregister zur Unparteilichkeit. Es wird
mindestens jährlich sowie anlassbezogen — bei neuen Geschäftsmodellen,
neuen Kundengruppen oder personellen Änderungen — überprüft.

> **Stand des Registers:** 26. August 2026
> **Nächste Überprüfung fällig:** **26. August 2027**
> **Fristenlauf:** Die Frist wird nicht in diesem Dokument verwaltet, sondern
> im System (`governance_reviews`, Schlüssel `impartiality_risk_register`).
> Sie ist an den Tag des Inkrafttretens dieser Richtlinie gebunden, nicht an
> einen Deployment-Zeitpunkt, und läuft nach einer protokollierten
> Überprüfung ab deren Abschlussdatum neu. 30 Tage vor Fälligkeit und danach
> wöchentlich ergeht eine Erinnerung an die Administration.

Stand v0.1:

| # | Risiko | Art | Bewertung | Maßnahme |
|---|---|---|---|---|
| U1 | Das Register wird von den Antragstellenden bezahlt und hat ein wirtschaftliches Eigeninteresse an Ausstellungen | Eigeninteresse | **hoch** — strukturell, nicht beseitigbar | Entgelt für Prüfung, nicht für Ergebnis (Abschnitt 2.2); Zwei-Personen-Zustimmung; Veröffentlichung der Ablehnungsquote im Transparenzbericht |
| U2 | Wenige große Kunden (Verlag, Newsroom) erzeugen Konzentrationsabhängigkeit | Eigeninteresse | mittel, steigend | Kennzahl „Umsatzanteil größter Kunde" in der Managementbewertung; ab 25 % Anteil Vorlage an den Fachbeirat |
| U3 | Personelle Doppelrolle: Personen, die das System entwickeln und betreiben, sind zugleich Mitglied des Fachbeirats | Selbstprüfung | **hoch** | Betroffene Mitglieder stimmen in Unparteilichkeitsfragen und bei Einsprüchen nicht mit (Abschnitt 8); Offenlegung auf der Fachbeiratsseite |
| U4 | Sehr kleine Organisation: dieselbe Person kann prüfen, entscheiden und widerrufen | Selbstprüfung | **hoch** | Zwei-Personen-Zustimmung technisch erzwungen; Trennung von Prüfung und Ausstellung derzeit organisatorisch, nicht technisch (Abschnitt 10) |
| U5 | Persönliche Bekanntschaft mit Antragstellenden im kleinen österreichischen Markt | Vertrautheit | mittel | Fallbezogene Interessenkonflikterklärung nach PS-GOV-03; Ausschluss und Übergabe an die zweite prüfende Person |
| U6 | Öffentlicher Druck, Referenzkunden nennen zu können | Interessenvertretung | mittel | Keine Nennung zertifizierter Kundschaft in der Vermarktung ohne deren Zustimmung; das öffentliche Register ist die einzige Referenzliste |
| U7 | Druck einer wirtschaftlich bedeutenden Partei, einen Entzug zu unterlassen oder zu erzwingen | Einschüchterung | mittel | Entzugsgründe abschließend nach PS-GOV-05; jede Entscheidung erzeugt einen unveränderlichen Ledger-Eintrag |
| U8 | Abhängigkeit von einer einzelnen Person mit Zugriff auf den Signaturschlüssel | Eigeninteresse / Betrieb | **hoch** | Schlüsselverwahrung nach `docs/key-custody.md`; Wechsel des Schlüssels ist erkennbar und wird protokolliert |

Eine Bewertung als *hoch* bedeutet nicht, dass das Register befangen ist,
sondern dass die Maßnahme dauerhaft wirksam gehalten und überprüft werden muss.

---

## 6. Maßnahmen

Das Register hält die folgenden Maßnahmen dauerhaft vor:

1. **Zwei-Personen-Zustimmung.** Eine Ausstellung setzt die Zustimmung von
   mindestens zwei unterschiedlichen prüfenden Personen voraus. Die Prüfung
   erfolgt für jede Person getrennt; eine zweite Zustimmung derselben Person
   wird abgewiesen.
2. **Fallbezogene Interessenkonflikterklärung** vor jeder Prüfung
   (PS-GOV-03 Abschnitt 7).
3. **Geschlossenes Vokabular für Entzugsgründe.** Freitext gelangt nie in das
   Ledger, sondern nur in den veränderlichen Prüfvermerk; im Ledger steht ein
   Grundcode und ein Verweis.
4. **Unveränderliches Entscheidungsprotokoll.** Jede Ausstellung, jeder Entzug
   und jede Wiedereinsetzung erzeugt ein hash-verkettetes Ereignis, das
   nachträglich nicht verändert werden kann, ohne die Kette zu brechen.
5. **Öffentliche Verifizierbarkeit.** Jedes Zertifikat ist ohne Zutun des
   Registers prüfbar. Eine stillschweigende Änderung einer Entscheidung ist
   dadurch praktisch ausgeschlossen.
6. **Veröffentlichung von Kennzahlen.** Anzahl der Einreichungen,
   Ausstellungen, Ablehnungen, Einwände, Einsprüche und Entzüge werden
   aggregiert veröffentlicht.

---

## 7. Überwachung der Unparteilichkeit

Die Geschäftsführung überprüft mindestens einmal jährlich im Rahmen der
Managementbewertung — **erstmals fällig am 26. August 2027**, überwacht durch
den Fristenlauf nach Abschnitt 5:

- das Risikoregister nach Abschnitt 5 und die Wirksamkeit der Maßnahmen;
- die Kennzahlen zu Ablehnungs-, Einspruchs- und Entzugsquoten;
- die Umsatzverteilung nach Kundschaft (Konzentrationsrisiko U2);
- alle im Berichtszeitraum gemeldeten Verstöße nach Abschnitt 9;
- die Zusammensetzung des Fachbeirats.

Das Ergebnis wird protokolliert. Das Protokoll ist ein Nachweis im Sinne des
Abschnitts 10.

---

## 8. Fachbeirat

Der **PURE Fachbeirat** begleitet die Entwicklung des Standards mit
unabhängiger fachlicher Expertise aus Technik, Wissenschaft, Recht und Praxis.
Seine Mitglieder sind auf der Seite `/fachbeirat` namentlich mit Rolle und
fachlichem Hintergrund veröffentlicht.

**Aufgaben:**

1. Begutachtung von Entwürfen des Echtheitsstandards vor deren Freigabe
   (PS-GOV-04);
2. Stellungnahme zu Grundsatzfragen der Prüfmethodik;
3. Entscheidung über Einsprüche, wenn das Register selbst keine
   unbeteiligte Person stellen kann (PS-GOV-02 Abschnitt 5);
4. Stellungnahme zu Unparteilichkeitsfragen, die ihm die Geschäftsführung
   vorlegt oder die ihm nach Abschnitt 9 gemeldet werden.

**Was der Fachbeirat ausdrücklich nicht ist — Stand v0.1:** Er ist **kein
Unparteilichkeitsausschuss** im Sinne von ISO/IEC 17065 Abschnitt 5.2. Dafür
fehlen ihm derzeit zwei Eigenschaften: eine dokumentiert ausgewogene
Vertretung der wesentlichen Interessengruppen (insbesondere fehlen bislang
Vertretungen der Urheberinnen und Urheber, der Verlage und der
Nutzerseite), und die vollständige Unabhängigkeit aller Mitglieder vom
operativen Betrieb des Registers — mindestens ein Mitglied ist zugleich am
Aufbau und Betrieb des Systems beteiligt.

Das Register benennt diesen Umstand hier ausdrücklich, statt ihn
stillschweigend zu lassen. Solange er besteht, gilt:

- Mitglieder mit operativer Rolle im Register nehmen an Beschlüssen zu
  Unparteilichkeitsfragen und an Einspruchsentscheidungen **nicht** teil und
  sind bei der Beschlussfähigkeit nicht mitzuzählen;
- die Umwandlung des Fachbeirats in einen ausgewogen besetzten
  Unparteilichkeitsausschuss ist Voraussetzung für einen späteren
  Akkreditierungsantrag und in Abschnitt 10 als offener Punkt geführt.

Sitzungen des Fachbeirats werden protokolliert. Das Protokoll hält Teilnahme,
behandelte Gegenstände, abgegebene Empfehlungen und den Umgang des Registers
mit abweichenden Empfehlungen fest. Weicht das Register von einer Empfehlung
ab, wird die Begründung protokolliert.

---

## 9. Meldung von Verstößen

Jede Person, die an einer Zertifizierungsentscheidung mitwirkt, ist
verpflichtet, einen tatsächlichen oder drohenden Verstoß gegen diese
Richtlinie zu melden — insbesondere jeden Versuch, auf eine Entscheidung
sachfremd einzuwirken.

- **Meldeweg:** an die Geschäftsführung, oder — wenn die Meldung die
  Geschäftsführung betrifft — unmittelbar an den Fachbeirat.
- **Schutz:** Aus einer in gutem Glauben erstatteten Meldung darf der
  meldenden Person kein Nachteil entstehen.
- **Aufzeichnung:** Jede Meldung wird mit Eingangsdatum, Gegenstand,
  Bearbeitung und Ergebnis festgehalten und geht in die jährliche
  Überprüfung nach Abschnitt 7 ein.

---

## 10. Umsetzungsstand

Diese Richtlinie beschreibt die verbindliche Ordnung des Registers. Nicht
jede Regel ist heute technisch erzwungen. Der Stand wird offen geführt, weil
eine Governance-Regel, die das System nicht durchsetzt, ohne diesen Hinweis
eine unzutreffende Zusicherung wäre.

| Regel | Stand | Anmerkung |
|---|---|---|
| Zwei-Personen-Zustimmung vor Ausstellung | **technisch erzwungen** | zwei verschiedene prüfende Personen erforderlich; eine Ablehnung beendet den Fall |
| Ausstellung durch eine an der Prüfung unbeteiligte Person | ⚠ **offen** | derzeit darf jede Person mit der Rolle `reviewer` oder `admin` ausstellen, auch eine der prüfenden Personen |
| Entzug im Vier-Augen-Prinzip | ⚠ **offen** | derzeit genügt eine einzelne Person mit der Rolle `admin`; gleiches gilt für die Wiedereinsetzung |
| Fallbezogene Interessenkonflikterklärung | ⚠ **offen** | organisatorisch vorgesehen, im System noch nicht erfasst |
| Grundcode statt Freitext im Ledger | **technisch erzwungen** | geschlossenes Vokabular, Freitext nur im veränderlichen Prüfvermerk |
| Unveränderliches Entscheidungsprotokoll | **technisch erzwungen** | hash-verkettetes, anfügbares Ledger mit öffentlichem Kopfstand |
| Risikoregister Unparteilichkeit | **eingerichtet** | Abschnitt 5; erste Überprüfung fällig 2027-08-26 |
| Fristenlauf der jährlichen Überprüfung | **technisch erzwungen** | tägliche Prüfung, Erinnerung 30 Tage vor Fälligkeit und danach wöchentlich; Abschluss wird protokolliert und setzt die Frist neu |
| Ausgewogen besetzter Unparteilichkeitsausschuss | ⚠ **offen** | Voraussetzung für einen Akkreditierungsantrag, siehe Abschnitt 8 |
| Veröffentlichung der Ablehnungsquote | ⚠ **offen** | Kennzahl wird erhoben, aber noch nicht veröffentlicht |

---

## 11. Änderungshistorie

| Version | Datum | Änderung |
|---|---|---|
| 0.1 | 2026-08-26 | Erstfassung |
