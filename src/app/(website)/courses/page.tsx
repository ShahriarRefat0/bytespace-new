"use client";

import { useState } from "react";
import { GridBackground } from "@/app/components/ui/grid-background";
import { CoursesHero } from "@/app/components/courses/courses-hero";
import { CourseFilters } from "@/app/components/courses/course-filters";
import { CourseCategories } from "@/app/components/courses/course-categories";
import { CourseGrid } from "@/app/components/courses/course-grid";
import { CoursePagination } from "@/app/components/courses/course-pagination";
import { courses } from "@/data/courses";

export default function CoursesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const totalPages = Math.ceil(courses.length / pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const element = document.getElementById("course-grid-top");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <GridBackground minHeight="min-h-0">
        <CoursesHero />
      </GridBackground>

      <main className="bg-white">
        <section className="mx-auto max-w-[1240px] px-6 py-10">
          <CourseFilters />
          <CourseCategories />
          <CourseGrid currentPage={currentPage} pageSize={pageSize} />
          <CoursePagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </section>
      </main>
    </div>
  );
}