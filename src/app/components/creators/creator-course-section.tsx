"use client";

import { useMemo, useState } from "react";
import type { Course } from "@/data/courses/courses";
import type { Creator } from "@/app/types/creator";
import { CourseGrid } from "@/app/components/courses/course-grid";
import { CreatorCourseFilters } from "./creator-filters";
// import { CreatorCourseFilters } from "./creator-course-filters";

interface CreatorCourseSectionProps {
  creator: Creator;
  courses: Course[];
}

export function CreatorCourseSection({
  creator,
  courses,
}: CreatorCourseSectionProps) {
  const [selectedLevel, setSelectedLevel] = useState("All levels");
  const [sortBy, setSortBy] = useState("Most relevant");

  const filteredCourses = useMemo(() => {
    let result = [...courses];

    // Level filter
    if (selectedLevel !== "All levels") {
      result = result.filter(
        (course) => course.level === selectedLevel,
      );
    }

    // Sorting
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

      default:
        break;
    }

    return result;
  }, [courses, selectedLevel, sortBy]);

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1240px] px-6">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-[#1555e8]">
              {creator.name}
            </p>

            <h2 className="mt-1 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
              Courses by {creator.name}
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Explore courses created by {creator.name} and build your
              skills with practical learning experiences.
            </p>
          </div>

          <span className="w-fit rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600">
            {filteredCourses.length}{" "}
            {filteredCourses.length === 1 ? "Course" : "Courses"}
          </span>
        </div>

        {/* Filters */}
        <CreatorCourseFilters
          selectedLevel={selectedLevel}
          sortBy={sortBy}
          onLevelChange={setSelectedLevel}
          onSortChange={setSortBy}
        />

        {/* Courses */}
        {filteredCourses.length > 0 ? (
          <div className="mt-10">
            <CourseGrid
              courses={filteredCourses}
              currentPage={1}
              pageSize={filteredCourses.length}
            />
          </div>
        ) : (
          <div className="mt-10 flex min-h-[250px] items-center justify-center rounded-2xl border border-gray-200 bg-gray-50">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900">
                No courses found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try changing the selected level.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}