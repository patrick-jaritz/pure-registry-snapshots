# PURE — Vertraulichkeit und öffentlich zugängliche Informationen v0.1

> **Dokument-ID:** PS-GOV-06
> **Dokumentversion:** 0.1
> **Kanonische Fassung:** Deutsch (siehe PS-GOV-01, Kopf)
> **Status:** in Kraft ab dem 26. August 2026
> **Ersetzt:** —
> **Bezug:** ISO/IEC 17065:2012 Abschnitte 4.5 und 4.6 (vorbereitend);
> DSGVO

---

## 1. Zweck

Ein Register lebt von zwei gegenläufigen Pflichten: Es muss genug
veröffentlichen, damit seine Aussagen ohne Vertrauen in den Betreiber prüfbar
sind — und es muss alles zurückhalten, was es über die einreichenden Personen
erfährt. Dieses Dokument zieht die Grenze und begründet sie.

---

## 2. Grundsatz

**Alles, was das Register im Zuge seiner Tätigkeit erfährt, ist vertraulich,
soweit es nicht in Abschnitt 3 ausdrücklich als öffentlich bezeichnet ist.**

Die Aufzählung in Abschnitt 3 ist abschließend. Eine Information wird nicht
dadurch öffentlich, dass ihre Veröffentlichung nützlich, interessant oder
technisch einfach wäre.

---

## 3. Was das Register veröffentlicht

### 3.1 Je Zertifikat, auf der Verifizierungsseite `/v/<cert_id>`

- die Zertifikats-ID und der aktuelle Status;
- Kategorie und Sicherungsstufe;
- der Werk-Fingerabdruck (Prüfsumme über den kanonischen Inhalt);
- das KI-Offenlegungsprofil;
- die Herkunftszusammenfassung: Herkunftsmetadaten-Befunde, die **Arten** der
  vorgelegten Nachweise und das Ergebnis der Konsistenzprüfung;
- Ausstellungszeitpunkt und Position im Ledger;
- die Signatur zur Überprüfung ohne Zutun des Registers;
- die Versionen von Standard und Markennutzungslizenz, unter denen
  ausgestellt wurde;
- die Ereignisfolge des Zertifikats, einschließlich Entzug und
  Wiedereinsetzung, mit Grundcode.

Der Titel des Werks und die Bezeichnung der zertifikatshaltenden Person werden
veröffentlicht, soweit die zertifikatshaltende Person dem zugestimmt hat —
denn genau darin liegt der Zweck des Siegels.

### 3.2 Über das Register

- Standard, Markennutzungslizenz und diese Governance-Dokumente in allen
  Versionen, samt Prüfsummen und Differenzdarstellungen;
- der öffentliche Signaturschlüssel;
- der aktuelle Kopfstand des Ledgers und die veröffentlichten Prüfpunkte;
- die Ereignisliste des Ledgers in pseudonymer Form;
- aggregierte Kennzahlen: Einreichungen, Ausstellungen, Ablehnungen,
  Einwände, Einsprüche, Beschwerden, Entzüge, Bearbeitungsdauern;
- die Zusammensetzung des Fachbeirats;
- die Entgelte.

---

## 4. Was das Register nie veröffentlicht

1. **Personenbezogene Daten** über die in 3.1 genannte Zustimmung hinaus —
   insbesondere Kontaktdaten, Adressen, Ausweisdaten, Zahlungsdaten,
   IP-Adressen.
2. **Die eingereichten Werke und Nachweisdateien selbst.** Das Register
   veröffentlicht Prüfsummen und Nachweis*arten*, nie den Inhalt. Ein
   unveröffentlichtes Manuskript bleibt unveröffentlicht.
3. **Dateinamen, Metadaten und Signaturinhaber der Nachweise**, soweit sie
   Personen erkennen lassen.
4. **Die Identität einer einwendenden oder beschwerdeführenden Person** —
   weder gegenüber der Öffentlichkeit noch gegenüber der betroffenen
   zertifikatshaltenden Person.
5. **Welche Person einen konkreten Fall geprüft oder entschieden hat.**
   Veröffentlicht wird, dass zwei unabhängige Prüfende zugestimmt haben, nicht
   wer. Gegenüber der antragstellenden Person wird auf Verlangen die
   entscheidende **Rolle** genannt.
6. **Der Klartext von Prüfvermerken und Entzugsbegründungen.**
7. **Laufende Verfahren.** Ein Einwand allein verändert die öffentliche
   Darstellung eines Zertifikats nicht.
8. **Namen mutmaßlicher Missbrauchsfälle** (PS-GOV-05 Abschnitt 10).

---

## 5. Ledger und Datenschutz

Das Ledger ist anfügbar und hash-verkettet: Ein Eintrag kann nicht verändert
oder entfernt werden, ohne die Kette zu brechen. Diese Eigenschaft ist der
Grund, warum die Zertifikate überprüfbar sind — und zugleich der Grund,
warum in das Ledger niemals personenbezogene Daten gelangen dürfen.

Daraus folgt die tragende Konstruktionsregel des Systems:

> **In das Ledger gehen nur pseudonyme Tatsachen und geschlossene Codes.
> Jeder Klartext, den ein Mensch eintippt, liegt in einer veränderlichen
> Sammlung; das Ledger enthält nur einen Verweis darauf.**

Ein Löschungsverlangen nach Art. 17 DSGVO erreicht deshalb:

| Erreichbar | Nicht erreichbar |
|---|---|
| Nutzerkonto und Kontaktdaten | die Tatsache, dass unter einer Kennung ein Zertifikat ausgestellt wurde |
| eingereichte Dateien und Nachweise | Zeitpunkt, Kategorie, Sicherungsstufe, Prüfsummen |
| Prüfvermerke und Entzugsbegründungen im Klartext | der Grundcode eines Entzugs |
| Angaben zu Einwänden und Beschwerden | die Position im Ledger und die Verkettung |

Das Register weist auf diese Grenze **vor** der Einreichung hin. Wer ein
Zertifikat beantragt, beantragt einen dauerhaften öffentlichen Eintrag; das
ist der Zweck der Sache und keine Nebenwirkung.

---

## 6. Zugriff innerhalb der Organisation

Zugriff nur nach dem Grundsatz der Erforderlichkeit. Prüfende sehen die Fälle
ihrer Warteschlange; administrative Zugriffe auf Nutzer- und Falldaten sind
protokolliert. Ein Zugriff ohne Fallbezug ist unzulässig.

Alle Beteiligten sind nach PS-GOV-03 Abschnitt 8 unbefristet zur
Vertraulichkeit verpflichtet.

**Eingereichte Inhalte werden nicht zum Training von KI-Modellen verwendet**
und nicht zu diesem Zweck an Dritte weitergegeben.

---

## 7. Weitergabe an Dritte

Das Register gibt vertrauliche Informationen nur weiter:

1. **auf Grund einer Rechtspflicht** — gerichtliche oder behördliche Anordnung,
   gesetzliche Auskunftspflicht;
2. **mit ausdrücklicher Zustimmung** der betroffenen Person;
3. **an Auftragsverarbeiter**, die für den Betrieb erforderlich sind
   (Hosting, Speicherung, E-Mail-Versand, Zahlungsabwicklung), gebunden durch
   Auftragsverarbeitungsverträge und beschränkt auf das Erforderliche.

Im Fall 1 wird die betroffene Person über die Weitergabe informiert, soweit
das rechtlich zulässig ist.

Das Register verkauft keine Daten und stellt keine Auswertungen über
einreichende Personen für Dritte her.

---

## 8. Auskunft an Akkreditierungs- und Aufsichtsstellen

Beantragt das Register eine Akkreditierung oder unterliegt es einer Aufsicht,
erhalten die begutachtenden Personen Einsicht in Fallakten, soweit dies für
die Begutachtung erforderlich ist. Die einreichenden Personen werden hierauf
in den Vertragsbedingungen hingewiesen; die begutachtenden Personen sind
ihrerseits zur Vertraulichkeit verpflichtet.

---

## 9. Aufbewahrung und Löschung

| Kategorie | Aufbewahrung |
|---|---|
| Ledger-Ereignisse | dauerhaft (pseudonym) |
| Zertifikatsdaten der Verifizierungsseite | dauerhaft |
| Fallakte mit Nachweisdateien | **10 Jahre** ab Ausstellung, danach Löschung der Dateien; die Prüfsummen bleiben |
| Prüfvermerke und Entscheidungsbegründungen | 10 Jahre |
| Einsprüche, Beschwerden, Einwände | 10 Jahre |
| Nutzerkonto ohne Zertifikat | Löschung 24 Monate nach der letzten Anmeldung oder auf Verlangen |
| Zugriffsprotokolle | 12 Monate |
| Buchhaltungsunterlagen | nach gesetzlicher Vorgabe |

Die Frist von 10 Jahren folgt der Erwägung, dass ein Zertifikat über die
Lebensdauer einer Buchauflage hinaus nachvollziehbar bleiben soll; sie ist bei
der ersten Programmüberprüfung nach PS-GOV-04 Abschnitt 7 auf Angemessenheit
zu prüfen.

Sicherungskopien werden verschlüsselt gehalten; eine Löschung erfasst auch die
Sicherungskopien im Rahmen ihres Rotationszyklus.

---

## 10. Umsetzungsstand

| Regel | Stand | Anmerkung |
|---|---|---|
| Keine personenbezogenen Daten auf der Verifizierungsseite | **umgesetzt** | — |
| Keine personenbezogenen Daten im Ledger; Grundcode statt Freitext | **technisch erzwungen** | Klartext liegt in einer veränderlichen Sammlung, das Ledger führt nur einen Verweis |
| Öffentlicher Signaturschlüssel, Kopfstand, Prüfpunkte | **umgesetzt** | — |
| Verschlüsselte Sicherungskopien | **umgesetzt** | — |
| Aufbewahrungsfristen nach Abschnitt 9 | ⚠ **offen** | als Regel neu festgelegt; automatische Löschung nach Fristablauf ist nicht eingerichtet |
| Löschung eingereichter Dateien bei Kontolöschung | ⚠ **offen** | zu prüfen und nachzuweisen |
| Protokollierung administrativer Zugriffe auf Falldaten | ⚠ **teilweise** | Entzug, Wiedereinsetzung und Prüfvermerke werden protokolliert; reine Lesezugriffe nicht |
| Auftragsverarbeitungsverträge vollständig | ⚠ **offen** | je Dienstleister zu prüfen und abzulegen |
| Hinweis auf die Grenze der Löschbarkeit vor der Einreichung | ⚠ **offen** | in die Einreichungsstrecke aufzunehmen |
| Aggregierte Kennzahlen veröffentlicht | ⚠ **offen** | Daten werden erhoben, der Bericht steht aus |

---

## 11. Änderungshistorie

| Version | Datum | Änderung |
|---|---|---|
| 0.1 | 2026-08-26 | Erstfassung |
