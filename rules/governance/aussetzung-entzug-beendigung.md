# PURE — Aussetzung, Entzug und Beendigung v0.1

> **Dokument-ID:** PS-GOV-05
> **Dokumentversion:** 0.1
> **Kanonische Fassung:** Deutsch (siehe PS-GOV-01, Kopf)
> **Status:** in Kraft ab dem 26. August 2026
> **Ersetzt:** —
> **Bezug:** ISO/IEC 17065:2012 Abschnitt 7.11; Echtheitsstandard Abschnitt 7
> (vorbereitend)

---

## 1. Zweck und Abgrenzung

Dieses Dokument regelt, wann ein Zertifikat seine Wirkung verliert, wer das
entscheidet, wie Betroffene gehört werden und was danach gilt.

**Ein Entzug ist ein Registersignal, keine Inhaltsentfernung.** Das Register
verlangt nicht die Löschung eines Werks, erhebt keinen Anspruch auf dessen
Verbreitung und stellt keine Behauptung über die Rechtmäßigkeit seines Inhalts
auf. Der Entzug sagt ausschließlich: *Dieses Zertifikat trägt seine Aussage
nicht mehr.*

---

## 2. Statusmodell

| Status | Bedeutung | Wirkung auf die Markennutzung |
|---|---|---|
| `valid` | gültig | Nutzung nach Markennutzungslizenz zulässig |
| `suspended` | ausgesetzt — vorläufig, klärungsbedürftig | Nutzung ruht; das Siegel ist bis zur Klärung zu entfernen |
| `revoked` | entzogen — endgültig, bis zu einer Wiedereinsetzung | Nutzung unzulässig |
| `expired` | abgelaufen | Nutzung unzulässig; die historische Tatsache bleibt sichtbar |

Der Status ist eine **Ableitung aus dem letzten Ereignis im Ledger**, keine
frei setzbare Eigenschaft. Ein Statuswechsel ohne Ledger-Ereignis existiert
nicht.

Die Verifizierungsseite zeigt in jedem Status die vollständige Ereignisfolge:
ein Entzug wird nicht dadurch verborgen, dass später eine Wiedereinsetzung
erfolgt, und eine Wiedereinsetzung nicht dadurch, dass ein Entzug vorausging.

---

## 3. Gründe für eine Aussetzung

Ausgesetzt wird, wenn ein Sachverhalt die Gültigkeit ernsthaft in Frage
stellt, aber noch nicht geklärt ist:

1. ein Einwand nach PS-GOV-02 Abschnitt 8 ist auf den ersten Blick begründet
   und die Klärung wird voraussichtlich länger dauern;
2. die zertifikatshaltende Person wirkt an der Aufklärung nicht mit oder
   antwortet innerhalb der gesetzten Frist nicht;
3. eine gemeldete wesentliche Änderung am Werk ist noch nicht bewertet;
4. eine behebbare Verletzung der Markennutzungslizenz besteht fort;
5. Gefahr im Verzug: die Fortführung würde absehbar Dritte in die Irre führen.

Die Aussetzung ist **befristet**. Regelfrist: **90 Kalendertage**. Ist die
Klärung bis dahin nicht erfolgt, folgt Wiederherstellung oder Entzug — ein
unbefristetes Schweben ist unzulässig.

---

## 4. Gründe für einen Entzug

Entzogen wird, wenn feststeht, dass das Zertifikat seine Aussage nicht trägt.
Die Gründe sind abschließend und werden im Ledger als **Grundcode** geführt:

| Grundcode | Bedeutung |
|---|---|
| `fraud` | die Attestierung war unrichtig, insbesondere durch verschwiegenen KI-Einsatz oder gefälschte Nachweise |
| `standard_violation` | die Voraussetzungen des Standards liegen nicht oder nicht mehr vor, oder die Markennutzungslizenz wurde nachhaltig verletzt |
| `duplicate` | das Zertifikat wurde doppelt für dasselbe Werk ausgestellt |
| `owner_request` | die zertifikatshaltende Person verlangt den Entzug (Recht auf Rücknahme) |
| `admin_error` | Fehler des Registers |
| `other` | ein anderer Grund; die Einordnung wird im Prüfvermerk erläutert |

Hinzu tritt: **Anordnung durch ein zuständiges Gericht oder eine zuständige
Behörde.**

**Warum ein geschlossenes Vokabular:** Der Ledger ist anfügbar und öffentlich.
Freitext an dieser Stelle wäre eine dauerhaft unlöschbare Veröffentlichung —
ein Name in einem Entzugsgrund ließe sich nie wieder entfernen. Deshalb steht
im Ledger nur der Grundcode und ein Verweis; die Begründung im Klartext liegt
im veränderlichen Prüfvermerk und ist einer Löschung nach Art. 17 DSGVO
zugänglich.

**Kein Entzugsgrund** ist für sich allein: eine spätere Änderung des Standards
(PS-GOV-04 Abschnitt 6) · öffentliche Kritik am Werk · ein unbewiesener
Einwand · das Ausbleiben einer Entgeltzahlung für eine *andere* Einreichung.

---

## 5. Verfahren

1. **Feststellung.** Der Sachverhalt wird mit den ihn tragenden Nachweisen
   festgehalten.
2. **Anhörung.** Die zertifikatshaltende Person wird informiert und erhält
   **14 Kalendertage** zur Stellungnahme. Die Mitteilung nennt den Sachverhalt,
   den in Betracht kommenden Grundcode und die Frist.
3. **Ausnahme.** Bei Gefahr im Verzug kann sofort ausgesetzt werden; die
   Anhörung wird unverzüglich nachgeholt und die Frist läuft ab Zugang der
   Mitteilung.
4. **Nachbesserung.** Ist der Mangel behebbar, wird eine angemessene Frist
   gesetzt — im Regelfall **30 Kalendertage**.
5. **Entscheidung.** Sie ergeht in Textform, ist zu begründen und nennt den
   Grundcode sowie die Möglichkeit des Einspruchs nach PS-GOV-02 samt Frist.
6. **Eintrag.** Die Entscheidung erzeugt ein Ledger-Ereignis. Ohne dieses
   Ereignis ist sie nicht wirksam.

---

## 6. Entscheidungsbefugnis

| Entscheidung | Zuständig | Vier-Augen-Prinzip |
|---|---|---|
| Aussetzung | Rolle `admin` | **soll** — zweite Person bestätigt |
| Entzug | Rolle `admin` | **soll** — zweite Person bestätigt |
| Wiedereinsetzung | Rolle `admin` | **soll** — zweite Person bestätigt |

Die Wiedereinsetzung ist mindestens so folgenreich wie der Entzug: sie stellt
eine öffentliche Aussage wieder her, die das Register zuvor zurückgezogen
hatte. Beide Wege sind deshalb gleich zu behandeln, und keiner von beiden darf
strenger oder lockerer geregelt sein als der andere.

Ausgeschlossen von der Entscheidung ist, wer den Fall ursprünglich geprüft
oder ausgestellt hat, soweit eine andere Person verfügbar ist.

Zum tatsächlichen Stand der Durchsetzung siehe Abschnitt 11.

---

## 7. Wirkung

Mit Zugang der Entscheidung gilt:

1. Die Markennutzungslizenz endet oder ruht. Die Nutzung des Siegels für das
   betroffene Werk ist einzustellen.
2. **Frist zur Entfernung:** unverzüglich in digitalen Medien, die die
   zertifikatshaltende Person selbst beherrscht; **spätestens 14 Tage**. Für
   bereits gedruckte Auflagen besteht keine Rückrufpflicht — die
   Verifizierungsseite ist die maßgebliche Auskunft, und sie zeigt den
   aktuellen Status. Bei Nachdrucken ist das Siegel zu entfernen.
3. Die öffentliche Verifizierungsseite bleibt unter derselben Adresse
   erreichbar und zeigt den geänderten Status. **Eine Zertifikats-ID wird nie
   wiederverwendet und nie stillgelegt** — ein QR-Code auf einem gedruckten
   Buch muss auch nach einem Entzug eine ehrliche Antwort geben.
4. Bereits gezahlte Entgelte werden nicht rückerstattet, außer der Entzug
   beruht auf `admin_error`.

---

## 8. Wiedereinsetzung

Eine Wiedereinsetzung erfolgt, wenn der Entzugsgrund entfallen ist oder sich
als unzutreffend erwiesen hat — insbesondere nach erfolgreichem Einspruch.

Sie erzeugt ein eigenes Ledger-Ereignis. **Der Entzug bleibt in der
Ereignisfolge sichtbar.** Das Register stellt die Gültigkeit wieder her, aber
es macht die Geschichte nicht ungeschehen; eine Korrektur, die ihre eigene
Spur tilgt, wäre keine.

---

## 9. Beendigung

### 9.1 Ablauf

Läuft ein Zertifikat ab, wechselt der Status auf `expired`. Der Eintrag bleibt
öffentlich.

### 9.2 Beendigung durch die zertifikatshaltende Person

Möglich jederzeit; behandelt als Entzug mit Grundcode `owner_request`.

### 9.3 Beendigung des Registerbetriebs

Stellt das Register seinen Betrieb ein, gilt — weil eine Zertifikats-ID als
dauerhaft angekündigt ist und auf gedruckten Werken steht:

1. **Ankündigung** mindestens **6 Monate** im Voraus, öffentlich und an alle
   zertifikatshaltenden Personen.
2. **Keine Neuausstellungen** ab der Ankündigung.
3. **Veröffentlichung eines vollständigen, signierten Schlussabzugs** des
   Ledgers samt letztem Kopfstand und dem öffentlichen Signaturschlüssel, so
   dass jedes ausgestellte Zertifikat auch ohne das Register kryptografisch
   überprüfbar bleibt.
4. **Fortführung der Verifizierungsadressen** für mindestens **5 Jahre**, in
   statischer Form, oder Übergabe an eine geeignete Einrichtung.
5. **Löschung** aller personenbezogenen Daten nach PS-GOV-06, mit Ausnahme
   der pseudonymen Tatsachen im Ledger.

Dieser Punkt ist keine Formalität. Ein Siegel, das mit einer dauerhaften
Kennung wirbt und dessen Betreiber ersatzlos verschwinden kann, verspricht
mehr, als er halten kann.

---

## 10. Missbrauch des Siegels

Verwendet jemand das PURE-Siegel ohne gültiges Zertifikat, für ein anderes als
das zertifizierte Werk, in veränderter Form oder nach einem Entzug, so:

1. wird der Sachverhalt im Vorfallsregister erfasst;
2. wird die verwendende Person zur Unterlassung binnen **14 Tagen**
   aufgefordert;
3. bleibt bei fortdauernder Verwendung die Verfolgung als Markenverletzung und
   unlautere Geschäftspraktik vorbehalten;
4. prüft das Register bei einer zertifikatshaltenden Person zusätzlich ein
   Verfahren nach Abschnitt 4 (`standard_violation`).

Das Register veröffentlicht **keine** Namen mutmaßlicher Missbrauchsfälle. Die
zutreffende Auskunft ist die Verifizierungsseite: existiert kein Zertifikat,
findet sich keines.

---

## 11. Umsetzungsstand

| Regel | Stand | Anmerkung |
|---|---|---|
| Entzug mit geschlossenem Grundcode | **umgesetzt** | Freitext ausschließlich im veränderlichen Prüfvermerk |
| Wiedereinsetzung als eigenes Ereignis | **umgesetzt** | der Entzug bleibt sichtbar |
| Status als Ableitung aus dem letzten Ledger-Ereignis | **umgesetzt** | — |
| Benachrichtigung der zertifikatshaltenden Person | **umgesetzt** | bei Entzug, Wiedereinsetzung und Einwand |
| Status `suspended` | ⚠ **offen** | im System existieren derzeit nur `valid` und `revoked`; eine Aussetzung nach Abschnitt 3 lässt sich noch nicht abbilden |
| Status `expired` | ⚠ **offen** | eine Laufzeit ist derzeit nicht vorgesehen |
| Vier-Augen-Prinzip bei Entzug und Wiedereinsetzung | ⚠ **offen** | derzeit genügt eine einzelne Person mit der Rolle `admin` — deshalb steht in Abschnitt 6 „soll", nicht „muss" |
| Anhörung mit 14-Tage-Frist | ⚠ **organisatorisch** | verbindlich geregelt, im System nicht abgebildet |
| Vorfallsregister für Siegelmissbrauch | ⚠ **offen** | — |
| Plan zur Beendigung des Registerbetriebs (Abschnitt 9.3) | ⚠ **offen** | als Regel festgelegt; der signierte Schlussabzug ist technisch vorbereitet, aber nicht erprobt |

---

## 12. Änderungshistorie

| Version | Datum | Änderung |
|---|---|---|
| 0.1 | 2026-08-26 | Erstfassung |
