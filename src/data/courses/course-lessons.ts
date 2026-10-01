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
    "id": 1,
    "courseId": 1,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Learn Figma from Basic",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Learn Figma from Basic.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 2,
    "courseId": 1,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Learn Figma from Basic",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 3,
    "courseId": 1,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 4,
    "courseId": 1,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 5,
    "courseId": 1,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 6,
    "courseId": 2,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Build Digital Asset",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Build Digital Asset.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 7,
    "courseId": 2,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Build Digital Asset",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 8,
    "courseId": 2,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 9,
    "courseId": 2,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 10,
    "courseId": 2,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 11,
    "courseId": 3,
    "module": "Module 1: Getting Started",
    "title": "Introduction to The Power of Big Data",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for The Power of Big Data.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 12,
    "courseId": 3,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in The Power of Big Data",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 13,
    "courseId": 3,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 14,
    "courseId": 3,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 15,
    "courseId": 3,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 16,
    "courseId": 4,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Balancing Productivity and Life",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Balancing Productivity and Life.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 17,
    "courseId": 4,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Balancing Productivity and Life",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 18,
    "courseId": 4,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 19,
    "courseId": 4,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 20,
    "courseId": 4,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 21,
    "courseId": 5,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Mastering Money Management",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Mastering Money Management.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 22,
    "courseId": 5,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Mastering Money Management",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 23,
    "courseId": 5,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 24,
    "courseId": 5,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 25,
    "courseId": 5,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 26,
    "courseId": 6,
    "module": "Module 1: Getting Started",
    "title": "Introduction to From Idea to Startup Success",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for From Idea to Startup Success.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 27,
    "courseId": 6,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in From Idea to Startup Success",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 28,
    "courseId": 6,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 29,
    "courseId": 6,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 30,
    "courseId": 6,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 31,
    "courseId": 7,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Advanced Design Systems in Figma",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Advanced Design Systems in Figma.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 32,
    "courseId": 7,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Advanced Design Systems in Figma",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 33,
    "courseId": 7,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 34,
    "courseId": 7,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 35,
    "courseId": 7,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 36,
    "courseId": 8,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Micro-Interactions and Prototyping",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Micro-Interactions and Prototyping.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 37,
    "courseId": 8,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Micro-Interactions and Prototyping",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 38,
    "courseId": 8,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 39,
    "courseId": 8,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 40,
    "courseId": 8,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 41,
    "courseId": 9,
    "module": "Module 1: Getting Started",
    "title": "Introduction to UX Research & User Testing Essentials",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for UX Research & User Testing Essentials.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 42,
    "courseId": 9,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in UX Research & User Testing Essentials",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 43,
    "courseId": 9,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 44,
    "courseId": 9,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 45,
    "courseId": 9,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 46,
    "courseId": 10,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Mobile App UI Design: iOS & Android",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Mobile App UI Design: iOS & Android.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 47,
    "courseId": 10,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Mobile App UI Design: iOS & Android",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 48,
    "courseId": 10,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 49,
    "courseId": 10,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 50,
    "courseId": 10,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 51,
    "courseId": 11,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Typography & Color Theory for Designers",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Typography & Color Theory for Designers.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 52,
    "courseId": 11,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Typography & Color Theory for Designers",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 53,
    "courseId": 11,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 54,
    "courseId": 11,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 55,
    "courseId": 11,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 56,
    "courseId": 12,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Wireframing & Information Architecture",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Wireframing & Information Architecture.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 57,
    "courseId": 12,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Wireframing & Information Architecture",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 58,
    "courseId": 12,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 59,
    "courseId": 12,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 60,
    "courseId": 12,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 61,
    "courseId": 13,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Responsive Web Design Fundamentals",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Responsive Web Design Fundamentals.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 62,
    "courseId": 13,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Responsive Web Design Fundamentals",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 63,
    "courseId": 13,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 64,
    "courseId": 13,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 65,
    "courseId": 13,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 66,
    "courseId": 14,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Design Thinking & Problem Solving",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Design Thinking & Problem Solving.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 67,
    "courseId": 14,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Design Thinking & Problem Solving",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 68,
    "courseId": 14,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 69,
    "courseId": 14,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 70,
    "courseId": 14,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 71,
    "courseId": 15,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Creating 3D Web Graphics with Spline",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Creating 3D Web Graphics with Spline.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 72,
    "courseId": 15,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Creating 3D Web Graphics with Spline",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 73,
    "courseId": 15,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 74,
    "courseId": 15,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 75,
    "courseId": 15,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 76,
    "courseId": 16,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Figma to Production Code Workflow",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Figma to Production Code Workflow.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 77,
    "courseId": 16,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Figma to Production Code Workflow",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 78,
    "courseId": 16,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 79,
    "courseId": 16,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 80,
    "courseId": 16,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 81,
    "courseId": 17,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Dashboard & SaaS Interface Design",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Dashboard & SaaS Interface Design.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 82,
    "courseId": 17,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Dashboard & SaaS Interface Design",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 83,
    "courseId": 17,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 84,
    "courseId": 17,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 85,
    "courseId": 17,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 86,
    "courseId": 18,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Design Systems at Scale",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Design Systems at Scale.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 87,
    "courseId": 18,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Design Systems at Scale",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 88,
    "courseId": 18,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 89,
    "courseId": 18,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 90,
    "courseId": 18,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 91,
    "courseId": 19,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Dark Mode UI & Contrast Mastery",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Dark Mode UI & Contrast Mastery.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 92,
    "courseId": 19,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Dark Mode UI & Contrast Mastery",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 93,
    "courseId": 19,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 94,
    "courseId": 19,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 95,
    "courseId": 19,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 96,
    "courseId": 20,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Iconography & Vector Illustration",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Iconography & Vector Illustration.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 97,
    "courseId": 20,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Iconography & Vector Illustration",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 98,
    "courseId": 20,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 99,
    "courseId": 20,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 100,
    "courseId": 20,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 101,
    "courseId": 21,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Modern Next.js 15 & React 19 Bootcamp",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Modern Next.js 15 & React 19 Bootcamp.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 102,
    "courseId": 21,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Modern Next.js 15 & React 19 Bootcamp",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 103,
    "courseId": 21,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 104,
    "courseId": 21,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 105,
    "courseId": 21,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 106,
    "courseId": 22,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Full-Stack TypeScript from Scratch",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Full-Stack TypeScript from Scratch.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 107,
    "courseId": 22,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Full-Stack TypeScript from Scratch",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 108,
    "courseId": 22,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 109,
    "courseId": 22,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 110,
    "courseId": 22,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 111,
    "courseId": 23,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Tailwind CSS: Zero to Production Hero",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Tailwind CSS: Zero to Production Hero.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 112,
    "courseId": 23,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Tailwind CSS: Zero to Production Hero",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 113,
    "courseId": 23,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 114,
    "courseId": 23,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 115,
    "courseId": 23,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 116,
    "courseId": 24,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Mastering Vue 3 & Nuxt Framework",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Mastering Vue 3 & Nuxt Framework.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 117,
    "courseId": 24,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Mastering Vue 3 & Nuxt Framework",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 118,
    "courseId": 24,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 119,
    "courseId": 24,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 120,
    "courseId": 24,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 121,
    "courseId": 25,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Advanced JavaScript Concepts & Patterns",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Advanced JavaScript Concepts & Patterns.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 122,
    "courseId": 25,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Advanced JavaScript Concepts & Patterns",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 123,
    "courseId": 25,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 124,
    "courseId": 25,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 125,
    "courseId": 25,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 126,
    "courseId": 26,
    "module": "Module 1: Getting Started",
    "title": "Introduction to High-Performance Web Animations",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for High-Performance Web Animations.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 127,
    "courseId": 26,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in High-Performance Web Animations",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 128,
    "courseId": 26,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 129,
    "courseId": 26,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 130,
    "courseId": 26,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 131,
    "courseId": 27,
    "module": "Module 1: Getting Started",
    "title": "Introduction to State Management with Zustand & Redux",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for State Management with Zustand & Redux.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 132,
    "courseId": 27,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in State Management with Zustand & Redux",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 133,
    "courseId": 27,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 134,
    "courseId": 27,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 135,
    "courseId": 27,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 136,
    "courseId": 28,
    "module": "Module 1: Getting Started",
    "title": "Introduction to GraphQL APIs with Apollo & Node.js",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for GraphQL APIs with Apollo & Node.js.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 137,
    "courseId": 28,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in GraphQL APIs with Apollo & Node.js",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 138,
    "courseId": 28,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 139,
    "courseId": 28,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 140,
    "courseId": 28,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 141,
    "courseId": 29,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Serverless Functions on AWS & Vercel",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Serverless Functions on AWS & Vercel.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 142,
    "courseId": 29,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Serverless Functions on AWS & Vercel",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 143,
    "courseId": 29,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 144,
    "courseId": 29,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 145,
    "courseId": 29,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 146,
    "courseId": 30,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Building Accessible Web Applications (a11y)",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Building Accessible Web Applications (a11y).",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 147,
    "courseId": 30,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Building Accessible Web Applications (a11y)",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 148,
    "courseId": 30,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 149,
    "courseId": 30,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 150,
    "courseId": 30,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 151,
    "courseId": 31,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Progressive Web Apps (PWA) Hands-On",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Progressive Web Apps (PWA) Hands-On.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 152,
    "courseId": 31,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Progressive Web Apps (PWA) Hands-On",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 153,
    "courseId": 31,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 154,
    "courseId": 31,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 155,
    "courseId": 31,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 156,
    "courseId": 32,
    "module": "Module 1: Getting Started",
    "title": "Introduction to WebGL & Three.js 3D Interactive Web",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for WebGL & Three.js 3D Interactive Web.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 157,
    "courseId": 32,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in WebGL & Three.js 3D Interactive Web",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 158,
    "courseId": 32,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 159,
    "courseId": 32,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 160,
    "courseId": 32,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 161,
    "courseId": 33,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Modern CSS Layouts: Grid & Flexbox",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Modern CSS Layouts: Grid & Flexbox.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 162,
    "courseId": 33,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Modern CSS Layouts: Grid & Flexbox",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 163,
    "courseId": 33,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 164,
    "courseId": 33,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 165,
    "courseId": 33,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 166,
    "courseId": 34,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Docker for Frontend Developers",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Docker for Frontend Developers.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 167,
    "courseId": 34,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Docker for Frontend Developers",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 168,
    "courseId": 34,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 169,
    "courseId": 34,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 170,
    "courseId": 34,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 171,
    "courseId": 35,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Testing React Applications with Vitest",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Testing React Applications with Vitest.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 172,
    "courseId": 35,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Testing React Applications with Vitest",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 173,
    "courseId": 35,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 174,
    "courseId": 35,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 175,
    "courseId": 35,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 176,
    "courseId": 36,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Node.js & Express API Architecture",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Node.js & Express API Architecture.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 177,
    "courseId": 36,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Node.js & Express API Architecture",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 178,
    "courseId": 36,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 179,
    "courseId": 36,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 180,
    "courseId": 36,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 181,
    "courseId": 37,
    "module": "Module 1: Getting Started",
    "title": "Introduction to PostgreSQL Mastery & Query Optimization",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for PostgreSQL Mastery & Query Optimization.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 182,
    "courseId": 37,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in PostgreSQL Mastery & Query Optimization",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 183,
    "courseId": 37,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 184,
    "courseId": 37,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 185,
    "courseId": 37,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 186,
    "courseId": 38,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Building Microservices with Go",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Building Microservices with Go.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 187,
    "courseId": 38,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Building Microservices with Go",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 188,
    "courseId": 38,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 189,
    "courseId": 38,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 190,
    "courseId": 38,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 191,
    "courseId": 39,
    "module": "Module 1: Getting Started",
    "title": "Introduction to MongoDB and NoSQL Database Design",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for MongoDB and NoSQL Database Design.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 192,
    "courseId": 39,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in MongoDB and NoSQL Database Design",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 193,
    "courseId": 39,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 194,
    "courseId": 39,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 195,
    "courseId": 39,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 196,
    "courseId": 40,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Redis Caching & Real-time PubSub",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Redis Caching & Real-time PubSub.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 197,
    "courseId": 40,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Redis Caching & Real-time PubSub",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 198,
    "courseId": 40,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 199,
    "courseId": 40,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 200,
    "courseId": 40,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 201,
    "courseId": 41,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Cloud Architecture with AWS Solutions",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Cloud Architecture with AWS Solutions.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 202,
    "courseId": 41,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Cloud Architecture with AWS Solutions",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 203,
    "courseId": 41,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 204,
    "courseId": 41,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 205,
    "courseId": 41,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 206,
    "courseId": 42,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Google Cloud Platform for Developers",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Google Cloud Platform for Developers.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 207,
    "courseId": 42,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Google Cloud Platform for Developers",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 208,
    "courseId": 42,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 209,
    "courseId": 42,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 210,
    "courseId": 42,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 211,
    "courseId": 43,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Kubernetes & Container Orchestration",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Kubernetes & Container Orchestration.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 212,
    "courseId": 43,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Kubernetes & Container Orchestration",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 213,
    "courseId": 43,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 214,
    "courseId": 43,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 215,
    "courseId": 43,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 216,
    "courseId": 44,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Building Event-Driven Systems with Kafka",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Building Event-Driven Systems with Kafka.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 217,
    "courseId": 44,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Building Event-Driven Systems with Kafka",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 218,
    "courseId": 44,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 219,
    "courseId": 44,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 220,
    "courseId": 44,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 221,
    "courseId": 45,
    "module": "Module 1: Getting Started",
    "title": "Introduction to RESTful & gRPC API Design Standards",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for RESTful & gRPC API Design Standards.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 222,
    "courseId": 45,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in RESTful & gRPC API Design Standards",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 223,
    "courseId": 45,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 224,
    "courseId": 45,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 225,
    "courseId": 45,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 226,
    "courseId": 46,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Practical Prompt Engineering for LLMs",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Practical Prompt Engineering for LLMs.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 227,
    "courseId": 46,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Practical Prompt Engineering for LLMs",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 228,
    "courseId": 46,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 229,
    "courseId": 46,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 230,
    "courseId": 46,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 231,
    "courseId": 47,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Python for Data Analysis & Pandas",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Python for Data Analysis & Pandas.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 232,
    "courseId": 47,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Python for Data Analysis & Pandas",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 233,
    "courseId": 47,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 234,
    "courseId": 47,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 235,
    "courseId": 47,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 236,
    "courseId": 48,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Machine Learning with Scikit-Learn",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Machine Learning with Scikit-Learn.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 237,
    "courseId": 48,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Machine Learning with Scikit-Learn",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 238,
    "courseId": 48,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 239,
    "courseId": 48,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 240,
    "courseId": 48,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 241,
    "courseId": 49,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Deep Learning & Neural Networks Bootcamp",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Deep Learning & Neural Networks Bootcamp.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 242,
    "courseId": 49,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Deep Learning & Neural Networks Bootcamp",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 243,
    "courseId": 49,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 244,
    "courseId": 49,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 245,
    "courseId": 49,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 246,
    "courseId": 50,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Building AI Agents with LangChain",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Building AI Agents with LangChain.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 247,
    "courseId": 50,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Building AI Agents with LangChain",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 248,
    "courseId": 50,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 249,
    "courseId": 50,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 250,
    "courseId": 50,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 251,
    "courseId": 51,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Computer Vision & OpenCV Projects",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Computer Vision & OpenCV Projects.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 252,
    "courseId": 51,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Computer Vision & OpenCV Projects",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 253,
    "courseId": 51,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 254,
    "courseId": 51,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 255,
    "courseId": 51,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 256,
    "courseId": 52,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Natural Language Processing Fundamentals",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Natural Language Processing Fundamentals.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 257,
    "courseId": 52,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Natural Language Processing Fundamentals",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 258,
    "courseId": 52,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 259,
    "courseId": 52,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 260,
    "courseId": 52,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 261,
    "courseId": 53,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Fine-Tuning Open Source LLMs",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Fine-Tuning Open Source LLMs.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 262,
    "courseId": 53,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Fine-Tuning Open Source LLMs",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 263,
    "courseId": 53,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 264,
    "courseId": 53,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 265,
    "courseId": 53,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 266,
    "courseId": 54,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Data Visualization with D3.js & Tableau",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Data Visualization with D3.js & Tableau.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 267,
    "courseId": 54,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Data Visualization with D3.js & Tableau",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 268,
    "courseId": 54,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 269,
    "courseId": 54,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 270,
    "courseId": 54,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 271,
    "courseId": 55,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Vector Databases & RAG Architecture",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Vector Databases & RAG Architecture.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 272,
    "courseId": 55,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Vector Databases & RAG Architecture",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 273,
    "courseId": 55,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 274,
    "courseId": 55,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 275,
    "courseId": 55,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 276,
    "courseId": 56,
    "module": "Module 1: Getting Started",
    "title": "Introduction to React Native & Expo: Build Cross-Platform Apps",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for React Native & Expo: Build Cross-Platform Apps.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 277,
    "courseId": 56,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in React Native & Expo: Build Cross-Platform Apps",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 278,
    "courseId": 56,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 279,
    "courseId": 56,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 280,
    "courseId": 56,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 281,
    "courseId": 57,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Flutter & Dart Complete Masterclass",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Flutter & Dart Complete Masterclass.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 282,
    "courseId": 57,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Flutter & Dart Complete Masterclass",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 283,
    "courseId": 57,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 284,
    "courseId": 57,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 285,
    "courseId": 57,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 286,
    "courseId": 58,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Swift & SwiftUI iOS App Architecture",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Swift & SwiftUI iOS App Architecture.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 287,
    "courseId": 58,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Swift & SwiftUI iOS App Architecture",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 288,
    "courseId": 58,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 289,
    "courseId": 58,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 290,
    "courseId": 58,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 291,
    "courseId": 59,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Kotlin & Jetpack Compose Android Guide",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Kotlin & Jetpack Compose Android Guide.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 292,
    "courseId": 59,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Kotlin & Jetpack Compose Android Guide",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 293,
    "courseId": 59,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 294,
    "courseId": 59,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 295,
    "courseId": 59,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 296,
    "courseId": 60,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Mobile App Performance & Offline Sync",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Mobile App Performance & Offline Sync.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 297,
    "courseId": 60,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Mobile App Performance & Offline Sync",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 298,
    "courseId": 60,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 299,
    "courseId": 60,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 300,
    "courseId": 60,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 301,
    "courseId": 61,
    "module": "Module 1: Getting Started",
    "title": "Introduction to In-App Purchases & Monetization Strategy",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for In-App Purchases & Monetization Strategy.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 302,
    "courseId": 61,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in In-App Purchases & Monetization Strategy",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 303,
    "courseId": 61,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 304,
    "courseId": 61,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 305,
    "courseId": 61,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 306,
    "courseId": 62,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Growth Hacking for Digital Products",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Growth Hacking for Digital Products.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 307,
    "courseId": 62,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Growth Hacking for Digital Products",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 308,
    "courseId": 62,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 309,
    "courseId": 62,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 310,
    "courseId": 62,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 311,
    "courseId": 63,
    "module": "Module 1: Getting Started",
    "title": "Introduction to SEO Mastery: Rank #1 on Google",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for SEO Mastery: Rank #1 on Google.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 312,
    "courseId": 63,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in SEO Mastery: Rank #1 on Google",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 313,
    "courseId": 63,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 314,
    "courseId": 63,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 315,
    "courseId": 63,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 316,
    "courseId": 64,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Social Media Content Strategy That Converts",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Social Media Content Strategy That Converts.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 317,
    "courseId": 64,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Social Media Content Strategy That Converts",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 318,
    "courseId": 64,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 319,
    "courseId": 64,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 320,
    "courseId": 64,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 321,
    "courseId": 65,
    "module": "Module 1: Getting Started",
    "title": "Introduction to High-Converting Email Marketing Campaigns",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for High-Converting Email Marketing Campaigns.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 322,
    "courseId": 65,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in High-Converting Email Marketing Campaigns",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 323,
    "courseId": 65,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 324,
    "courseId": 65,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 325,
    "courseId": 65,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 326,
    "courseId": 66,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Google Ads & Performance Marketing",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Google Ads & Performance Marketing.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 327,
    "courseId": 66,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Google Ads & Performance Marketing",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 328,
    "courseId": 66,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 329,
    "courseId": 66,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 330,
    "courseId": 66,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 331,
    "courseId": 67,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Brand Storytelling & Copywriting Secrets",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Brand Storytelling & Copywriting Secrets.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 332,
    "courseId": 67,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Brand Storytelling & Copywriting Secrets",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 333,
    "courseId": 67,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 334,
    "courseId": 67,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 335,
    "courseId": 67,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 336,
    "courseId": 68,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Influencer Marketing & Brand Partnerships",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Influencer Marketing & Brand Partnerships.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 337,
    "courseId": 68,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Influencer Marketing & Brand Partnerships",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 338,
    "courseId": 68,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 339,
    "courseId": 68,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 340,
    "courseId": 68,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 341,
    "courseId": 69,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Affiliate Marketing for Beginners",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Affiliate Marketing for Beginners.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 342,
    "courseId": 69,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Affiliate Marketing for Beginners",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 343,
    "courseId": 69,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 344,
    "courseId": 69,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 345,
    "courseId": 69,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 346,
    "courseId": 70,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Analytics & Conversion Rate Optimization (CRO)",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Analytics & Conversion Rate Optimization (CRO).",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 347,
    "courseId": 70,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Analytics & Conversion Rate Optimization (CRO)",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 348,
    "courseId": 70,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 349,
    "courseId": 70,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 350,
    "courseId": 70,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 351,
    "courseId": 71,
    "module": "Module 1: Getting Started",
    "title": "Introduction to B2B SaaS Content Marketing Strategy",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for B2B SaaS Content Marketing Strategy.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 352,
    "courseId": 71,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in B2B SaaS Content Marketing Strategy",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 353,
    "courseId": 71,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 354,
    "courseId": 71,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 355,
    "courseId": 71,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 356,
    "courseId": 72,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Agile & Scrum for Modern Tech Teams",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Agile & Scrum for Modern Tech Teams.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 357,
    "courseId": 72,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Agile & Scrum for Modern Tech Teams",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 358,
    "courseId": 72,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 359,
    "courseId": 72,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 360,
    "courseId": 72,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 361,
    "courseId": 73,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Product Management: Ideation to Launch",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Product Management: Ideation to Launch.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 362,
    "courseId": 73,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Product Management: Ideation to Launch",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 363,
    "courseId": 73,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 364,
    "courseId": 73,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 365,
    "courseId": 73,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 366,
    "courseId": 74,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Financial Modeling for Tech Startups",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Financial Modeling for Tech Startups.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 367,
    "courseId": 74,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Financial Modeling for Tech Startups",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 368,
    "courseId": 74,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 369,
    "courseId": 74,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 370,
    "courseId": 74,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 371,
    "courseId": 75,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Remote Team Leadership & Communication",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Remote Team Leadership & Communication.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 372,
    "courseId": 75,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Remote Team Leadership & Communication",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 373,
    "courseId": 75,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 374,
    "courseId": 75,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 375,
    "courseId": 75,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 376,
    "courseId": 76,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Freelancing: How to Win 0K+ Clients",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Freelancing: How to Win 0K+ Clients.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 377,
    "courseId": 76,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Freelancing: How to Win 0K+ Clients",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 378,
    "courseId": 76,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 379,
    "courseId": 76,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 380,
    "courseId": 76,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 381,
    "courseId": 77,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Pricing Strategies for Digital Products",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Pricing Strategies for Digital Products.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 382,
    "courseId": 77,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Pricing Strategies for Digital Products",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 383,
    "courseId": 77,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 384,
    "courseId": 77,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 385,
    "courseId": 77,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 386,
    "courseId": 78,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Negotiation Skills for Professionals",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Negotiation Skills for Professionals.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 387,
    "courseId": 78,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Negotiation Skills for Professionals",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 388,
    "courseId": 78,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 389,
    "courseId": 78,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 390,
    "courseId": 78,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 391,
    "courseId": 79,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Time Management & Focus for Creators",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Time Management & Focus for Creators.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 392,
    "courseId": 79,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Time Management & Focus for Creators",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 393,
    "courseId": 79,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 394,
    "courseId": 79,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 395,
    "courseId": 79,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 396,
    "courseId": 80,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Pitch Deck Mastery for Raising Venture Capital",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Pitch Deck Mastery for Raising Venture Capital.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 397,
    "courseId": 80,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Pitch Deck Mastery for Raising Venture Capital",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 398,
    "courseId": 80,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 399,
    "courseId": 80,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 400,
    "courseId": 80,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 401,
    "courseId": 81,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Legal & Tax Basics for Solopreneurs",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Legal & Tax Basics for Solopreneurs.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 402,
    "courseId": 81,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Legal & Tax Basics for Solopreneurs",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 403,
    "courseId": 81,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 404,
    "courseId": 81,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 405,
    "courseId": 81,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 406,
    "courseId": 82,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Motion Graphics in Adobe After Effects",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Motion Graphics in Adobe After Effects.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 407,
    "courseId": 82,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Motion Graphics in Adobe After Effects",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 408,
    "courseId": 82,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 409,
    "courseId": 82,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 410,
    "courseId": 82,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 411,
    "courseId": 83,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Digital Illustration in Procreate",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Digital Illustration in Procreate.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 412,
    "courseId": 83,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Digital Illustration in Procreate",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 413,
    "courseId": 83,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 414,
    "courseId": 83,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 415,
    "courseId": 83,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 416,
    "courseId": 84,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Cinematic Video Editing in Premiere Pro",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Cinematic Video Editing in Premiere Pro.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 417,
    "courseId": 84,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Cinematic Video Editing in Premiere Pro",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 418,
    "courseId": 84,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 419,
    "courseId": 84,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 420,
    "courseId": 84,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 421,
    "courseId": 85,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Audio Engineering & Podcast Production",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Audio Engineering & Podcast Production.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 422,
    "courseId": 85,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Audio Engineering & Podcast Production",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 423,
    "courseId": 85,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 424,
    "courseId": 85,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 425,
    "courseId": 85,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 426,
    "courseId": 86,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Blender 3D Modeling for Beginners",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Blender 3D Modeling for Beginners.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 427,
    "courseId": 86,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Blender 3D Modeling for Beginners",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 428,
    "courseId": 86,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 429,
    "courseId": 86,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 430,
    "courseId": 86,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 431,
    "courseId": 87,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Color Grading & Cinematic Look Design",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Color Grading & Cinematic Look Design.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 432,
    "courseId": 87,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Color Grading & Cinematic Look Design",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 433,
    "courseId": 87,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 434,
    "courseId": 87,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 435,
    "courseId": 87,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 436,
    "courseId": 88,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Game Development with Unity & C#",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Game Development with Unity & C#.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 437,
    "courseId": 88,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Game Development with Unity & C#",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 438,
    "courseId": 88,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 439,
    "courseId": 88,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 440,
    "courseId": 88,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 441,
    "courseId": 89,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Creative Coding with p5.js and Canvas",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Creative Coding with p5.js and Canvas.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 442,
    "courseId": 89,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Creative Coding with p5.js and Canvas",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 443,
    "courseId": 89,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 444,
    "courseId": 89,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 445,
    "courseId": 89,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 446,
    "courseId": 90,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Web Application Security & OWASP Top 10",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Web Application Security & OWASP Top 10.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 447,
    "courseId": 90,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Web Application Security & OWASP Top 10",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 448,
    "courseId": 90,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 449,
    "courseId": 90,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 450,
    "courseId": 90,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 451,
    "courseId": 91,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Ethical Hacking & Penetration Testing",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Ethical Hacking & Penetration Testing.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 452,
    "courseId": 91,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Ethical Hacking & Penetration Testing",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 453,
    "courseId": 91,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 454,
    "courseId": 91,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 455,
    "courseId": 91,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 456,
    "courseId": 92,
    "module": "Module 1: Getting Started",
    "title": "Introduction to CI/CD Pipelines with GitHub Actions",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for CI/CD Pipelines with GitHub Actions.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 457,
    "courseId": 92,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in CI/CD Pipelines with GitHub Actions",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 458,
    "courseId": 92,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 459,
    "courseId": 92,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 460,
    "courseId": 92,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 461,
    "courseId": 93,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Linux Command Line & Bash Scripting",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Linux Command Line & Bash Scripting.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 462,
    "courseId": 93,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Linux Command Line & Bash Scripting",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 463,
    "courseId": 93,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 464,
    "courseId": 93,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 465,
    "courseId": 93,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 466,
    "courseId": 94,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Zero Trust Architecture Fundamentals",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Zero Trust Architecture Fundamentals.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 467,
    "courseId": 94,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Zero Trust Architecture Fundamentals",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 468,
    "courseId": 94,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 469,
    "courseId": 94,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 470,
    "courseId": 94,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 471,
    "courseId": 95,
    "module": "Module 1: Getting Started",
    "title": "Introduction to DevSecOps: Automated Security in Pipelines",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for DevSecOps: Automated Security in Pipelines.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 472,
    "courseId": 95,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in DevSecOps: Automated Security in Pipelines",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 473,
    "courseId": 95,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 474,
    "courseId": 95,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 475,
    "courseId": 95,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 476,
    "courseId": 96,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Full-Stack AI Application Development",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Full-Stack AI Application Development.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 477,
    "courseId": 96,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Full-Stack AI Application Development",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 478,
    "courseId": 96,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 479,
    "courseId": 96,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 480,
    "courseId": 96,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 481,
    "courseId": 97,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Brand Identity Design from Logo to Guidelines",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Brand Identity Design from Logo to Guidelines.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 482,
    "courseId": 97,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Brand Identity Design from Logo to Guidelines",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 483,
    "courseId": 97,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 484,
    "courseId": 97,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 485,
    "courseId": 97,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 486,
    "courseId": 98,
    "module": "Module 1: Getting Started",
    "title": "Introduction to E-Commerce Development with Shopify & Next.js",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for E-Commerce Development with Shopify & Next.js.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 487,
    "courseId": 98,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in E-Commerce Development with Shopify & Next.js",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 488,
    "courseId": 98,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 489,
    "courseId": 98,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 490,
    "courseId": 98,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 491,
    "courseId": 99,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Data Structures & Algorithms in TypeScript",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Data Structures & Algorithms in TypeScript.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 492,
    "courseId": 99,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Data Structures & Algorithms in TypeScript",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 493,
    "courseId": 99,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 494,
    "courseId": 99,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 495,
    "courseId": 99,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  },
  {
    "id": 496,
    "courseId": 100,
    "module": "Module 1: Getting Started",
    "title": "Introduction to Modern Software Architecture & Design Patterns",
    "description": "Lay the groundwork with foundational concepts, environment configuration, and tooling essentials for Modern Software Architecture & Design Patterns.",
    "duration": "14 mins",
    "order": 1
  },
  {
    "id": 497,
    "courseId": 100,
    "module": "Module 2: Core Fundamentals",
    "title": "Core Principles & Practical Patterns in Modern Software Architecture & Design Patterns",
    "description": "Explore the architectural principles, essential techniques, and best practices that drive successful execution.",
    "duration": "22 mins",
    "order": 2
  },
  {
    "id": 498,
    "courseId": 100,
    "module": "Module 3: Advanced Workflows",
    "title": "Advanced Techniques & Production Workflows",
    "description": "Level up your proficiency by exploring high-impact workflows, automation, and real-world problem-solving strategies.",
    "duration": "28 mins",
    "order": 3
  },
  {
    "id": 499,
    "courseId": 100,
    "module": "Module 4: Quality & Optimization",
    "title": "Performance, Polish & Production Standards",
    "description": "Audit and optimize your deliverables to meet industry-standard quality, responsiveness, and performance benchmarks.",
    "duration": "19 mins",
    "order": 4
  },
  {
    "id": 500,
    "courseId": 100,
    "module": "Module 5: Capstone Project",
    "title": "Building Your Capstone Portfolio Deliverable",
    "description": "Synthesize everything you have learned into a complete, end-to-end portfolio project ready to showcase to clients and employers.",
    "duration": "35 mins",
    "order": 5
  }
];
