# Schul-Portal-Demo - Intranet Application

A comprehensive intranet solution for educational institutions, managing students, teachers, staff, courses, and time tracking.

## ✨ Complete Feature Overview

### 🔐 Core System Features

*   **Authentication & RBAC:** JWT-based secure login with role-specific access control (Admin, Staff, Teacher, Student)
*   **User Management:** Complete CRUD operations for users with role assignment, department configuration, and measure numbers
*   **Education Track Management:** Organize students into cohorts (e.g., "Winter 2025") with course assignments and scheduling

### ⏱️ Time & Attendance

*   **Time Tracking System:** Legal-compliant check-in/check-out with location tracking (ON_SITE / REMOTE)
*   **Weekly Reports:** Automated hour calculation and attendance summaries
*   **Staff Overview:** Monitor all student time entries with filtering and export

### 📚 Academic Management

*   **Course Management (Complete):**
    *   Create and edit courses with descriptions, dates, and capacity limits (default 25 students)
    *   Room assignment with capacity tracking ⭐ NEW (January 2026)
    *   Course topics with teaching units (UE) and time periods ⭐ NEW
    *   Automatic student assignment with real-time UI refresh ⭐ FIXED
    *   Tag-based filtering and teacher matching
    *   Course invitation system with accept/reject workflow
    
*   **Exam Management:**
    *   Schedule exams with date, duration, and location
    *   Link exams to specific courses
    *   Automated student notifications for upcoming exams
    
*   **Grading System:**
    *   Teachers enter grades for exams
    *   Students receive GRADE notifications (blue badge) ⭐ NEW
    *   Profile view with all grades and average calculation
    *   Grade history tracking with date stamps

### 💬 Communication & Collaboration

*   **Intelligent Notification System:** ⭐ ENHANCED (January 2026)
    *   5 notification types: INFO, INQUIRY, GRADE, INVITATION, WARNING
    *   Color-coded badges (blue for grades, red for warnings, gray for info)
    *   Auto-dismiss on click with navigation
    *   History tab (excludes inquiries, shows last 50 entries)
    *   Deep linking to relevant pages
    
*   **Inquiry System:**
    *   Direct communication channel to administration or teachers
    *   Category-based routing (ADMIN / TEACHER)
    *   Status tracking (OPEN / ANSWERED)
    *   Notification workflow for both students and staff
    
*   **Bulletin Board:**
    *   "Search/Offer" marketplace for students and staff
    *   Post types: OFFER (selling/offering) and SEARCH (looking for)
    *   Content moderation with reason comments ⭐ NEW (January 2026)
    *   Automatic WARNING notifications to post authors on deletion
    *   Optional expiration dates for posts

### 👥 Role-Specific Features

*   **Student Dashboard:**
    *   Enrolled courses with schedules and room locations
    *   Upcoming exams with countdown timers
    *   Grade overview with average calculation
    *   Personal time tracking summary
    *   Notification center with history
    
*   **Teacher Dashboard:**
    *   Assigned courses overview
    *   Exam creation and management
    *   Grading interface for enrolled students
    *   Course invitation acceptance
    *   Skill management (add/verify/deactivate)
    
*   **Staff Dashboard:**
    *   Education track creation and management
    *   Course planning with room, topics, and student assignment
    *   Bulletin board moderation
    *   Inquiry management and response
    *   Teacher skill verification
    
*   **Admin Dashboard:**
    *   User CRUD operations (create, edit, delete users)
    *   Role assignment and department configuration
    *   System-wide overview of all activities
    *   Teacher skill approval workflow

### 🎯 Advanced Features

*   **Teacher Skills & Tags System:**
    *   Tag-based skill management for teachers
    *   Admin verification of teacher skills
    *   Automatic teacher suggestions for courses based on tags
    *   Active/inactive skill toggling
    
*   **Room & Location Management:** ⭐ NEW (January 2026)
    *   Physical space assignment with capacity
    *   Room availability tracking
    *   Visual room indicators in course lists
    *   Demo rooms: Room 101, 102, 201, Remote, Aula
    
*   **Course Topics Structure:** ⭐ NEW (January 2026)
    *   Break courses into structured topics
    *   UE (teaching units) allocation per topic
    *   Start and end date planning for topics
    *   Automatic total UE calculation
    *   Visual topic manager with CRUD operations

## 🚀 Getting Started

### Prerequisites
*   Node.js 18+
*   PostgreSQL (local or hosted, e.g., Neon Database)

### Installation
1.  Clone the repository
2.  Navigate to the intranet directory:
    ```bash
    cd intranet
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Set up your environment variables in `.env`:
    ```env
    POSTGRES_PRISMA_URL="postgresql://..."
    JWT_SECRET="your-secret-key"
    ```
5.  Initialize the database:
    ```bash
    npx prisma migrate dev
    npx prisma db seed
    ```
6.  Start the development server:
    ```bash
    npm run dev
    ```

## 🔗 Live Demo

Visit: **https://schul-portal-demo.vercel.app**

Demo accounts:
- Student: `student@demo.com` / `password123`
- Teacher: `teacher@demo.com` / `password123`
- Staff: `staff@demo.com` / `password123`
- Admin: `admin@demo.com` / `password123`

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

### 4. Students Not Showing in Course List
*   **Problem:** After assigning students to a course, they don't appear in the list.
*   **Fix:** The system now automatically refreshes. If the issue persists, check the browser console for errors and ensure `router.refresh()` is called after assignment.

### 5. Notifications Won't Dismiss
*   **Problem:** Notifications remain visible after clicking.
*   **Fix:** Ensure notification links are correct. The system automatically marks notifications as read when clicked.

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
