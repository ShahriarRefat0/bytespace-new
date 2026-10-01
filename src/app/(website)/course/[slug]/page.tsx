import { notFound } from "next/navigation";
import { CourseDetailsHero } from "@/app/components/course-details/course-details-hero";
import { courseDetails } from "@/data/courses/course-details";
import { courseLessons } from "@/data/courses/course-lessons";
import { courseReviews } from "@/data/courses/course-reviews";
import { courses } from "@/data/courses/courses";
import { creators } from "@/data/creators/creators";
import { CourseDetailsContent } from "@/app/components/course-details/course-details-content";
import { CourseSidebar } from "@/app/components/course-details/course-sidebar";

export default async function CourseDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Find course
  const course = courses.find(
    (course) => course.slug === slug,
  );

  if (!course) {
    notFound();
  }

  // Find course details
  const details = courseDetails.find(
    (detail) => detail.courseId === course.id,
  );

  // Find lessons
  const lessons = courseLessons
    .filter((lesson) => lesson.courseId === course.id)
    .sort((a, b) => a.order - b.order);

  // Find reviews
  const reviews = courseReviews.filter(
    (review) => review.courseId === course.id,
  );

  // Find creator
  const creator = creators.find(
    (creator) => creator.id === course.creatorId,
  );

  return (
    <>
    <CourseDetailsHero
    course={course}
  details={details}
  lessons={lessons}
  creator={creator}
    />

    <section className="bg-white">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_330px]">
          
          {/* Main */}
          <CourseDetailsContent
            course={course}
            details={details}
            lessons={lessons}
            reviews={reviews}
          />

          {/* Sidebar */}
          <div className="lg:-mt-[390px] lg:relative lg:z-20">
            <CourseSidebar
              course={course}
              details={details}
              lessons={lessons}
              creator={creator}
            />
          </div>

        </div>
      </div>
    </section>
  </>
  );
}