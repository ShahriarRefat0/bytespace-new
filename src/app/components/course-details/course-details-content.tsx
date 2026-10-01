"use client";

import { useState } from "react";

import type { Course } from "@/data/courses/courses";
import type { CourseDetail } from "@/data/courses/course-details";
import type { CourseLesson } from "@/data/courses/course-lessons";
import type { CourseReview } from "@/data/courses/course-reviews";

import { CourseTabs } from "./course-tabs";
import { CourseDescription } from "./course-description";
import { CourseSneakPeek } from "./course-sneak-peek";
import { CourseKeyPoints } from "./course-key-points";
import { CourseLessonsContent } from "./course-lessons-content";
import { CourseReviewsContent } from "./course-reviews-content";

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
    <section className="min-w-0 bg-white">
      <div className="py-10">
        {/* Tabs */}
        <CourseTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* About */}
        {activeTab === "About" && (
          <div className="mt-8">
            <CourseDescription
              description={details?.description ?? []}
            />

            <CourseSneakPeek
              images={details?.previewImages ?? []}
            />

            <CourseKeyPoints
              points={details?.keyPoints ?? []}
            />
          </div>
        )}

        {/* Lessons */}
        {activeTab === "Lessons" && (
          <CourseLessonsContent
            lessons={lessons}
            progress={55}
          />
        )}

        {/* Reviews */}
        {activeTab === "Reviews" && (
          <CourseReviewsContent
            course={course}
            reviews={reviews}
          />
        )}
      </div>
    </section>
  );
}