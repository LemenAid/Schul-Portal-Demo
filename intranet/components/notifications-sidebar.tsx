"use client";

import { useState, useTransition } from "react";
import { Bell, History } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { markNotificationAsRead } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";

type Notification = {
    id: string;
    message: string;
    link: string | null;
    type: string;
    createdAt: Date;
    isRead: boolean;
};

export function NotificationsSidebarClient({ 
    unreadNotifications, 
    readNotifications 
}: { 
    unreadNotifications: Notification[], 
    readNotifications: Notification[] 
}) {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const handleNotificationClick = async (notification: Notification) => {
        // Mark as read FIRST, then navigate
        if (notification.link) {
            try {
                // Wait for the notification to be marked as read
                await markNotificationAsRead(notification.id);
                
                // Close popover
                setOpen(false);
                
                // Navigate to the link
                router.push(notification.link);
                
                // Force refresh to update UI
                router.refresh();
            } catch (error) {
                console.error("Failed to mark notification as read:", error);
            }
        } else {
            // Just mark as read if no link
            try {
                await markNotificationAsRead(notification.id);
                router.refresh();
            } catch (error) {
                console.error("Failed to mark notification as read:", error);
            }
        }
    };

    const getNotificationBadgeVariant = (type: string): "default" | "destructive" | "secondary" => {
        switch(type) {
            case 'WARNING': return 'destructive';
            case 'GRADE': return 'default';
            case 'INVITATION': return 'secondary';
            default: return 'secondary';
        }
    };

    const getNotificationTypeLabel = (type: string): string => {
        switch(type) {
            case 'WARNING': return 'Warnung';
            case 'GRADE': return 'Note';
            case 'INVITATION': return 'Einladung';
            case 'INQUIRY': return 'Anfrage';
            default: return 'Info';
        }
    };

    return (
         <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    {unreadNotifications.length > 0 && (
                        <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-[10px] flex items-center justify-center text-white">
                            {unreadNotifications.length}
                        </span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-96" align="end">
                <Tabs defaultValue="new" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-4">
                        <TabsTrigger value="new" className="gap-2">
                            <Bell size={14} />
                            Neu {unreadNotifications.length > 0 && `(${unreadNotifications.length})`}
                        </TabsTrigger>
                        <TabsTrigger value="history" className="gap-2">
                            <History size={14} />
                            Verlauf
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="new" className="mt-0">
                        <ScrollArea className="h-[350px]">
                            <div className="space-y-2">
                                {unreadNotifications.length > 0 ? (
                                    unreadNotifications.map((note) => (
                                        <div 
                                            key={note.id} 
                                            className={`w-full p-3 text-sm hover:bg-slate-50 rounded border cursor-pointer transition-colors ${note.type === 'WARNING' ? 'border-red-200 bg-red-50/30' : ''}`}
                                            onClick={() => handleNotificationClick(note)}
                                        >
                                            <div className="flex items-start gap-2 mb-2">
                                                <Badge variant={getNotificationBadgeVariant(note.type)} className="text-[10px] shrink-0">
                                                    {getNotificationTypeLabel(note.type)}
                                                </Badge>
                                                <span className="text-[10px] text-gray-400">
                                                    {note.createdAt.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })}
                                                </span>
                                            </div>
                                            <p className="font-medium text-gray-800 leading-snug">
                                                {note.message}
                                            </p>
                                            {note.link && (
                                                <p className="text-xs text-blue-600 mt-2">→ Zum Inhalt</p>
                                            )}
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-8 text-gray-500">
                                        <Bell className="h-8 w-8 mx-auto mb-2 opacity-20" />
                                        <p className="text-sm">Keine neuen Benachrichtigungen</p>
                                    </div>
                                )}
                            </div>
                        </ScrollArea>
                    </TabsContent>

                    <TabsContent value="history" className="mt-0">
                        <ScrollArea className="h-[350px]">
                            <div className="space-y-2">
                                {readNotifications.length > 0 ? (
                                    readNotifications.map((note) => (
                                        <div 
                                            key={note.id} 
                                            className="w-full p-3 text-sm bg-gray-50/50 rounded border border-gray-100 opacity-75"
                                        >
                                            <div className="flex items-start gap-2 mb-2">
                                                <Badge variant="outline" className="text-[10px] shrink-0">
                                                    {getNotificationTypeLabel(note.type)}
                                                </Badge>
                                                <span className="text-[10px] text-gray-400">
                                                    {note.createdAt.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 leading-snug text-xs">
                                                {note.message}
                                            </p>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-8 text-gray-500">
                                        <History className="h-8 w-8 mx-auto mb-2 opacity-20" />
                                        <p className="text-sm">Kein Verlauf vorhanden</p>
                                    </div>
                                )}
                            </div>
                        </ScrollArea>
                    </TabsContent>
                </Tabs>
            </PopoverContent>
        </Popover>
    );
}
