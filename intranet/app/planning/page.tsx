import { getEducationTracks, createCourse, getAllCourses, createEducationTrack, getAllStudents, getAllRooms } from "@/lib/actions";
import { getCurrentUser } from "@/lib/auth";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { redirect } from "next/navigation";
import { TeacherSelector } from "./teacher-selector";
import { TagSelector } from "./tag-selector";
import { getAllTags } from "@/lib/actions";
import { TeacherSelectionProvider } from "./teacher-context";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Calendar, Users, BookOpen } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

import { CourseEditDialog } from "./course-edit-dialog";
import { TrackDetailsDialog } from "./track-details-dialog";

export default async function PlanningPage() {
    const user = await getCurrentUser();
    if (!user || (user.role !== 'staff' && user.role !== 'admin')) {
        redirect("/");
    }

    const tracks = await getEducationTracks();
    const allTags = await getAllTags();
    const allCourses = await getAllCourses(); // Fetch all courses
    const availableStudents = await getAllStudents(); // Fetch all students, not just those without track
    const allRooms = await getAllRooms(); // Fetch all rooms

    return (
      <TeacherSelectionProvider>
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Planung & Verwaltung</h1>
                <p className="text-gray-500">Verwalten Sie Umschulungen, Kurse und Prüfungen.</p>
            </div>

            <Tabs defaultValue="courses" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="tracks">Umschulung planen</TabsTrigger>
                    <TabsTrigger value="courses">Kurse verwalten</TabsTrigger>
                </TabsList>

                <TabsContent value="tracks" className="mt-6">
                     <div className="flex justify-between items-center mb-6">
                        <div className="space-y-1">
                            <h2 className="text-2xl font-semibold tracking-tight">Umschulungen (Tracks)</h2>
                            <p className="text-sm text-muted-foreground">Planen und verwalten Sie neue Umschulungsklassen.</p>
                        </div>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="gap-2">
                                    <PlusCircle size={16} />
                                    Neuer Track
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Neue Umschulung anlegen</DialogTitle>
                                    <DialogDescription>
                                        Erstellen Sie einen neuen Jahrgang (z.B. &quot;Fachinformatiker Sommer 2026&quot;).
                                    </DialogDescription>
                                </DialogHeader>
                                <form action={createEducationTrack} className="space-y-4 mt-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="trackTitle">Bezeichnung</Label>
                                        <Input id="trackTitle" name="title" placeholder="z.B. Fachinformatiker AE 2026" required />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="trackStart">Startdatum</Label>
                                            <Input type="date" id="trackStart" name="startDate" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="trackEnd">Enddatum</Label>
                                            <Input type="date" id="trackEnd" name="endDate" required />
                                        </div>
                                    </div>
                                    <Button type="submit" className="w-full">Track erstellen</Button>
                                </form>
                            </DialogContent>
                        </Dialog>
                     </div>

                     <div className="grid gap-6 md:grid-cols-2">
                        {tracks.map((track) => (
                             <Card key={track.id}>
                                <CardHeader>
                                    <CardTitle>{track.title}</CardTitle>
                                    <CardDescription>
                                        {new Date(track.startDate).toLocaleDateString()} - {new Date(track.endDate).toLocaleDateString()}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-500 mb-4">
                                        ID: {track.id}
                                    </p>
                                    <div className="flex gap-2">
                                        <TrackDetailsDialog 
                                            track={track} 
                                            students={track.users || []}
                                            availableStudents={availableStudents.filter(s => !s.educationTrack)}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                        {tracks.length === 0 && (
                            <div className="col-span-full text-center py-10 text-gray-500 border rounded-lg bg-gray-50">
                                Keine Umschulungen vorhanden.
                            </div>
                        )}
                     </div>
                </TabsContent>

                <TabsContent value="courses" className="mt-6">
                    <div className="flex justify-between items-center mb-6">
                         <div className="space-y-1">
                            <h2 className="text-2xl font-semibold tracking-tight">Alle Kurse</h2>
                            <p className="text-sm text-muted-foreground">Übersicht aller aktiven und geplanten Kurse.</p>
                        </div>
                        
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="gap-2">
                                    <PlusCircle size={16} />
                                    Neuen Kurs anlegen
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                                <DialogHeader>
                                    <DialogTitle>Neuen Kurs anlegen</DialogTitle>
                                    <DialogDescription>
                                        Definieren Sie Inhalte, Zeitraum, Dozenten und optionale Abschlussprüfungen.
                                    </DialogDescription>
                                </DialogHeader>
                                <form action={createCourse} className="space-y-6 mt-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="title">Kurstitel</Label>
                                        <Input id="title" name="title" placeholder="z.B. Advanced React Patterns" required />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="description">Beschreibung</Label>
                                        <Textarea id="description" name="description" placeholder="Lernziele und Inhalte..." />
                                    </div>

                                     <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="startDate">Startdatum</Label>
                                            <Input type="date" id="startDate" name="startDate" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="endDate">Enddatum</Label>
                                            <Input type="date" id="endDate" name="endDate" required />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="track">Zuordnung (Umschulung)</Label>
                                        <Select name="educationTrackId">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Wähle eine Umschulung (Optional)" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="none">Keine Zuordnung</SelectItem>
                                                {tracks.map((track) => (
                                                    <SelectItem key={track.id} value={track.id}>
                                                        {track.title}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="roomId">Raum / Standort</Label>
                                        <Select name="roomId">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Wähle einen Raum (Optional)" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="none">Kein Raum zugewiesen</SelectItem>
                                                {allRooms.map((room) => (
                                                    <SelectItem key={room.id} value={room.id}>
                                                        {room.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-4 border p-4 rounded-md bg-slate-50">
                                        <h3 className="font-medium text-sm">Qualifikationen & Dozenten</h3>
                                        <p className="text-xs text-gray-500">Wählen Sie Tags für den Kurs, um qualifizierte Dozenten zu finden.</p>
                                        
                                        {/* Client Components for dynamic filtering */}
                                        <TagSelector allTags={allTags} />
                                        <TeacherSelector />
                                    </div>

                                    <div className="space-y-4 border p-4 rounded-md bg-blue-50 border-blue-100">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="hasExam" name="hasExam" value="true" />
                                            <Label htmlFor="hasExam" className="font-medium text-blue-900">Abschlussprüfung für diesen Kurs einplanen?</Label>
                                        </div>
                                        <div className="pl-6 space-y-2">
                                            <Label htmlFor="examDate" className="text-xs text-blue-700">Prüfungsdatum (Optional)</Label>
                                            <Input type="date" id="examDate" name="examDate" className="bg-white" />
                                            <p className="text-[10px] text-blue-600">Wenn aktiviert, wird automatisch eine Prüfung am Ende des Kurses erstellt.</p>
                                        </div>
                                    </div>

                                    <Button type="submit" className="w-full">Kurs erstellen & Speichern</Button>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                    
                    {/* Course List */}
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {allCourses.length === 0 ? (
                            <div className="col-span-full text-center py-12 border rounded-lg bg-gray-50 text-gray-500">
                                Keine Kurse gefunden. Legen Sie einen neuen Kurs an.
                            </div>
                        ) : (
                            allCourses.map(course => (
                                <Card key={course.id} className="flex flex-col">
                                    <CardHeader className="pb-3">
                                        <div className="flex justify-between items-start gap-2">
                                            <CardTitle className="text-lg font-bold leading-tight line-clamp-2">
                                                {course.title}
                                            </CardTitle>
                                            <Badge variant={course.educationTrack ? "default" : "secondary"} className="shrink-0 text-[10px]">
                                                {course.educationTrack ? "Track" : "Single"}
                                            </Badge>
                                        </div>
                                        <CardDescription className="line-clamp-2 text-xs mt-1">
                                            {course.description || "Keine Beschreibung verfügbar."}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-1 pb-4">
                                         <div className="space-y-2 text-sm text-gray-600">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={14} className="opacity-70" />
                                                <span className="text-xs">
                                                    {new Date(course.startDate).toLocaleDateString()} - {new Date(course.endDate).toLocaleDateString()}
                                                </span>
                                            </div>
                                            {course.educationTrack && (
                                                <div className="flex items-center gap-2">
                                                    <BookOpen size={14} className="opacity-70" />
                                                    <span className="text-xs truncate" title={course.educationTrack.title}>
                                                        {course.educationTrack.title}
                                                    </span>
                                                </div>
                                            )}
                                            <div className="flex items-center gap-2">
                                                <Users size={14} className="opacity-70" />
                                                <span className="text-xs">
                                                    {course._count.students} Studenten • {course.teachers.length > 0 ? course.teachers.map(t => t.name).join(", ") : "Kein Dozent"}
                                                </span>
                                            </div>
                                         </div>
                                    </CardContent>
                                    <div className="px-6 pb-4 pt-0 mt-auto">
                                        <CourseEditDialog 
                                            course={course} 
                                            tracks={tracks} 
                                            allTags={allTags}
                                            availableStudents={availableStudents}
                                            allRooms={allRooms}
                                        />
                                    </div>
                                </Card>
                            ))
                        )}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
      </TeacherSelectionProvider>
    );
}
