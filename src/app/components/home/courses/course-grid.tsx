import { courses } from "@/data/courses";
import { CourseCard } from "./course-card";

export function CourseGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
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