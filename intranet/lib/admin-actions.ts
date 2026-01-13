'use server'

import { prisma } from './prisma'
import { revalidatePath } from 'next/cache'
import { getCurrentUser } from './auth'
import { redirect } from 'next/navigation'

// Helper check for admin role
async function requireAdmin() {
  const user = await getCurrentUser()
  if (!user || user.role !== 'admin') {
    throw new Error('Unauthorized: Admin access required')
  }
}

export async function getUsers() {
  await requireAdmin()
  return await prisma.user.findMany({
    orderBy: { name: 'asc' },
    include: {
        educationTrack: true
    }
  })
}

export async function createUser(formData: FormData) {
  await requireAdmin()

  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const role = formData.get('role') as string
  const department = formData.get('department') as string | null
  const measureNumber = formData.get('measureNumber') as string | null
  const educationTrackId = formData.get('educationTrackId') as string | null

  if (!name || !email || !role) {
    throw new Error('Missing required fields')
  }

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        role,
        department: department || undefined,
        measureNumber: measureNumber || undefined,
        educationTrackId: educationTrackId || undefined
      }
    })
    revalidatePath('/admin/users')
    return { success: true }
  } catch (error) {
    console.error('Failed to create user:', error)
    return { success: false, error: 'Failed to create user. Email might be taken.' }
  }
}

export async function updateUser(userId: string, formData: FormData) {
  await requireAdmin()

  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const role = formData.get('role') as string
  const department = formData.get('department') as string | null
  const measureNumber = formData.get('measureNumber') as string | null
  const educationTrackId = formData.get('educationTrackId') as string | null

  try {
    await prisma.user.update({
      where: { id: userId },
      data: {
        name,
        email,
        role,
        department: department || null,
        measureNumber: measureNumber || null,
        educationTrackId: educationTrackId || null
      }
    })
    revalidatePath('/admin/users')
    return { success: true }
  } catch (error) {
    console.error('Failed to update user:', error)
    return { success: false, error: 'Failed to update user.' }
  }
}

export async function deleteUser(userId: string) {
  await requireAdmin()

  try {
    await prisma.user.delete({
      where: { id: userId }
    })
    revalidatePath('/admin/users')
    return { success: true }
  } catch (error) {
    console.error('Failed to delete user:', error)
    return { success: false, error: 'Failed to delete user.' }
  }
}

export async function getEducationTracks() {
    // Helper to fetch tracks for the dropdown
    await requireAdmin()
    return await prisma.educationTrack.findMany({
        orderBy: { startDate: 'desc' }
    })
}
