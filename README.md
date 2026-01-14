# VIBE Portal - Intranet Application

A comprehensive intranet solution for educational institutions, managing students, teachers, staff, courses, and time tracking.

## ✨ Key Features

*   **Role-Based Dashboards:** tailored views for Students, Teachers, Staff, and Admins.
*   **Time Tracking:** Regulatory-compliant clock-in/clock-out system for students.
*   **Course & Exam Management:** Scheduling, grading, and curriculum planning.
*   **Bulletin Board:** "Search/Offer" marketplace with automatic post expiration logic.
*   **Inquiry System:** Direct communication channel between students and departments.

## 🚀 Getting Started

### Prerequisites
*   Node.js 18+
*   PostgreSQL (local or hosted)

### Installation
1.  Clone the repository
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Set up your environment variables in `.env` (copy `.env.example` if available).
4.  Initialize the database:
    ```bash
    npx prisma migrate dev
    ```
5.  Start the development server:
    ```bash
    npm run dev
    ```

## 🛠 Common Pitfalls & Troubleshooting

### 1. `PrismaClientInitializationError`
*   **Problem:** The database schema has changed but the client hasn't been updated.
*   **Fix:** Run `npx prisma generate` to update the type definitions.

### 2. Missing Environment Variables
*   **Problem:** The app crashes on startup.
*   **Fix:** Ensure your `.env` file exists in the root directory and contains `DATABASE_URL` and `JWT_SECRET`.

### 3. Server Actions & "Plain Object" Error
*   **Problem:** You try to pass a complex object (like a Date or a class instance) from a Server Component to a Client Component.
*   **Fix:** Only pass plain JSON-serializable data (strings, numbers, booleans, plain objects). Convert Dates to ISO strings before passing them.

## 🤖 AI Prompting Guide

When asking an AI (like ChatGPT or Claude) for help with this codebase, follow these tips for the best results:

### 1. Provide Context
Always tell the AI what stack you are using:
> "I am working on a Next.js 15 app using Server Actions, Prisma, and Tailwind CSS."

### 2. Share the Schema
Database errors are common. Always paste your `prisma/schema.prisma` content when asking about data-related issues.
> "Here is my schema.prisma file. Why is my query failing?"

### 3. Server vs. Client
Be explicit about where your code is running.
> "I have a Client Component ('use client') that needs to call a Server Action to update the user."

### 4. Tailwind Styling
If asking for UI changes, mention you are using Shadcn UI and Tailwind.
> "How do I center this div using Tailwind? I'm using Shadcn's Card component."
