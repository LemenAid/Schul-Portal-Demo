-- Quick Seed Script for Neon Database
-- Run this in Neon SQL Editor (console.neon.tech)

-- Create Demo Users for One-Click Login
INSERT INTO "User" (id, name, email, role) VALUES
('admin1', 'Admin Demo', 'admin@demo.com', 'admin'),
('staff1', 'Staff Demo', 'staff@demo.com', 'staff'),
('staff2', 'Verwaltung User', 'verwaltung@demo.com', 'staff'),
('teacher1', 'Lehrer Demo', 'teacher@demo.com', 'teacher'),
('teacher2', 'Max Mustermann', 'max.mustermann@demo.com', 'teacher'),
('student1', 'Student Demo', 'student@demo.com', 'student'),
('student2', 'Anna Schmidt', 'anna.schmidt@demo.com', 'student'),
('student3', 'Tom Weber', 'tom.weber@demo.com', 'student')
ON CONFLICT (id) DO NOTHING;

-- Verify
SELECT id, name, email, role, "createdAt" FROM "User" ORDER BY role, name;
