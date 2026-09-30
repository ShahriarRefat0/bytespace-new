import { CourseCategoryFilter } from "./course-category-filter";
import { CourseGrid } from "./course-grid";




export function CoursesSection() {
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

<CourseCategoryFilter/>

        {/* Course Grid */}
        <div className="mt-12">

          <CourseGrid />
        </div>
      </div>
    </section>
  );
}