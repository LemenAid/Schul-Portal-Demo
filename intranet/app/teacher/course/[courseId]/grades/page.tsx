
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { updateExamGrades } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { ExamSelector } from "./exam-selector";

export default async function GradesPage({ params, searchParams }: { params: Promise<{ courseId: string }>, searchParams: Promise<{ examId?: string }> }) {
    const { courseId } = await params;
    const { examId } = await searchParams;
    const user = await getCurrentUser();
    
    if (!user || (user.role !== 'staff' && user.role !== 'teacher' && user.role !== 'admin')) {
        return <div>Zugriff verweigert</div>;
    }

    const course = await prisma.course.findUnique({
        where: { id: courseId },
        include: {
            students: {
                orderBy: { name: 'asc' }
            },
            exams: {
                orderBy: { date: 'desc' }
            }
        }
    });

    if (!course) {
        return <div>Kurs nicht gefunden</div>;
    }

    // Determine which exam to show:
    // 1. From URL param ?examId=...
    // 2. Or the most recent one (first in list due to orderBy desc)
    const selectedExamId = examId || (course.exams.length > 0 ? course.exams[0].id : null);
    const exam = selectedExamId ? course.exams.find(e => e.id === selectedExamId) : null;

    if (!exam) {
        return (
            <div className="max-w-4xl mx-auto py-8 text-center">
                <h1 className="text-2xl font-bold mb-4">Keine Prüfung vorhanden</h1>
                <p className="text-gray-500">Für diesen Kurs wurde noch keine Prüfung angelegt.</p>
                <Button className="mt-4" variant="outline" asChild>
                    <a href="/teacher/exams">Zur Prüfungsverwaltung</a>
                </Button>
            </div>
        );
    }

    // Fetch existing grades for this specific exam
    const existingGrades = await prisma.grade.findMany({
        where: { examId: exam.id }
    });

    const getGrade = (studentId: string) => {
        const grade = existingGrades.find(g => g.userId === studentId);
        return grade ? grade.value.toString() : "";
    };

    return (
        <div className="max-w-4xl mx-auto py-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Notenvergabe: {course.title}</h1>
                    <p className="text-gray-500">Kurszeitraum: {course.startDate.toLocaleDateString()} - {course.endDate.toLocaleDateString()}</p>
                </div>
                
                {/* Exam Selector Component if multiple exams exist */}
                {course.exams.length > 1 && (
                    <ExamSelector 
                        exams={course.exams} 
                        currentExamId={exam.id} 
                        courseId={course.id} 
                    />
                )}
            </div>

            <Card>
                <CardHeader className="bg-muted/30 border-b">
                    <div className="flex justify-between items-center">
                        <CardTitle>
                            Prüfung: {exam.title}
                        </CardTitle>
                        <span className="text-sm text-muted-foreground">
                            Datum: {new Date(exam.date).toLocaleDateString('de-DE')}
                        </span>
                    </div>
                </CardHeader>
                <CardContent className="pt-6">
                    <form action={updateExamGrades}>
                        <input type="hidden" name="examId" value={exam.id} />
                        
                        <div className="space-y-4">
                            <div className="grid grid-cols-12 gap-4 font-medium text-sm text-gray-500 border-b pb-2 px-2">
                                <div className="col-span-8">Student</div>
                                <div className="col-span-4">Note (1.0 - 6.0)</div>
                            </div>
                            
                            {course.students.length === 0 ? (
                                <div className="text-center py-8 text-gray-500 italic">
                                    Keine Studenten in diesem Kurs eingeschrieben.
                                </div>
                            ) : (
                                course.students.map(student => (
                                    <div key={student.id} className="grid grid-cols-12 gap-4 items-center p-2 hover:bg-muted/20 rounded-md transition-colors">
                                        <div className="col-span-8">
                                            <div className="font-medium">{student.name}</div>
                                            <div className="text-xs text-gray-500">{student.email}</div>
                                        </div>
                                        <div className="col-span-4">
                                            <Input 
                                                type="number" 
                                                step="0.1" 
                                                min="1" 
                                                max="6" 
                                                name={`grade-${student.id}`} 
                                                defaultValue={getGrade(student.id)}
                                                placeholder="-"
                                                className="w-24"
                                            />
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="mt-8 flex justify-end gap-4 border-t pt-4">
                            <Button variant="outline" type="button" asChild>
                                <a href="/teacher/courses">Abbrechen</a>
                            </Button>
                            <Button type="submit" disabled={course.students.length === 0}>
                                Noten speichern
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
