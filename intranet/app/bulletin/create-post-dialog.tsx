"use client"

import { useActionState, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { PlusCircle } from "lucide-react"
import { createBulletinPost } from "@/lib/actions"
import { toast } from "sonner"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const initialState = {
  message: "",
  success: false
}

export function CreatePostDialog() {
    const [state, formAction, isPending] = useActionState(createBulletinPost, initialState)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (state.success) {
            toast.success("Anzeige erfolgreich erstellt")
            timer = setTimeout(() => setOpen(false), 100);
        } else if (state.message) {
            toast.error(state.message)
        }
        return () => clearTimeout(timer);
    }, [state])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" /> Anzeige aufgeben
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Neue Anzeige erstellen</DialogTitle>
                    <DialogDescription>
                        Erstelle eine Suche oder ein Angebot für das schwarze Brett.
                    </DialogDescription>
                </DialogHeader>
                <form action={formAction} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="title">Titel</Label>
                        <Input id="title" name="title" placeholder="z.B. Suche Nachhilfe in Mathe" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="description">Beschreibung</Label>
                        <Input id="description" name="description" placeholder="Details zu deinem Anliegen..." required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="contactInfo">Kontakt</Label>
                        <Input id="contactInfo" name="contactInfo" placeholder="Email oder Telefonnummer" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="type">Typ</Label>
                            <Select name="type" defaultValue="SEARCH">
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="SEARCH">Suche</SelectItem>
                                    <SelectItem value="OFFER">Biete</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="expiresIn">Läuft ab in</Label>
                            <Select name="expiresIn" defaultValue="7">
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="3">3 Tage</SelectItem>
                                    <SelectItem value="7">1 Woche</SelectItem>
                                    <SelectItem value="14">2 Wochen</SelectItem>
                                    <SelectItem value="30">1 Monat</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" disabled={isPending}>{isPending ? "Speichern..." : "Veröffentlichen"}</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
