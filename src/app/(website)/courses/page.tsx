"use client";

import { useMemo, useState } from "react";

import { GridBackground } from "@/app/components/ui/grid-background";
import { CoursesHero } from "@/app/components/courses/courses-hero";
import { CourseFilters } from "@/app/components/courses/course-filters";
import { CourseCategories } from "@/app/components/courses/course-categories";
import { CourseGrid } from "@/app/components/courses/course-grid";
import { CoursePagination } from "@/app/components/courses/course-pagination";

import { courses } from "@/data/courses/courses";

export default function CoursesPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedCategory, setSelectedCategory] = useState("Featured");

  const [selectedLevel, setSelectedLevel] = useState("All levels");

  const [sortBy, setSortBy] = useState("Most relevant");

  const pageSize = 15;

  /**
   * Filter + Sort Courses
   */
  const filteredCourses = useMemo(() => {
    let result = [...courses];

    // -----------------------------
    // Category Filter
    // -----------------------------
    if (selectedCategory !== "Featured") {
      result = result.filter(
        (course) => course.category === selectedCategory,
      );
    }

    // -----------------------------
    // Level Filter
    // -----------------------------
    if (selectedLevel !== "All levels") {
      result = result.filter(
        (course) => course.level === selectedLevel,
      );
    }

    // -----------------------------
    // Sorting
    // -----------------------------
    switch (sortBy) {
      case "Highest rated":
        result.sort((a, b) => b.rating - a.rating);
        break;

      case "Price: Low to High":
        result.sort((a, b) => a.price - b.price);
        break;

      case "Price: High to Low":
        result.sort((a, b) => b.price - a.price);
        break;

      case "Most relevant":
      default:
        // Keep original order
        break;
    }

    return result;
  }, [selectedCategory, selectedLevel, sortBy]);

  /**
   * Pagination
   */
  const totalPages = Math.max(
    1,
    Math.ceil(filteredCourses.length / pageSize),
  );

  /**
   * Category Change
   */
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  /**
   * Level Change
   */
  const handleLevelChange = (level: string) => {
    setSelectedLevel(level);
    setCurrentPage(1);
  };

  /**
   * Sort Change
   */
  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  /**
   * Pagination Change
   */
  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    const element = document.getElementById("course-grid-top");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <GridBackground minHeight="min-h-0">
        <CoursesHero />
      </GridBackground>

      {/* Courses */}
      <main className="bg-white">
        <section className="mx-auto max-w-[1240px] px-6 py-10">
          {/* Filters */}
          <CourseFilters
            selectedLevel={selectedLevel}
            selectedCategory={selectedCategory}
            sortBy={sortBy}
            onLevelChange={handleLevelChange}
            onCategoryChange={handleCategoryChange}
            onSortChange={handleSortChange}
          />

          {/* Category Pills */}
          <CourseCategories
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          {/* Course Grid */}
          {filteredCourses.length > 0 ? (
            <CourseGrid
              courses={filteredCourses}
              currentPage={currentPage}
              pageSize={pageSize}
            />
          ) : (
            <div className="flex min-h-[300px] items-center justify-center">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  No courses found
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Try changing your filters to find more courses.
                </p>
              </div>
            </div>
          )}

          {/* Pagination */}
          {filteredCourses.length > 0 && totalPages > 1 && (
            <CoursePagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </section>
      </main>
    </div>
  );
}