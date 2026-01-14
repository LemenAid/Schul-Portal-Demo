
import { getCurrentUser } from "@/lib/auth";
import { getStudentCourses, getStudentData } from "@/lib/actions";
import { CourseViews } from "@/app/courses/course-views";
import { BookOpen, Trophy, Clock, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default async function StudentCoursesPage() {
    const user = await getCurrentUser();
    if (!user || user.role !== 'student') {
        return <div>Zugriff verweigert</div>;
    }

    const courses = await getStudentCourses();
    const studentData = await getStudentData();

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Mein Studium</h1>
                <p className="text-gray-500">
                    Willkommen zurück, {user.name}. Hier ist dein aktueller Lernfortschritt.
                </p>
            </div>

            {studentData && (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Anwesenheit</CardTitle>
                            <Clock className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{studentData.attendanceStats.attendanceRate}%</div>
                            <Progress value={studentData.attendanceStats.attendanceRate} className="mt-2 h-2" />
                            <p className="text-xs text-muted-foreground mt-2">
                                {studentData.attendanceStats.totalDays} Tage anwesend
                            </p>
                        </CardContent>
                    </Card>
                    
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Notenschnitt</CardTitle>
                            <GraduationCap className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {studentData.grades.length > 0 
                                    ? (studentData.grades.reduce((a, b) => a + b.value, 0) / studentData.grades.length).toFixed(1)
                                    : "-"}
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">
                                {studentData.grades.length} Prüfungen abgelegt
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Aktueller Track</CardTitle>
                            <Trophy className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-xl font-bold truncate" title={studentData.educationTrack?.title || "Kein Track"}>
                                {studentData.educationTrack?.title || "Kein Track"}
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">
                                {courses.length} aktive Kurse
                            </p>
                        </CardContent>
                    </Card>
                </div>
            )}

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight">Meine Kurse & Stundenplan</h2>
                {courses.length > 0 ? (
                    <CourseViews courses={courses} />
                ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-gray-500 bg-muted/30 rounded-lg border-2 border-dashed">
                        <BookOpen className="h-12 w-12 mb-4 opacity-20" />
                        <p>Du bist aktuell in keinen Kursen eingeschrieben.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
