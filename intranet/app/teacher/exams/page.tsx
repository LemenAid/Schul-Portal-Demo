import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, MapPin, Users } from "lucide-react";
import { revalidatePath } from "next/cache";

export default async function TeacherExamsPage() {
  const user = await getCurrentUser();
  if (!user || (user.role !== 'staff' && user.role !== 'admin')) {
    redirect("/");
  }

  // 1. Hole alle Kurse des Lehrers (oder alle wenn Admin)
  // 2. Hole alle abgeschlossenen Prüfungen dieser Kurse

  const whereClause = user.role === 'admin' ? {} : {
      course: {
          teachers: { some: { id: user.id } }
      }
  };

  const finishedExams = await prisma.exam.findMany({
    where: {
        ...whereClause,
        date: { lt: new Date() } // Vergangene Prüfungen
    },
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

  async function saveGrade(formData: FormData) {
      "use server";
      const examId = formData.get("examId") as string;
      const studentId = formData.get("studentId") as string;
      const gradeValue = parseFloat(formData.get("grade") as string);

      if (isNaN(gradeValue) || gradeValue < 1.0 || gradeValue > 6.0) {
          // Error handling skipped for MVP
          return; 
      }

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
          // Wir brauchen das Subject (Fach) für die Grade Tabelle.
          // Wir nehmen den Kurstitel als Fallback.
          const exam = await prisma.exam.findUnique({ where: {id: examId}, include: { course: true }});
          
          await prisma.grade.create({
              data: {
                  userId: studentId,
                  examId: examId,
                  value: gradeValue,
                  subject: exam?.course?.title || "Allgemein"
              }
          });
      }
      revalidatePath("/teacher/exams");
  }

  return (
    <div className="p-6 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Prüfungsverwaltung</h1>
          <p className="text-muted-foreground">
            Noten eintragen für vergangene Prüfungen.
          </p>
        </div>
      </div>

      <div className="space-y-6">
          {finishedExams.map(exam => (
              <Card key={exam.id}>
                  <CardHeader>
                      <div className="flex justify-between">
                        <div>
                             <CardTitle>{exam.title}</CardTitle>
                             <CardDescription>
                                {exam.course?.title} • {format(exam.date, 'dd.MM.yyyy')}
                             </CardDescription>
                        </div>
                        <Badge variant="outline">{exam.grades.length} / {exam.course?.students.length} Bewertet</Badge>
                      </div>
                  </CardHeader>
                  <CardContent>
                      <div className="rounded-md border">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-muted text-muted-foreground uppercase text-xs">
                                <tr>
                                    <th className="px-4 py-2">Schüler</th>
                                    <th className="px-4 py-2">Email</th>
                                    <th className="px-4 py-2 w-[150px]">Note</th>
                                    <th className="px-4 py-2 w-[100px]">Aktion</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {exam.course?.students.map(student => {
                                    const grade = exam.grades.find(g => g.userId === student.id);
                                    return (
                                        <tr key={student.id} className="bg-card hover:bg-muted/50">
                                            <td className="px-4 py-2 font-medium">{student.name}</td>
                                            <td className="px-4 py-2 text-muted-foreground">{student.email}</td>
                                            <form action={saveGrade}>
                                                <input type="hidden" name="examId" value={exam.id} />
                                                <input type="hidden" name="studentId" value={student.id} />
                                                <td className="px-4 py-2">
                                                    <input 
                                                        type="number" 
                                                        name="grade"
                                                        step="0.1" 
                                                        min="1.0" 
                                                        max="6.0" 
                                                        defaultValue={grade?.value}
                                                        placeholder="-"
                                                        className="w-16 p-1 border rounded text-center"
                                                        required
                                                    />
                                                </td>
                                                <td className="px-4 py-2">
                                                    <Button size="sm" variant="ghost" type="submit">Speichern</Button>
                                                </td>
                                            </form>
                                        </tr>
                                    );
                                })}
                                {exam.course?.students.length === 0 && (
                                    <tr><td colSpan={4} className="p-4 text-center text-muted-foreground">Keine Schüler in diesem Kurs.</td></tr>
                                )}
                            </tbody>
                        </table>
                      </div>
                  </CardContent>
              </Card>
          ))}
          {finishedExams.length === 0 && (
              <p className="text-center text-muted-foreground py-10">Keine abgeschlossenen Prüfungen gefunden.</p>
          )}
      </div>
    </div>
  );
}
