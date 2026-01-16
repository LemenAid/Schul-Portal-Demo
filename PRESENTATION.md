# Schul-Portal-Demo - Presentation & Demo Scripts

## 1. Master Script (Narrative)

**Introduction:**
"Welcome to the Schul-Portal-Demo, the central nervous system for our educational institution. This platform bridges the gap between administration, teaching staff, and students, providing a unified interface for managing the entire educational lifecycle."

**Part 1: The Foundation (Administrator)**
"We start with the Administrator view. The Admin is the architect of the system.
*   **User Management:** Here we see a complete list of all users. The Admin can create new accounts, assign roles (Student, Teacher, Staff), and manage permissions.
*   **System Health:** The Admin also has direct access to the database via Prisma Studio to ensure data integrity."

**Part 2: The Organizer (Staff)**
"Next, we switch to the Staff role – our organizational backbone.
*   **Education Tracks:** Staff members define the academic calendar. Here we create a new 'Fachinformatiker 2024' track.
*   **Course Planning:** Within that track, we schedule specific courses like 'Web Development', assigning them to rooms and time slots.
*   **Room Management:** NEW! We can now assign each course a physical room - e.g. 'Room 101' or 'Remote/Online'.
*   **Course Topics:** NEW! When editing a course, we see a structured list of topics with their teaching units (UE) and time periods. Perfect for detailed planning.
*   **Student Assignment:** With just a few clicks, we assign students to courses. The system immediately updates all views - students see the course directly in their dashboard."

**Part 3: The Educator (Teacher)**
"Now, let's see the Teacher's perspective.
*   **My Courses:** Teachers see a dashboard of their active modules.
*   **Exam Management:** A critical feature. The teacher creates a new exam for next Friday.
*   **Grading:** Once the exam is done, the teacher enters grades directly into the system, which are immediately visible to students."

**Part 4: The Learner (Student)**
"Finally, the Student view – the most used interface.
*   **Dashboard:** Upon login, the student sees their upcoming schedule and announcements.
*   **Notifications:** NEW! An intelligent system with color-coded badges. Grades appear in blue, warnings in red, invitations in gray. One click on a notification marks it as read and forwards to the destination.
*   **Notification History:** NEW! In the history tab, students can view all past important messages (grades, invitations) - without inquiry spam cluttering the history.
*   **Time Tracking:** A vital compliance feature. The student clicks 'Clock In' to start their day, logging their attendance for the employment agency.
*   **Inquiries:** If a student has a problem, they don't send a loose email. They use the 'New Inquiry' button to send a structured ticket directly to the relevant department."

**Conclusion:**
"The Schul-Portal-Demo replaces fragmented spreadsheets and emails with a single, role-aware application, streamlining operations for everyone involved."

---

## 2. Role-Based Demo Scripts

### 🎓 Scenario 1: Student (Daily Routine)
*Objective: Demonstrate time tracking, bulletin board, and communication.*

1.  **Login** as `student@demo.com` -> Dashboard loads.
2.  **Click** "Zeiterfassung" in Sidebar -> Time Tracking view opens.
3.  **Click** green "Clock In" button -> Status changes to "Active", timer starts.
4.  **Click** "Schwarzes Brett" (Sidebar) -> Bulletin board loads.
5.  **Click** "Eintrag erstellen" -> Create a "Suche Nachhilfe" post with 7-day expiration.
6.  **Click** "Neue Anfrage" (Sidebar) -> Dialog opens.
7.  **Select** "Verwaltung (Allgemein)" -> Subject: "Krankmeldung", Msg: "Bin heute krank."
8.  **Click** "Absenden" -> Success toast appears.

### 👨‍🏫 Scenario 2: Teacher (Exam Management)
*Objective: Schedule an exam and grade it.*

1.  **Login** as `teacher@demo.com` -> Teacher Dashboard loads.
2.  **Click** "Prüfungsverwaltung" -> List of exams appears.
3.  **Click** "Prüfung erstellen" -> Form opens.
4.  **Enter** Title: "React Basics", Date: Tomorrow -> Exam appears in list.
5.  **Click** "Noten eintragen" (on an existing exam) -> Student list opens.
6.  **Enter** Grade "1.0" for a student -> Saved confirmation appears.

### 🏢 Scenario 3: Staff (Course Planning)
*Objective: Set up a new education track.*

1.  **Login** as `staff@demo.com` -> Staff Dashboard loads.
2.  **Click** "Planung" -> Education Tracks overview appears.
3.  **Click** "Neuer Jahrgang" -> Enter "Winter 2024".
4.  **Click** on the new Track -> Track details open.
5.  **Click** "Kurs hinzufügen" -> Create "Intro to AI" course.

### 🛡️ Scenario 4: Admin (User Management)
*Objective: Onboard a new user.*

1.  **Login** as `admin@demo.com` -> Admin Dashboard loads.
2.  **Click** "Admin" (Sidebar) -> User list appears.
3.  **Click** "Add User" -> Dialog opens.
4.  **Enter** Name: "Max Mustermann", Role: "Student" -> User appears in list.
5.  **Click** "Skill Freigaben" -> Review pending skill requests.
