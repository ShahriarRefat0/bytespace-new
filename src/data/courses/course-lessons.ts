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
    module: "Module 1",
    title: "Introduction to Digital Assets",
    description:
      "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    duration: "12 mins",
    order: 1,
  },
  {
    id: 2,
    courseId: 1,
    module: "Module 2",
    title: "Design Principles for Impact",
    description:
      "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    duration: "21 mins",
    order: 2,
  },
  {
    id: 3,
    courseId: 1,
    module: "Module 3",
    title: "Advanced Techniques in Digital Creation",
    description:
      "Explore advanced techniques for creating engaging and effective digital assets.",
    duration: "16 mins",
    order: 3,
  },
  {
    id: 4,
    courseId: 1,
    module: "Module 4",
    title: "User-Centric Design Strategies",
    description:
      "Understand Design Thinking in Digital Creation and delve into User Experience (UX) Essentials. Craft digital assets with a focus on user-centric design.",
    duration: "20 mins",
    order: 4,
  },
  {
    id: 5,
    courseId: 1,
    module: "Module 5",
    title: "Interactive Media and Engagement",
    description:
      "Engage your audience with interactive presentations and multimedia elements. Master the art of creating immersive digital experiences.",
    duration: "18 mins",
    order: 5,
  },
  {
    id: 6,
    courseId: 1,
    module: "Module 6",
    title: "Project Showcase and Critique",
    description:
      "Perfect your presentation skills and embrace collaboration with peer critique and collaboration. Showcase your work with confidence.",
    duration: "25 mins",
    order: 6,
  },
  {
    id: 7,
    courseId: 1,
    module: "Module 7",
    title: "Optimizing Digital Assets for Various Platforms",
    description:
      "Adapt your digital creations for mobile platforms and optimize for social media. Ensure widespread accessibility and engagement across diverse digital landscapes.",
    duration: "22 mins",
    order: 7,
  },
];