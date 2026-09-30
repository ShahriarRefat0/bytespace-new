import { CourseCategories } from "../components/home/courses/course-categories";
import { CourseFilters } from "../components/home/courses/course-filters";
import { CourseGrid } from "../components/home/courses/course-grid";
import { CoursePagination } from "../components/home/courses/course-pagination";
import { CoursesHero } from "../components/home/courses/courses-hero";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-white">
      <CoursesHero />

      <section className="mx-auto max-w-[1240px] px-6 py-10">
        <CourseFilters />

        <CourseCategories />

        <CourseGrid />

        <CoursePagination />
      </section>
    </main>
  );
}