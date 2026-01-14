"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Trash2, Users, Calendar, AlertTriangle } from "lucide-react";
import { deleteEducationTrack } from "@/lib/actions";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";

// Define simplified types for props (avoiding deep Prisma imports on client)
type Track = {
    id: string;
    title: string;
    startDate: Date | string;
    endDate: Date | string;
    _count?: {
        users: number; // Assuming we might count students
        courses: number;
    }
    // We would need to fetch students if we want to list them "all"
    // Since getEducationTracks might not include students by default, we need to ensure we pass them or fetch them.
    // Let's assume for this "details" view we might need more data.
    // The prompt says "wo man alle schüler sieht die hinzugefügt sind".
    // So we need students.
};

type Student = {
    id: string;
    name: string;
    email: string;
    educationTrack?: { title: string } | null;
};

interface TrackDetailsDialogProps {
  track: Track;
  students: Student[]; // We need to pass students belonging to this track
}

import { AssignStudentsDialog } from "./assign-students-dialog";

export function TrackDetailsDialog({ track, students, availableStudents }: TrackDetailsDialogProps & { availableStudents: Student[] }) {
  const [open, setOpen] = useState(false);
  
  // Filter available students: Only those who HAVE NO track OR are already in THIS track (though they are passed in students prop, this is for the picker)
  // Actually AssignStudentsDialog usually takes "candidates".
  // The "availableStudents" passed from page.tsx is now ALL students.
  // We want to pass to the dialog only those who are NOT in a track.
  const candidates = availableStudents.filter(s => !s.educationTrack || s.educationTrack.title === track.title); 

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">Details & Bearbeiten</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Umschulung Details</DialogTitle>
          <DialogDescription>
            Informationen und Teilnehmer für {track.title}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">
           {/* General Info */}
           <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                    <Label className="text-xs text-muted-foreground">Bezeichnung</Label>
                    <div className="font-medium">{track.title}</div>
                </div>
                <div className="space-y-1">
                    <Label className="text-xs text-muted-foreground">Dauer</Label>
                    <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>
                            {new Date(track.startDate).toLocaleDateString()} - {new Date(track.endDate).toLocaleDateString()}
                        </span>
                    </div>
                </div>
           </div>

           <Separator />

           {/* Students List */}
           <div className="space-y-2">
               <div className="flex items-center justify-between">
                   <Label>Teilnehmer ({students.length})</Label>
                   <Users className="h-4 w-4 text-muted-foreground" />
               </div>
               
               <div className="border rounded-md bg-slate-50">
                   <ScrollArea className="h-[200px] w-full p-2">
                       {students.length > 0 ? (
                           <div className="space-y-1">
                               {students.map(student => (
                                   <div key={student.id} className="flex items-center justify-between p-2 bg-white rounded border shadow-sm text-sm">
                                       <div>
                                           <div className="font-medium">{student.name}</div>
                                           <div className="text-xs text-muted-foreground">{student.email}</div>
                                       </div>
                                       <form action={async () => {
                                            const { removeStudentFromTrack } = await import("@/lib/actions");
                                            await removeStudentFromTrack(student.id);
                                       }}>
                                            <Button variant="ghost" size="icon" className="h-6 w-6 text-red-400 hover:text-red-600 hover:bg-red-50" title="Entfernen">
                                                <Trash2 className="h-3 w-3" />
                                            </Button>
                                       </form>
                                   </div>
                               ))}
                           </div>
                       ) : (
                           <div className="flex flex-col items-center justify-center h-full text-muted-foreground text-sm py-8">
                               <Users className="h-8 w-8 mb-2 opacity-20" />
                               Keine Teilnehmer zugewiesen.
                           </div>
                       )}
                   </ScrollArea>
               </div>
               
               <div className="mt-2">
                    <AssignStudentsDialog 
                        trackId={track.id} 
                        trackTitle={track.title} 
                        availableStudents={candidates} 
                    />
               </div>
           </div>
        </div>

        <DialogFooter className="sm:justify-between gap-2 border-t pt-4">
            <div className="flex-1"></div> {/* Spacer */}
            
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="destructive" className="gap-2 w-full sm:w-auto">
                        <Trash2 className="h-4 w-4" />
                        Umschulung löschen
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Sind Sie absolut sicher?</AlertDialogTitle>
                        <AlertDialogDescription className="space-y-2">
                            <div className="flex items-center gap-2 text-red-600 font-bold bg-red-50 p-2 rounded">
                                <AlertTriangle className="h-5 w-5" />
                                Warnung: Irreversible Aktion
                            </div>
                            <p>
                                Diese Aktion kann nicht rückgängig gemacht werden. Dies löscht die Umschulung 
                                <strong> {track.title}</strong> dauerhaft.
                            </p>
                            <p>
                                Studenten in diesem Track verlieren ihre Zuordnung, bleiben aber im System erhalten.
                            </p>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Abbrechen</AlertDialogCancel>
                        <AlertDialogAction 
                            onClick={async () => {
                                await deleteEducationTrack(track.id);
                                setOpen(false);
                            }}
                            className="bg-red-600 hover:bg-red-700"
                        >
                            Ja, Umschulung löschen
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
