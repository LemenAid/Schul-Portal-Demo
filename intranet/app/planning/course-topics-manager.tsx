"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, Pencil, Trash2 } from "lucide-react";
import { createCourseTopicAction, updateCourseTopicAction, deleteCourseTopicAction } from "@/lib/planning-actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { de } from "date-fns/locale";

type CourseTopic = {
    id: string;
    title: string;
    durationUnits: number;
    startDate: string | Date;
    endDate: string | Date;
};

interface CourseTopicsManagerProps {
    courseId: string;
    courseTitle: string;
    topics: CourseTopic[];
}

function AddTopicDialog({ courseId }: { courseId: string }) {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const handleSubmit = async (formData: FormData) => {
        try {
            await createCourseTopicAction(formData);
            setOpen(false);
            router.refresh();
            toast.success("Thema hinzugefügt!");
        } catch (error) {
            toast.error("Fehler beim Hinzufügen des Themas");
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                    <PlusCircle size={14} /> Thema hinzufügen
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Neues Themengebiet</DialogTitle>
                    <DialogDescription>
                        Fügen Sie ein neues Themengebiet mit Unterrichtseinheiten und Zeitraum hinzu.
                    </DialogDescription>
                </DialogHeader>
                <form action={handleSubmit} className="space-y-4">
                    <input type="hidden" name="courseId" value={courseId} />
                    
                    <div className="space-y-2">
                        <Label htmlFor="title">Thema</Label>
                        <Input id="title" name="title" placeholder="z.B. Datenbanken & SQL" required />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="durationUnits">Unterrichtseinheiten (UE)</Label>
                        <Input type="number" id="durationUnits" name="durationUnits" min="1" placeholder="z.B. 40" required />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="startDate">Von</Label>
                            <Input type="date" id="startDate" name="startDate" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="endDate">Bis</Label>
                            <Input type="date" id="endDate" name="endDate" required />
                        </div>
                    </div>

                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                            Abbrechen
                        </Button>
                        <Button type="submit">Hinzufügen</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

function EditTopicDialog({ courseId, topic }: { courseId: string; topic: CourseTopic }) {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const handleSubmit = async (formData: FormData) => {
        try {
            await updateCourseTopicAction(formData);
            setOpen(false);
            router.refresh();
            toast.success("Thema aktualisiert!");
        } catch (error) {
            toast.error("Fehler beim Aktualisieren des Themas");
        }
    };

    const handleDelete = async () => {
        if (!confirm("Möchten Sie dieses Thema wirklich löschen?")) return;
        
        try {
            await deleteCourseTopicAction(topic.id, courseId);
            setOpen(false);
            router.refresh();
            toast.success("Thema gelöscht!");
        } catch (error) {
            toast.error("Fehler beim Löschen des Themas");
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                    <Pencil size={12} />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Themengebiet bearbeiten</DialogTitle>
                    <DialogDescription>
                        Ändern Sie Details des Themengebiets.
                    </DialogDescription>
                </DialogHeader>
                <form action={handleSubmit} className="space-y-4">
                    <input type="hidden" name="topicId" value={topic.id} />
                    <input type="hidden" name="courseId" value={courseId} />
                    
                    <div className="space-y-2">
                        <Label htmlFor="edit-title">Thema</Label>
                        <Input id="edit-title" name="title" defaultValue={topic.title} required />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="edit-durationUnits">Unterrichtseinheiten (UE)</Label>
                        <Input type="number" id="edit-durationUnits" name="durationUnits" defaultValue={topic.durationUnits} min="1" required />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="edit-startDate">Von</Label>
                            <Input 
                                type="date" 
                                id="edit-startDate" 
                                name="startDate" 
                                defaultValue={new Date(topic.startDate).toISOString().split('T')[0]}
                                required 
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="edit-endDate">Bis</Label>
                            <Input 
                                type="date" 
                                id="edit-endDate" 
                                name="endDate" 
                                defaultValue={new Date(topic.endDate).toISOString().split('T')[0]}
                                required 
                            />
                        </div>
                    </div>

                    <DialogFooter className="flex justify-between">
                        <Button type="button" variant="destructive" size="sm" onClick={handleDelete}>
                            <Trash2 size={14} className="mr-2" /> Löschen
                        </Button>
                        <div className="flex gap-2">
                            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                                Abbrechen
                            </Button>
                            <Button type="submit">Speichern</Button>
                        </div>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export function CourseTopicsManager({ courseId, courseTitle, topics }: CourseTopicsManagerProps) {
    const totalUE = topics.reduce((sum, topic) => sum + topic.durationUnits, 0);

    return (
        <div className="space-y-4 border p-4 rounded-md bg-slate-50">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-medium text-sm">Themengebiete</h3>
                    <p className="text-xs text-gray-500">Verwalten Sie die Kurs-Themen mit UE und Zeiträumen</p>
                </div>
                <Badge variant="secondary">{totalUE} UE gesamt</Badge>
            </div>

            <div className="space-y-2">
                {topics.length === 0 ? (
                    <div className="text-sm text-gray-500 italic p-4 text-center bg-white rounded border">
                        Keine Themengebiete definiert
                    </div>
                ) : (
                    <ScrollArea className="h-[200px] bg-white rounded border">
                        <div className="divide-y">
                            {topics.map((topic) => (
                                <div key={topic.id} className="p-3 hover:bg-gray-50 flex items-start justify-between group">
                                    <div className="flex-1">
                                        <p className="font-medium text-sm">{topic.title}</p>
                                        <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                                            <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                                                {topic.durationUnits} UE
                                            </Badge>
                                            <span>
                                                {format(new Date(topic.startDate), "dd.MM.yy", { locale: de })} - {format(new Date(topic.endDate), "dd.MM.yy", { locale: de })}
                                            </span>
                                        </div>
                                    </div>
                                    <EditTopicDialog courseId={courseId} topic={topic} />
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                )}
            </div>

            <AddTopicDialog courseId={courseId} />
        </div>
    );
}
