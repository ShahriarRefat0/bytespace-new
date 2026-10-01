import { notFound } from "next/navigation";

import { courses } from "@/data/courses/courses";
import { courseDetails } from "@/data/courses/course-details";
import { courseLessons } from "@/data/courses/course-lessons";
import { courseReviews } from "@/data/courses/course-reviews";
import { instructors } from "@/data/courses/instructors";

export default async function CourseDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const course = courses.find(
    (course) => course.slug === slug,
  );

  if (!course) {
    notFound();
  }

  const details = courseDetails.find(
    (detail) => detail.courseId === course.id,
  );

  const lessons = courseLessons
    .filter((lesson) => lesson.courseId === course.id)
    .sort((a, b) => a.order - b.order);

  const reviews = courseReviews.filter(
    (review) => review.courseId === course.id,
  );

  const instructor = instructors.find(
    (instructor) =>
      instructor.id === course.instructorId,
  );

  const courseData = {
    ...course,
    ...details,
    lessons,
    reviews,
    instructor,
  };

  return (
    <>
      {/* Hero */}
      {/* About / Lessons / Reviews */}
    </>
  );
}