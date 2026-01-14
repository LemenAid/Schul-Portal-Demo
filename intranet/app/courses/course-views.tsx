"use client";

import { useState } from "react";
import { format, startOfWeek, addDays, isSameDay, isWithinInterval, startOfDay, endOfDay } from "date-fns";
import { de } from "date-fns/locale";
import { 
  CalendarDays, 
  Grid, 
  List, 
  ChevronLeft, 
  ChevronRight, 
  User, 
  BookOpen,
  Laptop,
  Coffee,
  GraduationCap
} from "lucide-react";
import Link from "next/link";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";

// Types based on the Prisma schema and the include structure
type Teacher = {
  id: string;
  name: string;
  email: string;
};

type Topic = {
  id: string;
  title: string;
  durationUnits: number;
  startDate: Date | string;
  endDate: Date | string;
};

type Course = {
  id: string;
  title: string;
  description: string | null;
  startDate: Date | string;
  endDate: Date | string;
  teachers: Teacher[];
  topics: Topic[];
  exams?: { id: string }[];
};

interface CourseViewsProps {
  courses: Course[];
  isTeacherView?: boolean;
}

const DAILY_SCHEDULE = [
  { start: "08:00", end: "08:45", label: "Pre-UE", type: "lesson", isTele: false, isPreUe: true },
  { start: "08:45", end: "09:30", label: "UE 1", type: "lesson", isTele: false },
  { start: "09:30", end: "09:45", label: "Pause", type: "break", isTele: false },
  { start: "09:45", end: "11:15", label: "UE 2-3", type: "lesson", isTele: false },
  { start: "11:15", end: "11:30", label: "Pause", type: "break", isTele: false },
  { start: "11:30", end: "13:00", label: "UE 4-5", type: "lesson", isTele: false },
  { start: "13:00", end: "13:30", label: "Mittagspause", type: "break", isTele: false },
  { start: "13:30", end: "15:00", label: "UE 6-7", type: "lesson", isTele: true },
  { start: "15:00", end: "15:15", label: "Pause", type: "break", isTele: false },
  { start: "15:15", end: "16:45", label: "UE 8-9", type: "lesson", isTele: true },
  { start: "16:45", end: "17:30", label: "UE 10", type: "lesson", isTele: true, optional: true },
];

export function CourseViews({ courses, isTeacherView = false }: CourseViewsProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  // --- Weekly View Logic ---
  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 }); // Monday
  const weekDays = Array.from({ length: 5 }).map((_, i) => addDays(weekStart, i)); // Mon-Fri

  const nextWeek = () => setCurrentDate(addDays(currentDate, 7));
  const prevWeek = () => setCurrentDate(addDays(currentDate, -7));
  const today = () => setCurrentDate(new Date());

  const getTopicsForDay = (day: Date) => {
    const activeTopics: { topic: Topic; course: Course }[] = [];

    courses.forEach(course => {
      course.topics.forEach(topic => {
        const topicStart = new Date(topic.startDate);
        const topicEnd = new Date(topic.endDate);

        if (isWithinInterval(day, { start: startOfDay(topicStart), end: endOfDay(topicEnd) })) {
           activeTopics.push({ topic, course });
        }
      });
    });

    return activeTopics;
  };

  const isPastDay = (day: Date) => {
      return endOfDay(day) < new Date();
  }

  const isPastTime = (day: Date, endTimeStr: string) => {
      const [hours, minutes] = endTimeStr.split(':').map(Number);
      const slotEnd = new Date(day);
      slotEnd.setHours(hours, minutes, 0, 0);
      return slotEnd < new Date();
  }

  return (
    <Tabs defaultValue="week" className="w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <TabsList className="grid w-full sm:w-auto grid-cols-3">
          <TabsTrigger value="week"><CalendarDays className="mr-2 h-4 w-4"/> Woche</TabsTrigger>
          <TabsTrigger value="tiles"><Grid className="mr-2 h-4 w-4"/> Kacheln</TabsTrigger>
          <TabsTrigger value="list"><List className="mr-2 h-4 w-4"/> Liste</TabsTrigger>
        </TabsList>
      </div>

      {/* --- WEEKLY VIEW --- */}
      <TabsContent value="week" className="space-y-4">
        <div className="flex items-center justify-between bg-muted/50 p-2 rounded-lg mb-4">
          <Button variant="ghost" size="icon" onClick={prevWeek}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="font-semibold text-lg flex items-center gap-2">
            {format(weekStart, "d. MMMM", { locale: de })} - {format(weekDays[4], "d. MMMM yyyy", { locale: de })}
            <Button variant="outline" size="sm" className="ml-4 h-7 text-xs" onClick={today}>Heute</Button>
          </div>
          <Button variant="ghost" size="icon" onClick={nextWeek}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {weekDays.map((day) => {
             const topics = getTopicsForDay(day);
             const isToday = isSameDay(day, new Date());
             const dayIsPast = isPastDay(day);

             return (
              <Card key={day.toISOString()} className={`flex flex-col h-full border-2 ${isToday ? 'border-primary shadow-md' : 'border-transparent'}`}>
                <CardHeader className={`p-3 bg-muted/30 text-center border-b ${dayIsPast ? 'bg-green-100 dark:bg-green-900/20' : ''}`}>
                  <span className="text-sm text-muted-foreground uppercase font-bold">{format(day, "EEEE", { locale: de })}</span>
                  <span className={`text-2xl font-bold ${isToday ? 'text-primary' : ''}`}>{format(day, "d")}</span>
                </CardHeader>
                <CardContent className="p-0 flex-1 flex flex-col min-h-[200px]">
                  {topics.length > 0 ? (
                    <div className="flex flex-col">
                      {DAILY_SCHEDULE.map((slot, index) => {
                        const slotIsPast = isPastTime(day, slot.end);
                        const isTele = slot.isTele;

                        if (slot.isPreUe) {
                             const isFriday = format(day, 'EEEE', { locale: de }) === 'Freitag';
                             const preUeContent = isFriday ? "Stuhl-Yoga" : "Ankommen, Einloggen, Stoff vom Vortag wiederholen";

                             return (
                                <div key={index} className={`p-2 border-b text-sm ${slotIsPast ? 'bg-green-50 dark:bg-green-900/10' : ''}`}>
                                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                                      <span className="font-mono bg-muted px-1 rounded">{slot.start} - {slot.end}</span>
                                      <span className="font-semibold text-[10px] uppercase tracking-wider">{slot.label}</span>
                                    </div>
                                    <div className="text-xs italic text-muted-foreground">{preUeContent}</div>
                                </div>
                             )
                        }

                        if (slot.type === 'break') {
                           return (
                             <div key={index} className={`flex items-center justify-center py-1 border-b border-dashed text-xs text-muted-foreground gap-1 ${slotIsPast ? 'bg-green-50/50 dark:bg-green-900/10' : 'bg-muted/20'}`}>
                                <Coffee className="h-3 w-3" />
                                <span>{slot.label} ({slot.start}-{slot.end})</span>
                             </div>
                           )
                        }

                        const holidayTopic = topics.find(t => t.topic.title.toLowerCase().includes("ferien") || t.topic.title.toLowerCase().includes("feiertag") || t.topic.title.toLowerCase().includes("frei"));

                        if (holidayTopic) {
                             return (
                                  <div key={index} className="p-2 border-b text-sm bg-purple-100 dark:bg-purple-900/20">
                                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                                          <span className="font-mono bg-muted px-1 rounded">{slot.start} - {slot.end}</span>
                                      </div>
                                      <div className="font-bold text-purple-700 dark:text-purple-300">{holidayTopic.topic.title}</div>
                                  </div>
                             )
                        }

                        return (
                          <div key={index} className={`p-2 border-b text-sm ${slotIsPast ? 'bg-green-50 dark:bg-green-900/10' : (isTele ? 'bg-blue-50/50 dark:bg-blue-950/10' : '')}`}>
                            <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                              <span className="font-mono bg-muted px-1 rounded">{slot.start} - {slot.end}</span>
                              <span className="font-semibold text-[10px] uppercase tracking-wider">{slot.label}</span>
                            </div>
                            
                            {topics.map(({ topic, course }, idx) => (
                              <div key={`${topic.id}-${idx}`} className="space-y-1">
                                {isTele && (
                                  <Badge variant="secondary" className="h-5 text-[10px] px-1 mb-1 gap-1">
                                    <Laptop className="h-3 w-3" /> Tele-learning
                                  </Badge>
                                )}
                                <div className="font-semibold text-primary text-xs line-clamp-1" title={course.title}>{course.title}</div>
                                <div className="text-xs line-clamp-2">{topic.title}</div>
                              </div>
                            ))}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="h-full flex items-center justify-center text-muted-foreground text-sm italic p-4 bg-purple-50/30 dark:bg-purple-900/5">
                      Frei / Keine Kurse
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </TabsContent>

      {/* --- TILE VIEW --- */}
      <TabsContent value="tiles">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="line-clamp-2 leading-tight flex justify-between gap-2">
                    <span>{course.title}</span>
                </CardTitle>
                <CardDescription className="flex items-center gap-2 mt-2">
                    <CalendarDays className="h-4 w-4" />
                    {new Date(course.startDate).toLocaleDateString('de-DE')} - {new Date(course.endDate).toLocaleDateString('de-DE')}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-4">
                <div className="flex-1 text-sm text-gray-600 line-clamp-3">
                  {course.description || "Keine Beschreibung verfügbar."}
                </div>
                
                <div className="pt-4 border-t space-y-2">
                    <div className="flex items-start gap-2 text-sm">
                        <User className="h-4 w-4 mt-0.5 text-muted-foreground" />
                        <div>
                            <span className="font-medium">Dozenten:</span>
                            <div className="text-muted-foreground">
                                {course.teachers.length > 0 ? course.teachers.map(t => t.name).join(", ") : "Keine Dozenten zugewiesen"}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span>{course.topics.length} Themengebiete</span>
                    </div>
                </div>

                {isTeacherView && (
                    <div className="pt-2">
                         <Button asChild variant="outline" className="w-full gap-2">
                            <Link href={`/teacher/course/${course.id}/grades`}>
                                <GraduationCap size={16} />
                                Noten eintragen
                            </Link>
                        </Button>
                    </div>
                )}
              </CardContent>
            </Card>
          ))}
          {courses.length === 0 && <div className="col-span-full text-center p-10 text-muted-foreground">Keine Kurse gefunden.</div>}
        </div>
      </TabsContent>

      {/* --- LIST VIEW --- */}
      <TabsContent value="list">
        <Card>
            <CardHeader>
                <CardTitle>Kursübersicht & Themen</CardTitle>
                <CardDescription>Detaillierte Auflistung aller Kurse und deren Inhalte.</CardDescription>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    {courses.map((course) => (
                        <AccordionItem key={course.id} value={course.id}>
                            <AccordionTrigger className="hover:no-underline px-4 hover:bg-muted/50 rounded-lg">
                                <div className="flex flex-col sm:flex-row sm:items-center text-left gap-2 sm:gap-6 w-full pr-4">
                                    <span className="font-semibold text-lg">{course.title}</span>
                                    <Badge variant="outline" className="w-fit whitespace-nowrap">
                                        {new Date(course.startDate).toLocaleDateString('de-DE')} - {new Date(course.endDate).toLocaleDateString('de-DE')}
                                    </Badge>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-4 pt-2">
                                <div className="mb-4 text-muted-foreground">
                                    {course.description}
                                </div>
                                
                                {course.teachers.length > 0 && (
                                    <div className="mb-4 flex items-center gap-2 text-sm">
                                        <User className="h-4 w-4" />
                                        <span className="font-semibold">Dozenten:</span> 
                                        {course.teachers.map(t => t.name).join(", ")}
                                    </div>
                                )}

                                <div className="border rounded-md overflow-hidden">
                                    <div className="bg-muted p-2 text-sm font-semibold grid grid-cols-12 gap-4">
                                        <div className="col-span-6 md:col-span-5">Thema</div>
                                        <div className="col-span-3 md:col-span-2 text-center">Dauer (UE)</div>
                                        <div className="col-span-3 md:col-span-5 text-right md:text-left">Zeitraum</div>
                                    </div>
                                    <ScrollArea className="h-[300px]">
                                        {course.topics.length > 0 ? (
                                            <div className="divide-y">
                                                {course.topics.map((topic) => (
                                                    <div key={topic.id} className="p-3 text-sm grid grid-cols-12 gap-4 items-center hover:bg-muted/20">
                                                        <div className="col-span-6 md:col-span-5 font-medium">{topic.title}</div>
                                                        <div className="col-span-3 md:col-span-2 text-center">
                                                            <Badge variant="secondary">{topic.durationUnits} UE</Badge>
                                                        </div>
                                                        <div className="col-span-3 md:col-span-5 text-right md:text-left text-muted-foreground text-xs md:text-sm">
                                                            {new Date(topic.startDate).toLocaleDateString('de-DE')} - {new Date(topic.endDate).toLocaleDateString('de-DE')}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="p-8 text-center text-muted-foreground">Keine Themen eingetragen.</div>
                                        )}
                                    </ScrollArea>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
