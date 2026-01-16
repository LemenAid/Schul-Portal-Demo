# Agent Handover Instructions - Schul-Portal-Demo Intranet

This document outlines the immediate next steps to finalize the Intranet project. Please follow these instructions in order.

## 1. UI & Branding Refinements (Sidebar)
**Files:** `intranet/components/sidebar.tsx`, `intranet/app/inquiries/create-inquiry-dialog.tsx`

1.  **Branding:**
    *   In `intranet/components/sidebar.tsx`, change the app title in the header from **"CC Portal"** to **"Schul-Portal-Demo"**.
2.  **"New Inquiry" Button Styling:**
    *   In `intranet/app/inquiries/create-inquiry-dialog.tsx` (specifically the sidebar variant):
        *   **Remove Hover Effect:** Remove the background hover effect so the button remains transparent/clean.
        *   **Text Color:** Ensure the text color matches the current sidebar text color (use `text-current` or adapt to the role-based theme active in the sidebar).
        *   **Alignment:** Change the alignment of the icon and text to be **right-aligned** (e.g., use `justify-end` or `flex-row-reverse` depending on visual preference, but request was "rechts alignd").

## 2. Update Tutorials
**File:** `intranet/app/tutorial/page.tsx`

*   **Objective:** Rewrite the content to serve as a precise manual for the **currently functioning features**.
*   **Constraint:** Do *not* list features that are planned but not implemented (e.g., if "Time Conflict Check" isn't fully visual yet, focus on "Creating Courses").
*   **Structure:**
    *   **Admin:** User management (CRUD), Skill approvals, Prisma DB access.
    *   **Staff:** Creating Education Tracks, Creating Courses, Creating Students (Manual entry).
    *   **Teacher:** Viewing "My Courses", Managing Exams (if working), Viewing/Editing Grades.
    *   **Student:** Clock In/Out (Time Tracking), Viewing Dashboard/Courses, Creating Inquiries.

## 3. Comprehensive Documentation & Critical Analysis
**File:** Update `ENTITY_PLAN.md` (and rename to `DOCUMENTATION.md` if appropriate, or keep as is).

*   **Goal:** Create an all-encompassing technical documentation file.
*   **Required Sections:**
    1.  **Technical Implementation:** Detailed explanation of the tech stack (Next.js 15, Prisma, Tailwind, Server Actions).
    2.  **Architecture:** Use **Mermaid.js** diagrams to visualize:
        *   Database Schema (ER Diagram).
        *   Git/Deployment Workflow.
    3.  **Critical Evaluation:**
        *   Assess the code quality and architecture.
        *   Identify bottlenecks or technical debt.
        *   Propose concrete improvement steps (Refactoring, Performance).
    4.  **Learnings:** Summarize key educational takeaways (e.g., "Why Server Actions?", "Managing Role-based Auth").

## 4. README Updates (Pitfalls & AI Tips)
**File:** `README.md`

*   **Pitfalls:** Add a section listing common installation/runtime errors (e.g., `prisma generate` missing, `.env` issues) and their fixes.
*   **AI Prompting Tips:** Add a guide on how to effectively prompt an AI to solve issues in this specific codebase (e.g., "Always provide the `schema.prisma` when asking about database errors").

## 5. Presentation & Demo Scripts
**File:** Create `PRESENTATION.md`

*   **Master Script:** A full narrative script for presenting the entire Intranet. It must cover every role, view, and feature.
*   **Role-Based Demo Scripts:** Short, actionable "screenplays" for a live demo.
    *   *Format:* `Action -> Expected Result`
    *   *Example (Student):*
        1. Login as `student@demo.com`.
        2. Click "Zeiterfassung" in Sidebar.
        3. Click green "Clock In" button.
        4. Verify "Active" status appears.

## Project Structure & Deployment
- **Root Directory:** The application logic lives in `intranet/`. When deploying (e.g., to Vercel), the **Root Directory** must be set to `intranet`.
- **Database:** Uses Prisma with PostgreSQL.
  - **Connection:** Requires `DATABASE_URL` in environment variables.
  - **Seeding:** Use [`intranet/seed_winter2025.js`](intranet/seed_winter2025.js) to populate initial data. Run with `node seed_winter2025.js` inside the intranet folder.
- **Build Process:**
  - `node_modules` are not tracked in git.
  - The `postinstall` script in [`intranet/package.json`](intranet/package.json) handles `prisma generate` automatically.
  - Required Environment Variables: `DATABASE_URL`, `JWT_SECRET`.