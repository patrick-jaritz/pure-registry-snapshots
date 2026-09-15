# PURE — Geschäftsordnung des Fachbeirats v0.1

> **Dokument-ID:** PS-GOV-07
> **Dokumentversion:** 0.1
> **Kanonische Fassung:** Deutsch (siehe PS-GOV-01, Kopf)
> **Status:** Entwurf — tritt mit Beschluss der Sitzung Nr. 1 in Kraft
> **Ersetzt:** —
> **Bezug:** PS-GOV-01 Abschnitt 8, PS-GOV-02 Abschnitt 5, PS-GOV-04 Abschnitt 4.3,
> PS-GOV-06

---

## 1. Zweck und Abgrenzung

Diese Ordnung regelt die Arbeitsweise des Fachbeirats: welche Vorlagen ihm
vorzulegen sind, wie er sich äußert, wann er beschlussfähig ist und was davon
veröffentlicht wird.

**Der Fachbeirat berät; er erteilt keine Freigaben.** Die Freigabe einer
Standardversion erfolgt nach PS-GOV-04 Abschnitt 4.5 durch die Geschäftsführung.
Diese Ordnung ändert daran nichts. Sie regelt, wie die Stellungnahme nach
PS-GOV-04 Abschnitt 4.3 eingeholt, festgehalten und veröffentlicht wird.

Eine spätere Übertragung echter Freigabebefugnis auf den Fachbeirat wäre eine
Änderung von PS-GOV-04 und ist nur über dessen Änderungsverfahren möglich —
einschließlich der dort vorgesehenen öffentlichen Begutachtung.

---

## 2. Das Panel

Die Arbeit des Fachbeirats findet in einem zugangsbeschränkten Bereich der
Anwendung statt (das **Panel**). Jede Vorlage ist dort ein Gegenstand mit
Klasse, Zustand, Frist und Prüfsumme.

**Das Panel ist die Aufzeichnung.** Was dort nicht festgehalten ist, gilt als
nicht geschehen. Beiträge außerhalb des Panels — Telefonate, E-Mails,
Randbemerkungen in einer Sitzung — sind vom Register in das Panel zu
übernehmen, wenn sie eine Vorlage betreffen.

### 2.1 Zugang

Zugang haben Mitglieder des Fachbeirats (Systemrolle `board`) und die
Geschäftsführung (`admin`). Prüfende ohne Beiratsmandat haben keinen Zugang.

Der Zugang ist personengebunden. Die Weitergabe von Zugangsdaten ist
unzulässig; eine Position ist eine persönliche Erklärung.

---

## 3. Klassen von Vorlagen

| Klasse | Gegenstand | Rolle des Beirats |
|---|---|---|
| **STANDARD** | Echtheitsstandard, Kategorien- und KO-Kriterien, Sicherungsstufen, Offenlegungsprofil eines neuen Mediums, Fragebögen nach Standard Abschnitt 5 | Stellungnahme nach PS-GOV-04 Abschnitt 4.3 |
| **GOVERNANCE** | PS-GOV-01 bis PS-GOV-07, diese Ordnung, jährliche Unparteilichkeitsüberprüfung | Stellungnahme; bei der jährlichen Unparteilichkeitsüberprüfung zusätzlich ausdrückliche Bestätigung |
| **LEGAL** | AGB, Datenschutzerklärung, Lizenz, Widerrufsbelehrung | **Kenntnisnahme** — siehe Abschnitt 3.1 |
| **COPY** | öffentliche Formulierungen, Bezeichnungen, Aussagen über die Bedeutung des Siegels | beratend, ohne Beschluss |
| **QUESTION** | offene Entscheidungen des Registers | Beratung mit Mehrheitsbild |

### 3.1 Warum Rechtstexte nur zur Kenntnis gehen

Der Fachbeirat ist nach fachlicher Breite besetzt, nicht als anwaltliche
Prüfinstanz. Eine „Zustimmung" des Beirats zu AGB oder Datenschutzerklärung
erweckte den Anschein einer rechtlichen Prüfung, die nicht stattgefunden hat,
und setzte die Mitglieder einem Risiko aus, das sie nicht übernommen haben.

Rechtstexte werden anwaltlich geprüft; die Prüfung wird als solche
festgehalten. Der Beirat wird informiert und kann kommentieren.

### 3.2 Vertrauliche Klassen

Vorlagen mit Bezug zu einer konkreten Einreichung — Einsprüche nach PS-GOV-02
und strittige Entzüge nach PS-GOV-05 — sind **nicht** Gegenstand dieser
Fassung. Sie werden erst aufgenommen, wenn die Voraussetzungen nach Abschnitt 9
erfüllt sind.

---

## 4. Ablauf einer Vorlage

```
Entwurf ─► in Begutachtung ─► (entschieden | kein Konsens) ─► geschlossen
                  │                                              ▲
                  └──────────── überholt ────────────────────────┘
```

1. Das Register erstellt die Vorlage im Entwurf und eröffnet sie.
2. Mit der Eröffnung beginnt die Frist. Sie beträgt **mindestens 14
   Kalendertage**, bei Klasse STANDARD **mindestens 21**.
3. Jedes nicht ausgeschlossene Mitglied wird einmal bei Eröffnung und einmal
   72 Stunden vor Fristablauf benachrichtigt. Im Übrigen gilt Abschnitt 8.
4. Nach Fristablauf schließt das Register die Vorlage, hält das Ergebnis fest
   und trägt seine eigene Stellungnahme nach. **Ein Schluss vor Fristablauf ist
   nur zulässig, wenn alle Stimmberechtigten geantwortet haben oder eine
   Begründung angegeben wird; die Begründung und die Tatsache des vorzeitigen
   Schlusses werden veröffentlicht.**

---

## 5. Positionen

Jedes Mitglied gibt je Vorlage genau eine Position ab:

| Position | Begründung |
|---|---|
| `Zustimmung` | nicht erforderlich |
| `Zustimmung mit Anmerkung` | **erforderlich** |
| `Einwand` | **erforderlich** |
| `Enthaltung` | nicht erforderlich |
| `Befangen` | Angabe des Grundes in Stichworten |

Eine Position bezieht sich auf **den geprüften Text**, nicht auf den Titel der
Vorlage. Sie wird zusammen mit der Prüfsumme des Textes festgehalten.

### 5.1 Textänderung setzt Positionen zurück

Wird der Text einer Vorlage nach Abgabe einer Position geändert, verlieren
**alle** Positionen zu dieser Vorlage ihre Wirkung. Die betroffenen Mitglieder
werden benachrichtigt; die alten Positionen bleiben mit ihrer Prüfsumme
sichtbar erhalten.

Eine rein redaktionelle Berichtigung kann das Register ausnahmsweise als
**Berichtigung** kennzeichnen. Dann bleiben die Positionen bestehen; der ersetzte
Text wird aufbewahrt und die Berichtigung mit beiden Prüfsummen und der Differenz
festgehalten. Ohne den aufbewahrten Vortext wäre die ältere Prüfsumme gegen nichts
mehr nachrechenbar — die Berichtigung wäre behauptet, nicht belegt. Eine stille
Änderung des Textes ohne eine dieser beiden Wirkungen ist unzulässig.

### 5.2 Maßgebliche Sprachfassung

Bei Standard und Lizenz bindet die englische Fassung (dort wird die Prüfsumme
gebildet). Eine Position zu einer Vorlage der Klasse STANDARD bezieht sich auf
die englische Fassung; die deutsche wird beigestellt.

Bei den Governance-Dokumenten ist die deutsche Fassung maßgeblich.

---

## 6. Beschlussfähigkeit und Ergebnis

**Stimmberechtigt** sind alle Mitglieder, die nicht nach Abschnitt 7
ausgeschlossen sind.

- **Beschlussfähig** ist eine Vorlage, wenn mindestens **die Hälfte der
  stimmberechtigten Mitglieder, mindestens jedoch drei**, eine Position
  abgegeben haben. Enthaltungen zählen zur Beschlussfähigkeit.
- Das Ergebnis ist **`entschieden`**, wenn die Vorlage beschlussfähig ist und
  die Zustimmungen (mit und ohne Anmerkung) die Einwände überwiegen.
- Andernfalls ist das Ergebnis **`kein Konsens`**. Das ist ein reguläres
  Ergebnis, kein Fehlschlag; die Vorlage geht an die nächste Sitzung.

**Einstimmigkeit wird nicht verlangt.** Sie gäbe jedem Mitglied ein
Vetorecht durch Schweigen; Abwesenheit wäre Ablehnung.

**Schweigen ist Enthaltung, niemals Zustimmung.** Läuft die Frist ohne
Beschlussfähigkeit ab, ist das Ergebnis `kein Konsens` — nicht `entschieden`.

### 6.1 Verlangen einer Sitzungsbehandlung

Jedes einzelne Mitglied kann eine Vorlage ohne Begründung in die nächste
Sitzung ziehen. Das Umlaufverfahren endet damit für diese Vorlage.

Diese Befugnis ist der Ausgleich dafür, dass die Regelform das
Umlaufverfahren ist.

---

## 7. Ausschluss wegen Interessenkonflikt

Vor der ersten Einsicht in eine Vorlage erklärt jedes Mitglied, ob ein
Interessenkonflikt nach PS-GOV-03 Abschnitt 7 besteht.

- Ein ausgeschlossenes Mitglied wird **aus der Zahl der Stimmberechtigten
  herausgerechnet**, nicht nur von der Zustimmung.
- Mitglieder mit operativer Rolle im Register sind bei Vorlagen der Klasse
  GOVERNANCE, die die Unparteilichkeit betreffen, **von Amts wegen
  ausgeschlossen** (PS-GOV-01 Abschnitt 8). Der Ausschluss wird technisch
  durchgesetzt, nicht angemahnt.

---

## 8. Benachrichtigung

Damit die Mitwirkung ehrenamtlich leistbar bleibt:

- **eine** wöchentliche Sammelbenachrichtigung je Mitglied,
- **eine** Benachrichtigung bei Eröffnung einer Vorlage,
- **eine** Benachrichtigung 72 Stunden vor Fristablauf.

Kommentare lösen keine Benachrichtigung aus. Inhalte einer Vorlage werden
**nicht** per E-Mail versandt; die Benachrichtigung verweist auf das Panel.

---

## 9. Vertraulichkeit

Für alle Vorlagen gilt PS-GOV-06.

Vor der Aufnahme fallbezogener Vorlagen (Abschnitt 3.2) sind zu erfüllen:

1. eine Verschwiegenheitserklärung jedes Mitglieds,
2. eine standardmäßig pseudonymisierte Fallansicht,
3. ein Zugriffsprotokoll je Vorlage, das der betroffenen Person auf Anfrage
   mitgeteilt wird.

**Beiträge sind Aufzeichnungen.** Ein schriftlich festgehaltener Einwand kann
in einem späteren Verfahren herangezogen werden. Das ist kein Grund, Einwände
zu unterlassen — es ist der Grund, warum es hier steht.

---

## 10. Sitzungen

**Zwei ordentliche Sitzungen im Jahr**, im Frühjahr und im Herbst, sowie
anlassbezogene Sitzungen.

| Sitzung | Regelmäßige Tagesordnung |
|---|---|
| Frühjahr | Standardversion, offene Vorlagen ohne Konsens |
| Herbst | jährliche Unparteilichkeitsüberprüfung, Kalibrierungsergebnis, Jahreszahlen |

Die Kalibrierung nach PS-GOV-03 wird **in einer Sitzung** durchgeführt, nicht
im Umlauf: ihr Zweck ist, Abweichungen sichtbar werden zu lassen.

Die jährliche Unparteilichkeitsüberprüfung ist zum **1. September** fällig.
Die Herbstsitzung findet danach statt.

---

## 11. Mitgliedschaft

- Die Bestellung erfolgt durch das Register auf **drei Jahre**, Verlängerung
  möglich.
- Ein Rücktritt ist jederzeit ohne Begründung möglich.
- Bereits abgegebene Positionen eines ausscheidenden Mitglieds **bleiben
  bestehen**; sie sind auf die geprüfte Prüfsumme bezogen und werden nicht
  rückwirkend entwertet.
- Bei offenen Vorlagen wird die Zahl der Stimmberechtigten neu bestimmt und
  die Beschlussfähigkeit neu berechnet.
- Die Zusammensetzung, die Angabe operativer Rollen und das Bestehen von
  Interessenkonflikterklärungen sind öffentlich (`/fachbeirat`).

---

## 12. Veröffentlichung

Es gilt der Grundsatz: **die Tatsache und die Summe, nie der Fall.**

| Veröffentlicht | Nicht veröffentlicht |
|---|---|
| Titel, Klasse, Eröffnungs- und Schlussdatum einer Vorlage | Inhalte fallbezogener Vorlagen |
| dass Positionen erhoben wurden, und deren Anzahl je Art | welches Mitglied wie positioniert war |
| **Abweichung des Registers von einer Empfehlung samt Begründung** | wörtliche Beiträge |
| Zusammenfassung je Sitzung (200–400 Wörter) | wörtliche Protokolle |
| Zahl der Vorlagen, bei denen die Beiratsbefassung das Ergebnis geändert hat | — |
| Beteiligungsquote als Gesamtzahl | Beteiligung je Mitglied |

Die Veröffentlichung der Abweichung nach PS-GOV-04 Abschnitt 4.3 ist
verbindlich, nicht fakultativ.

---

## 13. Umsetzungsstand

| Regel | Stand |
|---|---|
| Panel als Aufzeichnung, Rolle `board` | ✅ technisch erzwungen |
| Positionen an Prüfsumme gebunden (Abschnitt 5) | ✅ technisch erzwungen |
| Textänderung setzt Positionen zurück (5.1) | ✅ technisch erzwungen |
| Berichtigung bewahrt Vortext, beide Prüfsummen und die Differenz (5.1) | ✅ technisch erzwungen |
| Begründungspflicht bei Einwand und Anmerkung (5) | ✅ technisch erzwungen |
| Beschlussfähigkeit, Schweigen = Enthaltung (6) | ✅ technisch erzwungen |
| Nur ein Sitz hält eine Position; das Register stimmt nicht mit (2.1, 5) | ✅ technisch erzwungen |
| Mindestfrist je Klasse (4.2) | ✅ technisch erzwungen |
| Schluss vor Fristablauf nur mit veröffentlichter Begründung (4.4) | ✅ technisch erzwungen |
| Sitzungsverlangen eines Mitglieds (6.1) | ✅ technisch erzwungen |
| Ausschluss aus der Zahl der Stimmberechtigten **und aus der Zählung** (7) | ✅ technisch erzwungen |
| Amtswegiger Ausschluss operativer Mitglieder, bereits beim Erfassen (7) | ✅ technisch erzwungen |
| Geschlossene Vorlage ist unveränderlich (2) | ✅ technisch erzwungen |
| Öffentliche Aggregatansicht (12) | ✅ technisch erzwungen |
| Änderungen an Metadaten und an der Stimmberechtigung sind verkettet (12) | ✅ technisch erzwungen |
| 72-Stunden-Erinnerung vor Fristablauf (4.3, 8) | ⚠ offen — noch nicht gebaut |
| Sammelbenachrichtigung wöchentlich (8) | ✅ gebaut, ⚠ ohne Test |
| Verifikation der Governance-Kette | ⚠ offen — die Kette wird geschrieben, aber nirgends nachgerechnet |
| Öffentliche Sitzungszusammenfassung (12) | ⚠ offen — Sitzungen sind im Panel nicht abgebildet |
| Fallbezogene Vorlagen (3.2, 9) | ⚠ offen — bewusst nicht in dieser Fassung |
| Verschwiegenheitserklärung (9) | ⚠ offen — organisatorisch, vor Phase 2 |
| Zwei Sitzungen im Jahr (10) | ⚠ offen — Sitzung Nr. 1 noch nicht abgehalten |
| Bestelldauer drei Jahre (11) | ⚠ offen — organisatorisch |

---

## 14. Änderungshistorie

| Version | Datum | Änderung |
|---|---|---|
| 0.1 | 2026-08-29 | Erstfassung. Entwurf; tritt mit Beschluss der Sitzung Nr. 1 in Kraft. Abschnitte 4.4 und 5.1 gegenüber dem ersten Entwurf präzisiert, nachdem eine Prüfung zeigte, dass die Frist nicht durchgesetzt und der ersetzte Text nicht aufbewahrt wurde |
