import Image from "next/image";
import { Check, Clock, PlayCircle } from "lucide-react";
import type { Course } from "@/data/courses";

interface CourseSidebarProps {
  course: Course;
}

export function CourseSidebar({
  course,
}: CourseSidebarProps) {
  return (
    <aside className="overflow-hidden rounded-[18px] bg-white shadow-sm">
      <div className="p-6">
        {/* Lessons */}
        <div>
          <h3 className="text-base font-bold text-gray-900">
            {course.lessonCount ?? 0} Lessons
            {course.duration
              ? ` (${course.duration})`
              : ""}
          </h3>

          {/* Lesson list */}
          {course.lessons?.length ? (
            <div className="mt-4 space-y-4">
              {course.lessons
                .slice(0, 3)
                .map((lesson, index) => (
                  <div
                    key={lesson.id}
                    className="flex items-start gap-3"
                  >
                    <span className="text-xs font-medium text-gray-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium leading-4 text-gray-700">
                        {lesson.title}
                      </p>
                    </div>

                    <span className="shrink-0 text-[11px] text-[#1555e8]">
                      {lesson.duration}
                    </span>
                  </div>
                ))}

              {course.lessonCount &&
                course.lessonCount > 3 && (
                  <button
                    type="button"
                    className="flex cursor-pointer items-center gap-1 text-xs font-medium text-gray-500 hover:text-[#1555e8]"
                  >
                    <PlayCircle size={13} />
                    View more lessons
                  </button>
                )}
            </div>
          ) : (
            <p className="mt-3 text-xs text-gray-400">
              Course lessons will be available here.
            </p>
          )}
        </div>

        {/* Price */}
        <div className="mt-6">
          <span className="text-3xl font-bold text-[#1555e8]">
            ${course.price}
          </span>

          <span className="ml-1 text-xs text-gray-400">
            /lifetime
          </span>
        </div>

        {/* Enroll */}
        <button
          type="button"
          className="mt-4 w-full cursor-pointer rounded-full bg-[#d8ff00] py-3 text-sm font-semibold text-black transition hover:bg-[#c8ef00]"
        >
          Enroll Now
        </button>

        {/* Includes */}
        {course.includes?.length ? (
          <div className="mt-7 border-t border-gray-100 pt-6">
            <h4 className="text-sm font-semibold text-gray-900">
              This course includes
            </h4>

            <div className="mt-4 space-y-3">
              {course.includes.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <Check
                    size={15}
                    className="text-[#1555e8]"
                  />

                  <span className="text-xs text-gray-500">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Instructor */}
        <div className="mt-6 border-t border-gray-100 pt-6">
          <div className="flex items-center gap-3">
            {course.instructorAvatar ? (
              <Image
                src={course.instructorAvatar}
                alt={course.instructor}
                width={42}
                height={42}
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xs font-semibold text-gray-500">
                {course.instructor.charAt(0)}
              </div>
            )}

            <div>
              <p className="text-sm font-semibold text-gray-900">
                {course.instructor}
              </p>

              <p className="text-xs text-gray-400">
                Professional Creator
              </p>
            </div>
          </div>

          {course.instructorBio && (
            <p className="mt-3 text-xs leading-5 text-gray-500">
              {course.instructorBio}
            </p>
          )}

          <button
            type="button"
            className="mt-4 rounded-full border border-gray-200 px-4 py-2 text-xs font-medium text-gray-600 transition hover:bg-gray-50"
          >
            See Full Profile
          </button>
        </div>
      </div>
    </aside>
  );
}