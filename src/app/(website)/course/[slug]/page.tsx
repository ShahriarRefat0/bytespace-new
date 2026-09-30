import { notFound } from "next/navigation";

import { courses } from "@/data/courses";

import { CourseDetailsHero } from "@/app/components/course-details/course-details-hero";
import { CourseDetailsContent } from "@/app/components/course-details/course-details-content";

interface CourseDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CourseDetailsPage({
  params,
}: CourseDetailsPageProps) {
  const { slug } = await params;

  const course = courses.find(
    (course) => course.slug === slug,
  );

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <CourseDetailsHero course={course} />

      <CourseDetailsContent course={course} />
    </main>
  );
}