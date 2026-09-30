import { GridBackground } from "@/app/components/ui/grid-background";
import type { Course } from "@/data/courses";
import { Share2, Star, Users, BarChart3 } from "lucide-react";

import { CoursePreview } from "./course-preview";
import { CourseSidebar } from "./course-sidebar";

interface CourseDetailsHeroProps {
  course: Course;
}

export function CourseDetailsHero({
  course,
}: CourseDetailsHeroProps) {
  return (
    <GridBackground minHeight="min-h-0">
      <section className="pt-28 pb-10">
        <div className="mx-auto max-w-[1240px] px-6">
          {/* Course Header */}
          <div className="flex flex-col gap-6">
            {/* Title + Share */}
            <div className="flex items-start justify-between gap-6">
              <div className="max-w-[900px]">
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-[38px]">
                  {course.title}
                </h1>

                {course.subtitle && (
                  <p className="mt-2 text-sm text-white/80 md:text-base">
                    {course.subtitle}
                  </p>
                )}

                <p className="mt-4 text-sm text-white/80">
                  by{" "}
                  <span className="font-medium text-[#d8ff00]">
                    {course.instructor}
                  </span>
                </p>
              </div>

              <button
                type="button"
                className="flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-[#d8ff00] px-5 py-2.5 text-sm font-medium text-black transition hover:bg-[#c8ef00]"
              >
                <Share2 size={15} />
                Share
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-gray-700">
                <BarChart3
                  size={15}
                  className="text-[#1555e8]"
                />
                {course.level}
              </div>

              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-gray-700">
                <Star
                  size={15}
                  fill="currentColor"
                  className="text-[#1555e8]"
                />

                <span>
                  {course.rating}
                  {course.reviewCount
                    ? ` (${course.reviewCount} reviews)`
                    : ""}
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-gray-700">
                <Users
                  size={15}
                  className="text-[#1555e8]"
                />

                <span>
                  {course.studentCount} Students
                </span>
              </div>
            </div>

            {/* Preview + Sidebar */}
            <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_330px]">
              <CoursePreview course={course} />

              <CourseSidebar course={course} />
            </div>
          </div>
        </div>
      </section>
    </GridBackground>
  );
}