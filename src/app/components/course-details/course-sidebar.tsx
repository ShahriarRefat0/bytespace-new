import Image from "next/image";

import {
  Award,
  FileText,
  Handshake,
  Video,
} from "lucide-react";

import type { Course } from "@/data/courses/courses";
import type { CourseDetail } from "@/data/courses/course-details";
import type { CourseLesson } from "@/data/courses/course-lessons";
import type { Creator } from "@/app/types/creator";
import Link from "next/link";

interface CourseSidebarProps {
  course: Course;
  details?: CourseDetail;
  lessons: CourseLesson[];
  creator?: Creator;
}

export function CourseSidebar({
  course,
  details,
  lessons,
  creator,
}: CourseSidebarProps) {
  return (
    <aside className="overflow-hidden relavent z-10 rounded-[18px] border border-gray-100 bg-white shadow-sm">
      <div className="p-6">
        {/* Lessons */}
        <div>
          <h3 className="text-base font-bold text-gray-900">
            {lessons.length} Lessons
            {details?.duration && (
              <span className="font-bold">
                {" "}
                ({details.duration})
              </span>
            )}
          </h3>

          {/* Lesson Preview */}
          {lessons.length > 0 && (
            <div className="mt-5 space-y-4">
              {lessons.slice(0, 3).map((lesson, index) => (
                <div
                  key={lesson.id}
                  className="flex items-start gap-3"
                >
                  {/* Number */}
                  <span className="w-6 shrink-0 text-xs font-medium text-gray-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Lesson title */}
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium leading-4 text-gray-700">
                      {lesson.title}
                    </p>
                  </div>

                  {/* Duration */}
                  <span className="shrink-0 text-[11px] font-medium text-[#1555e8]">
                    {lesson.duration}
                  </span>
                </div>
              ))}

              {/* More lessons */}
              {lessons.length > 3 && (
                <p className="pt-1 text-xs text-gray-400">
                  {lessons.length - 3} more videos
                </p>
              )}
            </div>
          )}
        </div>

        {/* CTA Text */}
        <p className="mt-8 text-sm leading-6 text-gray-500">
          Ready to Dive In? Enroll Now and Start
          <br />
          Building Your Digital Future!
        </p>

        {/* Price */}
        <div className="mt-6 flex items-end">
          <span className="text-3xl font-bold leading-none text-[#1555e8]">
            ${course.price}
          </span>

          <span className="mb-0.5 ml-1 text-xs text-gray-400">
            /lifetime
          </span>
        </div>

        {/* Enroll */}
        <button
          type="button"
          className="mt-5 w-full cursor-pointer rounded-full bg-[#d8ff00] py-3 text-sm font-semibold text-black transition hover:bg-[#c8ef00]"
        >
          Enroll Now
        </button>

        {/* Includes */}
        {details?.includes && details.includes.length > 0 && (
          <div className="mt-7 border-t border-gray-100 pt-6">
            <h4 className="text-base font-bold text-gray-900">
              This course include
            </h4>

            <div className="mt-5 space-y-4">
              {details.includes.map((item, index) => {
                const icons = [
                  FileText,
                  Video,
                  Award,
                  Handshake,
                ];

                const Icon = icons[index % icons.length];

                return (
                  <div
                    key={`${item}-${index}`}
                    className="flex items-center gap-3"
                  >
                    <Icon
                      size={17}
                      strokeWidth={2}
                      className="shrink-0 text-[#1555e8]"
                    />

                    <span className="text-xs text-gray-500">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Creator */}
        {creator && (
          <div className="mt-6 border-t border-gray-100 pt-6">
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-gray-100">
                <Image
                  src={creator.avatar}
                  alt={creator.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Creator Info */}
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-gray-900">
                  {creator.name}
                </p>

                <p className="mt-0.5 text-xs text-gray-400">
                  {creator.role}
                </p>
              </div>
            </div>

            {/* Creator Bio */}
            <p className="mt-5 mb-5  text-xs leading-5 text-gray-500">
              Ready to Dive In? Enroll Now and Start
              Building Your Digital Future!
            </p>

            {/* Profile */}
            <Link
              className="cursor-pointer rounded-full border border-gray-200 px-4 py-2 text-xs font-medium text-gray-600 transition hover:bg-gray-50"
              href={`/creators/${creator.slug}`}>
              See Full Profile
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
}