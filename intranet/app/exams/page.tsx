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
import { ArrowLeft, BookOpen, Clock, MapPin } from "lucide-react";

export default async function StudentExamsPage() {
  const user = await getCurrentUser();
  if (!user || user.role !== 'student') {
    redirect("/");
  }

  // 1. Hole alle Kurse des Studenten
  // 2. Hole alle Prüfungen dieser Kurse
  // 3. Hole alle Noten dieses Studenten

  const upcomingExams = await prisma.exam.findMany({
    where: {
      date: { gte: new Date() },
      course: {
        students: {
          some: { id: user.id }
        }
      }
    },
    orderBy: { date: 'asc' },
    include: { course: true }
  });

  const pastExams = await prisma.exam.findMany({
    where: {
      date: { lt: new Date() },
      course: {
        students: {
          some: { id: user.id }
        }
      }
    },
    orderBy: { date: 'desc' },
    include: { 
        course: true,
        grades: {
            where: { userId: user.id }
        }
    }
  });

  // Calculate Average Grade (IHK Score Logic placeholder)
  const grades = pastExams.flatMap(e => e.grades.map(g => g.value));
  const averageGrade = grades.length > 0 
    ? (grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(1) 
    : "N/A";

  return (
    <div className="p-6 space-y-8">
        <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Prüfungen & Noten</h1>
          <p className="text-muted-foreground">
            Übersicht deiner Leistungsnachweise.
          </p>
        </div>
        <Card className="bg-primary text-primary-foreground border-none">
            <CardContent className="p-4 flex flex-col items-center">
                <span className="text-xs opacity-80 uppercase tracking-wider">Durchschnitt</span>
                <span className="text-3xl font-bold">{averageGrade}</span>
            </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
            <Clock className="text-orange-500" size={20} /> Anstehende Prüfungen
        </h2>
        {upcomingExams.length > 0 ? (
             <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
             {upcomingExams.map(exam => (
                 <Card key={exam.id} className="border-l-4 border-l-orange-500">
                     <CardHeader>
                         <div className="flex justify-between items-start">
                             <Badge variant="outline">{format(exam.date, 'dd.MM.yyyy')}</Badge>
                             <Badge>{exam.duration} Min</Badge>
                         </div>
                         <CardTitle className="mt-2">{exam.title}</CardTitle>
                         <CardDescription>{exam.course?.title}</CardDescription>
                     </CardHeader>
                     <CardContent className="space-y-2 text-sm">
                         <div className="flex items-center gap-2 text-muted-foreground">
                             <MapPin size={14} />
                             <span>{exam.location}</span>
                         </div>
                         <p className="pt-2 border-t">{exam.content}</p>
                     </CardContent>
                 </Card>
             ))}
         </div>
        ) : (
            <p className="text-muted-foreground text-sm italic">Keine anstehenden Prüfungen.</p>
        )}
       
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
            <BookOpen className="text-blue-500" size={20} /> Vergangene Prüfungen
        </h2>
        <div className="border rounded-lg overflow-hidden">
            <table className="w-full text-sm text-left">
                <thead className="bg-muted text-muted-foreground uppercase text-xs">
                    <tr>
                        <th className="px-4 py-3">Datum</th>
                        <th className="px-4 py-3">Prüfung</th>
                        <th className="px-4 py-3">Kurs</th>
                        <th className="px-4 py-3 text-right">Note</th>
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {pastExams.map(exam => {
                        const grade = exam.grades[0]?.value;
                        return (
                            <tr key={exam.id} className="bg-card hover:bg-muted/50">
                                <td className="px-4 py-3">{format(exam.date, 'dd.MM.yyyy')}</td>
                                <td className="px-4 py-3 font-medium">{exam.title}</td>
                                <td className="px-4 py-3 text-muted-foreground">{exam.course?.title}</td>
                                <td className="px-4 py-3 text-right font-bold">
                                    {grade ? (
                                        <span className={grade <= 2.0 ? 'text-green-600' : grade >= 4.0 ? 'text-red-600' : ''}>
                                            {grade.toFixed(1)}
                                        </span>
                                    ) : (
                                        <span className="text-muted-foreground italic text-xs">Ausstehend</span>
                                    )}
                                </td>
                            </tr>
                        )
                    })}
                    {pastExams.length === 0 && (
                        <tr>
                            <td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">Noch keine Prüfungsergebnisse vorhanden.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}
