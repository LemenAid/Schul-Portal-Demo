# Schul-Portal-Demo – Präsentation & Demo-Skripte

## 1. Master-Skript (Story/Narrativ)

**Einleitung:**  
„Willkommen zur Schul-Portal-Demo – dem zentralen Nervensystem unserer Bildungseinrichtung. Diese Plattform verbindet Verwaltung, Lehrkräfte und Schüler:innen und bietet eine einheitliche Oberfläche, um den gesamten Bildungsprozess durchgängig zu verwalten.“

**Teil 1: Das Fundament (Administrator)**  
„Wir starten mit der Administrator-Ansicht. Der Admin ist der Architekt des Systems.  
- **Benutzerverwaltung:** Hier sehen wir eine vollständige Liste aller Nutzer:innen. Der Admin kann neue Accounts anlegen, Rollen zuweisen (Student, Teacher, Staff) und Berechtigungen verwalten.  
- **Systemzustand:** Der Admin hat außerdem direkten Zugriff auf die Datenbank über Prisma Studio, um Datenintegrität und Konsistenz zu überprüfen.“

**Teil 2: Die Organisation (Staff/Verwaltung)**  
„Als Nächstes wechseln wir in die Staff-Rolle – das organisatorische Rückgrat.  
- **Jahrgänge/Bildungsgänge:** Mitarbeitende definieren den akademischen Rahmen. Hier erstellen wir z. B. einen neuen Jahrgang ‚Fachinformatiker 2024‘.  
- **Kursplanung:** Innerhalb des Jahrgangs planen wir konkrete Kurse wie ‚Web Development‘ und weisen ihnen Räume sowie Zeitfenster zu.  
- **Raumverwaltung:** NEU! Wir können jedem Kurs jetzt einen physischen Raum zuweisen – z. B. ‚Room 101‘ oder ‚Remote/Online‘.  
- **Kursthemen:** NEU! Beim Bearbeiten eines Kurses sehen wir eine strukturierte Themenliste mit Unterrichtseinheiten (UE) und Zeiträumen – ideal für detaillierte Planung.  
- **Schülerzuweisung:** Mit wenigen Klicks weisen wir Schüler:innen Kursen zu. Das System aktualisiert sofort alle relevanten Ansichten – die Schüler:innen sehen den Kurs direkt in ihrem Dashboard.“

**Teil 3: Die Lehrkraft (Teacher)**  
„Jetzt schauen wir aus Sicht der Lehrkraft.  
- **Meine Kurse:** Lehrkräfte sehen ein Dashboard ihrer aktiven Module.  
- **Prüfungsverwaltung:** Eine zentrale Funktion. Die Lehrkraft erstellt eine neue Prüfung für nächsten Freitag.  
- **Bewertung/Noten:** Nach der Prüfung trägt die Lehrkraft die Noten direkt im System ein – diese sind sofort für die Schüler:innen sichtbar.“

**Teil 4: Das Lernen (Student)**  
„Zum Schluss die Student-Ansicht – die am häufigsten genutzte Oberfläche.  
- **Dashboard:** Nach dem Login sieht der/die Schüler:in den kommenden Stundenplan und Ankündigungen.  
- **Benachrichtigungen:** NEU! Ein intelligentes System mit farbcodierten Badges: Noten in Blau, Warnungen in Rot, Einladungen in Grau. Ein Klick markiert die Benachrichtigung als gelesen und führt zur Zielseite.  
- **Benachrichtigungsverlauf:** NEU! Im Verlauf-Tab sehen Schüler:innen alle wichtigen vergangenen Nachrichten (Noten, Einladungen) – ohne „Inquiry“-Spam, der den Verlauf überlädt.  
- **Zeiterfassung:** Ein wichtiges Compliance-Feature. Der/die Schüler:in klickt auf ‚Clock In‘, um den Tag zu starten, und erfasst die Anwesenheit z. B. für Nachweise gegenüber der Agentur für Arbeit.  
- **Anfragen (Inquiries):** Statt lose E-Mails zu schreiben, nutzen Schüler:innen ‚Neue Anfrage‘, um ein strukturiertes Ticket direkt an die zuständige Stelle zu senden.“

**Fazit:**  
„Die Schul-Portal-Demo ersetzt verstreute Excel-Tabellen und E-Mail-Chaos durch eine zentrale, rollenbewusste Anwendung – und macht Abläufe für alle Beteiligten spürbar effizienter.“

---

## 2. Rollenbasierte Demo-Skripte

### 🎓 Szenario 1: Student (Tagesroutine)  
*Ziel: Zeiterfassung, Schwarzes Brett und Kommunikation demonstrieren.*

1. **Login** als `student@demo.com` → Dashboard lädt.  
2. **Klick** auf „Zeiterfassung“ in der Sidebar → Zeiterfassungsansicht öffnet sich.  
3. **Klick** auf den grünen „Clock In“-Button → Status wird „Aktiv“, Timer startet.  
4. **Klick** auf „Schwarzes Brett“ (Sidebar) → Marktplatz lädt.  
5. **Klick** auf „Eintrag erstellen“ → Erstelle einen „Suche Nachhilfe“-Post mit 7 Tagen Ablaufdatum.  
6. **Klick** auf „Neue Anfrage“ (Sidebar) → Dialog öffnet sich.  
7. **Auswahl** „Verwaltung (Allgemein)“ → Betreff: „Krankmeldung“, Nachricht: „Bin heute krank.“  
8. **Klick** auf „Absenden“ → Erfolgs-Toast erscheint.

### 👨‍🏫 Szenario 2: Teacher (Prüfungsverwaltung)  
*Ziel: Prüfung anlegen und Noten eintragen.*

1. **Login** als `teacher@demo.com` → Teacher-Dashboard lädt.  
2. **Klick** auf „Prüfungsverwaltung“ → Liste der Prüfungen erscheint.  
3. **Klick** auf „Prüfung erstellen“ → Formular öffnet sich.  
4. **Eingabe** Titel: „React Basics“, Datum: morgen → Prüfung erscheint in der Liste.  
5. **Klick** auf „Noten eintragen“ (bei einer bestehenden Prüfung) → Schülerliste öffnet sich.  
6. **Eingabe** Note „1,0“ für eine:n Schüler:in → Bestätigung „Gespeichert“ erscheint.

### 🏢 Szenario 3: Staff (Kursplanung)  
*Ziel: Einen neuen Jahrgang anlegen.*

1. **Login** als `staff@demo.com` → Staff-Dashboard lädt.  
2. **Klick** auf „Planung“ → Übersicht der Jahrgänge erscheint.  
3. **Klick** auf „Neuer Jahrgang“ → Eingabe „Winter 2024“.  
4. **Klick** auf den neuen Jahrgang → Details öffnen sich.  
5. **Klick** auf „Kurs hinzufügen“ → Kurs „Intro to AI“ erstellen.

### 🛡️ Szenario 4: Admin (Benutzerverwaltung)  
*Ziel: Einen neuen Nutzer onboarden.*

1. **Login** als `admin@demo.com` → Admin-Dashboard lädt.  
2. **Klick** auf „Admin“ (Sidebar) → Nutzerliste erscheint.  
3. **Klick** auf „Add User“ → Dialog öffnet sich.  
4. **Eingabe** Name: „Max Mustermann“, Rolle: „Student“ → Nutzer erscheint in der Liste.  
5. **Klick** auf „Skill Freigaben“ → Offene Skill-Anfragen prüfen.
