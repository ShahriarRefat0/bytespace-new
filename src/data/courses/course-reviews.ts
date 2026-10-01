export interface CourseReview {
  id: number;

  courseId: number;

  userName: string;

  userAvatar: string;

  role: string;

  rating: number;

  comment: string;

  createdAt: string;
}

export const courseReviews: CourseReview[] = [
  {
    id: 1,

    courseId: 1,

    userName: "PurePearl Studio",

    userAvatar: "/students/student-1.png",

    role: "UI/UX Designer",

    rating: 5,

    comment:
      "The course provided a comprehensive understanding of digital asset creation. The lessons were practical and immediately applicable to my work.",

    createdAt: "2 years ago",
  },

  {
    id: 2,

    courseId: 1,

    userName: "Albert Flores",

    userAvatar: "/students/student-2.png",

    role: "UI/UX Designer",

    rating: 5,

    comment:
      "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience.",

    createdAt: "2 years ago",
  },

  {
    id: 3,

    courseId: 1,

    userName: "Cody Fisher",

    userAvatar: "/students/student-3.png",

    role: "UI/UX Designer",

    rating: 5,

    comment:
      "The project showcase and critique helped me understand how to improve my work and communicate design decisions effectively.",

    createdAt: "2 years ago",
  },

  {
    id: 4,

    courseId: 1,

    userName: "Brooklyn Simmons",

    userAvatar: "/students/student-4.png",

    role: "UI/UX Designer",

    rating: 5,

    comment:
      "The lessons on optimizing digital assets for various platforms were particularly insightful.",

    createdAt: "2 years ago",
  },
];