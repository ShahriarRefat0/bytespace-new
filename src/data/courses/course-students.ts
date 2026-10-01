export interface CourseStudent {
  id: number;
  courseId: number;
  avatar: string;
}

export const courseStudents: CourseStudent[] = [
  {
    id: 1,
    courseId: 1,
    avatar: "/images/students/student-1.png",
  },
  {
    id: 2,
    courseId: 1,
    avatar: "/images/students/student-2.png",
  },
  {
    id: 3,
    courseId: 1,
    avatar: "/images/students/student-3.png",
  },
];