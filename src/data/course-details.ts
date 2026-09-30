export interface CourseLesson {
  id: number;
  title: string;
  duration: string;
}

export interface CourseDetail {
  slug: string;
  subtitle: string;
  reviewCount: number;

  lessonCount: number;
  duration: string;

  instructorAvatar: string;
  instructorBio: string;

  lessons: CourseLesson[];

  description: string[];

  previewImages: string[];

  keyPoints: string[];

  includes: string[];
}

export const courseDetails: CourseDetail[] = [
  {
    slug: "build-digital-asset-comprehensive-guide",

    subtitle:
      "Unlock the Power of Digital Creation with Expert Guidance",

    reviewCount: 172,

    lessonCount: 112,
    duration: "24 hours",

    instructorAvatar:
      "/instructors/purepearl.png",

    instructorBio:
      "PurePearl Studio is a professional creative team focused on digital design and creative production.",

    lessons: [
      {
        id: 1,
        title: "Introduction to Digital Assets",
        duration: "12 mins",
      },
      {
        id: 2,
        title: "Design Principles for Impact",
        duration: "21 mins",
      },
      {
        id: 3,
        title: "Advanced Techniques in Digital Creation",
        duration: "16 mins",
      },
    ],

    description: [
      "Embark on an enlightening exploration into the world of digital creation with our comprehensive course.",

      "Build Digital Assets: A Comprehensive Guide provides a transformative learning experience that takes you from foundational concepts to advanced techniques.",

      "As you progress through the course, you will gain practical knowledge and develop the skills required to create professional digital assets.",
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