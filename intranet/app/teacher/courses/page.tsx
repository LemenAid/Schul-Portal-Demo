import { getCurrentUser } from "@/lib/auth";
import { getTeacherCourses } from "@/lib/actions";
import { CourseViews } from "@/app/courses/course-views";
import { BookOpen } from "lucide-react";

export default async function TeacherCoursesPage() {
    const user = await getCurrentUser();
    if (!user || (user.role !== 'staff' && user.role !== 'teacher' && user.role !== 'admin')) {
        return <div>Zugriff verweigert</div>;
    }

    const courses = await getTeacherCourses();

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Meine Kurse</h1>
                <p className="text-gray-500">Übersicht aller Kurse, die Sie unterrichten.</p>
            </div>

            {courses.length > 0 ? (
                <CourseViews courses={courses} isTeacherView={true} />
            ) : (
                <div className="flex flex-col items-center justify-center py-12 text-gray-500 bg-muted/30 rounded-lg border-2 border-dashed">
                    <BookOpen className="h-12 w-12 mb-4 opacity-20" />
                    <p>Sie sind aktuell keinen Kursen als Dozent zugewiesen.</p>
                </div>
            )}
        </div>
    );
}
