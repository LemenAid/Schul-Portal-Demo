import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user || user.role !== "admin") {
    redirect("/"); // Or a dedicated 403 page
  }

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
             {/* Sub-navigation for admin could go here if needed, 
                 but main sidebar handles navigation. 
                 Maybe just a title or quick links. */}
             <div className="font-bold text-xl mb-4">Administration</div>
             <nav className="flex flex-col space-y-2">
                <a href="/admin/users" className="hover:underline text-primary">User Management</a>
                {/* Future: <a href="/admin/settings">System Settings</a> */}
             </nav>
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
