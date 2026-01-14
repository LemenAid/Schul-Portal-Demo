"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter } from "next/navigation";

interface ExamSelectorProps {
    exams: { id: string; title: string; date: Date }[];
    currentExamId: string;
    courseId: string;
}

export function ExamSelector({ exams, currentExamId, courseId }: ExamSelectorProps) {
    const router = useRouter();

    return (
        <div className="w-[300px]">
            <label className="text-sm font-medium mb-2 block text-gray-500">Prüfung auswählen</label>
            <Select 
                defaultValue={currentExamId} 
                onValueChange={(value) => router.push(`/teacher/course/${courseId}/grades?examId=${value}`)}
            >
                <SelectTrigger>
                    <SelectValue placeholder="Prüfung wählen" />
                </SelectTrigger>
                <SelectContent>
                    {exams.map((exam) => (
                        <SelectItem key={exam.id} value={exam.id}>
                            {exam.title} ({new Date(exam.date).toLocaleDateString('de-DE')})
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
