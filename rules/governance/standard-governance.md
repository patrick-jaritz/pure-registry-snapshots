# PURE — Governance des Zertifizierungsprogramms v0.1

> **Dokument-ID:** PS-GOV-04
> **Dokumentversion:** 0.1
> **Kanonische Fassung:** Deutsch (siehe PS-GOV-01, Kopf)
> **Status:** in Kraft ab dem 26. August 2026
> **Ersetzt:** —
> **Bezug:** ISO/IEC 17065:2012 Abschnitte 7.1 bis 7.4 sowie Anhang zu
> Zertifizierungsprogrammen (vorbereitend)

---

## 1. Zweck

Ein Zertifizierungsprogramm ist mehr als ein Kriterienkatalog: es ist die
Gesamtheit der Regeln, gegen die geprüft wird, samt der Antwort auf die Frage,
wer diese Regeln ändern darf und nach welchem Verfahren. Dieses Dokument
beantwortet diese Frage für PURE.

---

## 2. Bestandteile des Programms

| Bestandteil | Dokument | Versioniert | Gebunden am Zertifikat |
|---|---|---|---|
| Echtheitsstandard | `/standard/v<n>` | ja | ja — Version und Prüfsumme |
| Markennutzungslizenz | `/license/v<n>` | ja | ja — Version und Prüfsumme |
| Fragebogen und Offenlegungsprofil | Teil des Standards | ja | mittelbar |
| Diese Governance-Dokumente | PS-GOV-01 bis PS-GOV-06 | ja | nein |
| Prüfanleitung und Nachweiskatalog | intern | ja | nein |
| Entgeltordnung | Preisseite | ja | nein |

Bindend für die Bewertung eines Werks sind ausschließlich der
Echtheitsstandard und die Markennutzungslizenz in der Version, die zum
Zeitpunkt der Attestierung in Kraft stand.

---

## 3. Programmverantwortung

**Programmverantwortlich (*scheme owner*) ist die PURE Media Certification
GmbH.** Das Register entwickelt das Programm selbst und wendet es selbst an.
Diese Doppelrolle ist zulässig, erzeugt aber ein Unparteilichkeitsrisiko; sie
ist in PS-GOV-01 Abschnitt 5 erfasst und wird durch die Begutachtung nach
Abschnitt 4.3 dieses Dokuments abgefedert.

| Entscheidung | Zuständig |
|---|---|
| Freigabe einer neuen Standardversion und Festlegung des Inkrafttretens | Geschäftsführung |
| Fachliche Begutachtung eines Entwurfs vor der Freigabe | Fachbeirat |
| Öffentliche Begutachtung | jede Person |
| Redaktionelle Korrekturen ohne inhaltliche Wirkung | Geschäftsführung, ohne Verfahren nach Abschnitt 4 — mit Vermerk |
| Außerkraftsetzung des Programms | Geschäftsführung, siehe PS-GOV-05 Abschnitt 9 |

---

## 4. Entwicklung und Änderung

### 4.1 Anlass

Ein Änderungsverfahren wird eingeleitet bei: neuen oder veränderten
KI-Werkzeugklassen, die die bestehenden Kategorien nicht mehr sauber trennen ·
festgestellten Mehrdeutigkeiten (etwa aus Kalibrierungsabweichungen nach
PS-GOV-03 Abschnitt 5) · erfolgreichen Einsprüchen mit systematischer Ursache ·
neuen rechtlichen Anforderungen · Rückmeldungen aus der öffentlichen
Begutachtung · der regelmäßigen Überprüfung nach Abschnitt 7.

### 4.2 Entwurf

Der Entwurf wird als eigene Version mit dem Status *Entwurf* geführt. Ein
Entwurf ist über seine Versions-URL erreichbar, wird aber **niemals als
aktuelle Version ausgeliefert** und niemals einer Attestierung zugrunde
gelegt. Diese Trennung ist technisch erzwungen: nur Versionen mit dem Vermerk
„in Kraft" können zur aktuellen Version werden.

### 4.3 Fachliche Begutachtung

Jeder Entwurf mit inhaltlicher Wirkung wird dem Fachbeirat zur Stellungnahme
vorgelegt. Die Stellungnahmen und der Umgang des Registers mit ihnen werden
protokolliert. Weicht das Register von einer Empfehlung ab, wird die
Begründung festgehalten.

### 4.4 Öffentliche Begutachtung

Entwürfe mit inhaltlicher Wirkung werden **mindestens 30 Kalendertage**
öffentlich zur Stellungnahme gestellt. Die eingegangenen Stellungnahmen und
ihre Behandlung werden zusammengefasst veröffentlicht.

Von der öffentlichen Begutachtung kann abgesehen werden, wenn eine Änderung
ausschließlich einen Fehler beseitigt, der zu unrichtigen Entscheidungen
führen würde. Der Verzicht ist zu begründen und zu veröffentlichen.

### 4.5 Freigabe und Inkrafttreten

Die Freigabe erfolgt durch die Geschäftsführung. Zwischen Freigabe und
Inkrafttreten liegt eine Vorlaufzeit von **mindestens 30 Kalendertagen**,
damit laufende Einreichungen nicht von einer Regeländerung überrascht werden.
Eine kürzere Frist ist nur im Fall des Abschnitts 4.4 Satz 2 zulässig.

### 4.6 Differenzdarstellung

Jede neue Version veröffentlicht eine maschinenlesbare, zeilengenaue
Differenz gegenüber der unmittelbar vorhergehenden Version. Änderungen des
Standards sind damit ohne Vertrauen in das Register nachvollziehbar.

---

## 5. Versionierung

1. Versionen werden fortlaufend als `v<major>.<minor>` geführt.
2. **`minor`** — Klarstellungen, Ergänzungen der Offenlegung, redaktionelle
   Präzisierung ohne Änderung der Entscheidungsregeln.
3. **`major`** — Änderung der Kategorien, der Sicherungsstufen oder der
   Entscheidungsregeln.
4. Über jede Version wird eine Prüfsumme über den exakten Text gebildet. Sie
   wird bei jeder Attestierung mitgeschrieben. Eine nachträgliche stille
   Änderung eines veröffentlichten Standardtextes ist dadurch erkennbar.
5. Alle Versionen bleiben dauerhaft unter ihrer Versions-URL abrufbar, auch
   nach Ablösung. Eine Version wird nicht gelöscht, sondern außer Kraft
   gesetzt.

---

## 6. Nichtrückwirkung und Übergang

**Zertifikate bleiben an die Standardversion gebunden, unter der sie
ausgestellt wurden.** Eine Änderung des Standards ändert bestehende
Zertifizierungen nicht rückwirkend und ist für sich allein kein Entzugsgrund.

Für den Übergang gilt:

| Fall | Regel |
|---|---|
| Einreichung vor Inkrafttreten attestiert, Entscheidung danach | Es gilt die zum Zeitpunkt der Attestierung in Kraft stehende Version. |
| Bestehendes Zertifikat, neue Version verschärft die Anforderungen | Das Zertifikat bleibt gültig unter seiner Version. Die Verifizierungsseite weist die zugrunde liegende Version aus. |
| Zertifikatshaltende Person möchte auf die neue Version wechseln | Neue Einreichung; das bisherige Zertifikat bleibt als historische Tatsache bestehen. |
| Eine Version wird außer Kraft gesetzt, weil sie fehlerhaft war | Betroffene Fälle werden einzeln nach PS-GOV-05 geprüft. Ein pauschaler Entzug findet nicht statt. |

Die öffentliche Verifizierungsseite jedes Zertifikats verweist auf die exakte
Standard- und Lizenzversion, unter der es ausgestellt wurde. Wer ein
Zertifikat liest, kann damit prüfen, was es zum Zeitpunkt der Ausstellung
bedeutete — und nicht nur, was der heutige Standard sagt.

---

## 7. Regelmäßige Überprüfung

Das Programm wird **mindestens einmal jährlich** vollständig überprüft.
Gegenstand: Entwicklung der KI-Werkzeuglandschaft und ihre Auswirkung auf die
Trennschärfe der Kategorien · Kalibrierungsabweichungen · Einsprüche und
Einwände · Rückmeldungen aus der Praxis · Änderungen im Rechtsrahmen.

Das Ergebnis wird protokolliert, auch wenn es lautet, dass keine Änderung
erforderlich ist.

---

## 8. Veröffentlichung

Der Standard, die Lizenz, diese Governance-Dokumente, die Versionshistorie und
die Differenzdarstellungen sind öffentlich, dauerhaft und ohne Anmeldung
abrufbar. Das Register erhebt dafür kein Entgelt.

---

## 9. Umsetzungsstand

| Regel | Stand | Anmerkung |
|---|---|---|
| Versionierung mit Prüfsumme über den Text | **umgesetzt** | Prüfsumme wird an jeder Attestierung mitgeschrieben |
| Entwürfe werden nie als aktuelle Version ausgeliefert | **technisch erzwungen** | ausdrückliche Kennzeichnung „in Kraft"; ohne sie schlägt die Auslieferung fehl, statt still einen Entwurf zu verwenden |
| Zeilengenaue Differenz zwischen Versionen | **umgesetzt** | über die öffentliche Schnittstelle abrufbar |
| Bindung des Zertifikats an seine Standardversion | **umgesetzt** | Version und Prüfsumme am Zertifikat |
| Verweis auf Standard- und Lizenzversion auf der Verifizierungsseite | **umgesetzt** | seit Standard v0.2 |
| Öffentliche Begutachtung, 30 Tage | ⚠ **offen** | für v0.2 durchgeführt, aber als Verfahren nicht dokumentiert; kein öffentlicher Eingang für Stellungnahmen |
| Vorlaufzeit von 30 Tagen zwischen Freigabe und Inkrafttreten | ⚠ **offen** | als Regel neu; bisher nicht durchgängig eingehalten |
| Protokollierte Begutachtung durch den Fachbeirat | ⚠ **offen** | Sitzungsprotokolle liegen nicht vor |
| Jährliche Programmüberprüfung | ⚠ **offen** | fristüberwacht (`programme_review`), erstmals fällig 2027-08-26 |
| Entgeltordnung als versionierter Programmbestandteil | ⚠ **offen** | Preise sind veröffentlicht, aber nicht versioniert |

---

## 10. Änderungshistorie

| Version | Datum | Änderung |
|---|---|---|
| 0.1 | 2026-08-26 | Erstfassung |
