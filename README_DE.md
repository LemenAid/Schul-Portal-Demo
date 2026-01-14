# VIBE Portal - Intranet Anwendung

Eine umfassende Intranet-Lösung für Bildungseinrichtungen zur Verwaltung von Schülern, Lehrern, Mitarbeitern, Kursen und Zeiterfassung.

## ✨ Hauptfunktionen

*   **Rollenbasierte Dashboards:** Maßgeschneiderte Ansichten für Schüler, Lehrer, Mitarbeiter und Administratoren.
*   **Zeiterfassung:** Rechtskonformes Check-in/Check-out-System für Schüler.
*   **Kurs- & Prüfungsverwaltung:** Planung von Stundenplänen, Benotung und Lehrplänen.
*   **Schwarzes Brett:** "Suche/Biete"-Marktplatz mit automatischer Ablaufsteuerung für Beiträge.
*   **Anfrage-System:** Direkter Kommunikationskanal zwischen Schülern und Abteilungen.

## 🚀 Erste Schritte

### Voraussetzungen
*   Node.js 18+
*   PostgreSQL (lokal oder gehostet)

### Installation
1.  Klonen Sie das Repository
2.  Installieren Sie die Abhängigkeiten:
    ```bash
    npm install
    ```
3.  Richten Sie Ihre Umgebungsvariablen in `.env` ein (kopieren Sie `.env.example`, falls verfügbar).
4.  Initialisieren Sie die Datenbank:
    ```bash
    npx prisma migrate dev
    ```
5.  Starten Sie den Entwicklungsserver:
    ```bash
    npm run dev
    ```

## 🛠 Häufige Fehler & Problembehandlung

### 1. `PrismaClientInitializationError`
*   **Problem:** Das Datenbankschema wurde geändert, aber der Client wurde nicht aktualisiert.
*   **Lösung:** Führen Sie `npx prisma generate` aus, um die Typdefinitionen zu aktualisieren.

### 2. Fehlende Umgebungsvariablen
*   **Problem:** Die App stürzt beim Start ab.
*   **Lösung:** Stellen Sie sicher, dass Ihre `.env`-Datei im Stammverzeichnis existiert und `DATABASE_URL` sowie `JWT_SECRET` enthält.

### 3. Server Actions & "Plain Object" Fehler
*   **Problem:** Sie versuchen, ein komplexes Objekt (wie ein Date-Objekt oder eine Klasseninstanz) von einer Server Component an eine Client Component zu übergeben.
*   **Lösung:** Übergeben Sie nur einfache JSON-serialisierbare Daten (Strings, Zahlen, Booleans, einfache Objekte). Konvertieren Sie Daten (Dates) in ISO-Strings, bevor Sie sie übergeben.

## 🤖 KI-Prompting-Leitfaden

Wenn Sie eine KI (wie ChatGPT oder Claude) um Hilfe bei dieser Codebasis bitten, befolgen Sie diese Tipps für die besten Ergebnisse:

### 1. Kontext geben
Sagen Sie der KI immer, welchen Stack Sie verwenden:
> "Ich arbeite an einer Next.js 15 App mit Server Actions, Prisma und Tailwind CSS."

### 2. Schema teilen
Datenbankfehler sind häufig. Fügen Sie immer den Inhalt Ihrer `prisma/schema.prisma` ein, wenn Sie Fragen zu datenbezogenen Problemen stellen.
> "Hier ist meine schema.prisma Datei. Warum schlägt meine Abfrage fehl?"

### 3. Server vs. Client
Seien Sie explizit darüber, wo Ihr Code ausgeführt wird.
> "Ich habe eine Client Component ('use client'), die eine Server Action aufrufen muss, um den Benutzer zu aktualisieren."

### 4. Tailwind Styling
Wenn Sie nach UI-Änderungen fragen, erwähnen Sie, dass Sie Shadcn UI und Tailwind verwenden.
> "Wie zentriere ich dieses Div mit Tailwind? Ich verwende die Card-Komponente von Shadcn."
