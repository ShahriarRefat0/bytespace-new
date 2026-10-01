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
  category: string;
}

export const courses: Course[] = [
  {
    id: 1,
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    image: "/images/home/courses/course-1.png",

    creatorId: "creator-001",

    category: "Crafts",
    level: "Beginner",

    rating: 4.5,
    reviewCount: 26,
    studentCount: 26,

    price: 25,
  },
  {
    "id": 2,
    "image": "/images/home/courses/course-2.png",
    "title": "Build Digital Asset",
    "instructor": "purepearl studio",
    "rating": 4.5,
    "level": "Beginner",
    "price": 25,
    "category": "Film & Video",
    "students": [
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png"
    ],
    "studentCount": "26+"
  },
  {
    "id": 3,
    "image": "/images/home/courses/course-3.png",
    "title": "The Power of Big Data",
    "instructor": "purepearl studio",
    "rating": 4.5,
    "level": "Beginner",
    "price": 25,
    "category": "Music",
    "students": [
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png"
    ],
    "studentCount": "26+"
  },
  {
    "id": 4,
    "image": "/images/home/courses/course-4.png",
    "title": "Balancing Productivity and Life",
    "instructor": "purepearl studio",
    "rating": 4.5,
    "level": "Beginner",
    "price": 25,
    "category": "Social Media",
    "students": [
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png"
    ],
    "studentCount": "26+"
  },
  {
    "id": 5,
    "image": "/images/home/courses/course-5.png",
    "title": "Mastering Money Management",
    "instructor": "purepearl studio",
    "rating": 4.5,
    "level": "Beginner",
    "price": 25,
    "category": "Web Development",
    "students": [
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png"
    ],
    "studentCount": "26+"
  },
  {
    "id": 6,
    "image": "/images/home/courses/course-6.png",
    "title": "From Idea to Startup Success",
    "instructor": "purepearl studio",
    "rating": 4.5,
    "level": "Beginner",
    "price": 25,
    "category": "Animation",
    "students": [
      "/images/students/student-1.png",
      "/images/students/student-3.png",
      "/images/students/student-5.png",
      "/images/students/student-2.png",
      "/images/students/student-4.png"
    ],
    "studentCount": "26+"
  },
  {
    "id": 7,
    "image": "/images/home/courses/course-1.png",
    "title": "Advanced Design Systems in Figma",
    "instructor": "PixelPerfect Co.",
    "rating": 4.5,
    "level": "Advanced",
    "price": 49,
    "category": "UI/UX Design",
    "students": [
      "/images/students/student-2.png",
      "/images/students/student-4.png",
      "/images/students/student-1.png",
      "/images/students/student-3.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "480+"
  },
  {
    "id": 8,
    "image": "/images/home/courses/course-2.png",
    "title": "Micro-Interactions and Prototyping",
    "instructor": "Nova Creative",
    "rating": 4.6,
    "level": "All Levels",
    "price": 55,
    "category": "Drawing & Painting",
    "students": [
      "/images/students/student-3.png",
      "/images/students/student-1.png",
      "/images/students/student-4.png",
      "/images/students/student-2.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "1.2K+"
  },
  {
    "id": 9,
    "image": "/images/home/courses/course-3.png",
    "title": "UX Research & User Testing Essentials",
    "instructor": "TechPulse Studio",
    "rating": 4.7,
    "level": "Beginner",
    "price": 65,
    "category": "Freelance & Entrepreneurship",
    "students": [
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "2.5K+"
  },
  {
    "id": 10,
    "image": "/images/home/courses/course-4.png",
    "title": "Mobile App UI Design: iOS & Android",
    "instructor": "Aura Learning",
    "rating": 4.8,
    "level": "Intermediate",
    "price": 75,
    "category": "Productivity",
    "students": [
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png"
    ],
    "studentCount": "26+"
  },
  {
    "id": 11,
    "image": "/images/home/courses/course-5.png",
    "title": "Typography & Color Theory for Designers",
    "instructor": "purepearl studio",
    "rating": 4.9,
    "level": "Advanced",
    "price": 19,
    "category": "Graphic Design",
    "students": [
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png"
    ],
    "studentCount": "45+"
  },
  {
    "id": 12,
    "image": "/images/home/courses/course-6.png",
    "title": "Wireframing & Information Architecture",
    "instructor": "DesignCraft Academy",
    "rating": 5,
    "level": "All Levels",
    "price": 25,
    "category": "Productivity",
    "students": [
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png"
    ],
    "studentCount": "68+"
  },
  {
    "id": 13,
    "image": "/images/home/courses/course-1.png",
    "title": "Responsive Web Design Fundamentals",
    "instructor": "DevSphere Labs",
    "rating": 4.5,
    "level": "Beginner",
    "price": 29,
    "category": "Cooking",
    "students": [
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png"
    ],
    "studentCount": "84+"
  },
  {
    "id": 14,
    "image": "/images/home/courses/course-2.png",
    "title": "Design Thinking & Problem Solving",
    "instructor": "Apex Media Group",
    "rating": 4.6,
    "level": "Intermediate",
    "price": 35,
    "category": "Creative Marketing",
    "students": [
      "/images/students/student-1.png",
      "/images/students/student-3.png",
      "/images/students/student-5.png",
      "/images/students/student-2.png",
      "/images/students/student-4.png"
    ],
    "studentCount": "120+"
  },
  {
    "id": 15,
    "image": "/images/home/courses/course-3.png",
    "title": "Creating 3D Web Graphics with Spline",
    "instructor": "Elena Rostova",
    "rating": 4.7,
    "level": "Advanced",
    "price": 39,
    "category": "Marketing",
    "students": [
      "/images/students/student-2.png",
      "/images/students/student-4.png",
      "/images/students/student-1.png",
      "/images/students/student-3.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "240+"
  },
  {
    "id": 16,
    "image": "/images/home/courses/course-4.png",
    "title": "Figma to Production Code Workflow",
    "instructor": "Marcus Vance",
    "rating": 4.8,
    "level": "All Levels",
    "price": 45,
    "category": "Data Science",
    "students": [
      "/images/students/student-3.png",
      "/images/students/student-1.png",
      "/images/students/student-4.png",
      "/images/students/student-2.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "480+"
  },
  {
    "id": 17,
    "image": "/images/home/courses/course-5.png",
    "title": "Dashboard & SaaS Interface Design",
    "instructor": "PixelPerfect Co.",
    "rating": 4.9,
    "level": "Beginner",
    "price": 49,
    "category": "Drawing & Painting",
    "students": [
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "1.2K+"
  },
  {
    "id": 18,
    "image": "/images/home/courses/course-6.png",
    "title": "Design Systems at Scale",
    "instructor": "Nova Creative",
    "rating": 5,
    "level": "Intermediate",
    "price": 55,
    "category": "Drawing & Painting",
    "students": [
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png"
    ],
    "studentCount": "2.5K+"
  },
  {
    "id": 19,
    "image": "/images/home/courses/course-1.png",
    "title": "Dark Mode UI & Contrast Mastery",
    "instructor": "TechPulse Studio",
    "rating": 4.5,
    "level": "Advanced",
    "price": 65,
    "category": "Creative Marketing",
    "students": [
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png"
    ],
    "studentCount": "26+"
  },
  {
    "id": 20,
    "image": "/images/home/courses/course-2.png",
    "title": "Iconography & Vector Illustration",
    "instructor": "Aura Learning",
    "rating": 4.6,
    "level": "All Levels",
    "price": 75,
    "category": "Social Media",
    "students": [
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png"
    ],
    "studentCount": "45+"
  },
  {
    "id": 21,
    "image": "/images/home/courses/course-3.png",
    "title": "Modern Next.js 15 & React 19 Bootcamp",
    "instructor": "purepearl studio",
    "rating": 4.7,
    "level": "Beginner",
    "price": 19,
    "category": "Marketing",
    "students": [
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png"
    ],
    "studentCount": "68+"
  },
  {
    "id": 22,
    "image": "/images/home/courses/course-4.png",
    "title": "Full-Stack TypeScript from Scratch",
    "instructor": "DesignCraft Academy",
    "rating": 4.8,
    "level": "Intermediate",
    "price": 25,
    "category": "Animation",
    "students": [
      "/images/students/student-1.png",
      "/images/students/student-3.png",
      "/images/students/student-5.png",
      "/images/students/student-2.png",
      "/images/students/student-4.png"
    ],
    "studentCount": "84+"
  },
  {
    "id": 23,
    "image": "/images/home/courses/course-5.png",
    "title": "Tailwind CSS: Zero to Production Hero",
    "instructor": "DevSphere Labs",
    "rating": 4.9,
    "level": "Advanced",
    "price": 29,
    "category": "Cooking",
    "students": [
      "/images/students/student-2.png",
      "/images/students/student-4.png",
      "/images/students/student-1.png",
      "/images/students/student-3.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "120+"
  },
  {
    "id": 24,
    "image": "/images/home/courses/course-6.png",
    "title": "Mastering Vue 3 & Nuxt Framework",
    "instructor": "Apex Media Group",
    "rating": 5,
    "level": "All Levels",
    "price": 35,
    "category": "UI/UX Design",
    "students": [
      "/images/students/student-3.png",
      "/images/students/student-1.png",
      "/images/students/student-4.png",
      "/images/students/student-2.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "240+"
  },
  {
    "id": 25,
    "image": "/images/home/courses/course-1.png",
    "title": "Advanced JavaScript Concepts & Patterns",
    "instructor": "Elena Rostova",
    "rating": 4.5,
    "level": "Beginner",
    "price": 39,
    "category": "Digital Illustration",
    "students": [
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "480+"
  },
  {
    "id": 26,
    "image": "/images/home/courses/course-2.png",
    "title": "High-Performance Web Animations",
    "instructor": "Marcus Vance",
    "rating": 4.6,
    "level": "Intermediate",
    "price": 45,
    "category": "Freelance & Entrepreneurship",
    "students": [
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png"
    ],
    "studentCount": "1.2K+"
  },
  {
    "id": 27,
    "image": "/images/home/courses/course-3.png",
    "title": "State Management with Zustand & Redux",
    "instructor": "PixelPerfect Co.",
    "rating": 4.7,
    "level": "Advanced",
    "price": 49,
    "category": "Data Science",
    "students": [
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png"
    ],
    "studentCount": "2.5K+"
  },
  {
    "id": 28,
    "image": "/images/home/courses/course-4.png",
    "title": "GraphQL APIs with Apollo & Node.js",
    "instructor": "Nova Creative",
    "rating": 4.8,
    "level": "All Levels",
    "price": 55,
    "category": "Music",
    "students": [
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png"
    ],
    "studentCount": "26+"
  },
  {
    "id": 29,
    "image": "/images/home/courses/course-5.png",
    "title": "Serverless Functions on AWS & Vercel",
    "instructor": "TechPulse Studio",
    "rating": 4.9,
    "level": "Beginner",
    "price": 65,
    "category": "Productivity",
    "students": [
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png"
    ],
    "studentCount": "45+"
  },
  {
    "id": 30,
    "image": "/images/home/courses/course-6.png",
    "title": "Building Accessible Web Applications (a11y)",
    "instructor": "Aura Learning",
    "rating": 5,
    "level": "Intermediate",
    "price": 75,
    "category": "Freelance & Entrepreneurship",
    "students": [
      "/images/students/student-1.png",
      "/images/students/student-3.png",
      "/images/students/student-5.png",
      "/images/students/student-2.png",
      "/images/students/student-4.png"
    ],
    "studentCount": "68+"
  },
  {
    "id": 31,
    "image": "/images/home/courses/course-1.png",
    "title": "Progressive Web Apps (PWA) Hands-On",
    "instructor": "purepearl studio",
    "rating": 4.5,
    "level": "Advanced",
    "price": 19,
    "category": "Marketing",
    "students": [
      "/images/students/student-2.png",
      "/images/students/student-4.png",
      "/images/students/student-1.png",
      "/images/students/student-3.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "84+"
  },
  {
    "id": 32,
    "image": "/images/home/courses/course-2.png",
    "title": "WebGL & Three.js 3D Interactive Web",
    "instructor": "DesignCraft Academy",
    "rating": 4.6,
    "level": "All Levels",
    "price": 25,
    "category": "Data Science",
    "students": [
      "/images/students/student-3.png",
      "/images/students/student-1.png",
      "/images/students/student-4.png",
      "/images/students/student-2.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "120+"
  },
  {
    "id": 33,
    "image": "/images/home/courses/course-3.png",
    "title": "Modern CSS Layouts: Grid & Flexbox",
    "instructor": "DevSphere Labs",
    "rating": 4.7,
    "level": "Beginner",
    "price": 29,
    "category": "Web Development",
    "students": [
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "240+"
  },
  {
    "id": 34,
    "image": "/images/home/courses/course-4.png",
    "title": "Docker for Frontend Developers",
    "instructor": "Apex Media Group",
    "rating": 4.8,
    "level": "Intermediate",
    "price": 35,
    "category": "Crafts",
    "students": [
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png"
    ],
    "studentCount": "480+"
  },
  {
    "id": 35,
    "image": "/images/home/courses/course-5.png",
    "title": "Testing React Applications with Vitest",
    "instructor": "Elena Rostova",
    "rating": 4.9,
    "level": "Advanced",
    "price": 39,
    "category": "Social Media",
    "students": [
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png"
    ],
    "studentCount": "1.2K+"
  },
  {
    "id": 36,
    "image": "/images/home/courses/course-6.png",
    "title": "Node.js & Express API Architecture",
    "instructor": "Marcus Vance",
    "rating": 5,
    "level": "All Levels",
    "price": 45,
    "category": "Social Media",
    "students": [
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png"
    ],
    "studentCount": "2.5K+"
  },
  {
    "id": 37,
    "image": "/images/home/courses/course-1.png",
    "title": "PostgreSQL Mastery & Query Optimization",
    "instructor": "PixelPerfect Co.",
    "rating": 4.5,
    "level": "Beginner",
    "price": 49,
    "category": "Photography",
    "students": [
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png"
    ],
    "studentCount": "26+"
  },
  {
    "id": 38,
    "image": "/images/home/courses/course-2.png",
    "title": "Building Microservices with Go",
    "instructor": "Nova Creative",
    "rating": 4.6,
    "level": "Intermediate",
    "price": 55,
    "category": "UI/UX Design",
    "students": [
      "/images/students/student-1.png",
      "/images/students/student-3.png",
      "/images/students/student-5.png",
      "/images/students/student-2.png",
      "/images/students/student-4.png"
    ],
    "studentCount": "45+"
  },
  {
    "id": 39,
    "image": "/images/home/courses/course-3.png",
    "title": "MongoDB and NoSQL Database Design",
    "instructor": "TechPulse Studio",
    "rating": 4.7,
    "level": "Advanced",
    "price": 65,
    "category": "Music",
    "students": [
      "/images/students/student-2.png",
      "/images/students/student-4.png",
      "/images/students/student-1.png",
      "/images/students/student-3.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "68+"
  },
  {
    "id": 40,
    "image": "/images/home/courses/course-4.png",
    "title": "Redis Caching & Real-time PubSub",
    "instructor": "Aura Learning",
    "rating": 4.8,
    "level": "All Levels",
    "price": 75,
    "category": "UI/UX Design",
    "students": [
      "/images/students/student-3.png",
      "/images/students/student-1.png",
      "/images/students/student-4.png",
      "/images/students/student-2.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "84+"
  },
  {
    "id": 41,
    "image": "/images/home/courses/course-5.png",
    "title": "Cloud Architecture with AWS Solutions",
    "instructor": "purepearl studio",
    "rating": 4.9,
    "level": "Beginner",
    "price": 19,
    "category": "Film & Video",
    "students": [
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "120+"
  },
  {
    "id": 42,
    "image": "/images/home/courses/course-6.png",
    "title": "Google Cloud Platform for Developers",
    "instructor": "DesignCraft Academy",
    "rating": 5,
    "level": "Intermediate",
    "price": 25,
    "category": "Film & Video",
    "students": [
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png"
    ],
    "studentCount": "240+"
  },
  {
    "id": 43,
    "image": "/images/home/courses/course-1.png",
    "title": "Kubernetes & Container Orchestration",
    "instructor": "DevSphere Labs",
    "rating": 4.5,
    "level": "Advanced",
    "price": 29,
    "category": "Photography",
    "students": [
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png"
    ],
    "studentCount": "480+"
  },
  {
    "id": 44,
    "image": "/images/home/courses/course-2.png",
    "title": "Building Event-Driven Systems with Kafka",
    "instructor": "Apex Media Group",
    "rating": 4.6,
    "level": "All Levels",
    "price": 35,
    "category": "Animation",
    "students": [
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png"
    ],
    "studentCount": "1.2K+"
  },
  {
    "id": 45,
    "image": "/images/home/courses/course-3.png",
    "title": "RESTful & gRPC API Design Standards",
    "instructor": "Elena Rostova",
    "rating": 4.7,
    "level": "Beginner",
    "price": 39,
    "category": "Social Media",
    "students": [
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png"
    ],
    "studentCount": "2.5K+"
  },
  {
    "id": 46,
    "image": "/images/home/courses/course-4.png",
    "title": "Practical Prompt Engineering for LLMs",
    "instructor": "Marcus Vance",
    "rating": 4.8,
    "level": "Intermediate",
    "price": 45,
    "category": "Graphic Design",
    "students": [
      "/images/students/student-1.png",
      "/images/students/student-3.png",
      "/images/students/student-5.png",
      "/images/students/student-2.png",
      "/images/students/student-4.png"
    ],
    "studentCount": "26+"
  },
  {
    "id": 47,
    "image": "/images/home/courses/course-5.png",
    "title": "Python for Data Analysis & Pandas",
    "instructor": "PixelPerfect Co.",
    "rating": 4.9,
    "level": "Advanced",
    "price": 49,
    "category": "Photography",
    "students": [
      "/images/students/student-2.png",
      "/images/students/student-4.png",
      "/images/students/student-1.png",
      "/images/students/student-3.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "45+"
  },
  {
    "id": 48,
    "image": "/images/home/courses/course-6.png",
    "title": "Machine Learning with Scikit-Learn",
    "instructor": "Nova Creative",
    "rating": 5,
    "level": "All Levels",
    "price": 55,
    "category": "UI/UX Design",
    "students": [
      "/images/students/student-3.png",
      "/images/students/student-1.png",
      "/images/students/student-4.png",
      "/images/students/student-2.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "68+"
  },
  {
    "id": 49,
    "image": "/images/home/courses/course-1.png",
    "title": "Deep Learning & Neural Networks Bootcamp",
    "instructor": "TechPulse Studio",
    "rating": 4.5,
    "level": "Beginner",
    "price": 65,
    "category": "Web Development",
    "students": [
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "84+"
  },
  {
    "id": 50,
    "image": "/images/home/courses/course-2.png",
    "title": "Building AI Agents with LangChain",
    "instructor": "Aura Learning",
    "rating": 4.6,
    "level": "Intermediate",
    "price": 75,
    "category": "Animation",
    "students": [
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png"
    ],
    "studentCount": "120+"
  },
  {
    "id": 51,
    "image": "/images/home/courses/course-3.png",
    "title": "Computer Vision & OpenCV Projects",
    "instructor": "purepearl studio",
    "rating": 4.7,
    "level": "Advanced",
    "price": 19,
    "category": "Productivity",
    "students": [
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png"
    ],
    "studentCount": "240+"
  },
  {
    "id": 52,
    "image": "/images/home/courses/course-4.png",
    "title": "Natural Language Processing Fundamentals",
    "instructor": "DesignCraft Academy",
    "rating": 4.8,
    "level": "All Levels",
    "price": 25,
    "category": "Freelance & Entrepreneurship",
    "students": [
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png"
    ],
    "studentCount": "480+"
  },
  {
    "id": 53,
    "image": "/images/home/courses/course-5.png",
    "title": "Fine-Tuning Open Source LLMs",
    "instructor": "DevSphere Labs",
    "rating": 4.9,
    "level": "Beginner",
    "price": 29,
    "category": "Freelance & Entrepreneurship",
    "students": [
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png"
    ],
    "studentCount": "1.2K+"
  },
  {
    "id": 54,
    "image": "/images/home/courses/course-6.png",
    "title": "Data Visualization with D3.js & Tableau",
    "instructor": "Apex Media Group",
    "rating": 5,
    "level": "Intermediate",
    "price": 35,
    "category": "Web Development",
    "students": [
      "/images/students/student-1.png",
      "/images/students/student-3.png",
      "/images/students/student-5.png",
      "/images/students/student-2.png",
      "/images/students/student-4.png"
    ],
    "studentCount": "2.5K+"
  },
  {
    "id": 55,
    "image": "/images/home/courses/course-1.png",
    "title": "Vector Databases & RAG Architecture",
    "instructor": "Elena Rostova",
    "rating": 4.5,
    "level": "Advanced",
    "price": 39,
    "category": "Animation",
    "students": [
      "/images/students/student-2.png",
      "/images/students/student-4.png",
      "/images/students/student-1.png",
      "/images/students/student-3.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "26+"
  },
  {
    "id": 56,
    "image": "/images/home/courses/course-2.png",
    "title": "React Native & Expo: Build Cross-Platform Apps",
    "instructor": "Marcus Vance",
    "rating": 4.6,
    "level": "All Levels",
    "price": 45,
    "category": "Social Media",
    "students": [
      "/images/students/student-3.png",
      "/images/students/student-1.png",
      "/images/students/student-4.png",
      "/images/students/student-2.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "45+"
  },
  {
    "id": 57,
    "image": "/images/home/courses/course-3.png",
    "title": "Flutter & Dart Complete Masterclass",
    "instructor": "PixelPerfect Co.",
    "rating": 4.7,
    "level": "Beginner",
    "price": 49,
    "category": "Graphic Design",
    "students": [
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "68+"
  },
  {
    "id": 58,
    "image": "/images/home/courses/course-4.png",
    "title": "Swift & SwiftUI iOS App Architecture",
    "instructor": "Nova Creative",
    "rating": 4.8,
    "level": "Intermediate",
    "price": 55,
    "category": "Creative Marketing",
    "students": [
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png"
    ],
    "studentCount": "84+"
  },
  {
    "id": 59,
    "image": "/images/home/courses/course-5.png",
    "title": "Kotlin & Jetpack Compose Android Guide",
    "instructor": "TechPulse Studio",
    "rating": 4.9,
    "level": "Advanced",
    "price": 65,
    "category": "Cooking",
    "students": [
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png"
    ],
    "studentCount": "120+"
  },
  {
    "id": 60,
    "image": "/images/home/courses/course-6.png",
    "title": "Mobile App Performance & Offline Sync",
    "instructor": "Aura Learning",
    "rating": 5,
    "level": "All Levels",
    "price": 75,
    "category": "Web Development",
    "students": [
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png"
    ],
    "studentCount": "240+"
  },
  {
    "id": 61,
    "image": "/images/home/courses/course-1.png",
    "title": "In-App Purchases & Monetization Strategy",
    "instructor": "purepearl studio",
    "rating": 4.5,
    "level": "Beginner",
    "price": 19,
    "category": "Digital Illustration",
    "students": [
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png"
    ],
    "studentCount": "480+"
  },
  {
    "id": 62,
    "image": "/images/home/courses/course-2.png",
    "title": "Growth Hacking for Digital Products",
    "instructor": "DesignCraft Academy",
    "rating": 4.6,
    "level": "Intermediate",
    "price": 25,
    "category": "Creative Marketing",
    "students": [
      "/images/students/student-1.png",
      "/images/students/student-3.png",
      "/images/students/student-5.png",
      "/images/students/student-2.png",
      "/images/students/student-4.png"
    ],
    "studentCount": "1.2K+"
  },
  {
    "id": 63,
    "image": "/images/home/courses/course-3.png",
    "title": "SEO Mastery: Rank #1 on Google",
    "instructor": "DevSphere Labs",
    "rating": 4.7,
    "level": "Advanced",
    "price": 29,
    "category": "Freelance & Entrepreneurship",
    "students": [
      "/images/students/student-2.png",
      "/images/students/student-4.png",
      "/images/students/student-1.png",
      "/images/students/student-3.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "2.5K+"
  },
  {
    "id": 64,
    "image": "/images/home/courses/course-4.png",
    "title": "Social Media Content Strategy That Converts",
    "instructor": "Apex Media Group",
    "rating": 4.8,
    "level": "All Levels",
    "price": 35,
    "category": "Photography",
    "students": [
      "/images/students/student-3.png",
      "/images/students/student-1.png",
      "/images/students/student-4.png",
      "/images/students/student-2.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "26+"
  },
  {
    "id": 65,
    "image": "/images/home/courses/course-5.png",
    "title": "High-Converting Email Marketing Campaigns",
    "instructor": "Elena Rostova",
    "rating": 4.9,
    "level": "Beginner",
    "price": 39,
    "category": "Data Science",
    "students": [
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "45+"
  },
  {
    "id": 66,
    "image": "/images/home/courses/course-6.png",
    "title": "Google Ads & Performance Marketing",
    "instructor": "Marcus Vance",
    "rating": 5,
    "level": "Intermediate",
    "price": 45,
    "category": "Crafts",
    "students": [
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png"
    ],
    "studentCount": "68+"
  },
  {
    "id": 67,
    "image": "/images/home/courses/course-1.png",
    "title": "Brand Storytelling & Copywriting Secrets",
    "instructor": "PixelPerfect Co.",
    "rating": 4.5,
    "level": "Advanced",
    "price": 49,
    "category": "Creative Marketing",
    "students": [
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png"
    ],
    "studentCount": "84+"
  },
  {
    "id": 68,
    "image": "/images/home/courses/course-2.png",
    "title": "Influencer Marketing & Brand Partnerships",
    "instructor": "Nova Creative",
    "rating": 4.6,
    "level": "All Levels",
    "price": 55,
    "category": "Web Development",
    "students": [
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png"
    ],
    "studentCount": "120+"
  },
  {
    "id": 69,
    "image": "/images/home/courses/course-3.png",
    "title": "Affiliate Marketing for Beginners",
    "instructor": "TechPulse Studio",
    "rating": 4.7,
    "level": "Beginner",
    "price": 65,
    "category": "Productivity",
    "students": [
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png"
    ],
    "studentCount": "240+"
  },
  {
    "id": 70,
    "image": "/images/home/courses/course-4.png",
    "title": "Analytics & Conversion Rate Optimization (CRO)",
    "instructor": "Aura Learning",
    "rating": 4.8,
    "level": "Intermediate",
    "price": 75,
    "category": "Drawing & Painting",
    "students": [
      "/images/students/student-1.png",
      "/images/students/student-3.png",
      "/images/students/student-5.png",
      "/images/students/student-2.png",
      "/images/students/student-4.png"
    ],
    "studentCount": "480+"
  },
  {
    "id": 71,
    "image": "/images/home/courses/course-5.png",
    "title": "B2B SaaS Content Marketing Strategy",
    "instructor": "purepearl studio",
    "rating": 4.9,
    "level": "Advanced",
    "price": 19,
    "category": "Drawing & Painting",
    "students": [
      "/images/students/student-2.png",
      "/images/students/student-4.png",
      "/images/students/student-1.png",
      "/images/students/student-3.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "1.2K+"
  },
  {
    "id": 72,
    "image": "/images/home/courses/course-6.png",
    "title": "Agile & Scrum for Modern Tech Teams",
    "instructor": "DesignCraft Academy",
    "rating": 5,
    "level": "All Levels",
    "price": 25,
    "category": "Productivity",
    "students": [
      "/images/students/student-3.png",
      "/images/students/student-1.png",
      "/images/students/student-4.png",
      "/images/students/student-2.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "2.5K+"
  },
  {
    "id": 73,
    "image": "/images/home/courses/course-1.png",
    "title": "Product Management: Ideation to Launch",
    "instructor": "DevSphere Labs",
    "rating": 4.5,
    "level": "Beginner",
    "price": 29,
    "category": "Digital Illustration",
    "students": [
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "26+"
  },
  {
    "id": 74,
    "image": "/images/home/courses/course-2.png",
    "title": "Financial Modeling for Tech Startups",
    "instructor": "Apex Media Group",
    "rating": 4.6,
    "level": "Intermediate",
    "price": 35,
    "category": "Music",
    "students": [
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png"
    ],
    "studentCount": "45+"
  },
  {
    "id": 75,
    "image": "/images/home/courses/course-3.png",
    "title": "Remote Team Leadership & Communication",
    "instructor": "Elena Rostova",
    "rating": 4.7,
    "level": "Advanced",
    "price": 39,
    "category": "Music",
    "students": [
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png"
    ],
    "studentCount": "68+"
  },
  {
    "id": 76,
    "image": "/images/home/courses/course-4.png",
    "title": "Freelancing: How to Win 0K+ Clients",
    "instructor": "Marcus Vance",
    "rating": 4.8,
    "level": "All Levels",
    "price": 45,
    "category": "Data Science",
    "students": [
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png"
    ],
    "studentCount": "84+"
  },
  {
    "id": 77,
    "image": "/images/home/courses/course-5.png",
    "title": "Pricing Strategies for Digital Products",
    "instructor": "PixelPerfect Co.",
    "rating": 4.9,
    "level": "Beginner",
    "price": 49,
    "category": "Film & Video",
    "students": [
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png"
    ],
    "studentCount": "120+"
  },
  {
    "id": 78,
    "image": "/images/home/courses/course-6.png",
    "title": "Negotiation Skills for Professionals",
    "instructor": "Nova Creative",
    "rating": 5,
    "level": "Intermediate",
    "price": 55,
    "category": "Creative Marketing",
    "students": [
      "/images/students/student-1.png",
      "/images/students/student-3.png",
      "/images/students/student-5.png",
      "/images/students/student-2.png",
      "/images/students/student-4.png"
    ],
    "studentCount": "240+"
  },
  {
    "id": 79,
    "image": "/images/home/courses/course-1.png",
    "title": "Time Management & Focus for Creators",
    "instructor": "TechPulse Studio",
    "rating": 4.5,
    "level": "Advanced",
    "price": 65,
    "category": "Music",
    "students": [
      "/images/students/student-2.png",
      "/images/students/student-4.png",
      "/images/students/student-1.png",
      "/images/students/student-3.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "480+"
  },
  {
    "id": 80,
    "image": "/images/home/courses/course-2.png",
    "title": "Pitch Deck Mastery for Raising Venture Capital",
    "instructor": "Aura Learning",
    "rating": 4.6,
    "level": "All Levels",
    "price": 75,
    "category": "Drawing & Painting",
    "students": [
      "/images/students/student-3.png",
      "/images/students/student-1.png",
      "/images/students/student-4.png",
      "/images/students/student-2.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "1.2K+"
  },
  {
    "id": 81,
    "image": "/images/home/courses/course-3.png",
    "title": "Legal & Tax Basics for Solopreneurs",
    "instructor": "purepearl studio",
    "rating": 4.7,
    "level": "Beginner",
    "price": 19,
    "category": "Marketing",
    "students": [
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "2.5K+"
  },
  {
    "id": 82,
    "image": "/images/home/courses/course-4.png",
    "title": "Motion Graphics in Adobe After Effects",
    "instructor": "DesignCraft Academy",
    "rating": 4.8,
    "level": "Intermediate",
    "price": 25,
    "category": "Cooking",
    "students": [
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png"
    ],
    "studentCount": "26+"
  },
  {
    "id": 83,
    "image": "/images/home/courses/course-5.png",
    "title": "Digital Illustration in Procreate",
    "instructor": "DevSphere Labs",
    "rating": 4.9,
    "level": "Advanced",
    "price": 29,
    "category": "Digital Illustration",
    "students": [
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png"
    ],
    "studentCount": "45+"
  },
  {
    "id": 84,
    "image": "/images/home/courses/course-6.png",
    "title": "Cinematic Video Editing in Premiere Pro",
    "instructor": "Apex Media Group",
    "rating": 5,
    "level": "All Levels",
    "price": 35,
    "category": "Crafts",
    "students": [
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png"
    ],
    "studentCount": "68+"
  },
  {
    "id": 85,
    "image": "/images/home/courses/course-1.png",
    "title": "Audio Engineering & Podcast Production",
    "instructor": "Elena Rostova",
    "rating": 4.5,
    "level": "Beginner",
    "price": 39,
    "category": "Graphic Design",
    "students": [
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png"
    ],
    "studentCount": "84+"
  },
  {
    "id": 86,
    "image": "/images/home/courses/course-2.png",
    "title": "Blender 3D Modeling for Beginners",
    "instructor": "Marcus Vance",
    "rating": 4.6,
    "level": "Intermediate",
    "price": 45,
    "category": "Animation",
    "students": [
      "/images/students/student-1.png",
      "/images/students/student-3.png",
      "/images/students/student-5.png",
      "/images/students/student-2.png",
      "/images/students/student-4.png"
    ],
    "studentCount": "120+"
  },
  {
    "id": 87,
    "image": "/images/home/courses/course-3.png",
    "title": "Color Grading & Cinematic Look Design",
    "instructor": "PixelPerfect Co.",
    "rating": 4.7,
    "level": "Advanced",
    "price": 49,
    "category": "Cooking",
    "students": [
      "/images/students/student-2.png",
      "/images/students/student-4.png",
      "/images/students/student-1.png",
      "/images/students/student-3.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "240+"
  },
  {
    "id": 88,
    "image": "/images/home/courses/course-4.png",
    "title": "Game Development with Unity & C#",
    "instructor": "Nova Creative",
    "rating": 4.8,
    "level": "All Levels",
    "price": 55,
    "category": "Photography",
    "students": [
      "/images/students/student-3.png",
      "/images/students/student-1.png",
      "/images/students/student-4.png",
      "/images/students/student-2.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "480+"
  },
  {
    "id": 89,
    "image": "/images/home/courses/course-5.png",
    "title": "Creative Coding with p5.js and Canvas",
    "instructor": "TechPulse Studio",
    "rating": 4.9,
    "level": "Beginner",
    "price": 65,
    "category": "Data Science",
    "students": [
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "1.2K+"
  },
  {
    "id": 90,
    "image": "/images/home/courses/course-6.png",
    "title": "Web Application Security & OWASP Top 10",
    "instructor": "Aura Learning",
    "rating": 5,
    "level": "Intermediate",
    "price": 75,
    "category": "Digital Illustration",
    "students": [
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png"
    ],
    "studentCount": "2.5K+"
  },
  {
    "id": 91,
    "image": "/images/home/courses/course-1.png",
    "title": "Ethical Hacking & Penetration Testing",
    "instructor": "purepearl studio",
    "rating": 4.5,
    "level": "Advanced",
    "price": 19,
    "category": "Marketing",
    "students": [
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png"
    ],
    "studentCount": "26+"
  },
  {
    "id": 92,
    "image": "/images/home/courses/course-2.png",
    "title": "CI/CD Pipelines with GitHub Actions",
    "instructor": "DesignCraft Academy",
    "rating": 4.6,
    "level": "All Levels",
    "price": 25,
    "category": "Digital Illustration",
    "students": [
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png"
    ],
    "studentCount": "45+"
  },
  {
    "id": 93,
    "image": "/images/home/courses/course-3.png",
    "title": "Linux Command Line & Bash Scripting",
    "instructor": "DevSphere Labs",
    "rating": 4.7,
    "level": "Beginner",
    "price": 29,
    "category": "Crafts",
    "students": [
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png"
    ],
    "studentCount": "68+"
  },
  {
    "id": 94,
    "image": "/images/home/courses/course-4.png",
    "title": "Zero Trust Architecture Fundamentals",
    "instructor": "Apex Media Group",
    "rating": 4.8,
    "level": "Intermediate",
    "price": 35,
    "category": "Film & Video",
    "students": [
      "/images/students/student-1.png",
      "/images/students/student-3.png",
      "/images/students/student-5.png",
      "/images/students/student-2.png",
      "/images/students/student-4.png"
    ],
    "studentCount": "84+"
  },
  {
    "id": 95,
    "image": "/images/home/courses/course-5.png",
    "title": "DevSecOps: Automated Security in Pipelines",
    "instructor": "Elena Rostova",
    "rating": 4.9,
    "level": "Advanced",
    "price": 39,
    "category": "Photography",
    "students": [
      "/images/students/student-2.png",
      "/images/students/student-4.png",
      "/images/students/student-1.png",
      "/images/students/student-3.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "120+"
  },
  {
    "id": 96,
    "image": "/images/home/courses/course-6.png",
    "title": "Full-Stack AI Application Development",
    "instructor": "Marcus Vance",
    "rating": 5,
    "level": "All Levels",
    "price": 45,
    "category": "Graphic Design",
    "students": [
      "/images/students/student-3.png",
      "/images/students/student-1.png",
      "/images/students/student-4.png",
      "/images/students/student-2.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "240+"
  },
  {
    "id": 97,
    "image": "/images/home/courses/course-1.png",
    "title": "Brand Identity Design from Logo to Guidelines",
    "instructor": "PixelPerfect Co.",
    "rating": 4.5,
    "level": "Beginner",
    "price": 49,
    "category": "Graphic Design",
    "students": [
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png"
    ],
    "studentCount": "480+"
  },
  {
    "id": 98,
    "image": "/images/home/courses/course-2.png",
    "title": "E-Commerce Development with Shopify & Next.js",
    "instructor": "Nova Creative",
    "rating": 4.6,
    "level": "Intermediate",
    "price": 55,
    "category": "UI/UX Design",
    "students": [
      "/images/students/student-2.png",
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png"
    ],
    "studentCount": "1.2K+"
  },
  {
    "id": 99,
    "image": "/images/home/courses/course-3.png",
    "title": "Data Structures & Algorithms in TypeScript",
    "instructor": "TechPulse Studio",
    "rating": 4.7,
    "level": "Advanced",
    "price": 65,
    "category": "Film & Video",
    "students": [
      "/images/students/student-3.png",
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png"
    ],
    "studentCount": "2.5K+"
  },
  {
    "id": 100,
    "image": "/images/home/courses/course-4.png",
    "title": "Modern Software Architecture & Design Patterns",
    "instructor": "Aura Learning",
    "rating": 4.8,
    "level": "All Levels",
    "price": 75,
    "category": "Marketing",
    "students": [
      "/images/students/student-4.png",
      "/images/students/student-5.png",
      "/images/students/student-1.png",
      "/images/students/student-2.png",
      "/images/students/student-3.png"
    ],
    "studentCount": "26+"
  }
];
