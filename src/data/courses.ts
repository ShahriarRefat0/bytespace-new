export interface Course {
  id: number;
  image: string;
  title: string;
  instructor: string;
  rating: number;
  level: string;
  price: number;
  students: string[];
  studentCount: string;
}

export const courses: Course[] = [
  {
    id: 1,
    image: "/courses/course-1.jpg",
    title: "Learn Figma from Basic",
    instructor: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    students: [
      "/students/student-1.png",
      "/students/student-2.png",
      "/students/student-3.png",
      "/students/student-4.png",
      "/students/student-5.png",
    ],
    studentCount: "26+",
  },

  {
    id: 2,
    image: "/courses/course-2.jpg",
    title: "Build Digital Asset",
    instructor: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    students: [
      "/students/student-2.png",
      "/students/student-3.png",
      "/students/student-4.png",
      "/students/student-5.png",
      "/students/student-1.png",
    ],
    studentCount: "26+",
  },

  {
    id: 3,
    image: "/courses/course-3.jpg",
    title: "The Power of Big Data",
    instructor: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    students: [
      "/students/student-3.png",
      "/students/student-4.png",
      "/students/student-5.png",
      "/students/student-1.png",
      "/students/student-2.png",
    ],
    studentCount: "26+",
  },

  {
    id: 4,
    image: "/courses/course-4.jpg",
    title: "Balancing Productivity and Life",
    instructor: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    students: [
      "/students/student-4.png",
      "/students/student-5.png",
      "/students/student-1.png",
      "/students/student-2.png",
      "/students/student-3.png",
    ],
    studentCount: "26+",
  },

  {
    id: 5,
    image: "/courses/course-5.jpg",
    title: "Mastering Money Management",
    instructor: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    students: [
      "/students/student-5.png",
      "/students/student-1.png",
      "/students/student-2.png",
      "/students/student-3.png",
      "/students/student-4.png",
    ],
    studentCount: "26+",
  },

  {
    id: 6,
    image: "/courses/course-6.jpg",
    title: "From Idea to Startup Success",
    instructor: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    students: [
      "/students/student-1.png",
      "/students/student-3.png",
      "/students/student-5.png",
      "/students/student-2.png",
      "/students/student-4.png",
    ],
    studentCount: "26+",
  },
];