export interface CourseDetail {
  courseId: number;

  subtitle: string;

  description: string[];

  previewImages: string[];

  keyPoints: string[];

  includes: string[];
}

export const courseDetails: CourseDetail[] = [
  {
    courseId: 1,

    subtitle:
      "Unlock the Power of Digital Creation with Expert Guidance",

    description: [
      "Embark on an enlightening exploration into the world of digital creation with our comprehensive course.",

      "Build Digital Assets: A Comprehensive Guide provides a transformative learning experience that takes you from foundational concepts to advanced techniques.",

      "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations.",
    ],

    previewImages: [
      "/courses/previews/course-1-1.webp",
      "/courses/previews/course-1-2.webp",
      "/courses/previews/course-1-3.webp",
      "/courses/previews/course-1-4.webp",
    ],

    keyPoints: [
      "Foundational Concepts",
      "Design Principles Mastery",
      "Advanced Techniques in Digital Creation",
      "Project Showcase and Critique",
      "Optimizing for Various Platforms",
      "Digital Asset Management Best Practices",
      "Monetization Strategies",
      "Capstone Project: Building Your Portfolio",
    ],

    includes: [
      "Learning Resources",
      "Quality Lesson Videos",
      "Certificate of Completion",
      "Private Consultation",
    ],
  },
];