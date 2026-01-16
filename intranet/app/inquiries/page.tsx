import { getResolvedInquiriesForStaff, getUserInquiries, getReadNotifications } from "@/lib/actions";
import { getCurrentUser } from "@/lib/auth";
import { InquiryList } from "./inquiry-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default async function InquiriesPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  const isStaff = user.role !== 'student';
  
  // Fetch data on server
  const inquiries = isStaff 
    ? await getResolvedInquiriesForStaff() 
    : await getUserInquiries();

  // Fetch read notifications (excluding INQUIRY type)
  const notifications = await getReadNotifications();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          History
        </h1>
        <p className="text-gray-500">
          Historie aller beantworteten Anfragen.
        </p>
      </div>

      <Tabs defaultValue="inquiries" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="inquiries" className="gap-2">
            <MessageSquare size={16} />
            Anfragen {inquiries.length > 0 && `(${inquiries.length})`}
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2">
            <Bell size={16} />
            Benachrichtigungen {notifications.length > 0 && `(${notifications.length})`}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="inquiries" className="mt-6">
          <InquiryList initialInquiries={inquiries} isStaff={isStaff} />
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
          <div className="space-y-4">
            {notifications.length > 0 ? (
              notifications.map((notification) => {
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
                    case 'INFO': return 'Info';
                    default: return 'Info';
                  }
                };

                return (
                  <Card key={notification.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant={getNotificationBadgeVariant(notification.type)}>
                              {getNotificationTypeLabel(notification.type)}
                            </Badge>
                            <span className="text-xs text-gray-500">
                              {new Date(notification.createdAt).toLocaleDateString('de-DE', { 
                                day: '2-digit', 
                                month: '2-digit', 
                                year: 'numeric',
                                hour: '2-digit', 
                                minute: '2-digit' 
                              })}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {notification.message}
                          </p>
                          {notification.link && (
                            <a 
                              href={notification.link} 
                              className="text-xs text-blue-600 hover:text-blue-800 mt-2 inline-block"
                            >
                              → Zum Inhalt
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            ) : (
              <div className="text-center py-12 text-gray-500">
                <Bell className="h-12 w-12 mx-auto mb-3 opacity-20" />
                <p>Keine Benachrichtigungen im Verlauf</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
