"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TagSelector } from "./tag-selector";
import { TeacherSelector } from "./teacher-selector";
import { Trash2, UserPlus, Send, XCircle } from "lucide-react";
import { updateCourse, deleteCourse, inviteTeacherToCourse, getCourseInvitations, removeStudentFromCourse } from "@/lib/actions"; 
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";

type CourseTag = {
    tag: {
        id: string;
        name: string;
    }
};

type TeacherSkill = {
    tag: {
        id: string;
        name: string;
    }
};

type Teacher = {
    id: string;
    name: string;
    teacherSkills?: TeacherSkill[];
};

type Course = {
    id: string;
    title: string;
    description: string | null;
    startDate: string | Date;
    endDate: string | Date;
    educationTrackId: string | null;
    tags: CourseTag[];
    teachers: Teacher[];
};

type Track = {
    id: string;
    title: string;
};

type Tag = {
    id: string;
    name: string;
};

import { TeacherSelectionProvider, useTeacherSelection } from "./teacher-context";

type Invitation = {
    id: string;
    status: string;
    teacher: {
        name: string;
    }
}

// Helper Component for Invitations
function InvitationList({ courseId }: { courseId: string }) {
    const [invitations, setInvitations] = useState<Invitation[]>([]);
    
    useEffect(() => {
        getCourseInvitations(courseId).then((data) => setInvitations(data as Invitation[]));
    }, [courseId]);

    if (invitations.length === 0) return null;

    return (
        <div className="mt-4 p-4 border rounded-md bg-white">
             <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                <Send size={14} /> Ausstehende Einladungen
             </h4>
             <ul className="space-y-2">
                 {invitations.map((inv) => (
                     <li key={inv.id} className="text-sm flex justify-between items-center bg-gray-50 p-2 rounded">
                         <span>{inv.teacher.name}</span>
                         <Badge variant={inv.status === 'REJECTED' ? 'destructive' : 'secondary'}>
                            {inv.status === 'REJECTED' ? 'Abgelehnt' : 'Wartet...'}
                         </Badge>
                     </li>
                 ))}
             </ul>
        </div>
    )
}

// Wrapper for Submit Logic to handle Invitations vs Direct Assignment
function ActionButtons({ courseId, assignedTeacherId }: { courseId: string, assignedTeacherId?: string }) {
     const { selectedTeacherId } = useTeacherSelection();
     
     const handleInvite = async (e: React.MouseEvent) => {
         e.preventDefault(); // Prevent form submit
         if (!selectedTeacherId) return;
         
         try {
             await inviteTeacherToCourse(courseId, selectedTeacherId);
             toast.success("Einladung gesendet!");
         } catch (e: unknown) {
            if (e instanceof Error) {
                toast.error(e.message);
            } else {
                toast.error("Ein unbekannter Fehler ist aufgetreten.");
            }
         }
     };

     if (selectedTeacherId && selectedTeacherId !== assignedTeacherId) {
         return (
             <div className="flex gap-2 mt-4">
                 <Button type="submit" className="flex-1" variant="secondary">
                    Speichern (Direkt zuweisen)
                 </Button>
                 <Button onClick={handleInvite} className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <UserPlus className="mr-2 h-4 w-4" /> Einladen
                 </Button>
             </div>
         )
     }

     return <Button type="submit" className="w-full mt-4">Änderungen speichern</Button>;
}

import { AssignStudentsToCourseDialog } from "./assign-course-students-dialog";

type CourseEditDialogProps = {
    course: Course & { students?: { id: string, name: string, email: string }[] }; 
    tracks: Track[];
    allTags: Tag[];
    availableStudents: { id: string, name: string, email: string }[];
};

export function CourseEditDialog({ course, tracks, allTags, availableStudents }: CourseEditDialogProps) {
    const [isOpen, setIsOpen] = useState(false);
    const initialTeacher = course.teachers[0];

    const handleSubmit = async (formData: FormData) => {
         await updateCourse(formData);
         setIsOpen(false);
         toast.success("Kurs aktualisiert!");
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
             <DialogTrigger asChild>
                <Button variant="outline" size="sm">Bearbeiten</Button>
            </DialogTrigger>
            
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Kurs bearbeiten: {course.title}</DialogTitle>
                    <DialogDescription>
                        Ändern Sie hier die Details des Kurses.
                    </DialogDescription>
                </DialogHeader>

                <TeacherSelectionProvider initialTeacherId={initialTeacher?.id} initialTags={course.tags.map(t => t.tag)}>
                    <form action={handleSubmit} className="space-y-6 mt-4">
                        <input type="hidden" name="courseId" value={course.id} />
                        
                        <div className="space-y-2">
                            <Label htmlFor="title">Kurstitel</Label>
                            <Input id="title" name="title" defaultValue={course.title} required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Beschreibung</Label>
                            <Textarea id="description" name="description" defaultValue={course.description || ""} />
                        </div>

                         <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="startDate">Startdatum</Label>
                                <Input type="date" id="startDate" name="startDate" defaultValue={new Date(course.startDate).toISOString().split('T')[0]} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="endDate">Enddatum</Label>
                                <Input type="date" id="endDate" name="endDate" defaultValue={new Date(course.endDate).toISOString().split('T')[0]} required />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="track">Zuordnung (Umschulung)</Label>
                            <Select name="educationTrackId" defaultValue={course.educationTrackId || "none"}>
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

                        <div className="space-y-4 border p-4 rounded-md bg-slate-50">
                            <h3 className="font-medium text-sm">Qualifikationen & Dozenten</h3>
                            <p className="text-xs text-gray-500">Wählen Sie Tags für den Kurs, um qualifizierte Dozenten zu finden.</p>
                            
                            <TagSelector allTags={allTags} />
                            <TeacherSelector />
                            
                            <InvitationList courseId={course.id} />
                        </div>

                        {/* NEW: Student Assignment Section */}
                        <div className="space-y-4 border p-4 rounded-md bg-slate-50 mt-4">
                            <div className="flex justify-between items-center">
                                <h3 className="font-medium text-sm">Teilnehmer (Studenten)</h3>
                                <Badge variant="secondary">
                                    {(course.students?.length || 0)} / 25
                                </Badge>
                            </div>
                            
                            <p className="text-xs text-gray-500 mb-2">
                                Verwalten Sie die Teilnehmerliste für diesen Kurs. Max. 25 Teilnehmer.
                            </p>

                            <div className="text-sm bg-white rounded border overflow-hidden mb-2">
                                <ScrollArea className="h-[150px]">
                                {course.students && course.students.length > 0 ? (
                                    <div className="divide-y">
                                        {course.students.map(s => (
                                            <div key={s.id} className="flex items-center justify-between p-2 hover:bg-gray-50 group">
                                                <div className="flex items-center gap-2">
                                                    <Avatar className="h-6 w-6">
                                                        <AvatarFallback className="text-[10px] bg-slate-200">
                                                            {s.name.charAt(0)}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <p className="font-medium text-xs">{s.name}</p>
                                                        <p className="text-[10px] text-gray-500 leading-none">{s.email}</p>
                                                    </div>
                                                </div>
                                                <Button 
                                                    variant="ghost" 
                                                    size="icon" 
                                                    className="h-6 w-6 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                                    onClick={async (e) => {
                                                        e.preventDefault();
                                                        try {
                                                            await removeStudentFromCourse(course.id, s.id);
                                                            toast.success("Student entfernt");
                                                        } catch (err) {
                                                            toast.error("Fehler beim Entfernen");
                                                        }
                                                    }}
                                                >
                                                    <XCircle size={14} />
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="p-4 text-center text-gray-400 italic text-xs">Keine Studenten zugewiesen.</div>
                                )}
                                </ScrollArea>
                            </div>

                            <AssignStudentsToCourseDialog 
                                courseId={course.id} 
                                courseTitle={course.title}
                                availableStudents={availableStudents}
                                currentStudentIds={course.students?.map(s => s.id) || []}
                            />
                        </div>

                        <ActionButtons courseId={course.id} assignedTeacherId={initialTeacher?.id} />

                        <div className="flex justify-end pt-4 border-t">
                             <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button variant="destructive" size="sm" className="gap-2">
                                        <Trash2 size={14} /> Kurs löschen
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Sind Sie sicher?</AlertDialogTitle>
                                        <AlertDialogDescription className="space-y-2">
                                            <div className="flex items-center gap-2 text-red-600 font-bold bg-red-50 p-2 rounded">
                                                <XCircle className="h-5 w-5" />
                                                Warnung: Irreversible Aktion
                                            </div>
                                            <p>
                                                Diese Aktion kann nicht rückgängig gemacht werden. Der Kurs &quot;{course.title}&quot; und alle zugehörigen Daten werden dauerhaft gelöscht.
                                            </p>
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Abbrechen</AlertDialogCancel>
                                        <Button 
                                            variant="destructive"
                                            onClick={async (e) => {
                                                e.preventDefault();
                                                await deleteCourse(course.id);
                                                setIsOpen(false);
                                            }}
                                        >
                                            Ja, Kurs löschen
                                        </Button>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </form>
                </TeacherSelectionProvider>
            </DialogContent>
        </Dialog>
    );
}
