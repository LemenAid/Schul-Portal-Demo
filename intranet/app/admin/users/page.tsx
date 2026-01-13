import { getUsers, getEducationTracks } from "@/lib/admin-actions";
import { UserList } from "./user-list";
import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminUsersPage() {
  const user = await getCurrentUser();
  if (!user || user.role !== 'admin') {
     redirect('/');
  }

  const users = await getUsers();
  const tracks = await getEducationTracks();

  // Convert dates to string/serialize if needed by client component (Prisma dates are Date objects)
  // Client components don't like Date objects passed directly from Server Components in Next.js 13+
  // But usually it warns. Let's map it safely if needed.
  // Actually, for this simple list, we only use strings in the User type definition in user-list.tsx except potentially for future fields.
  // The `getUsers` returns `educationTrack` which has dates.
  // We should sanitize.

  const serializedUsers = users.map(u => ({
    ...u,
    createdAt: u.createdAt.toISOString(),
    educationTrack: u.educationTrack ? {
        ...u.educationTrack,
        startDate: u.educationTrack.startDate.toISOString(),
        endDate: u.educationTrack.endDate.toISOString(),
        createdAt: u.educationTrack.createdAt.toISOString()
    } : null
  }));

  const serializedTracks = tracks.map(t => ({
      id: t.id,
      title: t.title
  }));

  return (
    <div className="p-8">
       <UserList initialUsers={serializedUsers as any} tracks={serializedTracks} />
    </div>
  );
}
