-- Insert rooms for the demo
INSERT INTO "Room" ("id", "name", "capacity", "createdAt") VALUES
    ('room_101', 'Raum 101', 25, NOW()),
    ('room_102', 'Raum 102', 30, NOW()),
    ('room_201', 'Raum 201', 20, NOW()),
    ('room_remote', 'Remote / Online', 50, NOW()),
    ('room_aula', 'Aula', 100, NOW())
ON CONFLICT ("id") DO NOTHING;

-- Assign rooms to existing courses
UPDATE "Course" SET "roomId" = 'room_101' WHERE "title" = 'Python Basics';
UPDATE "Course" SET "roomId" = 'room_102' WHERE "title" = 'JavaScript Grundlagen';
UPDATE "Course" SET "roomId" = 'room_remote' WHERE "title" = 'Advanced React';
UPDATE "Course" SET "roomId" = 'room_201' WHERE "title" = 'Datenbanken & SQL';
UPDATE "Course" SET "roomId" = 'room_101' WHERE "title" = 'DevOps & CI/CD';
UPDATE "Course" SET "roomId" = 'room_remote' WHERE "title" = 'Cloud Architecture';
