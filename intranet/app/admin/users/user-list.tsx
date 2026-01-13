'use client'

import { useState } from 'react'
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { createUser, updateUser, deleteUser } from '@/lib/admin-actions'
import { Badge } from "@/components/ui/badge"
import { Pencil, Trash2, Plus } from "lucide-react"

type User = {
  id: string
  name: string
  email: string
  role: string
  department: string | null
  measureNumber: string | null
  educationTrackId: string | null
  educationTrack?: { title: string } | null
}

type Track = {
    id: string
    title: string
}

export function UserList({ initialUsers, tracks }: { initialUsers: User[], tracks: Track[] }) {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Create Form State
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: 'student',
    department: '',
    measureNumber: '',
    educationTrackId: ''
  })

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    const formData = new FormData()
    formData.append('name', newUser.name)
    formData.append('email', newUser.email)
    formData.append('role', newUser.role)
    if (newUser.department) formData.append('department', newUser.department)
    if (newUser.measureNumber) formData.append('measureNumber', newUser.measureNumber)
    if (newUser.educationTrackId) formData.append('educationTrackId', newUser.educationTrackId)

    const result = await createUser(formData)
    if (result.success) {
      setIsCreateOpen(false)
      setNewUser({ name: '', email: '', role: 'student', department: '', measureNumber: '', educationTrackId: '' })
      // In a real app we'd re-fetch or use router.refresh(), but for now we rely on revalidatePath in action
      // and maybe a full page reload or optimistic update. 
      // Let's do a hard reload for simplicity to sync with server
      window.location.reload()
    } else {
      alert(result.error)
    }
    setIsLoading(false)
  }

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingUser) return
    setIsLoading(true)

    const formData = new FormData()
    formData.append('name', editingUser.name)
    formData.append('email', editingUser.email)
    formData.append('role', editingUser.role)
    if (editingUser.department) formData.append('department', editingUser.department)
    if (editingUser.measureNumber) formData.append('measureNumber', editingUser.measureNumber)
    if (editingUser.educationTrackId) formData.append('educationTrackId', editingUser.educationTrackId)

    const result = await updateUser(editingUser.id, formData)
    if (result.success) {
      setEditingUser(null)
      window.location.reload()
    } else {
      alert(result.error)
    }
    setIsLoading(false)
  }

  const handleDelete = async (userId: string) => {
    if (!confirm('Are you sure you want to delete this user?')) return
    
    const result = await deleteUser(userId)
    if (result.success) {
       window.location.reload()
    } else {
      alert(result.error)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">User Management</h2>
        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
          <DialogTrigger asChild>
            <Button><Plus className="mr-2 h-4 w-4" /> Add User</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New User</DialogTitle>
              <DialogDescription>
                Create a new user account. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreate} className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">Name</Label>
                <Input id="name" value={newUser.name} onChange={e => setNewUser({...newUser, name: e.target.value})} className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">Email</Label>
                <Input id="email" type="email" value={newUser.email} onChange={e => setNewUser({...newUser, email: e.target.value})} className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role" className="text-right">Role</Label>
                <Select value={newUser.role} onValueChange={v => setNewUser({...newUser, role: v})}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="teacher">Teacher</SelectItem>
                    <SelectItem value="staff">Staff</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Conditional Fields based on Role */}
              {(newUser.role === 'admin' || newUser.role === 'staff') && (
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="department" className="text-right">Department</Label>
                  <Input id="department" value={newUser.department} onChange={e => setNewUser({...newUser, department: e.target.value})} className="col-span-3" />
                </div>
              )}

              {newUser.role === 'student' && (
                <>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="measureNumber" className="text-right">Measure #</Label>
                    <Input id="measureNumber" value={newUser.measureNumber} onChange={e => setNewUser({...newUser, measureNumber: e.target.value})} className="col-span-3" placeholder="123/456/2025" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="track" className="text-right">Track</Label>
                    <Select value={newUser.educationTrackId} onValueChange={v => setNewUser({...newUser, educationTrackId: v})}>
                        <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select Umschulung" />
                        </SelectTrigger>
                        <SelectContent>
                            {tracks.map(t => (
                                <SelectItem key={t.id} value={t.id}>{t.title}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              <DialogFooter>
                <Button type="submit" disabled={isLoading}>Save User</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Details</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge variant={user.role === 'admin' ? 'destructive' : user.role === 'student' ? 'secondary' : 'outline'}>
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                    {user.role === 'student' && (
                        <div className="text-xs text-muted-foreground">
                            {user.measureNumber && <div>#{user.measureNumber}</div>}
                            {user.educationTrack?.title && <div>{user.educationTrack.title}</div>}
                        </div>
                    )}
                    {(user.role === 'admin' || user.role === 'staff') && (
                        <div className="text-xs text-muted-foreground">{user.department}</div>
                    )}
                </TableCell>
                <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                        <Dialog open={!!editingUser && editingUser.id === user.id} onOpenChange={(open) => !open && setEditingUser(null)}>
                            <DialogTrigger asChild>
                                <Button variant="ghost" size="icon" onClick={() => setEditingUser(user)}>
                                    <Pencil className="h-4 w-4" />
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Edit User</DialogTitle>
                                </DialogHeader>
                                {/* SIMPLIFIED EDIT FORM - Ideally same component as Create */}
                                {editingUser && (
                                    <form onSubmit={handleUpdate} className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label className="text-right">Name</Label>
                                            <Input value={editingUser.name} onChange={e => setEditingUser({...editingUser, name: e.target.value})} className="col-span-3" />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label className="text-right">Email</Label>
                                            <Input value={editingUser.email} onChange={e => setEditingUser({...editingUser, email: e.target.value})} className="col-span-3" />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label className="text-right">Role</Label>
                                            <Select value={editingUser.role} onValueChange={v => setEditingUser({...editingUser, role: v})}>
                                                <SelectTrigger className="col-span-3"><SelectValue /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="student">Student</SelectItem>
                                                    <SelectItem value="teacher">Teacher</SelectItem>
                                                    <SelectItem value="staff">Staff</SelectItem>
                                                    <SelectItem value="admin">Admin</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                         {/* Edit Conditional Fields */}
                                        {(editingUser.role === 'admin' || editingUser.role === 'staff') && (
                                            <div className="grid grid-cols-4 items-center gap-4">
                                            <Label className="text-right">Dept</Label>
                                            <Input value={editingUser.department || ''} onChange={e => setEditingUser({...editingUser, department: e.target.value})} className="col-span-3" />
                                            </div>
                                        )}
                                        {editingUser.role === 'student' && (
                                            <>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label className="text-right">Measure #</Label>
                                                <Input value={editingUser.measureNumber || ''} onChange={e => setEditingUser({...editingUser, measureNumber: e.target.value})} className="col-span-3" />
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label className="text-right">Track</Label>
                                                <Select value={editingUser.educationTrackId || ''} onValueChange={v => setEditingUser({...editingUser, educationTrackId: v})}>
                                                    <SelectTrigger className="col-span-3"><SelectValue placeholder="No Track" /></SelectTrigger>
                                                    <SelectContent>
                                                        {tracks.map(t => (
                                                            <SelectItem key={t.id} value={t.id}>{t.title}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            </>
                                        )}

                                        <DialogFooter>
                                            <Button type="submit">Save Changes</Button>
                                        </DialogFooter>
                                    </form>
                                )}
                            </DialogContent>
                        </Dialog>

                        <Button variant="ghost" size="icon" onClick={() => handleDelete(user.id)} className="text-destructive hover:text-destructive">
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
