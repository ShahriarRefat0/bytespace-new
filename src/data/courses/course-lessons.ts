export interface CourseLesson {
  id: number;

  courseId: number;

  module: string;

  title: string;

  description?: string;

  duration: string;

  videoUrl?: string;

  order: number;
}

export const courseLessons: CourseLesson[] = [
  {
    id: 1,
    courseId: 1,

    module: "Module 1: Introduction to Digital Assets",

    title: "Understanding Digital Elements and Navigating Design Software Tools",

    description:
      "Explore the foundations of digital assets and learn how to work with essential design tools.",

    duration: "12 mins",

    order: 1,
  },

  {
    id: 2,
    courseId: 1,

    module: "Module 2: Design Principles for Impact",

    title: "Color Theory and Typography Essentials",

    description:
      "Master the principles that drive impactful design and improve your visual communication skills.",

    duration: "21 mins",

    order: 2,
  },

  {
    id: 3,
    courseId: 1,

    module: "Module 3: Advanced Techniques",

    title: "Advanced Techniques in Digital Creation",

    description:
      "Learn advanced techniques for creating professional digital assets.",

    duration: "16 mins",

    order: 3,
  },

  {
    id: 4,
    courseId: 1,

    module: "Module 4: User-Centric Design Strategies",

    title: "Design Thinking in Digital Creation",

    description:
      "Craft digital assets with a focus on user-centric design.",

    duration: "18 mins",

    order: 4,
  },

  {
    id: 5,
    courseId: 1,

    module: "Module 5: Interactive Media and Engagement",

    title: "Creating Interactive Presentations",

    description:
      "Create immersive digital experiences using interactive media.",

    duration: "20 mins",

    order: 5,
  },

  {
    id: 6,
    courseId: 1,

    module: "Module 6: Project Showcase and Critique",

    title: "Effective Presentation Techniques",

    description:
      "Present your work with confidence and receive valuable feedback.",

    duration: "15 mins",

    order: 6,
  },

  {
    id: 7,
    courseId: 1,

    module: "Module 7: Optimizing Digital Assets",

    title: "Optimizing Digital Assets for Various Platforms",

    description:
      "Optimize digital creations for web, mobile and social platforms.",

    duration: "17 mins",

    order: 7,
  },
];