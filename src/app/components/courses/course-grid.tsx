import { courses } from "@/data/courses";
import { CourseCard } from "./course-card";

interface CourseGridProps {
  currentPage?: number;
  pageSize?: number;
}

export function CourseGrid({ currentPage = 1, pageSize = 12 }: CourseGridProps) {
  const startIndex = (currentPage - 1) * pageSize;
  const displayedCourses = courses.slice(startIndex, startIndex + pageSize);

  return (
    <div id="course-grid-top" className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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