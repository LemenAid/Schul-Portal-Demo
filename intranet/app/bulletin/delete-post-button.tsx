"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Trash2 } from "lucide-react";
import { deleteBulletinPost } from "@/lib/actions";
import { useTransition, useState } from "react";
import { toast } from "sonner";

export function DeletePostButton({ postId, authorId, needsReason }: { postId: string, authorId: string, needsReason: boolean }) {
    const [isPending, startTransition] = useTransition();
    const [open, setOpen] = useState(false);
    const [reason, setReason] = useState("");

    const handleDelete = () => {
        if (!needsReason) {
            // Owner deleting their own post - no reason needed
            if (confirm("Möchtest du diesen Beitrag wirklich löschen?")) {
                startTransition(async () => {
                    try {
                        await deleteBulletinPost(postId);
                        toast.success("Beitrag gelöscht");
                    } catch (error) {
                        console.error(error);
                        toast.error("Fehler beim Löschen des Beitrags");
                    }
                });
            }
        } else {
            // Staff deleting someone else's post - show dialog for reason
            setOpen(true);
        }
    };

    const handleConfirmDelete = () => {
        startTransition(async () => {
            try {
                await deleteBulletinPost(postId, reason || undefined);
                setOpen(false);
                setReason("");
                toast.success("Beitrag gelöscht - Autor wurde benachrichtigt");
            } catch (error) {
                console.error(error);
                toast.error("Fehler beim Löschen des Beitrags");
            }
        });
    };

    if (!needsReason) {
        return (
            <Button 
                variant="ghost" 
                size="icon" 
                className="h-6 w-6 text-gray-400 hover:text-red-600 hover:bg-red-50"
                disabled={isPending}
                onClick={handleDelete}
            >
                <Trash2 size={14} />
            </Button>
        );
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-6 w-6 text-gray-400 hover:text-red-600 hover:bg-red-50"
                    disabled={isPending}
                >
                    <Trash2 size={14} />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Beitrag löschen</DialogTitle>
                    <DialogDescription>
                        Sie löschen einen Beitrag eines anderen Benutzers. Bitte geben Sie einen Grund an, damit der Autor informiert wird.
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="reason">Grund für die Löschung <span className="text-red-500">*</span></Label>
                        <Textarea 
                            id="reason" 
                            placeholder="z.B. Verstößt gegen Community-Richtlinien..."
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            rows={4}
                            required
                            className={reason.trim().length === 0 ? "border-red-300" : ""}
                        />
                        {reason.trim().length === 0 && (
                            <p className="text-xs text-red-500">Ein Löschungsgrund ist erforderlich</p>
                        )}
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={() => setOpen(false)}>
                        Abbrechen
                    </Button>
                    <Button 
                        variant="destructive" 
                        onClick={handleConfirmDelete} 
                        disabled={isPending || reason.trim().length === 0}
                    >
                        {isPending ? "Löscht..." : "Ja, definitiv löschen"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

