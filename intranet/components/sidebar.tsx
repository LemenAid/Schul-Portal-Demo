import Link from "next/link";
import { 
  LayoutDashboard, 
  CalendarDays, 
  Clock, 
  MessageSquare, 
  LogOut,
  HelpCircle,
  Shield,
  BookCheck,
  Database, // Added Database icon
  BookOpen // Added BookOpen icon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/auth";
import { logoutAction } from "@/lib/auth-actions";
import { NotificationsSidebar } from "@/components/notifications-wrapper";
import { CreateInquiryDialog } from "@/app/inquiries/create-inquiry-dialog";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function AppSidebar({ ...props }: React.ComponentProps<typeof ShadcnSidebar>) {
    return (
        <ShadcnSidebar collapsible="icon" {...props}>
          <SidebarContent>
             <SidebarGroup>
                 <SidebarGroupLabel>Schul-Portal-Demo</SidebarGroupLabel>
                 <SidebarGroupContent>
                     <SidebarMenu>
                         <SidebarMenuItem>
                             <SidebarMenuButton asChild>
                                 <Link href="/">
                                     <LayoutDashboard />
                                     <span>Dashboard</span>
                                 </Link>
                             </SidebarMenuButton>
                         </SidebarMenuItem>
                     </SidebarMenu>
                 </SidebarGroupContent>
             </SidebarGroup>
          </SidebarContent>
        </ShadcnSidebar>
    )
}

import { ModeToggle } from "@/components/mode-toggle";

export async function Sidebar() {


  const user = await getCurrentUser();
  if (!user) return null;

  // Background Colors per Role
  const sidebarBg = 
    user.role === 'admin' ? 'bg-red-600 dark:bg-red-950 text-white' : 
    user.role === 'staff' ? 'bg-purple-600 dark:bg-purple-950 text-white' : 
    user.role === 'teacher' ? 'bg-green-700 dark:bg-green-950 text-white' : 'bg-blue-600 dark:bg-blue-950 text-white';

  return (
    <div className={`flex h-screen w-64 flex-col justify-between border-r p-4 transition-colors ${sidebarBg}`}>
      <div className="space-y-4">
        <div className="flex items-center justify-between px-2 py-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-white/20 flex items-center justify-center border border-white/30">
                <span className="text-white font-bold">SP</span>
              </div>
              <span className="text-xl font-bold">Schul-Portal-Demo</span>
            </div>
            {/* Notification Bell in Sidebar Header */}
            <NotificationsSidebar />
        </div>
        
        <nav className="space-y-2">
          <Link href="/">
            <Button variant="ghost" className="w-full justify-start gap-2 text-current hover:bg-white/20">
              <LayoutDashboard size={20} />
              Dashboard
            </Button>
          </Link>
          {user.role === 'student' && (
            <>
              <Link href="/student/courses">
                <Button variant="ghost" className="w-full justify-start gap-2 text-current hover:bg-white/20">
                  <CalendarDays size={20} />
                  Mein Studium
                </Button>
              </Link>
            </>
          )}
          {user.role === 'staff' && (
            <Link href="/planning">
              <Button variant="ghost" className="w-full justify-start gap-2 text-current hover:bg-white/20">
                <CalendarDays size={20} />
                Planung
              </Button>
            </Link>
          )}
          {/* Teacher Exam Management - Removed for Staff/Admin in sidebar view to declutter */}
          {user.role === 'teacher' && (
             <>
                <Link href="/teacher/courses">
                <Button variant="ghost" className="w-full justify-start gap-2 text-current hover:bg-white/20">
                    <BookCheck size={20} />
                    Meine Kurse
                </Button>
                </Link>
                <Link href="/teacher/exams">
                <Button variant="ghost" className="w-full justify-start gap-2 text-current hover:bg-white/20">
                    <BookCheck size={20} />
                    Prüfungsverwaltung
                </Button>
                </Link>
            </>
          )}

          {user.role === 'admin' && (
             <>
                <Link href="/admin/users">
                <Button variant="ghost" className="w-full justify-start gap-2 text-white hover:text-red-100 hover:bg-white/20">
                    <Shield size={20} />
                    Admin
                </Button>
                </Link>
                <Link href="/admin/skills">
                <Button variant="ghost" className="w-full justify-start gap-2 text-white hover:text-red-100 hover:bg-white/20">
                    <Shield size={20} />
                    Skill Freigaben
                </Button>
                </Link>
                <Link href="http://localhost:5555" target="_blank">
                <Button variant="ghost" className="w-full justify-start gap-2 text-white hover:text-red-100 hover:bg-white/20">
                    <Database size={20} />
                    Prisma DB
                </Button>
                </Link>
            </>
          )}
          <Link href="/time">
            <Button variant="ghost" className="w-full justify-start gap-2 text-current hover:bg-white/20">
              <Clock size={20} />
              Zeiterfassung
            </Button>
          </Link>
          <Link href="/bulletin">
            <Button variant="ghost" className="w-full justify-start gap-2 text-current hover:bg-white/20">
              <MessageSquare size={20} />
              Schwarzes Brett
            </Button>
          </Link>
          <Link href="/inquiries">
            <Button variant="ghost" className="w-full justify-start gap-2 text-current hover:bg-white/20">
              <HelpCircle size={20} />
              History
            </Button>
          </Link>
        </nav>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2">
            <ModeToggle />
            <Link href="/tutorial">
                <Button variant="ghost" className="gap-2 text-current hover:bg-white/20">
                    <BookOpen size={20} />
                    Tutorial
                </Button>
            </Link>
        </div>
        
        <div className="flex items-center gap-3 rounded-lg border bg-white/20 p-3 backdrop-blur-sm border-white/20 text-white">
            <Link href="/profile" className="flex items-center gap-3 flex-1 hover:opacity-80 transition-opacity">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white border border-white/30">
                    {user.name.charAt(0)}
                </div>
                <div className="flex flex-col overflow-hidden">
                    <span className="text-sm font-medium truncate">{user.name}</span>
                    <span className="text-xs text-white/70 capitalize">{user.role === 'staff' ? 'Verwaltung' : user.role}</span>
                </div>
            </Link>
        </div>
        
        <form action={logoutAction}>
            <Button variant="outline" className="w-full gap-2 border-white/20 bg-transparent text-white hover:bg-white/20 hover:text-white">
            <LogOut size={16} />
            Abmelden
            </Button>
        </form>
      </div>
    </div>
  );
}
