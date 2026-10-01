import Image from "next/image";
import type { Course } from "@/data/courses/courses";

interface CourseInstructorProps {
  course: Course;
}

export function CourseInstructor({
  course,
}: CourseInstructorProps) {
  return (
    <section className="mt-10 border-t border-gray-100 pt-8">
      <h2 className="text-lg font-bold text-gray-900">
        Your Instructor
      </h2>

      <div className="mt-5 flex items-start gap-4">
        {course.instructorAvatar ? (
          <Image
            src={course.instructorAvatar}
            alt={course.instructor}
            width={64}
            height={64}
            className="h-16 w-16 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gray-100 text-lg font-semibold text-gray-500">
            {course.instructor.charAt(0)}
          </div>
        )}

        <div>
          <h3 className="font-semibold text-gray-900">
            {course.instructor}
          </h3>

          <p className="mt-1 text-xs text-gray-400">
            Professional Creator
          </p>

          {course.instructorBio && (
            <p className="mt-3 text-sm leading-6 text-gray-500">
              {course.instructorBio}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}