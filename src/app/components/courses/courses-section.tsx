"use client";

import { useState, useMemo } from "react";
import { CourseCategoryFilter } from "./course-category-filter";
import { CourseGrid } from "./course-grid";
import { courses } from "@/data/courses/courses";

export function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  const displayedCourses = useMemo(() => {
    if (activeCategory === "Featured") {
      return courses;
    }
    const filtered = courses.filter((c) => c.category === activeCategory);
    return filtered.length > 0 ? filtered : courses;
  }, [activeCategory]);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1240px] px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="mx-auto max-w-[520px] text-4xl font-bold leading-[1.05] tracking-tight text-[#111827] md:text-[44px]">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>

          <p className="mx-auto mt-6 max-w-[850px] text-sm leading-6 text-gray-400 md:text-base">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        {/* Categories */}
        <CourseCategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* 6 Courses */}
        <div className="mt-12">
          <CourseGrid courses={displayedCourses} limit={6} />
        </div>
      </div>
    </section>
  );
}