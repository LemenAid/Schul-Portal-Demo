# CC Vibe Portal 🚀

Ein modernes Firmen-Intranet / LMS-Prototyp, erstellt mit Vibe Coding.

## Features

*   **Erweitertes Rollensystem**: Login als Admin, Staff, Teacher oder Student.
*   **LMS-Features (Learning Management)**:
    *   **Umschulungs-Struktur**: Abbildung kompletter Tracks (z.B. "Fachinformatiker Winter 2025") mit Kursen und Themen.
    *   **Intelligente Planung**: Staff-Mitglieder weisen Lehrer basierend auf Skills und Verfügbarkeit zu.
    *   **Raumplanung**: Zuweisung von Räumen und Vermeidung von Doppelbelegungen.
    *   **Prüfungsverwaltung**: Lehrer tragen Noten ein, Schüler sehen Ergebnisse und Durchschnitt.
*   **Intranet-Features**:
    *   **Zeiterfassung**: Stempeluhr (On-Site/Remote) und Monatsbericht-Export.
    *   **Schwarzes Brett**: "Suche & Biete" Marktplatz.
    *   **Support-System (Anfragen)**: Ticket-System zwischen Schülern und Personal.
*   **Dashboard**: Rollenspezifische Widgets und Funktionen.

## Tech Stack

*   **Framework**: Next.js 15 (App Router)
*   **Language**: TypeScript
*   **Database**: SQLite (via Prisma ORM)
*   **Styling**: Tailwind CSS v4 + shadcn/ui

## Installation & Start

1.  Abhängigkeiten installieren:
    ```bash
    npm install
    ```

2.  Datenbank synchronisieren (Push):
    ```bash
    npx prisma db push
    ```

3.  Datenbank mit Testdaten füllen (inkl. kompletter Umschulung Winter 2025):
    ```bash
    npx prisma db seed
    ```

4.  Server starten:
    ```bash
    npm run dev
    ```

Das Portal ist dann unter `http://localhost:3000` erreichbar.

## Projektstruktur

*   `/app`: Next.js Pages & Layouts (Dashboard, Profil, Inquiries, etc.)
*   `/components`: UI Komponenten (Sidebar, Widgets, shadcn/ui)
*   `/lib`: Server Actions (Business Logic) & Auth
*   `/prisma`: Datenbankschema (EducationTrack, Course, User, Grade, etc.)

