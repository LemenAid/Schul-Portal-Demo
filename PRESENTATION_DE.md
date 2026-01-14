# VIBE Portal - Präsentation & Demo-Skripte

## 1. Hauptskript (Erzählung)

**Einleitung:**
"Willkommen beim VIBE Portal, dem zentralen Nervensystem für unsere Bildungseinrichtung. Diese Plattform schlägt die Brücke zwischen Verwaltung, Lehrpersonal und Schülern und bietet eine einheitliche Oberfläche für die Verwaltung des gesamten Bildungszyklus."

**Teil 1: Das Fundament (Administrator)**
"Wir beginnen mit der Administrator-Ansicht. Der Admin ist der Architekt des Systems.
*   **Benutzerverwaltung:** Hier sehen wir eine vollständige Liste aller Benutzer. Der Admin kann neue Konten erstellen, Rollen zuweisen (Schüler, Lehrer, Mitarbeiter) und Berechtigungen verwalten.
*   **Systemgesundheit:** Der Admin hat auch direkten Zugriff auf die Datenbank via Prisma Studio, um die Datenintegrität sicherzustellen."

**Teil 2: Der Organisator (Mitarbeiter/Verwaltung)**
"Als Nächstes wechseln wir zur Mitarbeiter-Rolle – unser organisatorisches Rückgrat.
*   **Ausbildungsgänge (Education Tracks):** Mitarbeiter definieren den akademischen Kalender. Hier erstellen wir einen neuen 'Fachinformatiker 2024'-Jahrgang.
*   **Kursplanung:** Innerhalb dieses Jahrgangs planen wir spezifische Kurse wie 'Webentwicklung' und weisen ihnen Räume und Zeitfenster zu."

**Teil 3: Der Pädagoge (Lehrer)**
"Nun lassen Sie uns die Perspektive des Lehrers sehen.
*   **Meine Kurse:** Lehrer sehen ein Dashboard ihrer aktiven Module.
*   **Prüfungsverwaltung:** Ein kritisches Feature. Der Lehrer erstellt eine neue Prüfung für nächsten Freitag.
*   **Benotung:** Sobald die Prüfung vorbei ist, trägt der Lehrer Noten direkt in das System ein, die sofort für Schüler sichtbar sind."

**Teil 4: Der Lernende (Schüler)**
"Schließlich die Schüler-Ansicht – die am meisten genutzte Oberfläche.
*   **Dashboard:** Nach dem Login sieht der Schüler seinen kommenden Stundenplan und Ankündigungen.
*   **Zeiterfassung:** Ein wichtiges Compliance-Feature. Der Schüler klickt auf 'Clock In', um seinen Tag zu beginnen und seine Anwesenheit für die Arbeitsagentur zu protokollieren.
*   **Anfragen:** Wenn ein Schüler ein Problem hat, sendet er keine lose E-Mail. Er nutzt den 'Neue Anfrage'-Button, um ein strukturiertes Ticket direkt an die relevante Abteilung zu senden."

**Fazit:**
"Das VIBE Portal ersetzt fragmentierte Tabellenkalkulationen und E-Mails durch eine einzige, rollenbewusste Anwendung und rationalisiert die Abläufe für alle Beteiligten."

---

## 2. Rollenbasierte Demo-Skripte

### 🎓 Szenario 1: Schüler (Tagesablauf)
*Ziel: Zeiterfassung und Kommunikation demonstrieren.*

1.  **Login** als `student@demo.com` -> Dashboard lädt.
2.  **Klick** auf "Zeiterfassung" in der Sidebar -> Zeiterfassungsansicht öffnet sich.
3.  **Klick** auf grünen "Clock In" Button -> Status ändert sich zu "Aktiv", Timer startet.
4.  **Klick** auf "Neue Anfrage" (Sidebar) -> Dialog öffnet sich.
5.  **Wähle** "Verwaltung (Allgemein)" -> Betreff: "Krankmeldung", Nachricht: "Bin heute krank."
6.  **Klick** auf "Absenden" -> Erfolgsmeldung erscheint.

### 👨‍🏫 Szenario 2: Lehrer (Prüfungsverwaltung)
*Ziel: Eine Prüfung planen und benoten.*

1.  **Login** als `teacher@demo.com` -> Lehrer-Dashboard lädt.
2.  **Klick** auf "Prüfungsverwaltung" -> Liste der Prüfungen erscheint.
3.  **Klick** auf "Prüfung erstellen" -> Formular öffnet sich.
4.  **Eingabe** Titel: "React Basics", Datum: Morgen -> Prüfung erscheint in der Liste.
5.  **Klick** auf "Noten eintragen" (bei einer bestehenden Prüfung) -> Schülerliste öffnet sich.
6.  **Eingabe** Note "1.0" für einen Schüler -> Speicherbestätigung erscheint.

### 🏢 Szenario 3: Mitarbeiter (Kursplanung)
*Ziel: Einen neuen Ausbildungsgang einrichten.*

1.  **Login** als `staff@demo.com` -> Mitarbeiter-Dashboard lädt.
2.  **Klick** auf "Planung" -> Übersicht der Ausbildungsgänge erscheint.
3.  **Klick** auf "Neuer Jahrgang" -> Eingabe "Winter 2024".
4.  **Klick** auf den neuen Track -> Track-Details öffnen sich.
5.  **Klick** auf "Kurs hinzufügen" -> Erstelle Kurs "Einführung in KI".

### 🛡️ Szenario 4: Admin (Benutzerverwaltung)
*Ziel: Einen neuen Benutzer anlegen.*

1.  **Login** als `admin@demo.com` -> Admin-Dashboard lädt.
2.  **Klick** auf "Admin" (Sidebar) -> Benutzerliste erscheint.
3.  **Klick** auf "Add User" -> Dialog öffnet sich.
4.  **Eingabe** Name: "Max Mustermann", Rolle: "Student" -> Benutzer erscheint in der Liste.
5.  **Klick** auf "Skill Freigaben" -> Überprüfe ausstehende Skill-Anfragen.
