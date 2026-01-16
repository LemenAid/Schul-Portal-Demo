-- Complete Demo Data for 2026
-- Run this in Neon SQL Editor (console.neon.tech)

-- 1. Users (already created, skip if exists)
INSERT INTO "User" (id, name, email, role) VALUES
('admin1', 'Admin Demo', 'admin@demo.com', 'admin'),
('staff1', 'Staff Demo', 'staff@demo.com', 'staff'),
('staff2', 'Verwaltung User', 'verwaltung@demo.com', 'staff'),
('teacher1', 'Lehrer Demo', 'teacher@demo.com', 'teacher'),
('teacher2', 'Max Mustermann', 'max.mustermann@demo.com', 'teacher'),
('teacher3', 'Julia Becker', 'julia.becker@demo.com', 'teacher'),
('student1', 'Student Demo', 'student@demo.com', 'student'),
('student2', 'Anna Schmidt', 'anna.schmidt@demo.com', 'student'),
('student3', 'Tom Weber', 'tom.weber@demo.com', 'student'),
('student4', 'Lisa Müller', 'lisa.mueller@demo.com', 'student'),
('student5', 'Max Klein', 'max.klein@demo.com', 'student')
ON CONFLICT (id) DO NOTHING;

-- 2. Education Track (Jahrgang 2026)
INSERT INTO "EducationTrack" (id, title, "startDate", "endDate") VALUES
('track2026', 'Fachinformatiker Anwendungsentwicklung 2026', '2026-02-01', '2027-12-31')
ON CONFLICT (id) DO NOTHING;

-- 3. Assign students to track
UPDATE "User" SET "educationTrackId" = 'track2026' WHERE role = 'student';

-- 4. Tags for courses
INSERT INTO "Tag" (id, name) VALUES
('tag-prog', 'Programmierung'),
('tag-db', 'Datenbanken'),
('tag-web', 'Web Development'),
('tag-cloud', 'Cloud'),
('tag-bwl', 'BWL'),
('tag-pm', 'Projektmanagement'),
('tag-java', 'Java'),
('tag-python', 'Python'),
('tag-sql', 'SQL'),
('tag-react', 'React')
ON CONFLICT (id) DO NOTHING;

-- 5. Courses for 2026
INSERT INTO "Course" (id, title, description, "startDate", "endDate", "educationTrackId", "maxStudents") VALUES
('course1', 'Einführung Programmierung', 'Grundlagen der Programmierung mit Python', '2026-02-01', '2026-02-28', 'track2026', 25),
('course2', 'Datenbanken Grundlagen', 'SQL und Datenbankdesign', '2026-03-01', '2026-03-31', 'track2026', 25),
('course3', 'Web Development', 'HTML, CSS, JavaScript und React', '2026-04-01', '2026-05-31', 'track2026', 20),
('course4', 'Java OOP', 'Objektorientierte Programmierung mit Java', '2026-06-01', '2026-07-15', 'track2026', 25),
('course5', 'Cloud Computing', 'AWS Grundlagen und Cloud Practitioner', '2026-08-01', '2026-08-31', 'track2026', 20),
('course6', 'Projektmanagement', 'Agile Methoden und Scrum', '2026-09-01', '2026-09-30', 'track2026', 30)
ON CONFLICT (id) DO NOTHING;

-- 6. Assign students to courses
INSERT INTO "_StudentCourses" ("A", "B") VALUES
('course1', 'student1'),
('course1', 'student2'),
('course1', 'student3'),
('course1', 'student4'),
('course1', 'student5'),
('course2', 'student1'),
('course2', 'student2'),
('course2', 'student3'),
('course3', 'student2'),
('course3', 'student3'),
('course3', 'student4'),
('course4', 'student1'),
('course4', 'student4'),
('course4', 'student5'),
('course5', 'student1'),
('course5', 'student2'),
('course6', 'student1'),
('course6', 'student2'),
('course6', 'student3'),
('course6', 'student4'),
('course6', 'student5')
ON CONFLICT DO NOTHING;

-- 7. Assign teachers to courses
INSERT INTO "_TeacherCourses" ("A", "B") VALUES
('course1', 'teacher1'),
('course2', 'teacher2'),
('course3', 'teacher1'),
('course4', 'teacher2'),
('course5', 'teacher3'),
('course6', 'teacher1')
ON CONFLICT DO NOTHING;

-- 8. Course Tags
INSERT INTO "CourseTag" (id, "courseId", "tagId") VALUES
('ct1', 'course1', 'tag-prog'),
('ct2', 'course1', 'tag-python'),
('ct3', 'course2', 'tag-db'),
('ct4', 'course2', 'tag-sql'),
('ct5', 'course3', 'tag-web'),
('ct6', 'course3', 'tag-react'),
('ct7', 'course4', 'tag-prog'),
('ct8', 'course4', 'tag-java'),
('ct9', 'course5', 'tag-cloud'),
('ct10', 'course6', 'tag-pm')
ON CONFLICT (id) DO NOTHING;

-- 9. Teacher Skills
INSERT INTO "TeacherSkill" (id, "userId", "tagId", "isVerified", "isActive") VALUES
('ts1', 'teacher1', 'tag-prog', true, true),
('ts2', 'teacher1', 'tag-python', true, true),
('ts3', 'teacher1', 'tag-web', true, true),
('ts4', 'teacher2', 'tag-db', true, true),
('ts5', 'teacher2', 'tag-java', true, true),
('ts6', 'teacher3', 'tag-cloud', true, true)
ON CONFLICT (id) DO NOTHING;

-- 10. Exams (in 2026)
INSERT INTO "Exam" (id, title, date, content, location, duration, "courseId") VALUES
('exam1', 'Python Grundlagen', '2026-02-28 10:00:00', 'Syntax, Variablen, Funktionen, Schleifen', 'Raum 101', 90, 'course1'),
('exam2', 'SQL Abfragen', '2026-03-31 10:00:00', 'SELECT, JOIN, Subqueries', 'Raum 102', 120, 'course2'),
('exam3', 'React Komponenten', '2026-05-31 14:00:00', 'Props, State, Hooks', 'Raum 101', 90, 'course3'),
('exam4', 'Java OOP', '2026-07-15 10:00:00', 'Klassen, Vererbung, Interfaces', 'Raum 103', 120, 'course4'),
('exam5', 'AWS Cloud Practitioner', '2026-08-31 09:00:00', 'AWS Services, Best Practices', 'Remote', 90, 'course5')
ON CONFLICT (id) DO NOTHING;

-- 11. Grades for students
INSERT INTO "Grade" (id, "userId", "examId", subject, value, date) VALUES
('g1', 'student1', 'exam1', 'Python Grundlagen', 1.7, '2026-02-28'),
('g2', 'student2', 'exam1', 'Python Grundlagen', 2.3, '2026-02-28'),
('g3', 'student3', 'exam1', 'Python Grundlagen', 1.0, '2026-02-28'),
('g4', 'student1', 'exam2', 'SQL Abfragen', 2.0, '2026-03-31'),
('g5', 'student2', 'exam2', 'SQL Abfragen', 1.7, '2026-03-31'),
('g6', 'student3', 'exam3', 'React Komponenten', 2.3, '2026-05-31'),
('g7', 'student4', 'exam3', 'React Komponenten', 1.3, '2026-05-31')
ON CONFLICT (id) DO NOTHING;

-- 12. Time Entries (aktuelle Woche Januar 2026)
INSERT INTO "TimeEntry" (id, "userId", "clockIn", "clockOut", duration, location) VALUES
('te1', 'student1', '2026-01-13 08:00:00', '2026-01-13 16:30:00', 510, 'ON_SITE'),
('te2', 'student1', '2026-01-14 08:15:00', '2026-01-14 16:45:00', 510, 'ON_SITE'),
('te3', 'student1', '2026-01-15 08:00:00', '2026-01-15 17:00:00', 540, 'ON_SITE'),
('te4', 'student1', '2026-01-16 08:30:00', NULL, NULL, 'ON_SITE'),
('te5', 'student2', '2026-01-13 09:00:00', '2026-01-13 17:00:00', 480, 'REMOTE'),
('te6', 'student2', '2026-01-14 09:00:00', '2026-01-14 17:00:00', 480, 'REMOTE'),
('te7', 'student2', '2026-01-15 08:30:00', '2026-01-15 16:30:00', 480, 'ON_SITE'),
('te8', 'student3', '2026-01-13 08:00:00', '2026-01-13 16:00:00', 480, 'ON_SITE'),
('te9', 'student3', '2026-01-14 08:00:00', '2026-01-14 16:00:00', 480, 'ON_SITE')
ON CONFLICT (id) DO NOTHING;

-- 13. Bulletin Posts
INSERT INTO "BulletinPost" (id, title, description, type, "contactInfo", "userId", "expiresAt") VALUES
('bp1', 'Suche Lernpartner für Java', 'Möchte für Java OOP Klausur zusammen lernen', 'SEARCH', 'anna.schmidt@demo.com', 'student2', '2026-07-15'),
('bp2', 'Biete altes Informatik-Buch', 'Java für Anfänger, 5. Auflage', 'OFFER', 'tom.weber@demo.com', 'student3', '2026-12-31'),
('bp3', 'Suche Fahrgemeinschaft', 'Von Köln nach Düsseldorf, Mo-Fr', 'SEARCH', 'lisa.mueller@demo.com', 'student4', '2026-12-31'),
('bp4', 'Biete Nachhilfe Python', 'Erfahrener Programmierer bietet Nachhilfe', 'OFFER', 'max.klein@demo.com', 'student5', '2026-06-30')
ON CONFLICT (id) DO NOTHING;

-- 14. Inquiries
INSERT INTO "Inquiry" (id, "userId", "recipientId", subject, message, category, status, answer, "answeredAt") VALUES
('inq1', 'student1', 'staff1', 'Frage zum Stundenplan', 'Wann findet der React Kurs statt?', 'ADMIN', 'ANSWERED', 'Der Kurs beginnt am 1. April 2026 um 9:00 Uhr.', '2026-01-14 10:30:00'),
('inq2', 'student2', 'teacher1', 'Klausur Vorbereitung', 'Welche Themen sind klausurrelevant?', 'TEACHER', 'ANSWERED', 'Alle Themen aus den Wochen 1-8. Fokus auf State Management.', '2026-01-14 15:00:00'),
('inq3', 'student3', 'staff2', 'Bescheinigung benötigt', 'Ich brauche eine Teilnahmebescheinigung für das Amt.', 'ADMIN', 'OPEN', NULL, NULL),
('inq4', 'student4', 'teacher2', 'Prüfungstermin', 'Kann ich den Termin verschieben?', 'TEACHER', 'OPEN', NULL, NULL)
ON CONFLICT (id) DO NOTHING;

-- 15. Notifications
INSERT INTO "Notification" (id, "userId", message, link, "isRead") VALUES
('n1', 'student1', 'Neue Note eingetragen: Python Grundlagen (1.7)', '/profile', false),
('n2', 'student1', 'Deine Anfrage wurde beantwortet', '/inquiries', false),
('n3', 'student2', 'Klausur React Komponenten in 14 Tagen', '/exams', false),
('n4', 'student3', 'Neuer Kurs verfügbar: Cloud Computing', '/courses', true),
('n5', 'teacher1', 'Neue Kurseinladung: Web Development', '/planning', false),
('n6', 'teacher2', 'Student hat Frage gestellt', '/inquiries', false)
ON CONFLICT (id) DO NOTHING;

-- 16. Course Topics (Themengebiete innerhalb der Kurse)
INSERT INTO "CourseTopic" (id, title, "durationUnits", "startDate", "endDate", "courseId") VALUES
('ct-t1', 'Python Syntax & Variablen', 18, '2026-02-01', '2026-02-07', 'course1'),
('ct-t2', 'Funktionen & Module', 18, '2026-02-08', '2026-02-14', 'course1'),
('ct-t3', 'OOP in Python', 27, '2026-02-15', '2026-02-28', 'course1'),
('ct-t4', 'SQL Grundlagen', 18, '2026-03-01', '2026-03-10', 'course2'),
('ct-t5', 'Joins & Subqueries', 27, '2026-03-11', '2026-03-25', 'course2'),
('ct-t6', 'Normalisierung', 18, '2026-03-26', '2026-03-31', 'course2'),
('ct-t7', 'HTML & CSS', 36, '2026-04-01', '2026-04-20', 'course3'),
('ct-t8', 'JavaScript ES6+', 45, '2026-04-21', '2026-05-15', 'course3'),
('ct-t9', 'React Basics', 54, '2026-05-16', '2026-05-31', 'course3')
ON CONFLICT (id) DO NOTHING;

-- 17. Announcements
INSERT INTO "Announcement" (id, title, content, author, published) VALUES
('a1', 'Winterferien 2026', 'Die Einrichtung bleibt vom 23.12.2025 bis 06.01.2026 geschlossen.', 'Verwaltung', true),
('a2', 'Neue Prüfungstermine', 'Die Klausurtermine für Q2 2026 sind jetzt online verfügbar.', 'Verwaltung', true),
('a3', 'AWS Zertifizierung', 'Kostenlose AWS Cloud Practitioner Prüfung für alle Teilnehmer!', 'Verwaltung', true)
ON CONFLICT (id) DO NOTHING;

-- Verify all data
SELECT 'Users' as table_name, COUNT(*) as count FROM "User"
UNION ALL
SELECT 'Courses', COUNT(*) FROM "Course"
UNION ALL
SELECT 'Exams', COUNT(*) FROM "Exam"
UNION ALL
SELECT 'Grades', COUNT(*) FROM "Grade"
UNION ALL
SELECT 'TimeEntries', COUNT(*) FROM "TimeEntry"
UNION ALL
SELECT 'BulletinPosts', COUNT(*) FROM "BulletinPost"
UNION ALL
SELECT 'Inquiries', COUNT(*) FROM "Inquiry"
UNION ALL
SELECT 'Notifications', COUNT(*) FROM "Notification";
