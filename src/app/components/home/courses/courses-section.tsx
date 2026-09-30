import { CourseCard } from "./course-card";
import { CourseCategoryFilter } from "./course-category-filter";

const studentAvatars = [
  "/images/home/hero/student-1.png",
  "/images/home/hero/student-2.png",
  "/images/home/hero/student-3.png",
  "/images/home/hero/student-4.png",
  "/images/home/hero/student-5.png",
];

const courses = [
  {
    image: "/images/home/courses/course-1.png",
    title: "Learn Figma from Basic",
    instructor: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    students: studentAvatars,
    studentCount: "26+",
  },
  {
    image: "/images/home/courses/course-2.png",
    title: "Build Digital Asset",
    instructor: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    students: studentAvatars,
    studentCount: "26+",
  },
  {
    image: "/images/home/courses/course-3.png",
    title: "the Power of Big Data",
    instructor: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    students: studentAvatars,
    studentCount: "26+",
  },
  {
    image: "/images/home/courses/course-4.png",
    title: "Balancing Productivity and Focus",
    instructor: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    students: studentAvatars,
    studentCount: "26+",
  },
  {
    image: "/images/home/courses/course-5.png",
    title: "Mastering Money Management",
    instructor: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    students: studentAvatars,
    studentCount: "26+",
  },
  {
    image: "/images/home/courses/course-6.png",
    title: "From Idea to Startup Success",
    instructor: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    students: studentAvatars,
    studentCount: "26+",
  },
];

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
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.title}
              {...course}
            />
          ))}
        </div>
      </div>
    </section>
  );
}