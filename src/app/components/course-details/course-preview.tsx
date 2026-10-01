"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import type { Course } from "@/data/courses/courses";

interface CoursePreviewProps {
  course: Course;
}

export function CoursePreview({
  course,
}: CoursePreviewProps) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-[18px] bg-gray-200 shadow-sm">
      <Image
        src={course.image}
        alt={course.title}
        fill
        priority
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 900px"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Play */}
      <button
        type="button"
        aria-label="Play course preview"
        className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-xl transition hover:scale-105"
      >
        <Play
          size={25}
          fill="currentColor"
          className="ml-1 text-[#1555e8]"
        />
      </button>
    </div>
  );
}