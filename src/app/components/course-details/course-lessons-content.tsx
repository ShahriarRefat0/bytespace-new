import { Video } from "lucide-react";

import type { CourseLesson } from "@/data/courses/course-lessons";

interface CourseLessonsContentProps {
  lessons: CourseLesson[];
  progress?: number;
}

export function CourseLessonsContent({
  lessons,
  progress = 55,
}: CourseLessonsContentProps) {
  return (
    <div className="mt-10 w-full">
      {/* Explore the Modules */}
      <div>
        <h2 className="text-lg font-bold text-gray-900">
          Explore the Modules
        </h2>

        <p className="mt-4 w-full text-sm leading-6 text-gray-500">
          Immerse yourself in the course content as we break down each
          module into comprehensive lessons, providing practical insights
          and hands-on experiences.
        </p>
      </div>

      {/* Lesson List */}
      <div className="mt-7">
        <h3 className="text-base font-bold text-gray-900">
          Lesson List
        </h3>

        <div className="mt-6 space-y-5">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="flex w-full items-start gap-4"
            >
              {/* Video Icon */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[18px] bg-[#d8ff00]">
                <Video
                  size={25}
                  strokeWidth={2.5}
                  className="text-black"
                />
              </div>

              {/* Lesson Content */}
              <div className="min-w-0 flex-1 pt-0.5">
                <h4 className="text-sm font-semibold leading-5 text-gray-900">
                  {lesson.module}
                  {lesson.title && `: ${lesson.title}`}
                </h4>

                {lesson.description && (
                  <p className="mt-1 w-full text-sm leading-6 text-gray-500">
                    {lesson.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lesson Content */}
      <div className="mt-10 w-full">
        <h3 className="text-base font-bold text-gray-900">
          Lesson Content
        </h3>

        <p className="mt-4 w-full text-sm leading-6 text-gray-500">
          Engage with each lesson through captivating video content,
          detailed textual explanations, and interactive elements.
          Download resources, complete assignments, and test your
          understanding with quizzes.
        </p>
      </div>

      {/* Lesson Progress */}
      <div className="mt-8 w-full">
        <h3 className="text-base font-bold text-gray-900">
          Lesson Progress Tracking
        </h3>

        <p className="mt-4 w-full text-sm leading-6 text-gray-500">
          Witness your growth as you complete lessons, with an intuitive
          progress tracking feature guiding you through your learning
          journey.
        </p>

        {/* Progress Card */}
        <div className="mt-6 w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-medium text-gray-700">
            Learning Progress
          </p>

          <p className="mt-1 text-3xl font-bold text-gray-900">
            {progress}%
          </p>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-[#d8ff00] transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}