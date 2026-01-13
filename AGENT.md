# Agent Handover Instructions

## Current Status
The project is a Next.js 15 Intranet/LMS.
- **Database**: Prisma SQLite schema is updated (includes `EducationTrack`, `CourseTopic`, `Room`).
- **Seeds**: Database is seeded with "Winter 2025" track data.
- **Admin Dashboard**: `/admin/users` is fully functional (User CRUD).
- **Staff Dashboard**: Started but not finished. `lib/planning-actions.ts` needs to be implemented.

## Next Tasks (Priority Order)

### 1. Staff Dashboard (Planning)
**Goal**: Allow Staff to manage Education Tracks and assign Teachers/Students to courses.

*   **Server Actions**: Implement `lib/planning-actions.ts`.
    *   Must include logic to check Teacher Skills vs Course Title (Tagging).
    *   Must check for Time Conflicts for teachers.
    *   Must enforce max 25 students per course.
*   **UI Implementation**:
    *   `/app/planning/page.tsx`: List all `EducationTracks`. Add "Create Track" button.
    *   `/app/planning/[trackId]/page.tsx`: Show details of a track (Courses list, Users list).
    *   `/app/planning/course/[courseId]/page.tsx`: The main management view.
        *   **Teacher Assignment**: Show a list of teachers with "Recommended" (Matching Skill) and "Conflict" (Time overlap) badges. Allow assignment.
        *   **Student Assignment**: List students from the parent `EducationTrack`. Allow checking/unchecking to assign to this specific course. Show "x/25" counter.

### 2. LMS Features (Exams & Grades)
**Goal**: Allow Teachers to grade, Students to see grades.

*   **Teacher View**:
    *   Create `/app/teacher/exams/page.tsx` (or inside `/courses` context).
    *   Show list of finished exams for their courses.
    *   Clicking an exam opens a table of all assigned students with an input field for `Grade`.
*   **Student View**:
    *   Update `/app/exams/page.tsx`.
    *   Show list of upcoming exams.
    *   Show list of past exams with Grades.
    *   **IHK Score**: Calculate average grade (Logic: Sum / Count, potentially weighted if requirements change).

### 3. Attendance Export
*   **Feature**: In `/app/time`, add a "Download Monthly Report" button.
*   **Implementation**: Generate a CSV or simple PDF view of `TimeEntry` records for the current user and month.

## Technical Context
*   **Auth**: `lib/auth.ts` and `lib/auth-actions.ts` handle session via cookies.
*   **Database**: Use `prisma` for all data access.
*   **Styling**: Tailwind CSS + shadcn/ui components in `components/ui`.

## Git
Commit message for current state: "feat: Admin dashboard and schema updates"
