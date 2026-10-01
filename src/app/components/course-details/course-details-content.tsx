"use client";

import { useState } from "react";
import type { Course } from "@/data/courses/courses";

import { CourseTabs } from "./course-tabs";
import { CourseDescription } from "./course-description";
import { CourseSneakPeek } from "./course-sneak-peek";
import { CourseKeyPoints } from "./course-key-points";
import { CourseInstructor } from "./course-instructor";

interface CourseDetailsContentProps {
  course: Course;
}

export function CourseDetailsContent({
  course,
}: CourseDetailsContentProps) {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1240px] px-6 py-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_330px]">
          {/* Main Content */}
          <div>
            <CourseTabs
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />

            {/* About */}
            {activeTab === "About" && (
              <>
                <div className="mt-8">
                  <CourseDescription
                    description={course.description}
                  />
                </div>

                <CourseSneakPeek
                  images={course.previewImages}
                />

                <CourseKeyPoints
                  points={course.keyPoints}
                />

                <CourseInstructor course={course} />
              </>
            )}

            {/* Lessons */}
            {activeTab === "Lessons" && (
              <div className="mt-8">
                <h2 className="text-lg font-bold text-gray-900">
                  Course Lessons
                </h2>

                <div className="mt-5 divide-y divide-gray-100 rounded-2xl border border-gray-100">
                  {course.lessons?.map(
                    (lesson, index) => (
                      <div
                        key={lesson.id}
                        className="flex items-center gap-4 px-5 py-4"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-500">
                          {String(index + 1).padStart(
                            2,
                            "0",
                          )}
                        </span>

                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-gray-800">
                            {lesson.title}
                          </p>
                        </div>

                        <span className="text-xs text-[#1555e8]">
                          {lesson.duration}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}

            {/* Reviews */}
            {activeTab === "Reviews" && (
              <div className="mt-8">
                <h2 className="text-lg font-bold text-gray-900">
                  Course Reviews
                </h2>

                <div className="mt-5 rounded-2xl border border-gray-100 p-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-gray-900">
                      {course.rating}
                    </span>

                    <div>
                      <div className="text-[#1555e8]">
                        ★★★★★
                      </div>

                      <p className="mt-1 text-xs text-gray-400">
                        {course.reviewCount ?? 0} reviews
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 text-sm text-gray-400">
                    Student reviews will appear here.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Empty right space on desktop to align with hero sidebar */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}