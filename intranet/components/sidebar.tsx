import Link from "next/link";
import { 
  LayoutDashboard, 
  CalendarDays, 
  Clock, 
  MessageSquare, 
  LogOut,
  HelpCircle,
  User as UserIcon,
  Shield // Added Shield icon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/auth";
import { logoutAction } from "@/lib/auth-actions";

export async function Sidebar() {
  const user = await getCurrentUser();
  if (!user) return null;

  return (
    <div className="flex h-screen w-64 flex-col justify-between border-r bg-gray-50/40 p-4 dark:bg-gray-800/40">
      <div className="space-y-4">
        <div className="flex items-center gap-2 px-2 py-4">
          <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <span className="text-white font-bold">CC</span>
          </div>
          <span className="text-xl font-bold">CC Portal</span>
        </div>
        
        <nav className="space-y-2">
          <Link href="/">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <LayoutDashboard size={20} />
              Dashboard
            </Button>
          </Link>
          {user.role === 'student' && (
            <>
              <Link href="/courses">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <CalendarDays size={20} />
                  Kursplan
                </Button>
              </Link>
              <Link href="/exams">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <CalendarDays size={20} />
                  Prüfungen
                </Button>
              </Link>
            </>
          )}
          {(user.role === 'staff' || user.role === 'admin') && (
            <Link href="/planning">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <CalendarDays size={20} />
                Planung
              </Button>
            </Link>
          )}
          {user.role === 'admin' && (
            <Link href="/admin/users">
              <Button variant="ghost" className="w-full justify-start gap-2 text-red-600 hover:text-red-700 hover:bg-red-50">
                <Shield size={20} />
                Admin
              </Button>
            </Link>
          )}
          <Link href="/time">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Clock size={20} />
              Zeiterfassung
            </Button>
          </Link>
          <Link href="/bulletin">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <MessageSquare size={20} />
              Schwarzes Brett
            </Button>
          </Link>
          <Link href="/inquiries">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <HelpCircle size={20} />
              Anfragen
            </Button>
          </Link>
        </nav>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3 rounded-lg border bg-white p-3 dark:bg-gray-900">
            <Link href="/profile" className="flex items-center gap-3 flex-1 hover:opacity-80 transition-opacity">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center text-white font-bold
                    ${user.role === 'admin' ? 'bg-red-500' : 
                      user.role === 'staff' ? 'bg-purple-500' : 'bg-blue-500'
                    }`}
                >
                    {user.name.charAt(0)}
                </div>
                <div className="flex flex-col overflow-hidden">
                    <span className="text-sm font-medium truncate">{user.name}</span>
                    <span className="text-xs text-gray-500 capitalize">{user.role}</span>
                </div>
            </Link>
        </div>
        
        <form action={logoutAction}>
            <Button variant="outline" className="w-full gap-2 text-red-500 hover:text-red-600 hover:bg-red-50">
            <LogOut size={16} />
            Abmelden
            </Button>
        </form>
      </div>
    </div>
  );
}

