const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting quick seed...');

  // Create Admin
  const admin = await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@demo.com',
      role: 'admin',
      password: 'admin123',
    },
  });
  console.log('✅ Admin created');

  // Create Teacher
  const teacher = await prisma.user.create({
    data: {
      name: 'Teacher Demo',
      email: 'teacher@demo.com',
      role: 'teacher',
      password: 'teacher123',
    },
  });
  console.log('✅ Teacher created');

  // Create Student
  const student = await prisma.user.create({
    data: {
      name: 'Student Demo',
      email: 'student@demo.com',
      role: 'student',
      password: 'student123',
    },
  });
  console.log('✅ Student created');

  // Create Staff
  const staff = await prisma.user.create({
    data: {
      name: 'Staff Demo',
      email: 'staff@demo.com',
      role: 'staff',
      password: 'staff123',
    },
  });
  console.log('✅ Staff created');

  console.log('✨ Quick seed completed!');
  console.log('');
  console.log('Login credentials:');
  console.log('Admin:   admin@demo.com / admin123');
  console.log('Teacher: teacher@demo.com / teacher123');
  console.log('Student: student@demo.com / student123');
  console.log('Staff:   staff@demo.com / staff123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
