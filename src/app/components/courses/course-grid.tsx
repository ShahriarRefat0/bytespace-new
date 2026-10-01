import { CourseCard } from "./course-card";
import { courses as defaultCourses, type Course } from "@/data/courses/courses";

interface CourseGridProps {
  courses?: Course[];
  currentPage?: number;
  pageSize?: number;
  limit?: number;
}

export function CourseGrid({
  courses = defaultCourses,
  currentPage = 1,
  pageSize = 12,
  limit,
}: CourseGridProps) {
  const courseList = courses ?? defaultCourses;

  const displayedCourses = limit
    ? courseList.slice(0, limit)
    : courseList.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize,
    );

  return (
    <div
      id="course-grid-top"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {displayedCourses.map((course) => (
        <CourseCard
          key={course.id}
          image={course.image}
          title={course.title}
          instructor={course.instructor}
          rating={course.rating}
          level={course.level}
          price={course.price}
          students={course.students}
          studentCount={course.studentCount}
        />
      ))}
    </div>
  );
}