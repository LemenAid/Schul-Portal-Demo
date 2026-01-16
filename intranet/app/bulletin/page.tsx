import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tag } from "lucide-react";
import { getBulletinPosts } from "@/lib/actions";
import { CreatePostDialog } from "./create-post-dialog";
import { getCurrentUser } from "@/lib/auth";
import { DeletePostButton } from "./delete-post-button";

export default async function BulletinPage() {
  const posts = await getBulletinPosts();
  const user = await getCurrentUser();

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Schwarzes Brett</h1>
          <p className="text-gray-500">Suche und Biete – von Studenten für Studenten.</p>
        </div>
        
        <CreatePostDialog />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
            const isOwner = user?.id === post.userId;
            const isAdminOrStaff = user?.role === 'admin' || user?.role === 'staff';
            const canDelete = isOwner || isAdminOrStaff;
            const needsReason = !isOwner && isAdminOrStaff;

            return (
              <Card key={post.id} className="flex flex-col relative group">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex gap-2">
                        <Badge variant={post.type === 'OFFER' ? "default" : "secondary"}>
                            {post.type === 'OFFER' ? 'Biete' : 'Suche'}
                        </Badge>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400">
                            {post.createdAt.toLocaleDateString()}
                        </span>
                        {canDelete && post.userId && <DeletePostButton postId={post.id} authorId={post.userId} needsReason={needsReason} />}
                    </div>
                  </div>
                  <CardTitle className="mt-2 text-lg">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-gray-600">
                    {post.description}
                  </p>
                </CardContent>
                <CardFooter className="bg-gray-50 p-4 rounded-b-lg flex justify-between items-center">
                    <div className="text-xs font-medium text-gray-500 flex items-center gap-2">
                        <Tag size={12} />
                        Kontakt: {post.contactInfo}
                    </div>
                    <div className="text-xs text-gray-400">
                        von {post.user?.name || 'Unbekannt'}
                    </div>
                </CardFooter>
              </Card>
            );
        })}
        {posts.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-500">
                Noch keine Anzeigen vorhanden. Sei der Erste!
            </div>
        )}
      </div>
    </div>
  );
}
