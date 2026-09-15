# PURE — Kompetenz- und Interessenkonfliktordnung v0.1

> **Dokument-ID:** PS-GOV-03
> **Dokumentversion:** 0.1
> **Kanonische Fassung:** Deutsch (siehe PS-GOV-01, Kopf)
> **Status:** in Kraft ab dem 26. August 2026
> **Ersetzt:** —
> **Bezug:** ISO/IEC 17065:2012 Abschnitt 6.1 (vorbereitend)

---

## 1. Zweck

Die Aussagekraft eines PURE-Zertifikats hängt davon ab, dass zwei Prüfende
denselben Fall zum gleichen Ergebnis führen. Diese Ordnung regelt, wer prüfen
und entscheiden darf, wie diese Eignung festgestellt und überwacht wird und
wann eine Person von einem Fall ausgeschlossen ist.

---

## 2. Rollen

| Rolle | Systemrolle | Befugnis |
|---|---|---|
| **Prüferin / Prüfer** | `reviewer` | Einreichungen fachlich prüfen und zustimmen oder ablehnen |
| **Zertifizierungsentscheidung / Ausstellung** | `reviewer`, `admin` | nach Vorliegen von zwei Zustimmungen das Zertifikat ausstellen |
| **Administration** | `admin` | Aussetzung, Entzug, Wiedereinsetzung; Betrieb; Standardverwaltung |
| **Standardverantwortung** | Geschäftsführung | Freigabe von Standardversionen (PS-GOV-04) |
| **Fachbeirat** | — | Begutachtung, Einspruchsentscheidung nach PS-GOV-02 Abschnitt 5 |

Eine Person kann mehrere Rollen innehaben, soweit PS-GOV-01 Abschnitt 3 dem
nicht entgegensteht. Die Zuweisung erfolgt ausdrücklich und wird protokolliert;
eine Rolle entsteht nicht durch bloßen Systemzugriff.

---

## 3. Kompetenzanforderungen

### 3.1 Prüferin / Prüfer

| Anforderung | Mindestmaß | Nachweis |
|---|---|---|
| Kenntnis des Echtheitsstandards | die jeweils in Kraft stehende Version vollständig, einschließlich der Ausschlüsse | Einarbeitungsprotokoll |
| Kenntnis dieser Governance-Dokumente | PS-GOV-01 bis PS-GOV-06 | Einarbeitungsprotokoll |
| Beurteilung von Nachweisen | Fähigkeit, Herkunft, Vollständigkeit und Beweiswert von Belegen einzuschätzen | Kalibrierungsfälle |
| Verständnis generativer KI-Systeme | Kenntnis der gängigen Werkzeugklassen und ihrer Spuren; Kenntnis der Grenzen automatischer Detektoren | Einarbeitung + jährliche Auffrischung |
| Herkunftsmetadaten | Grundverständnis von C2PA-Manifesten und dem, was ihr Fehlen bedeutet und was nicht | Einarbeitung |
| Fachliche Domäne | Vertrautheit mit der Werkart (Text, Bild, Audio, Video, Journalismus) | Zuweisung nach Domäne |
| Sprache | Deutsch und Englisch auf Arbeitsniveau | — |

### 3.2 Zertifizierungsentscheidung

Zusätzlich zu 3.1: Kenntnis der Entscheidungsregeln, der Sicherungsstufen und
der Folgen einer Ausstellung, insbesondere der Bindung an die
Standardversion und der Unumkehrbarkeit des Ledger-Eintrags.

### 3.3 Administration

Zusätzlich zu 3.1: Kenntnis von PS-GOV-05, der Grundcodes für Entzug und
Wiedereinsetzung sowie der Trennung zwischen Ledger-Eintrag und
veränderlichem Prüfvermerk.

### 3.4 Grenze der Kompetenz

Automatische KI-Detektoren dürfen **nicht** als alleinige Entscheidungsgrundlage
verwendet werden. Wer prüft, muss dies wissen und begründen können, warum eine
Entscheidung auf mehreren voneinander unabhängigen Anhaltspunkten beruht.

---

## 4. Benennung

Eine Person darf erst prüfen, wenn:

1. die Anforderungen nach Abschnitt 3 festgestellt sind;
2. die Vertraulichkeitsverpflichtung nach Abschnitt 8 unterzeichnet ist;
3. die Einarbeitung nach Abschnitt 5 abgeschlossen ist;
4. die Benennung schriftlich erfolgt ist, mit Angabe der Rolle, der Domänen
   und des Datums.

Die Benennung wird im Personalverzeichnis des Registers festgehalten. Sie
endet mit Widerruf, Beendigung der Tätigkeit oder wenn die
Kompetenzüberwachung nach Abschnitt 6 dies ergibt.

---

## 5. Einarbeitung und Kalibrierung

**Einarbeitung.** Vor der ersten eigenständigen Prüfung: Lektüre des
Standards und der Governance-Dokumente, Durchsprache von mindestens drei
abgeschlossenen Fällen, Erläuterung der Nachweisarten und der Bewertungslogik.

**Kalibrierung.** Neu benannte Prüfende bearbeiten **mindestens fünf
Kalibrierungsfälle** unabhängig und ohne Kenntnis des Ergebnisses der anderen.
Verglichen werden:

- die vergebene Kategorie und Sicherungsstufe;
- die Einschätzung der Nachweislage;
- die Gründe für Nachforderungen.

**Zielkorridor:** Übereinstimmung in Kategorie und Sicherungsstufe in
mindestens vier von fünf Fällen. Wird er nicht erreicht, erfolgt keine
Benennung, sondern eine Nachschulung und ein weiterer Durchgang. Abweichungen
werden ausgewertet: Ist die Ursache eine Person, folgt Schulung; ist die
Ursache eine mehrdeutige Regel, folgt eine Klarstellung im Standard nach
PS-GOV-04.

**Wiederholung:** mindestens jährlich sowie nach jeder Änderung des Standards,
die die Entscheidungsregeln berührt, für alle Prüfenden gemeinsam.

---

## 6. Laufende Kompetenzüberwachung

| Maßnahme | Häufigkeit |
|---|---|
| Stichprobe abgeschlossener Fälle durch eine zweite Person | mindestens 5 % der Fälle, mindestens jedoch 2 Fälle je Prüfperson und Quartal |
| Auswertung der Abweichungen zwischen den zwei Zustimmungen eines Falls | quartalsweise |
| Auswertung erfolgreicher Einsprüche nach zuständiger Prüfperson | quartalsweise |
| Kalibrierung | jährlich, siehe Abschnitt 5 |
| Bewertung der Eignung, dokumentiert | jährlich je Person |

Ergibt die Überwachung wiederholte sachliche Fehler, wird die Benennung
ausgesetzt, bis eine erneute Kalibrierung bestanden ist.

---

## 7. Interessenkonflikte

### 7.1 Erklärungspflicht

**Vor jeder Prüfung** gibt die prüfende Person eine fallbezogene Erklärung ab,
dass kein Ausschlussgrund nach 7.2 vorliegt. Die Erklärung wird zum Fall
gespeichert. Eine allgemeine Erklärung „auf Vorrat" genügt nicht — der
Ausschlussgrund entsteht am konkreten Fall.

### 7.2 Ausschlussgründe

Ausgeschlossen ist, wer:

1. an der Entstehung des Werks in irgendeiner Form mitgewirkt hat —
   einschließlich Lektorat, Übersetzung, Beratung oder Erstellung der
   Nachweise;
2. mit der antragstellenden Person verwandt, verschwägert, verpartnert oder
   in Lebensgemeinschaft verbunden ist;
3. innerhalb der letzten **24 Monate** in einem Dienst-, Auftrags-,
   Gesellschafts- oder Beteiligungsverhältnis zur antragstellenden Person oder
   deren Organisation stand;
4. ein wirtschaftliches Interesse am Ausgang der Prüfung hat;
5. sich öffentlich zu diesem konkreten Werk oder zu der Frage seiner
   Urheberschaft in einer Weise geäußert hat, die eine Festlegung erkennen
   lässt;
6. aus einem anderen Grund besorgen lässt, nicht unbefangen zu entscheiden.

Persönliche Bekanntschaft ohne wirtschaftliche oder familiäre Bindung ist kein
Ausschlussgrund für sich, ist jedoch offenzulegen; die Entscheidung über den
Ausschluss trifft die Geschäftsführung.

### 7.3 Folge

Bei Vorliegen eines Ausschlussgrundes wird der Fall an eine andere prüfende
Person übergeben. Ist keine verfügbar, wird der Fall zurückgestellt und die
antragstellende Person über die Verzögerung und ihren Grund — nicht über
Einzelheiten — informiert.

### 7.4 Nachträglich erkannter Konflikt

Wird ein Ausschlussgrund erst nach der Ausstellung erkannt, wird der Fall
erneut geprüft. Bestätigt die erneute Prüfung das Ergebnis, bleibt das
Zertifikat bestehen und der Vorgang wird vermerkt. Bestätigt sie es nicht,
folgt ein Verfahren nach PS-GOV-05.

---

## 8. Vertraulichkeit

Alle prüfenden und entscheidenden Personen sind schriftlich zur
Vertraulichkeit über alle im Rahmen der Tätigkeit bekannt gewordenen
Informationen verpflichtet, unbefristet über die Tätigkeit hinaus. Der Umfang
richtet sich nach PS-GOV-06.

Unveröffentlichte Werke, eingereichte Nachweise und Angaben zu laufenden
Fällen dürfen weder verwertet noch weitergegeben werden. Eine Nutzung
eingereichter Inhalte zum Training von KI-Modellen findet nicht statt und ist
untersagt.

---

## 9. Externe Prüfende und Beauftragte

Beauftragt das Register externe Personen mit Prüfleistungen, gelten für sie
dieselben Anforderungen nach den Abschnitten 3 bis 8. Zusätzlich gilt:

1. Die Beauftragung erfolgt schriftlich und benennt Umfang und Grenzen.
2. Die Zertifizierungsentscheidung verbleibt beim Register und kann nicht
   übertragen werden.
3. Das Register bleibt für die Leistung verantwortlich und bewertet die
   externe Person nach denselben Maßstäben.
4. Die antragstellende Person wird auf Verlangen darüber informiert, dass
   externe Prüfende eingesetzt werden.

---

## 10. Aufzeichnungen

Je Person werden geführt: Benennung mit Datum und Rolle, Nachweise nach
Abschnitt 3, Einarbeitungsprotokoll, Kalibrierungsergebnisse, jährliche
Eignungsbewertung, Vertraulichkeitsverpflichtung. Je Fall werden geführt: die
prüfenden Personen, die Interessenkonflikterklärung, die Entscheidung und ihre
Begründung.

---

## 11. Umsetzungsstand

| Regel | Stand | Anmerkung |
|---|---|---|
| Rollentrennung im System (`reviewer` / `admin`) | **umgesetzt** | rollenbasierte Zugriffsprüfung an jedem Endpunkt |
| Zwei unterschiedliche prüfende Personen je Ausstellung | **technisch erzwungen** | — |
| Fallbezogene Interessenkonflikterklärung | ⚠ **offen** | im System nicht erfasst; bis zur Umsetzung schriftlich je Fall |
| Kalibrierungsfälle | ⚠ **offen** | Verfahren definiert, erster Durchgang steht aus — er sollte **vor** der ersten echten Ausstellung stattfinden. Wiederholung fristüberwacht (`reviewer_calibration`, fällig 2027-08-26) |
| Stichprobenkontrolle abgeschlossener Fälle | ⚠ **offen** | fristüberwacht (`review_sampling`, quartalsweise, erstmals fällig 2026-11-26) |
| Personalverzeichnis mit Benennungen und Nachweisen | ⚠ **offen** | derzeit existieren die Rollen in der Datenbank, aber keine Benennungsakte |
| Vertraulichkeitsverpflichtung | ⚠ **offen** | Text zu erstellen und zu unterzeichnen |
| Erfassung der angewandten Standardversion je Prüfung | ⚠ **offen** | die Version ist am Zertifikat gebunden, aber nicht am einzelnen Prüfschritt vermerkt |

---

## 12. Änderungshistorie

| Version | Datum | Änderung |
|---|---|---|
| 0.1 | 2026-08-26 | Erstfassung |
