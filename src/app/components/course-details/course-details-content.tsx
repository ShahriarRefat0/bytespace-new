"use client";

import { useState } from "react";

import type { Course } from "@/data/courses/courses";
import type { CourseDetail } from "@/data/courses/course-details";
import type { CourseLesson } from "@/data/courses/course-lessons";
import type { CourseReview } from "@/data/courses/course-reviews";
import type { Creator } from "@/app/types/creator";

import { CourseTabs } from "./course-tabs";
import { CourseDescription } from "./course-description";
import { CourseSneakPeek } from "./course-sneak-peek";
import { CourseKeyPoints } from "./course-key-points";
// import { CourseInstructor } from "./course-instructor";

interface CourseDetailsContentProps {
  course: Course;
  details?: CourseDetail;
  lessons: CourseLesson[];
  reviews: CourseReview[];
}

export function CourseDetailsContent({
  course,
  details,
  lessons,
  reviews,
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
                    description={details?.description ?? []}
                  />
                </div>

                <CourseSneakPeek
                  images={details?.previewImages ?? []}
                />

                <CourseKeyPoints
                  points={details?.keyPoints ?? []}
                />

              </>
            )}

            {/* Lessons */}
            {activeTab === "Lessons" && (
              <div className="mt-8">
                <h2 className="text-lg font-bold text-gray-900">
                  Course Lessons
                </h2>

                {lessons.length > 0 ? (
                  <div className="mt-5 divide-y divide-gray-100 rounded-2xl border border-gray-100">
                    {lessons.map((lesson, index) => (
                      <div
                        key={lesson.id}
                        className="flex items-center gap-4 px-5 py-4"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-500">
                          {String(index + 1).padStart(2, "0")}
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
                    ))}
                  </div>
                ) : (
                  <p className="mt-5 text-sm text-gray-400">
                    No lessons available yet.
                  </p>
                )}
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
                        {course.reviewCount} reviews
                      </p>
                    </div>
                  </div>

                  {reviews.length > 0 ? (
                    <div className="mt-6 space-y-4">
                      {reviews.map((review) => (
                        <div
                          key={review.id}
                          className="border-t border-gray-100 pt-4"
                        >
                          <p className="text-sm font-medium text-gray-800">
                            {review.userName}
                          </p>

                          <p className="mt-1 text-sm text-gray-500">
                            {review.comment}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-6 text-sm text-gray-400">
                      No reviews available yet.
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Empty right space */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}