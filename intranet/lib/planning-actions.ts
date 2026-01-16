"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";

// --- Schüler-Management ---

export async function createStudentAction(formData: FormData) {
  const user = await getCurrentUser();
  if (!user || (user.role !== "staff" && user.role !== "admin")) {
    throw new Error("Unauthorized");
  }

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const measureNumber = formData.get("measureNumber") as string; // Format: 123/456/2024
  const startTerm = formData.get("startTerm") as string; // "Winter 2024", "Sommer 2025" etc.

  // Validierung der Maßnahmennummer
  const measureRegex = /^\d{3}\/\d{3}\/\d{4}$/;
  if (!measureRegex.test(measureNumber)) {
     throw new Error("Ungültiges Format der Maßnahmennummer. Erwartet: 123/456/YYYY");
  }

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        role: "student",
        measureNumber: measureNumber,
        department: startTerm // Wir nutzen das department-Feld, um die Kohorte zu speichern
      }
    });

    // Optional: Direkt den Kursen dieser Kohorte zuweisen?
    // Das würde erfordern, dass wir Kurse auch explizit einer Kohorte zuordnen können,
    // aktuell machen wir das über das Datum im Frontend. 
    // Für eine "echte" Automatisierung müsste man filtern, welche Kurse zu "StartTerm" passen.
    // Das ist im MVP vllt. zu komplex, aber der Student ist jetzt markiert.

  } catch (e) {
    console.error("Failed to create student", e);
    throw new Error("Student konnte nicht angelegt werden (Email existiert evtl. schon)");
  }

  revalidatePath("/planning");
  redirect("/planning");
}


// --- Umschulungs-Management ---

export async function createTrackAction(formData: FormData) {
  const user = await getCurrentUser();
  if (!user || (user.role !== "staff" && user.role !== "admin")) {
    throw new Error("Unauthorized");
  }

  const title = formData.get("title") as string;
  const startDate = new Date(formData.get("startDate") as string);
  const endDate = new Date(formData.get("endDate") as string);

  await prisma.educationTrack.create({
    data: {
      title,
      startDate,
      endDate
    }
  });

  revalidatePath("/planning");
  redirect("/planning");
}

// --- Kurs-Management ---

export async function createCourseAction(formData: FormData) {
    const user = await getCurrentUser();
    if (!user || (user.role !== "staff" && user.role !== "admin")) {
      throw new Error("Unauthorized");
    }
  
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const startDate = new Date(formData.get("startDate") as string);
    const endDate = new Date(formData.get("endDate") as string);
  

    const trackId = formData.get("trackId") as string;
    const roomId = formData.get("roomId") as string;

    await prisma.course.create({
      data: {
        title,
        description,
        startDate,
        endDate,
        educationTrackId: trackId || null,
        roomId: roomId && roomId !== "none" ? roomId : null
      }
    });
  
    revalidatePath("/planning");
    if (trackId) {
        redirect(`/planning/${trackId}`);
    } else {
        redirect("/planning");
    }
  }

// --- Course Topics (Themengebiete) Management ---

export async function createCourseTopicAction(formData: FormData) {
    const user = await getCurrentUser();
    if (!user || (user.role !== "staff" && user.role !== "admin")) {
      throw new Error("Unauthorized");
    }
  
    const courseId = formData.get("courseId") as string;
    const title = formData.get("title") as string;
    const durationUnits = parseInt(formData.get("durationUnits") as string);
    const startDate = new Date(formData.get("startDate") as string);
    const endDate = new Date(formData.get("endDate") as string);

    await prisma.courseTopic.create({
      data: {
        courseId,
        title,
        durationUnits,
        startDate,
        endDate
      }
    });
  
    revalidatePath("/planning");
    revalidatePath(`/planning/course/${courseId}`);
  }

export async function updateCourseTopicAction(formData: FormData) {
    const user = await getCurrentUser();
    if (!user || (user.role !== "staff" && user.role !== "admin")) {
      throw new Error("Unauthorized");
    }
  
    const topicId = formData.get("topicId") as string;
    const courseId = formData.get("courseId") as string;
    const title = formData.get("title") as string;
    const durationUnits = parseInt(formData.get("durationUnits") as string);
    const startDate = new Date(formData.get("startDate") as string);
    const endDate = new Date(formData.get("endDate") as string);

    await prisma.courseTopic.update({
      where: { id: topicId },
      data: {
        title,
        durationUnits,
        startDate,
        endDate
      }
    });
  
    revalidatePath("/planning");
    revalidatePath(`/planning/course/${courseId}`);
  }

export async function deleteCourseTopicAction(topicId: string, courseId: string) {
    const user = await getCurrentUser();
    if (!user || (user.role !== "staff" && user.role !== "admin")) {
      throw new Error("Unauthorized");
    }

    await prisma.courseTopic.delete({
      where: { id: topicId }
    });
    
    revalidatePath("/planning");
    revalidatePath(`/planning/course/${courseId}`);
  }
