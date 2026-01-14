"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { assignStudentsToCourse } from "@/lib/actions";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Student = {
    id: string;
    name: string;
    email: string;
};

interface AssignStudentsToCourseDialogProps {
    courseId: string;
    courseTitle: string;
    availableStudents: Student[];
    currentStudentIds: string[];
}

export function AssignStudentsToCourseDialog({ courseId, courseTitle, availableStudents, currentStudentIds }: AssignStudentsToCourseDialogProps) {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    // Initialize with current students
    const [selectedStudentIds, setSelectedStudentIds] = useState<string[]>(currentStudentIds);
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const filteredStudents = availableStudents.filter(student => 
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        student.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleToggleStudent = (studentId: string) => {
        setSelectedStudentIds(prev => {
            const isSelected = prev.includes(studentId);
            if (isSelected) {
                return prev.filter(id => id !== studentId);
            } else {
                 if (prev.length >= 25) {
                    toast.error("Maximal 25 Schüler pro Kurs erlaubt.");
                    return prev;
                }
                return [...prev, studentId];
            }
        });
    };

    const handleSave = () => {
        startTransition(async () => {
            try {
                await assignStudentsToCourse(courseId, selectedStudentIds);
                setOpen(false);
                router.refresh();
                toast.success("Teilnehmerliste aktualisiert!");
            } catch (e: unknown) {
                if (e instanceof Error) {
                    toast.error(e.message);
                } else {
                    toast.error("Fehler beim Speichern der Teilnehmer.");
                }
            }
        });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="w-full">
                    Schüler verwalten
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Kurs-Teilnehmer verwalten</DialogTitle>
                    <DialogDescription>
                        Fügen Sie Schüler zum Kurs &quot;{courseTitle}&quot; hinzu. (Max. 25)
                    </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4 py-4">
                    <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Suchen..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-8"
                        />
                    </div>
                    
                    <div className="border rounded-md">
                        <div className="bg-muted/50 p-2 text-xs font-medium border-b flex justify-between">
                            <span>Name</span>
                            <span>{selectedStudentIds.length} / 25 ausgewählt</span>
                        </div>
                        <ScrollArea className="h-[250px]">
                            {filteredStudents.length === 0 ? (
                                <div className="p-4 text-center text-sm text-muted-foreground">
                                    Keine verfügbaren Schüler gefunden.
                                </div>
                            ) : (
                                <div className="divide-y">
                                    {filteredStudents.map((student) => (
                                        <div key={student.id} className="flex items-center space-x-3 p-3 hover:bg-muted/30 transition-colors">
                                            <Checkbox 
                                                id={`c-student-${student.id}`} 
                                                checked={selectedStudentIds.includes(student.id)}
                                                onCheckedChange={() => handleToggleStudent(student.id)}
                                                 disabled={!selectedStudentIds.includes(student.id) && selectedStudentIds.length >= 25}
                                            />
                                            <div className="grid gap-0.5 leading-none cursor-pointer" onClick={() => {
                                                  if (selectedStudentIds.includes(student.id) || selectedStudentIds.length < 25) {
                                                    handleToggleStudent(student.id);
                                                }
                                            }}>
                                                <Label 
                                                    htmlFor={`c-student-${student.id}`}
                                                    className={`font-medium cursor-pointer ${(!selectedStudentIds.includes(student.id) && selectedStudentIds.length >= 25) ? 'opacity-50' : ''}`}
                                                >
                                                    {student.name}
                                                </Label>
                                                <p className="text-xs text-muted-foreground">
                                                    {student.email}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </ScrollArea>
                    </div>
                </div>

                <DialogFooter>
                    <Button variant="outline" onClick={() => setOpen(false)}>Abbrechen</Button>
                    <Button onClick={handleSave} disabled={isPending}>
                        {isPending ? "Speichert..." : "Speichern"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
