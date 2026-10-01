import { CourseCard } from "./course-card";
import { courses as defaultCourses, type Course } from "@/data/courses/courses";
import { creators } from "@/data/creators/creators";
import { courseStudents } from "@/data/courses/course-students";

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

  const creatorMap = new Map(creators.map((c) => [c.id, c.name]));
  const studentMap = new Map<number, string[]>();
  courseStudents.forEach((cs) => {
    const list = studentMap.get(cs.courseId) || [];
    list.push(cs.avatar);
    studentMap.set(cs.courseId, list);
  });

  return (
    <div
      id="course-grid-top"
      className="grid mt-10 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {displayedCourses.map((course) => {
        const instructor = creatorMap.get(course.creatorId) ?? "PurePearl Studio";
        const students = studentMap.get(course.id) ?? [
          "/images/students/student-1.png",
          "/images/students/student-2.png",
          "/images/students/student-3.png",
          "/images/students/student-4.png",
          "/images/students/student-5.png",
        ];
        const studentCountStr =
          course.studentCount >= 1000
            ? `${(course.studentCount / 1000).toFixed(1).replace(".0", "")}K+`
            : `${course.studentCount}+`;

        return (
          <CourseCard
            key={course.id}
            slug={course.slug}
            image={course.image}
            title={course.title}
            instructor={instructor}
            rating={course.rating}
            level={course.level}
            price={course.price}
            students={students}
            studentCount={studentCountStr}
          />
        );
      })}
    </div>
  );
}