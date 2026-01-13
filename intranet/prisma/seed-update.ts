
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Starte Datenbank-Update...');

  // 1. Tags (TeacherSkills) definieren
  const tags = [
    "Planen und Analysieren", "Programmieren", "Testen", "Dokumentieren", // FIAE Kernkompetenzen
    "BWL", "Rechnungswesen", 
    "IT-Sicherheit", "Netzwerke", 
    "Test", "Externer",
    "SAP", "Cloud"
  ];

  // 2. Lehrer Updates / Erstellung
  
  // Dr. Bilanz (BWL)
  let drBilanz = await prisma.user.findFirst({ where: { email: 'bilanz@cc-intranet.de' } });
  if (!drBilanz) {
    drBilanz = await prisma.user.create({
      data: {
        name: 'Dr. Bilanz',
        email: 'bilanz@cc-intranet.de',
        role: 'staff',
        department: 'Wirtschaft'
      }
    });
  }
  // BWL Tag zuweisen
  await prisma.teacherSkill.create({ data: { userId: drBilanz.id, subject: 'BWL' } }).catch(() => {});

  // Prof. Dr. Code (IT)
  let profCode = await prisma.user.findFirst({ where: { email: 'code@cc-intranet.de' } });
  if (!profCode) {
    profCode = await prisma.user.create({
      data: {
        name: 'Prof. Dr. Code',
        email: 'code@cc-intranet.de',
        role: 'staff',
        department: 'IT'
      }
    });
  }
  // IT/Programming Tags
  await prisma.teacherSkill.create({ data: { userId: profCode.id, subject: 'Programmieren' } }).catch(() => {});
  await prisma.teacherSkill.create({ data: { userId: profCode.id, subject: 'IT-Sicherheit' } }).catch(() => {});

  // Test Lehrer (Externer)
  let testLehrer = await prisma.user.findFirst({ where: { email: 'extern@cc-intranet.de' } });
  if (!testLehrer) {
    testLehrer = await prisma.user.create({
      data: {
        name: 'Test Lehrer',
        email: 'extern@cc-intranet.de',
        role: 'staff',
        department: 'Extern'
      }
    });
  }
  await prisma.teacherSkill.create({ data: { userId: testLehrer.id, subject: 'Externer' } }).catch(() => {});
  await prisma.teacherSkill.create({ data: { userId: testLehrer.id, subject: 'SAP' } }).catch(() => {});
  await prisma.teacherSkill.create({ data: { userId: testLehrer.id, subject: 'Cloud' } }).catch(() => {});


  // 3. Kurs Zuweisungen (Mock-Daten)
  // Wir suchen Kurse, die grob passen oder erstellen Demo-Kurse, falls leer

  // SAP Kurs suchen oder erstellen
  let sapCourse = await prisma.course.findFirst({ where: { title: { contains: 'SAP' } } });
  if (!sapCourse) {
      sapCourse = await prisma.course.create({
          data: {
              title: "SAP Grundlagen",
              description: "Einführung in ERP Systeme",
              startDate: new Date(),
              endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)),
          }
      });
  }
  // Zuweisen an Externen
  await prisma.course.update({
      where: { id: sapCourse.id },
      data: { teachers: { connect: { id: testLehrer.id } } }
  });

  console.log('Datenbank-Update fertig.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
