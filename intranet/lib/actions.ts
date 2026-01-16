"use server";

import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { getCurrentUser } from '@/lib/auth';

// Time Tracking
export async function getLastTimeEntry() {
  const user = await getCurrentUser();
  if (!user) return null;

  return prisma.timeEntry.findFirst({
    where: { userId: user.id },
    orderBy: { createdAt: 'desc' },
  });
}

export async function clockIn(formData?: FormData) {
  const user = await getCurrentUser();
  if (!user) throw new Error("Unauthorized");

  const location = formData ? (formData.get('location') as string) : 'ON_SITE';

  await prisma.timeEntry.create({
    data: {
      userId: user.id,
      clockIn: new Date(),
      location: location
    },
  });
  revalidatePath('/');
  revalidatePath('/time');
}

export async function clockOut(entryId: string) {
  // Optional: Check if entry belongs to user
  await prisma.timeEntry.update({
    where: { id: entryId },
    data: {
      clockOut: new Date(),
    },
  });
  revalidatePath('/');
  revalidatePath('/time');
}

export async function getRecentEntries() {
    const user = await getCurrentUser();
    if (!user) return [];
    
    return prisma.timeEntry.findMany({
        where: { userId: user.id },
        orderBy: { clockIn: 'desc' },
        take: 5
    });
}

// Bulletin Board
export async function getBulletinPosts() {
  const posts = await prisma.bulletinPost.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
        user: {
            select: { name: true, email: true, id: true, role: true }
        }
    }
  });

  // Filter out expired posts
  // Note: It's better to filter in the DB query, but since expiresAt is new and might be null, 
  // we handle logic here or in query. 
  // Let's filter in memory or update the query above if field exists.
  // Since we assume the field exists now (or will), let's try to add where clause if possible.
  // However, expiresAt is nullable.
  
  const now = new Date();
  
  // We return ALL posts, but maybe mark them as expired or filter them.
  // The requirement says "graue die Kachel aus", so we need to return them but identifying them.
  // Client side can check expiresAt < now.
  
  return posts;
}

export async function deleteBulletinPost(postId: string, deletionReason?: string) {
    const user = await getCurrentUser();
    if (!user) throw new Error("Unauthorized");

    const post = await prisma.bulletinPost.findUnique({ 
        where: { id: postId },
        include: { user: true }
    });
    if (!post) throw new Error("Post not found");

    if (post.userId !== user.id && user.role !== 'admin' && user.role !== 'staff') {
        throw new Error("Forbidden");
    }

    // If deleted by staff/admin and not the owner, send notification to author
    const deletedByStaff = post.userId !== user.id && (user.role === 'admin' || user.role === 'staff');
    
    await prisma.bulletinPost.delete({ where: { id: postId } });
    
    // Send WARNING notification if deleted by staff and post has an author
    if (deletedByStaff && post.userId) {
        const message = deletionReason 
            ? `Dein Beitrag "${post.title}" wurde von der Verwaltung entfernt. Grund: ${deletionReason}`
            : `Dein Beitrag "${post.title}" wurde von der Verwaltung entfernt.`;
        
        await createNotification(post.userId, message, '/bulletin', 'WARNING');
    }
    
    revalidatePath('/bulletin');
}

export async function createBulletinPost(prevState: { success: boolean, message: string }, formData: FormData) {
  const user = await getCurrentUser();
  if (!user) return { success: false, message: "Unauthorized" };

  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const type = formData.get('type') as string;
  const contactInfo = formData.get('contactInfo') as string;
  const expiresInDays = parseInt(formData.get('expiresIn') as string) || 7;

  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + expiresInDays);

  try {
      await prisma.bulletinPost.create({
        data: {
          title,
          description,
          type,
          contactInfo,
          userId: user.id,
          expiresAt: expiresAt
        },
      });
      revalidatePath('/bulletin');
      return { success: true, message: "" };
  } catch (e) {
      console.error(e);
      return { success: false, message: "Failed to create post" };
  }
}

// Announcements
export async function getAnnouncements() {
    return prisma.announcement.findMany({
        orderBy: { createdAt: 'desc' },
        take: 3
    })
}

export async function createAnnouncement(formData: FormData) {
    const user = await getCurrentUser();
    if (!user || user.role === 'student') throw new Error("Unauthorized");
  
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
  
    await prisma.announcement.create({
      data: {
        title,
        content,
        author: user.name,
      },
    });
    revalidatePath('/');
}

// Course Schedule
export async function getCourseEvents() {
    return prisma.courseEvent.findMany({
        orderBy: { startTime: 'asc' },
        where: {
            startTime: {
                gte: new Date()
            }
        },
        take: 5,
        include: { room: true }
    })
}

export async function getAllCourseEvents() {
  return prisma.courseEvent.findMany({
      orderBy: { startTime: 'asc' },
      include: { room: true }
  })
}

// Exams
export async function getExams() {
    return prisma.exam.findMany({
        orderBy: { date: 'asc' },
        where: {
            date: {
                gte: new Date()
            }
        },
        take: 3
    })
}

// Inquiries

export async function createNotification(userId: string, message: string, link?: string, type: string = "INFO") {
    try {
        await prisma.notification.create({
            data: {
                userId,
                message,
                link,
                type
            }
        });
    } catch (e) {
        console.error(`Failed to create notification for user ${userId}:`, e);
    }
}

export async function createInquiry(prevState: { success: boolean, message: string }, formData: FormData) {
    const user = await getCurrentUser();
    if (!user) return { success: false, message: "Unauthorized" };
  
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    const category = formData.get('category') as string; // ADMIN, TEACHER
    const recipientId = formData.get('recipientId') as string | null;
    const trackId = formData.get('trackId') as string | null;
  
    try {
        if (trackId && category === 'STUDENT' && !recipientId) {
             // Broadcast to Track
            const studentsInTrack = await prisma.user.findMany({
                where: { role: 'student', educationTrackId: trackId },
                select: { id: true }
            });
            
             // Create individual inquiries or just notifications?
             // Usually inquiries are 1:1 or 1:Pool.
             // If I send to a track, do I want 20 open inquiries or 1 inquiry visible to 20 people?
             // The model `recipientId` is single.
             // To support "Broadcast Inquiry" that everyone can reply to individually is complex (threads).
             // To support "Broadcast Notification" is easy.
             
             // If the intention is "Announcement", we should use Bulletin/Announcement.
             // If Inquiry, let's create one Inquiry per student so they can reply individually.
             
             for (const student of studentsInTrack) {
                 await prisma.inquiry.create({
                    data: {
                        subject,
                        message,
                        category,
                        recipientId: student.id,
                        userId: user.id
                    },
                });
                await createNotification(student.id, `Neue Anfrage von ${user.name}: ${subject}`, `/inquiries`, 'INQUIRY');
             }
             
             revalidatePath('/'); 
             revalidatePath('/inquiries');
             return { success: true, message: `Anfrage an ${studentsInTrack.length} Studenten gesendet.` };

        }
        
        await prisma.inquiry.create({
            data: {
                subject,
                message,
                category,
                recipientId: recipientId || undefined,
                userId: user.id
            },
        });

        // Notifications Logic
        if (recipientId) {
                // Direct message notification
                await createNotification(recipientId, `Neue Anfrage von ${user.name}: ${subject}`, `/inquiries`, 'INQUIRY');
            } else if (category === 'ADMIN') {
            // Notify all admins and staff
            const adminsAndStaff = await prisma.user.findMany({
                where: {
                    role: { in: ['admin', 'staff'] }
                },
                select: { id: true }
            });
            for (const admin of adminsAndStaff) {
                await createNotification(admin.id, `Neue Anfrage an Verwaltung/Admin von ${user.name}: ${subject}`, `/inquiries`, 'INQUIRY');
            }

        } else if (category === 'TEACHER') {
             // If generic teacher inquiry (recipientId is null), notify relevant teachers?
             // Without course context, maybe we just notify all teachers or leave it as a pool.
             // For now, let's leave it as a pool (no spam), unless specific requirements exist.
             // Or maybe we notify nobody and they just check the list.
             // Let's notify all teachers for now if they are the target group "All Teachers"
             // BUT, usually "All Teachers" means a pool.
             // Let's SKIP broadcasting to ALL teachers to avoid spam, unless requested.
             // Only direct messages (recipientId set) get instant notification.

        } else if (category === 'STUDENT' && !recipientId) {
            // Broadcast to all students (Use with caution)
             const allStudents = await prisma.user.findMany({
                where: { role: 'student' },
                select: { id: true }
            });
            // Limit broadcast to avoid timeout on large db, but for intranet it's okay
            for (const student of allStudents) {
                await createNotification(student.id, `Allgemeine Nachricht an alle Studenten von ${user.name}: ${subject}`, `/inquiries`, 'INQUIRY');
            }
        }

        revalidatePath('/'); 
        revalidatePath('/inquiries');
        return { success: true, message: "Anfrage erfolgreich gesendet" };
    } catch (e) {
        console.error(e);
        return { success: false, message: "Fehler beim Senden der Anfrage" };
    }
}

export async function getUserInquiries() {
    const user = await getCurrentUser();
    if (!user) return [];

    return prisma.inquiry.findMany({
        where: { 
            OR: [
                { userId: user.id }, // My sent inquiries
                { recipientId: user.id } // Direct messages to me
            ]
        },
        orderBy: { createdAt: 'desc' },
        include: {
            user: {
                select: { name: true, email: true }
            },
            recipient: {
                select: { name: true }
            }
        }
    });
}

export async function getResolvedInquiriesForStaff() {
    const user = await getCurrentUser();
    if (!user || user.role === 'student') return [];

    const category = user.role === 'admin' ? 'ADMIN' : 'TEACHER';

    // Staff/Admin should see:
    // 1. Inquiries to their category pool (recipientId IS NULL)
    // 2. Direct inquiries to them (recipientId === user.id)
    
    // BUT this function was "Resolved" inquiries.
    // So we fetch ANSWERED ones.

    return prisma.inquiry.findMany({
        where: { 
            status: 'ANSWERED',
            OR: [
                { 
                    category: category,
                    recipientId: null 
                },
                { recipientId: user.id }
            ]
        },
        orderBy: { answeredAt: 'desc' },
        include: {
            user: {
                select: { name: true, email: true }
            }
        }
    });
}

export async function getOpenInquiries() {
    const user = await getCurrentUser();
    if (!user || user.role === 'student') return [];

    // Admins sehen ADMIN Anfragen, Staff sieht TEACHER Anfragen
    // If Admin/Staff, they also see their own Direct Messages.
    
    const category = user.role === 'admin' ? 'ADMIN' : 'TEACHER';

    return prisma.inquiry.findMany({
        where: {
            status: 'OPEN',
            OR: [
                { 
                    category: category,
                    recipientId: null // Pool messages
                },
                { recipientId: user.id } // Direct messages
            ]
        },
        orderBy: { createdAt: 'desc' },
        include: {
            user: {
                select: { name: true, email: true } // Wer hat gefragt?
            }
        }
    });
}

export async function resolveInquiry(formData: FormData) {
    const user = await getCurrentUser();
    if (!user || user.role === 'student') throw new Error("Unauthorized");

    const inquiryId = formData.get('inquiryId') as string;
    const answer = formData.get('answer') as string;

    const inquiry = await prisma.inquiry.findUnique({ where: { id: inquiryId } });
    if (!inquiry) throw new Error("Inquiry not found");

    const updatedInquiry = await prisma.inquiry.update({
        where: { id: inquiryId },
        data: { 
            status: 'ANSWERED',
            answer: answer,
            answeredAt: new Date()
        },
        include: { user: true }
    });

    // Notify the user who created the inquiry
    await createNotification(updatedInquiry.userId, `Deine Anfrage "${updatedInquiry.subject}" wurde beantwortet.`, `/inquiries`, 'INQUIRY');

    revalidatePath('/');
    revalidatePath('/inquiries');
}

// Profil & Stats Actions

export async function getStudentData() {
    const user = await getCurrentUser();
    if (!user || user.role !== 'student') return null;

    // Noten abrufen
    const grades = await prisma.grade.findMany({
        where: { userId: user.id },
        orderBy: { date: 'desc' }
    });

    // Fetch all time entries to calculate relevant attendance
    const allEntries = await prisma.timeEntry.findMany({
        where: { userId: user.id, clockOut: { not: null } },
        select: { clockIn: true, clockOut: true }
    });
    
    // Calculate Relevant Minutes (excluding Pre-UE 08:00-08:45)
    // And determine valid "attended days" (days with > 0 relevant minutes)
    let totalRelevantMinutes = 0;
    const validDays = new Set<string>();

    for (const entry of allEntries) {
        const minutes = getRelevantDurationInMinutes({ clockIn: entry.clockIn, clockOut: entry.clockOut }, 'student');
        if (minutes > 0) {
            totalRelevantMinutes += minutes;
            validDays.add(entry.clockIn.toDateString());
        }
    }
    
    const uniqueDays = validDays.size;
    
    // Annahme: Kursdauer 6 Monate ~ 120 Arbeitstage (nur Mockup Basis)
    const expectedDays = 120;
    const attendanceRate = Math.min(100, Math.round((uniqueDays / expectedDays) * 100));

    // Get Student's Track
    const studentUser = await prisma.user.findUnique({
        where: { id: user.id },
        include: { educationTrack: true }
    });

    return {
        grades,
        attendanceStats: {
            totalDays: uniqueDays,
            totalHours: Math.round(totalRelevantMinutes / 60), // New field
            attendanceRate: attendanceRate, 
            missingDays: Math.max(0, expectedDays - uniqueDays) 
        },
        educationTrack: studentUser?.educationTrack
    };
}

export async function getTeacherData() {
    const user = await getCurrentUser();
    // 'teacher' und 'staff' können Skills haben, aber wir wollen sie primär bei 'teacher' zeigen
    // Da 'staff' aktuell oft als Teacher benutzt wurde, lassen wir 'staff' vorerst drin oder ändern es strikt auf 'teacher'
    // User request: "nur die lehrer/teacher" brauchen skills. Staff member wie Susi (Verwaltung) nicht.
    // Also: Filter strikt auf 'teacher'.
    if (!user || user.role !== 'teacher') return null; 

    const skills = await prisma.teacherSkill.findMany({
        where: { userId: user.id },
        include: { tag: true }
    });

    return { skills };
}

export async function getAllTags() {
    return prisma.tag.findMany({
        orderBy: { name: 'asc' }
    });
}

export async function getAllRooms() {
    return prisma.room.findMany({
        orderBy: { name: 'asc' }
    });
}

export async function toggleTeacherSkill(tagId: string) {
    const user = await getCurrentUser();
    // Nur Lehrer dürfen Skills bearbeiten
    if (!user || user.role !== 'teacher') throw new Error("Unauthorized");

    const existingSkill = await prisma.teacherSkill.findUnique({
        where: {
            userId_tagId: {
                userId: user.id,
                tagId: tagId
            }
        }
    });

    if (existingSkill) {
        // Toggle off (delete)
        await prisma.teacherSkill.delete({
            where: { id: existingSkill.id }
        });
    } else {
        // Toggle on (create)
        await prisma.teacherSkill.create({
            data: {
                userId: user.id,
                tagId: tagId,
                isVerified: false // Default to unverified
            }
        });

        // Notify Admins about new skill for verification
        const admins = await prisma.user.findMany({
            where: { role: 'admin' },
            select: { id: true }
        });
        
        for (const admin of admins) {
            await createNotification(admin.id, `Lehrer ${user.name} hat einen neuen Skill hinzugefügt. Bitte überprüfen.`, `/admin/skills`);
        }
    }
    revalidatePath('/profile');
}

export async function getUnverifiedSkills() {
    const user = await getCurrentUser();
    if (!user || user.role !== 'admin') return [];

    return prisma.teacherSkill.findMany({
        where: { isVerified: false },
        include: {
            user: true,
            tag: true
        }
    });
}

export async function verifyTeacherSkill(skillId: string) {
    const user = await getCurrentUser();
    if (!user || user.role !== 'admin') throw new Error("Unauthorized");

    const skill = await prisma.teacherSkill.update({
        where: { id: skillId },
        data: { isVerified: true },
        include: { user: true, tag: true }
    });

    // Notify Teacher
    await createNotification(
        skill.userId, 
        `Dein Skill "${skill.tag.name}" wurde verifiziert!`, 
        `/profile`
    );

    revalidatePath('/admin/skills');
}

export async function deleteTeacherSkill(skillId: string) {
    const user = await getCurrentUser();
    if (!user || user.role !== 'admin') throw new Error("Unauthorized");

    const skill = await prisma.teacherSkill.findUnique({
        where: { id: skillId },
        include: { user: true, tag: true }
    });

    if (skill) {
        await prisma.teacherSkill.delete({
            where: { id: skillId }
        });

        // Notify Teacher
        await createNotification(
            skill.userId, 
            `Dein Skill "${skill.tag.name}" wurde abgelehnt/entfernt.`, 
            `/profile`
        );
    }
    revalidatePath('/admin/skills');
}


export async function getTeacherExams() {
    const user = await getCurrentUser();
    if (!user) return [];

    const whereClause = user.role === 'admin' ? {} : {
        course: {
            teachers: { some: { id: user.id } }
        }
    };

    return prisma.exam.findMany({
        where: whereClause,
        orderBy: { date: 'desc' },
        include: { 
            course: {
                include: {
                    students: true
                }
            },
            grades: true
        }
    });
}

export async function getAllCourses() {
    const user = await getCurrentUser();
    if (!user || (user.role !== 'staff' && user.role !== 'admin')) return [];

    return prisma.course.findMany({
        orderBy: { startDate: 'desc' },
        include: {
            educationTrack: true,
            teachers: true,
            tags: {
                include: {
                    tag: true
                }
            },
            topics: {
                orderBy: { startDate: 'asc' }
            },
            room: true,
            students: true,
            _count: {
                select: { students: true }
            }
        }
    });
}

export async function getTeacherCourses() {
    const user = await getCurrentUser();
    if (!user || (user.role !== 'staff' && user.role !== 'teacher' && user.role !== 'admin')) return [];
    
    // For admin show all, for others show only assigned
    const whereClause = user.role === 'admin' ? {} : {
        teachers: { some: { id: user.id } }
    };

    return prisma.course.findMany({
        where: whereClause,
        orderBy: { startDate: 'desc' },
        include: {
            educationTrack: true,
            students: true,
            tags: {
                include: { tag: true }
            },
            teachers: true,
            topics: {
                orderBy: { startDate: 'asc' }
            },
            exams: true // Include exams for grade button
        }
    });
}



export async function assignStudentsToTrack(trackId: string, studentIds: string[]) {
    const user = await getCurrentUser();
    if (!user || (user.role !== 'staff' && user.role !== 'admin')) throw new Error("Unauthorized");

    // 1. Check Track Limit
    const currentTrackCount = await prisma.user.count({
        where: { educationTrackId: trackId, role: 'student' }
    });

    if (currentTrackCount + studentIds.length > 25) {
        throw new Error(`Track Limit erreicht. Maximal 25 Teilnehmer erlaubt (Aktuell: ${currentTrackCount}, Neu: ${studentIds.length}).`);
    }

    // 2. Assign to Track
    await prisma.user.updateMany({
        where: {
            id: { in: studentIds }
        },
        data: {
            educationTrackId: trackId
        }
    });

    // 3. Auto-assign to linked Courses
    const courses = await prisma.course.findMany({
        where: { educationTrackId: trackId },
        include: { students: { select: { id: true } } }
    });

    for (const course of courses) {
        const currentCourseStudentIds = course.students.map(s => s.id);
        const newStudentIds = studentIds.filter(id => !currentCourseStudentIds.includes(id));
        
        if (newStudentIds.length === 0) continue;

        if (currentCourseStudentIds.length + newStudentIds.length > 25) {
            // Log warning or handle silently? 
            // For now, we skip auto-assignment to full courses to prevent errors.
            console.warn(`Skipping auto-assignment for Course ${course.id} (Full)`);
            continue; 
        }

        await prisma.course.update({
            where: { id: course.id },
            data: {
                students: {
                    connect: newStudentIds.map(id => ({ id }))
                }
            }
        });
    }

    revalidatePath('/planning');
}

export async function removeStudentFromTrack(studentId: string) {
    const user = await getCurrentUser();
    if (!user || (user.role !== 'staff' && user.role !== 'admin')) throw new Error("Unauthorized");

    await prisma.user.update({
        where: { id: studentId },
        data: { educationTrackId: null }
    });

    revalidatePath('/planning');
}

export async function updateExamGrades(formData: FormData) {
    const user = await getCurrentUser();
    if (!user || (user.role !== 'teacher' && user.role !== 'staff' && user.role !== 'admin')) {
        throw new Error("Unauthorized");
    }

    const examId = formData.get("examId") as string;
    
    // We need to iterate over all keys in formData to find grades
    const entries = Array.from(formData.entries());
    const gradeEntries = entries.filter(([key]) => key.startsWith('grade-'));

    for (const [key, value] of gradeEntries) {
        const studentId = key.replace('grade-', '');
        const gradeValue = parseFloat(value as string);

        if (!isNaN(gradeValue)) {
            // Check if grade exists
            const existingGrade = await prisma.grade.findFirst({
                where: { examId, userId: studentId }
            });

            if (existingGrade) {
                await prisma.grade.update({
                    where: { id: existingGrade.id },
                    data: { value: gradeValue }
                });
            } else {
                // Fetch exam details for subject fallback
                 const exam = await prisma.exam.findUnique({ 
                    where: {id: examId}, 
                    include: { course: true }
                });

                await prisma.grade.create({
                    data: {
                        userId: studentId,
                        examId: examId,
                        value: gradeValue,
                        subject: exam?.course?.title || "Allgemein"
                    }
                });
            }
            
            // Notification
            await createNotification(studentId, `Neue Note eingetragen für Prüfung: ${gradeValue}`, `/profile`, 'GRADE');
        }
    }
    revalidatePath("/teacher/exams");
}


export async function createEducationTrack(formData: FormData) {
    const user = await getCurrentUser();
    if (!user || (user.role !== 'staff' && user.role !== 'admin')) throw new Error("Unauthorized");

    const title = formData.get('title') as string;
    const startDate = new Date(formData.get('startDate') as string);
    const endDate = new Date(formData.get('endDate') as string);

    await prisma.educationTrack.create({
        data: {
            title,
            startDate,
            endDate
        }
    });

    revalidatePath('/planning');
}

export async function deleteEducationTrack(trackId: string) {
    const user = await getCurrentUser();
    if (!user || (user.role !== 'staff' && user.role !== 'admin')) throw new Error("Unauthorized");
    
    // Check if track has students or courses? Prisma will throw if foreign key constraint fails
    // or we use onDelete: Cascade if configured in Schema? 
    // Schema says: users User[], courses Course[]. Relations are usually SET NULL or CASCADE.
    // User.educationTrackId is optional. Course.educationTrackId is optional.
    // Safe delete might fail if restricted. Let's assume standard behavior for now.

    await prisma.educationTrack.delete({
        where: { id: trackId }
    });

    revalidatePath('/planning');
}

export async function getEducationTracks() {
    return prisma.educationTrack.findMany({
        orderBy: { startDate: 'desc' },
        include: {
            users: {
                where: { role: 'student' },
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            }
        }
    });
}


export async function createCourse(formData: FormData) {
    const user = await getCurrentUser();
    if (!user || (user.role !== 'staff' && user.role !== 'admin')) throw new Error("Unauthorized");

    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const startDate = new Date(formData.get('startDate') as string);
    const endDate = new Date(formData.get('endDate') as string);
    const educationTrackId = formData.get('educationTrackId') as string;
    // For teacher assignment we need to handle the radio input
    const teacherId = formData.get('teacherId') as string;
    // For tags we handle the multi inputs
    const tagIds = formData.getAll('tags') as string[];

    const hasExam = formData.get('hasExam') === 'true';
    const examDateStr = formData.get('examDate') as string;

    const course = await prisma.course.create({
        data: {
            title,
            description,
            startDate,
            endDate,
            educationTrackId: educationTrackId !== 'none' ? educationTrackId : undefined,
            teachers: teacherId ? {
                connect: { id: teacherId }
            } : undefined,
            tags: {
                create: tagIds.map(tagId => ({
                    tag: { connect: { id: tagId } }
                }))
            }
        }
    });

    if (hasExam && examDateStr) {
        await prisma.exam.create({
            data: {
                title: `Abschlussprüfung: ${title}`,
                content: `Abschlussprüfung für den Kurs ${title}`,
                date: new Date(examDateStr),
                duration: 90, // Default duration
                location: "On-Site / TBD",
                courseId: course.id
            }
        });
    }
    
    revalidatePath('/planning');
    // We might redirect here instead
}

// -----------------------------------------------------------------------------------
// Teacher Invitation Workflow
// -----------------------------------------------------------------------------------

export async function inviteTeacherToCourse(courseId: string, teacherId: string) {
    const user = await getCurrentUser();
    if (!user || (user.role !== 'staff' && user.role !== 'admin')) throw new Error("Unauthorized");

    // 1. Check if course exists
    const course = await prisma.course.findUnique({
        where: { id: courseId },
        include: { teachers: true }
    });
    if (!course) throw new Error("Course not found");

    // 2. Check if already assigned
    const alreadyAssigned = course.teachers.some(t => t.id === teacherId);
    if (alreadyAssigned) throw new Error("Teacher is already assigned to this course.");

    // 3. Check if already invited (pending)
    const existingInvitation = await prisma.courseInvitation.findUnique({
        where: {
            courseId_teacherId: {
                courseId,
                teacherId
            }
        }
    });

    if (existingInvitation && existingInvitation.status === 'PENDING') {
        throw new Error("Invitation is already pending.");
    }

    // 4. Create or Update Invitation
    // If rejected previously, we might want to re-invite (upsert logic or just create if not pending)
    if (existingInvitation) {
         // Reset to pending
         await prisma.courseInvitation.update({
             where: { id: existingInvitation.id },
             data: { status: 'PENDING' }
         });
    } else {
        await prisma.courseInvitation.create({
            data: {
                courseId,
                teacherId,
                status: 'PENDING'
            }
        });
    }

    // 5. Notify Teacher
    await createNotification(teacherId, `Du wurdest eingeladen, den Kurs "${course.title}" zu unterrichten.`, `/teacher/courses`, 'INVITATION');

    revalidatePath('/planning');
}

export async function respondToCourseInvitation(invitationId: string, accept: boolean) {
    const user = await getCurrentUser();
    if (!user || user.role !== 'teacher') throw new Error("Unauthorized");

    const invitation = await prisma.courseInvitation.findUnique({
        where: { id: invitationId },
        include: { course: true, teacher: true }
    });

    if (!invitation) throw new Error("Invitation not found");
    if (invitation.teacherId !== user.id) throw new Error("Forbidden");

    if (accept) {
        // Transaction: Add to course, delete invitation
        await prisma.$transaction([
            prisma.course.update({
                where: { id: invitation.courseId },
                data: {
                    teachers: {
                        connect: { id: invitation.teacherId }
                    }
                }
            }),
            prisma.courseInvitation.delete({
                where: { id: invitationId }
            })
        ]);

        // Notify Staff/Admins
         const adminsAndStaff = await prisma.user.findMany({
            where: { role: { in: ['admin', 'staff'] } },
            select: { id: true }
        });
        for (const admin of adminsAndStaff) {
             await createNotification(admin.id, `Lehrer ${invitation.teacher.name} hat den Kurs "${invitation.course.title}" ANGENOMMEN.`, `/planning`, 'INFO');
        }

        // Notify Teacher (Confirmation)
        await createNotification(user.id, `Du hast den Kurs "${invitation.course.title}" erfolgreich angenommen.`, `/teacher/courses`);

    } else {
        // Reject
        await prisma.courseInvitation.update({
            where: { id: invitationId },
            data: { status: 'REJECTED' }
        });

         // Notify Staff/Admins
         const adminsAndStaff = await prisma.user.findMany({
            where: { role: { in: ['admin', 'staff'] } },
            select: { id: true }
        });
        for (const admin of adminsAndStaff) {
             await createNotification(admin.id, `Lehrer ${invitation.teacher.name} hat den Kurs "${invitation.course.title}" ABGELEHNT.`, `/planning`, 'INFO');
        }

        // Notify Teacher (Confirmation)
        await createNotification(user.id, `Du hast den Kurs "${invitation.course.title}" abgelehnt.`, `/teacher/courses`);
    }

    revalidatePath('/'); // Refresh dashboard
}

export async function getTeacherInvitations() {
    const user = await getCurrentUser();
    if (!user || user.role !== 'teacher') return [];

    return prisma.courseInvitation.findMany({
        where: {
            teacherId: user.id,
            status: 'PENDING'
        },
        include: {
            course: true
        },
        orderBy: { createdAt: 'desc' }
    });
}

// For Staff View
export async function getCourseInvitations(courseId: string) {
    const user = await getCurrentUser();
    if (!user || (user.role !== 'staff' && user.role !== 'admin')) return [];

    return prisma.courseInvitation.findMany({
        where: { courseId },
        include: { teacher: true }
    });
}


export async function updateCourse(formData: FormData) {
    const user = await getCurrentUser();
    if (!user || (user.role !== 'staff' && user.role !== 'admin')) throw new Error("Unauthorized");

    const courseId = formData.get('courseId') as string;
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const startDate = new Date(formData.get('startDate') as string);
    const endDate = new Date(formData.get('endDate') as string);
    const educationTrackId = formData.get('educationTrackId') as string;
    const teacherId = formData.get('teacherId') as string;
    const tagIds = formData.getAll('tags') as string[];
    const roomId = formData.get('roomId') as string;

    // Get current course state for comparison
    const currentCourse = await prisma.course.findUnique({
        where: { id: courseId },
        include: {
            teachers: true,
            students: true,
            room: true,
            topics: true
        }
    });
    if (!currentCourse) throw new Error("Course not found");

    // Track changes for notifications
    const changes: string[] = [];
    
    // Check room change
    if (roomId && roomId !== 'none' && roomId !== currentCourse.roomId) {
        const newRoom = await prisma.room.findUnique({ where: { id: roomId } });
        changes.push(`Raum wurde geändert: ${newRoom?.name}`);
    } else if ((!roomId || roomId === 'none') && currentCourse.roomId) {
        changes.push('Raum wurde entfernt');
    }

    // Check teacher change
    const currentTeacherId = currentCourse.teachers[0]?.id;
    if (teacherId && teacherId !== currentTeacherId) {
        const newTeacher = await prisma.user.findUnique({ where: { id: teacherId } });
        changes.push(`Dozent wurde geändert: ${newTeacher?.name}`);
    }

    // Build update data
    const data: Prisma.CourseUpdateInput = {
        title,
        description,
        startDate,
        endDate,
        educationTrack: educationTrackId !== 'none' ? { connect: { id: educationTrackId } } : { disconnect: true },
        room: roomId && roomId !== 'none' ? { connect: { id: roomId } } : { disconnect: true },
    };

    if (teacherId) {
        data.teachers = {
            set: [],
            connect: { id: teacherId }
        };
    }
    
    if (tagIds.length > 0) {
        await prisma.courseTag.deleteMany({ where: { courseId } });
        data.tags = {
             create: tagIds.map(tagId => ({
                tag: { connect: { id: tagId } }
            }))
        };
    }

    await prisma.course.update({
        where: { id: courseId },
        data
    });

    // Send notifications to all participants if changes occurred
    if (changes.length > 0) {
        const changeMessage = `Kurs "${currentCourse.title}" wurde aktualisiert:\n${changes.join('\n')}`;
        
        // Notify all students
        for (const student of currentCourse.students) {
            await createNotification(
                student.id,
                changeMessage,
                `/courses`,
                'INFO'
            );
        }
        
        // Notify all teachers (except the one making the change)
        for (const teacher of currentCourse.teachers) {
            if (teacher.id !== user.id) {
                await createNotification(
                    teacher.id,
                    changeMessage,
                    `/teacher/courses`,
                    'INFO'
                );
            }
        }
    }

    revalidatePath('/planning');
    revalidatePath(`/planning/course/${courseId}`);
    revalidatePath('/courses');
}

export async function deleteCourse(courseId: string) {
    const user = await getCurrentUser();
    if (!user || (user.role !== 'staff' && user.role !== 'admin')) throw new Error("Unauthorized");

    // Cascading deletes usually handled by DB, but safe to do explicit cleanup if needed.
    // Prisma `onDelete: Cascade` handles most.
    await prisma.course.delete({
        where: { id: courseId }
    });
    
    revalidatePath('/planning');
}


export async function assignStudentsToCourse(courseId: string, studentIds: string[]) {
    const user = await getCurrentUser();
    if (!user || (user.role !== 'staff' && user.role !== 'admin')) throw new Error("Unauthorized");

    // Get current student count to enforce limit
    const course = await prisma.course.findUnique({
        where: { id: courseId },
        include: { students: true }
    });

    if (!course) throw new Error("Course not found");

    // Calculate new total
    // We are adding `studentIds`. Some might already be in `course.students`.
    // The requirement is "max 25 students".
    // We can just set the students relation, effectively replacing or adding.
    // Ideally we merge unique IDs.
    
    // BUT the dialog `AssignStudentsDialog` usually selects *all* students intended for the track/course.
    // If we use the same dialog logic, we send the FULL list of desired students.
    
    if (studentIds.length > 25) {
         throw new Error("Maximal 25 Schüler pro Kurs erlaubt.");
    }

    // Set the students for this course
    await prisma.course.update({
        where: { id: courseId },
        data: {
            students: {
                set: studentIds.map(id => ({ id }))
            }
        }
    });

    // Revalidate all affected pages
    revalidatePath('/planning');
    revalidatePath(`/planning/course/${courseId}`);
    revalidatePath('/courses');
    revalidatePath('/student');
    revalidatePath('/dashboard');
}

export async function removeStudentFromCourse(courseId: string, studentId: string) {
    const user = await getCurrentUser();
    if (!user || (user.role !== 'staff' && user.role !== 'admin')) throw new Error("Unauthorized");

    await prisma.course.update({
        where: { id: courseId },
        data: {
            students: {
                disconnect: { id: studentId }
            }
        }
    });

    revalidatePath('/planning');
}

export async function getUnreadNotifications() {
    const user = await getCurrentUser();
    if (!user) return [];

    return prisma.notification.findMany({
        where: { userId: user.id, isRead: false },
        orderBy: { createdAt: 'desc' }
    });
}

export async function getReadNotifications() {
    const user = await getCurrentUser();
    if (!user) return [];

    return prisma.notification.findMany({
        where: { 
            userId: user.id, 
            isRead: true,
            type: { notIn: ['INQUIRY'] } // Exclude inquiry notifications from history
        },
        orderBy: { createdAt: 'desc' },
        take: 50 // Limit to last 50
    });
}

export async function markNotificationAsRead(notificationId: string) {
    const user = await getCurrentUser();
    if (!user) throw new Error("Unauthorized");

    await prisma.notification.update({
        where: { id: notificationId },
        data: { isRead: true }
    });
    
    // Revalidate all paths that show notifications
    revalidatePath('/');
    revalidatePath('/dashboard');
    revalidatePath('/student');
    revalidatePath('/profile');
    revalidatePath('/courses');
    revalidatePath('/planning');
    revalidatePath('/bulletin');
    revalidatePath('/inquiries');
    revalidatePath('/exams');
}




// Helper: Calculate relevant minutes excluding Pre-UE (08:00-08:45) for students
function getRelevantDurationInMinutes(entry: { clockIn: Date, clockOut: Date | null }, role: string): number {
    if (!entry.clockOut) return 0;

    const start = entry.clockIn;
    const end = entry.clockOut;
    let durationMs = end.getTime() - start.getTime();

    // Student Logic: Exclude Pre-UE (before 08:45)
    if (role === 'student') {
        const preUeEnd = new Date(start);
        preUeEnd.setHours(8, 45, 0, 0);

        // If shift starts before 08:45
        if (start < preUeEnd) {
            // If shift also ends before 08:45, 0 relevant minutes
            if (end < preUeEnd) {
                return 0;
            }
            // Otherwise, subtract the time before 08:45
            const excludeMs = preUeEnd.getTime() - start.getTime();
            durationMs -= excludeMs;
        }
    }

    return Math.max(0, Math.floor(durationMs / 1000 / 60));
}

export async function getAdminData() {
    const user = await getCurrentUser();
    if (!user || (user.role !== 'admin' && user.role !== 'staff')) return null;

    // Fetch ONLY this admin's entries
    const myEntries = await prisma.timeEntry.findMany({
        where: { 
            userId: user.id,
            clockOut: { not: null } 
        },
        orderBy: { clockIn: 'asc' }
    });

    const totalMinutes = myEntries.reduce((acc, entry) => {
        return acc + getRelevantDurationInMinutes(entry, user.role);
    }, 0);
    
    const totalHours = Math.round((totalMinutes / 60) * 10) / 10; // Round to 1 decimal

    // Calculate Target: 7.5h per unique worked day
    // (MVP approach: We only expect hours on days they actually clocked in. 
    // Real HR systems would check work schedule vs holidays, but this is simpler)
    const uniqueDays = new Set(myEntries.map(e => e.clockIn.toDateString())).size;
    const targetHours = uniqueDays * 7.5;
    const overtimeHours = totalHours - targetHours;

    return {
        department: user.department || "Verwaltung",
        workStats: {
            totalHours: totalHours, 
            entriesCount: myEntries.length,
            targetHours: targetHours,
            overtime: Math.round(overtimeHours * 10) / 10
        }
    };
}



export async function getPotentialRecipients() {
    const user = await getCurrentUser();
    if (!user) return { students: [], teachers: [], admins: [], tracks: [] };

    // Fetch relevant users
    const allUsers = await prisma.user.findMany({
        select: { id: true, name: true, role: true, educationTrackId: true, email: true },
        orderBy: { name: 'asc' }
    });

    const tracks = await prisma.educationTrack.findMany({
        select: { id: true, title: true },
        orderBy: { startDate: 'desc' }
    });

    // Helper to get students for teacher/student
    // Teacher: From their courses
    // Student: Teachers from their courses
    // For now, simpler: All Teachers/Admins are visible. All Students visible to Teachers/Admins.
    // Students only see Teachers.
    
    const students = (user.role === 'student') 
        ? [] // Students don't see other students in dropdown for Inquiries (Private)
        : allUsers.filter(u => u.role === 'student');

    const teachers = allUsers.filter(u => u.role === 'teacher' || u.role === 'staff'); // Staff often act as teachers
    const admins = allUsers.filter(u => u.role === 'admin' || u.role === 'staff'); // Staff are management

    return {
        students,
        teachers,
        admins,
        tracks
    };
}

export async function getAllStudents() {
    const user = await getCurrentUser();
    if (!user || (user.role !== 'staff' && user.role !== 'admin')) return [];

    return prisma.user.findMany({
        where: {
            role: 'student'
        },
        select: {
            id: true,
            name: true,
            email: true,
            educationTrack: {
                select: { title: true }
            }
        },
        orderBy: { name: 'asc' }
    });
}

export async function getStudentsWithoutTrack() {
    const user = await getCurrentUser();
    if (!user || (user.role !== 'staff' && user.role !== 'admin')) return [];

    return prisma.user.findMany({
        where: {
            role: 'student',
            educationTrackId: null
        },
        select: {
            id: true,
            name: true,
            email: true,
            // image is not in schema, removed
        },
        orderBy: { name: 'asc' }
    });
}

export async function getStudentCourses() {
    const user = await getCurrentUser();
    if (!user || user.role !== 'student') return [];

    return prisma.course.findMany({
        where: {
            students: {
                some: {
                    id: user.id
                }
            }
        },
        include: {
            teachers: true,
            topics: {
                orderBy: { startDate: 'asc' }
            }
        },
        orderBy: {
            startDate: 'asc'
        }
    });
}
