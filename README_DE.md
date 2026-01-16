Schul-Portal-Demo – Intranet-Anwendung

Eine umfassende Intranet-Lösung für Bildungseinrichtungen zur Verwaltung von Schülern, Lehrkräften, Mitarbeitenden, Kursen sowie Zeiterfassung.

✨ Vollständige Funktionsübersicht
🔐 Kernfunktionen des Systems

Authentifizierung & RBAC: Sicherer JWT-basierter Login mit rollenbasierter Zugriffskontrolle (Admin, Staff/Verwaltung, Teacher/Lehrkraft, Student/Schüler:in)

Benutzerverwaltung: Vollständige CRUD-Funktionen für Benutzer inkl. Rollenvergabe, Abteilungszuordnung und Maßnahmennummern

Bildungsgang-/Kohortenverwaltung: Organisation von Schüler:innen in Kohorten (z. B. „Winter 2025“) mit Kurszuordnung und Terminplanung

⏱️ Zeit & Anwesenheit

Zeiterfassungssystem: Rechtskonformes Ein- und Ausstempeln inkl. Standort/Arbeitsort (ON_SITE / REMOTE)

Wochenberichte: Automatische Stundenberechnung und Anwesenheitsübersichten

Übersicht für Mitarbeitende: Monitoring aller Zeiteinträge von Schüler:innen mit Filter- und Exportfunktionen

📚 Akademische Verwaltung

Kursverwaltung (vollständig):

Kurse erstellen und bearbeiten inkl. Beschreibung, Zeitraum und Kapazitätslimit (Standard: 25 Schüler:innen)

Raumzuweisung mit Kapazitäts-Tracking ⭐ NEU (Januar 2026)

Kursthemen mit Unterrichtseinheiten (UE) und Zeiträumen ⭐ NEU

Automatische Schülerzuweisung mit Live-UI-Refresh ⭐ BEHOBEN

Tag-basierte Filterung und Matching mit Lehrkräften

Kurseinladungssystem mit Annehmen/Ablehnen-Workflow

Prüfungsverwaltung:

Prüfungen planen inkl. Datum, Dauer und Ort

Prüfungen mit konkreten Kursen verknüpfen

Automatische Benachrichtigung von Schüler:innen über anstehende Prüfungen

Notensystem:

Lehrkräfte tragen Noten für Prüfungen ein

Schüler:innen erhalten NOTEN-Benachrichtigungen (blaues Badge) ⭐ NEU

Profilansicht mit allen Noten und Durchschnittsberechnung

Notenverlauf mit Datumshistorie

💬 Kommunikation & Zusammenarbeit

Intelligentes Benachrichtigungssystem: ⭐ ERWEITERT (Januar 2026)

5 Benachrichtigungstypen: INFO, INQUIRY (Anfrage), GRADE (Note), INVITATION (Einladung), WARNING (Warnung)

Farbcodierte Badges (blau für Noten, rot für Warnungen, grau für Infos)

Automatisches Ausblenden nach Klick inkl. Navigation

Verlauf-Tab (ohne Anfragen, zeigt die letzten 50 Einträge)

Deep-Links zu relevanten Seiten

Anfragesystem:

Direkter Kommunikationskanal zur Verwaltung oder zu Lehrkräften

Kategorie-basiertes Routing (ADMIN / TEACHER)

Status-Tracking (OPEN / ANSWERED)

Benachrichtigungs-Workflow für Schüler:innen und Mitarbeitende

Schwarzes Brett:

„Suchen/Bieten“-Marktplatz für Schüler:innen und Mitarbeitende

Post-Typen: OFFER (Angebot/Verkauf) und SEARCH (Gesuch)

Inhaltsmoderation mit Begründungskommentaren ⭐ NEU (Januar 2026)

Automatische WARNING-Benachrichtigungen an Autor:innen bei Löschung

Optionale Ablaufdaten für Posts

👥 Rollen-spezifische Funktionen

Studenten-Dashboard:

Eingeschriebene Kurse inkl. Zeitplänen und Raumangaben

Anstehende Prüfungen mit Countdown

Notenübersicht inkl. Durchschnitt

Persönliche Zeiterfassungs-Übersicht

Benachrichtigungscenter inkl. Verlauf

Lehrkräfte-Dashboard:

Übersicht der zugewiesenen Kurse

Prüfungen erstellen und verwalten

Notenmaske für eingeschriebene Schüler:innen

Kurseinladungen annehmen

Skill-Verwaltung (hinzufügen/verifizieren/deaktivieren)

Mitarbeitenden-/Verwaltungs-Dashboard:

Bildungsgänge/Kohorten erstellen und verwalten

Kursplanung inkl. Raum, Themen und Schülerzuweisung

Moderation des Schwarzen Bretts

Anfragen verwalten und beantworten

Verifizierung von Lehrkraft-Skills

Admin-Dashboard:

Benutzer-CRUD (Benutzer erstellen, bearbeiten, löschen)

Rollenvergabe und Abteilungs-Konfiguration

Systemweite Übersicht aller Aktivitäten

Freigabe-Workflow für Lehrkraft-Skills

🎯 Erweiterte Funktionen

Teacher Skills & Tags System (Lehrkraft-Skills & Tags):

Tag-basierte Skill-Verwaltung für Lehrkräfte

Admin-Verifizierung von Lehrkraft-Skills

Automatische Vorschläge passender Lehrkräfte für Kurse anhand von Tags

Umschalten zwischen aktiv/inaktiv für Skills

Raum- & Standortverwaltung: ⭐ NEU (Januar 2026)

Zuweisung physischer Räume inkl. Kapazität

Tracking der Raumverfügbarkeit

Visuelle Raumindikatoren in Kurslisten

Demo-Räume: Room 101, 102, 201, Remote, Aula

Kursthemen-Struktur: ⭐ NEU (Januar 2026)

Kurse in strukturierte Themenblöcke aufteilen

UE (Unterrichtseinheiten) pro Thema planen

Start- und Enddatum pro Thema planen

Automatische Berechnung der Gesamt-UE

Visueller Themenmanager mit CRUD-Funktionen

🚀 Schnellstart
Voraussetzungen

Node.js 18+

PostgreSQL (lokal oder gehostet, z. B. Neon Database)

Installation

Repository klonen

In das Verzeichnis intranet wechseln:

cd intranet


Abhängigkeiten installieren:

npm install


Umgebungsvariablen in .env setzen:

POSTGRES_PRISMA_URL="postgresql://..."
JWT_SECRET="your-secret-key"


Datenbank initialisieren:

npx prisma migrate dev
npx prisma db seed


Dev-Server starten:

npm run dev

🔗 Live-Demo

Besuchen: https://schul-portal-demo.vercel.app

Demo-Accounts:

Student: student@demo.com / password123

Teacher: teacher@demo.com / password123

Staff: staff@demo.com / password123

Admin: admin@demo.com / password123

🛠 Häufige Probleme & Troubleshooting
1. PrismaClientInitializationError

Problem: Das Datenbankschema wurde geändert, aber der Client wurde nicht aktualisiert.

Fix: npx prisma generate ausführen, um die Typdefinitionen zu aktualisieren.

2. Fehlende Umgebungsvariablen

Problem: Die App stürzt beim Start ab.

Fix: Sicherstellen, dass eine .env im Root existiert und DATABASE_URL sowie JWT_SECRET enthält.

3. Server Actions & „Plain Object“-Fehler

Problem: Es wird versucht, ein komplexes Objekt (z. B. Date oder Klasseninstanz) von einer Server Component an eine Client Component zu übergeben.

Fix: Nur JSON-serialisierbare Daten übergeben (Strings, Numbers, Booleans, Plain Objects). Dates vorher in ISO-Strings umwandeln.

4. Schüler:innen erscheinen nicht in der Kursliste

Problem: Nach dem Zuweisen zu einem Kurs erscheinen Schüler:innen nicht in der Liste.

Fix: Das System aktualisiert inzwischen automatisch. Falls es weiterhin auftritt: Browser-Konsole prüfen und sicherstellen, dass nach der Zuweisung router.refresh() aufgerufen wird.

5. Benachrichtigungen verschwinden nicht

Problem: Benachrichtigungen bleiben nach dem Anklicken sichtbar.

Fix: Prüfen, ob die Links korrekt sind. Das System markiert Benachrichtigungen beim Klick automatisch als gelesen.
