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
    "id": 1,
    "courseId": 1,
    "userName": "Emily Zhao",
    "userAvatar": "/images/students/student-4.png",
    "role": "Creative Director",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Learn Figma from Basic was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 2,
    "courseId": 1,
    "userName": "Marcus Sterling",
    "userAvatar": "/images/students/student-5.png",
    "role": "Tech Lead",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Learn Figma from Basic were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "1 month ago"
  },
  {
    "id": 3,
    "courseId": 1,
    "userName": "Priya Patel",
    "userAvatar": "/images/students/student-1.png",
    "role": "Growth Specialist",
    "rating": 4,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "2 months ago"
  },
  {
    "id": 4,
    "courseId": 2,
    "userName": "Liam O'Connor",
    "userAvatar": "/images/students/student-2.png",
    "role": "Freelance Creator",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Build Digital Asset were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "1 month ago"
  },
  {
    "id": 5,
    "courseId": 2,
    "userName": "Chloe Dubois",
    "userAvatar": "/images/students/student-3.png",
    "role": "Design Systems Lead",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "2 months ago"
  },
  {
    "id": 6,
    "courseId": 2,
    "userName": "James Wilson",
    "userAvatar": "/images/students/student-4.png",
    "role": "Frontend Architect",
    "rating": 4,
    "comment": "The step-by-step breakdown made mastering Build Digital Asset feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "3 months ago"
  },
  {
    "id": 7,
    "courseId": 3,
    "userName": "Nadia Hassan",
    "userAvatar": "/images/students/student-5.png",
    "role": "Digital Strategist",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "2 months ago"
  },
  {
    "id": 8,
    "courseId": 3,
    "userName": "Sarah Jenkins",
    "userAvatar": "/images/students/student-1.png",
    "role": "Product Designer",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering The Power of Big Data feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "3 months ago"
  },
  {
    "id": 9,
    "courseId": 3,
    "userName": "Albert Flores",
    "userAvatar": "/images/students/student-2.png",
    "role": "Senior UX Engineer",
    "rating": 4,
    "comment": "This course provided a transformative understanding of The Power of Big Data. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "4 months ago"
  },
  {
    "id": 10,
    "courseId": 4,
    "userName": "David Kim",
    "userAvatar": "/images/students/student-3.png",
    "role": "Full-Stack Developer",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Balancing Productivity and Life feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "3 months ago"
  },
  {
    "id": 11,
    "courseId": 4,
    "userName": "Emily Zhao",
    "userAvatar": "/images/students/student-4.png",
    "role": "Creative Director",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Balancing Productivity and Life. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "4 months ago"
  },
  {
    "id": 12,
    "courseId": 4,
    "userName": "Marcus Sterling",
    "userAvatar": "/images/students/student-5.png",
    "role": "Tech Lead",
    "rating": 4,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Balancing Productivity and Life was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "1 week ago"
  },
  {
    "id": 13,
    "courseId": 5,
    "userName": "Priya Patel",
    "userAvatar": "/images/students/student-1.png",
    "role": "Growth Specialist",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Mastering Money Management. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "4 months ago"
  },
  {
    "id": 14,
    "courseId": 5,
    "userName": "Liam O'Connor",
    "userAvatar": "/images/students/student-2.png",
    "role": "Freelance Creator",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Mastering Money Management was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "1 week ago"
  },
  {
    "id": 15,
    "courseId": 5,
    "userName": "Chloe Dubois",
    "userAvatar": "/images/students/student-3.png",
    "role": "Design Systems Lead",
    "rating": 4,
    "comment": "Exceptional quality! The lessons in Mastering Money Management were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 16,
    "courseId": 6,
    "userName": "James Wilson",
    "userAvatar": "/images/students/student-4.png",
    "role": "Frontend Architect",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning From Idea to Startup Success was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "1 week ago"
  },
  {
    "id": 17,
    "courseId": 6,
    "userName": "Nadia Hassan",
    "userAvatar": "/images/students/student-5.png",
    "role": "Digital Strategist",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in From Idea to Startup Success were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 18,
    "courseId": 6,
    "userName": "Sarah Jenkins",
    "userAvatar": "/images/students/student-1.png",
    "role": "Product Designer",
    "rating": 4,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "1 month ago"
  },
  {
    "id": 19,
    "courseId": 7,
    "userName": "Albert Flores",
    "userAvatar": "/images/students/student-2.png",
    "role": "Senior UX Engineer",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Advanced Design Systems in Figma were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 20,
    "courseId": 7,
    "userName": "David Kim",
    "userAvatar": "/images/students/student-3.png",
    "role": "Full-Stack Developer",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "1 month ago"
  },
  {
    "id": 21,
    "courseId": 7,
    "userName": "Emily Zhao",
    "userAvatar": "/images/students/student-4.png",
    "role": "Creative Director",
    "rating": 4,
    "comment": "The step-by-step breakdown made mastering Advanced Design Systems in Figma feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "2 months ago"
  },
  {
    "id": 22,
    "courseId": 8,
    "userName": "Marcus Sterling",
    "userAvatar": "/images/students/student-5.png",
    "role": "Tech Lead",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "1 month ago"
  },
  {
    "id": 23,
    "courseId": 8,
    "userName": "Priya Patel",
    "userAvatar": "/images/students/student-1.png",
    "role": "Growth Specialist",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Micro-Interactions and Prototyping feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "2 months ago"
  },
  {
    "id": 24,
    "courseId": 8,
    "userName": "Liam O'Connor",
    "userAvatar": "/images/students/student-2.png",
    "role": "Freelance Creator",
    "rating": 4,
    "comment": "This course provided a transformative understanding of Micro-Interactions and Prototyping. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "3 months ago"
  },
  {
    "id": 25,
    "courseId": 9,
    "userName": "Chloe Dubois",
    "userAvatar": "/images/students/student-3.png",
    "role": "Design Systems Lead",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering UX Research & User Testing Essentials feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "2 months ago"
  },
  {
    "id": 26,
    "courseId": 9,
    "userName": "James Wilson",
    "userAvatar": "/images/students/student-4.png",
    "role": "Frontend Architect",
    "rating": 5,
    "comment": "This course provided a transformative understanding of UX Research & User Testing Essentials. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "3 months ago"
  },
  {
    "id": 27,
    "courseId": 9,
    "userName": "Nadia Hassan",
    "userAvatar": "/images/students/student-5.png",
    "role": "Digital Strategist",
    "rating": 4,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning UX Research & User Testing Essentials was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "4 months ago"
  },
  {
    "id": 28,
    "courseId": 10,
    "userName": "Sarah Jenkins",
    "userAvatar": "/images/students/student-1.png",
    "role": "Product Designer",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Mobile App UI Design: iOS & Android. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "3 months ago"
  },
  {
    "id": 29,
    "courseId": 10,
    "userName": "Albert Flores",
    "userAvatar": "/images/students/student-2.png",
    "role": "Senior UX Engineer",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Mobile App UI Design: iOS & Android was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "4 months ago"
  },
  {
    "id": 30,
    "courseId": 10,
    "userName": "David Kim",
    "userAvatar": "/images/students/student-3.png",
    "role": "Full-Stack Developer",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Mobile App UI Design: iOS & Android were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "1 week ago"
  },
  {
    "id": 31,
    "courseId": 11,
    "userName": "Emily Zhao",
    "userAvatar": "/images/students/student-4.png",
    "role": "Creative Director",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Typography & Color Theory for Designers was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "4 months ago"
  },
  {
    "id": 32,
    "courseId": 11,
    "userName": "Marcus Sterling",
    "userAvatar": "/images/students/student-5.png",
    "role": "Tech Lead",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Typography & Color Theory for Designers were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "1 week ago"
  },
  {
    "id": 33,
    "courseId": 11,
    "userName": "Priya Patel",
    "userAvatar": "/images/students/student-1.png",
    "role": "Growth Specialist",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 34,
    "courseId": 12,
    "userName": "Liam O'Connor",
    "userAvatar": "/images/students/student-2.png",
    "role": "Freelance Creator",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Wireframing & Information Architecture were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "1 week ago"
  },
  {
    "id": 35,
    "courseId": 12,
    "userName": "Chloe Dubois",
    "userAvatar": "/images/students/student-3.png",
    "role": "Design Systems Lead",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 36,
    "courseId": 12,
    "userName": "James Wilson",
    "userAvatar": "/images/students/student-4.png",
    "role": "Frontend Architect",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Wireframing & Information Architecture feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "1 month ago"
  },
  {
    "id": 37,
    "courseId": 13,
    "userName": "Nadia Hassan",
    "userAvatar": "/images/students/student-5.png",
    "role": "Digital Strategist",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 38,
    "courseId": 13,
    "userName": "Sarah Jenkins",
    "userAvatar": "/images/students/student-1.png",
    "role": "Product Designer",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Responsive Web Design Fundamentals feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "1 month ago"
  },
  {
    "id": 39,
    "courseId": 13,
    "userName": "Albert Flores",
    "userAvatar": "/images/students/student-2.png",
    "role": "Senior UX Engineer",
    "rating": 4,
    "comment": "This course provided a transformative understanding of Responsive Web Design Fundamentals. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "2 months ago"
  },
  {
    "id": 40,
    "courseId": 14,
    "userName": "David Kim",
    "userAvatar": "/images/students/student-3.png",
    "role": "Full-Stack Developer",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Design Thinking & Problem Solving feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "1 month ago"
  },
  {
    "id": 41,
    "courseId": 14,
    "userName": "Emily Zhao",
    "userAvatar": "/images/students/student-4.png",
    "role": "Creative Director",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Design Thinking & Problem Solving. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "2 months ago"
  },
  {
    "id": 42,
    "courseId": 14,
    "userName": "Marcus Sterling",
    "userAvatar": "/images/students/student-5.png",
    "role": "Tech Lead",
    "rating": 4,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Design Thinking & Problem Solving was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "3 months ago"
  },
  {
    "id": 43,
    "courseId": 15,
    "userName": "Priya Patel",
    "userAvatar": "/images/students/student-1.png",
    "role": "Growth Specialist",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Creating 3D Web Graphics with Spline. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "2 months ago"
  },
  {
    "id": 44,
    "courseId": 15,
    "userName": "Liam O'Connor",
    "userAvatar": "/images/students/student-2.png",
    "role": "Freelance Creator",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Creating 3D Web Graphics with Spline was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "3 months ago"
  },
  {
    "id": 45,
    "courseId": 15,
    "userName": "Chloe Dubois",
    "userAvatar": "/images/students/student-3.png",
    "role": "Design Systems Lead",
    "rating": 4,
    "comment": "Exceptional quality! The lessons in Creating 3D Web Graphics with Spline were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "4 months ago"
  },
  {
    "id": 46,
    "courseId": 16,
    "userName": "James Wilson",
    "userAvatar": "/images/students/student-4.png",
    "role": "Frontend Architect",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Figma to Production Code Workflow was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "3 months ago"
  },
  {
    "id": 47,
    "courseId": 16,
    "userName": "Nadia Hassan",
    "userAvatar": "/images/students/student-5.png",
    "role": "Digital Strategist",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Figma to Production Code Workflow were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "4 months ago"
  },
  {
    "id": 48,
    "courseId": 16,
    "userName": "Sarah Jenkins",
    "userAvatar": "/images/students/student-1.png",
    "role": "Product Designer",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "1 week ago"
  },
  {
    "id": 49,
    "courseId": 17,
    "userName": "Albert Flores",
    "userAvatar": "/images/students/student-2.png",
    "role": "Senior UX Engineer",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Dashboard & SaaS Interface Design were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "4 months ago"
  },
  {
    "id": 50,
    "courseId": 17,
    "userName": "David Kim",
    "userAvatar": "/images/students/student-3.png",
    "role": "Full-Stack Developer",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "1 week ago"
  },
  {
    "id": 51,
    "courseId": 17,
    "userName": "Emily Zhao",
    "userAvatar": "/images/students/student-4.png",
    "role": "Creative Director",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Dashboard & SaaS Interface Design feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 52,
    "courseId": 18,
    "userName": "Marcus Sterling",
    "userAvatar": "/images/students/student-5.png",
    "role": "Tech Lead",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "1 week ago"
  },
  {
    "id": 53,
    "courseId": 18,
    "userName": "Priya Patel",
    "userAvatar": "/images/students/student-1.png",
    "role": "Growth Specialist",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Design Systems at Scale feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 54,
    "courseId": 18,
    "userName": "Liam O'Connor",
    "userAvatar": "/images/students/student-2.png",
    "role": "Freelance Creator",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Design Systems at Scale. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "1 month ago"
  },
  {
    "id": 55,
    "courseId": 19,
    "userName": "Chloe Dubois",
    "userAvatar": "/images/students/student-3.png",
    "role": "Design Systems Lead",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Dark Mode UI & Contrast Mastery feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 56,
    "courseId": 19,
    "userName": "James Wilson",
    "userAvatar": "/images/students/student-4.png",
    "role": "Frontend Architect",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Dark Mode UI & Contrast Mastery. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "1 month ago"
  },
  {
    "id": 57,
    "courseId": 19,
    "userName": "Nadia Hassan",
    "userAvatar": "/images/students/student-5.png",
    "role": "Digital Strategist",
    "rating": 4,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Dark Mode UI & Contrast Mastery was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "2 months ago"
  },
  {
    "id": 58,
    "courseId": 20,
    "userName": "Sarah Jenkins",
    "userAvatar": "/images/students/student-1.png",
    "role": "Product Designer",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Iconography & Vector Illustration. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "1 month ago"
  },
  {
    "id": 59,
    "courseId": 20,
    "userName": "Albert Flores",
    "userAvatar": "/images/students/student-2.png",
    "role": "Senior UX Engineer",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Iconography & Vector Illustration was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "2 months ago"
  },
  {
    "id": 60,
    "courseId": 20,
    "userName": "David Kim",
    "userAvatar": "/images/students/student-3.png",
    "role": "Full-Stack Developer",
    "rating": 4,
    "comment": "Exceptional quality! The lessons in Iconography & Vector Illustration were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "3 months ago"
  },
  {
    "id": 61,
    "courseId": 21,
    "userName": "Emily Zhao",
    "userAvatar": "/images/students/student-4.png",
    "role": "Creative Director",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Modern Next.js 15 & React 19 Bootcamp was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "2 months ago"
  },
  {
    "id": 62,
    "courseId": 21,
    "userName": "Marcus Sterling",
    "userAvatar": "/images/students/student-5.png",
    "role": "Tech Lead",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Modern Next.js 15 & React 19 Bootcamp were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "3 months ago"
  },
  {
    "id": 63,
    "courseId": 21,
    "userName": "Priya Patel",
    "userAvatar": "/images/students/student-1.png",
    "role": "Growth Specialist",
    "rating": 4,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "4 months ago"
  },
  {
    "id": 64,
    "courseId": 22,
    "userName": "Liam O'Connor",
    "userAvatar": "/images/students/student-2.png",
    "role": "Freelance Creator",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Full-Stack TypeScript from Scratch were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "3 months ago"
  },
  {
    "id": 65,
    "courseId": 22,
    "userName": "Chloe Dubois",
    "userAvatar": "/images/students/student-3.png",
    "role": "Design Systems Lead",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "4 months ago"
  },
  {
    "id": 66,
    "courseId": 22,
    "userName": "James Wilson",
    "userAvatar": "/images/students/student-4.png",
    "role": "Frontend Architect",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Full-Stack TypeScript from Scratch feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "1 week ago"
  },
  {
    "id": 67,
    "courseId": 23,
    "userName": "Nadia Hassan",
    "userAvatar": "/images/students/student-5.png",
    "role": "Digital Strategist",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "4 months ago"
  },
  {
    "id": 68,
    "courseId": 23,
    "userName": "Sarah Jenkins",
    "userAvatar": "/images/students/student-1.png",
    "role": "Product Designer",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Tailwind CSS: Zero to Production Hero feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "1 week ago"
  },
  {
    "id": 69,
    "courseId": 23,
    "userName": "Albert Flores",
    "userAvatar": "/images/students/student-2.png",
    "role": "Senior UX Engineer",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Tailwind CSS: Zero to Production Hero. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 70,
    "courseId": 24,
    "userName": "David Kim",
    "userAvatar": "/images/students/student-3.png",
    "role": "Full-Stack Developer",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Mastering Vue 3 & Nuxt Framework feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "1 week ago"
  },
  {
    "id": 71,
    "courseId": 24,
    "userName": "Emily Zhao",
    "userAvatar": "/images/students/student-4.png",
    "role": "Creative Director",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Mastering Vue 3 & Nuxt Framework. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 72,
    "courseId": 24,
    "userName": "Marcus Sterling",
    "userAvatar": "/images/students/student-5.png",
    "role": "Tech Lead",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Mastering Vue 3 & Nuxt Framework was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "1 month ago"
  },
  {
    "id": 73,
    "courseId": 25,
    "userName": "Priya Patel",
    "userAvatar": "/images/students/student-1.png",
    "role": "Growth Specialist",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Advanced JavaScript Concepts & Patterns. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 74,
    "courseId": 25,
    "userName": "Liam O'Connor",
    "userAvatar": "/images/students/student-2.png",
    "role": "Freelance Creator",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Advanced JavaScript Concepts & Patterns was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "1 month ago"
  },
  {
    "id": 75,
    "courseId": 25,
    "userName": "Chloe Dubois",
    "userAvatar": "/images/students/student-3.png",
    "role": "Design Systems Lead",
    "rating": 4,
    "comment": "Exceptional quality! The lessons in Advanced JavaScript Concepts & Patterns were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "2 months ago"
  },
  {
    "id": 76,
    "courseId": 26,
    "userName": "James Wilson",
    "userAvatar": "/images/students/student-4.png",
    "role": "Frontend Architect",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning High-Performance Web Animations was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "1 month ago"
  },
  {
    "id": 77,
    "courseId": 26,
    "userName": "Nadia Hassan",
    "userAvatar": "/images/students/student-5.png",
    "role": "Digital Strategist",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in High-Performance Web Animations were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "2 months ago"
  },
  {
    "id": 78,
    "courseId": 26,
    "userName": "Sarah Jenkins",
    "userAvatar": "/images/students/student-1.png",
    "role": "Product Designer",
    "rating": 4,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "3 months ago"
  },
  {
    "id": 79,
    "courseId": 27,
    "userName": "Albert Flores",
    "userAvatar": "/images/students/student-2.png",
    "role": "Senior UX Engineer",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in State Management with Zustand & Redux were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "2 months ago"
  },
  {
    "id": 80,
    "courseId": 27,
    "userName": "David Kim",
    "userAvatar": "/images/students/student-3.png",
    "role": "Full-Stack Developer",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "3 months ago"
  },
  {
    "id": 81,
    "courseId": 27,
    "userName": "Emily Zhao",
    "userAvatar": "/images/students/student-4.png",
    "role": "Creative Director",
    "rating": 4,
    "comment": "The step-by-step breakdown made mastering State Management with Zustand & Redux feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "4 months ago"
  },
  {
    "id": 82,
    "courseId": 28,
    "userName": "Marcus Sterling",
    "userAvatar": "/images/students/student-5.png",
    "role": "Tech Lead",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "3 months ago"
  },
  {
    "id": 83,
    "courseId": 28,
    "userName": "Priya Patel",
    "userAvatar": "/images/students/student-1.png",
    "role": "Growth Specialist",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering GraphQL APIs with Apollo & Node.js feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "4 months ago"
  },
  {
    "id": 84,
    "courseId": 28,
    "userName": "Liam O'Connor",
    "userAvatar": "/images/students/student-2.png",
    "role": "Freelance Creator",
    "rating": 5,
    "comment": "This course provided a transformative understanding of GraphQL APIs with Apollo & Node.js. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "1 week ago"
  },
  {
    "id": 85,
    "courseId": 29,
    "userName": "Chloe Dubois",
    "userAvatar": "/images/students/student-3.png",
    "role": "Design Systems Lead",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Serverless Functions on AWS & Vercel feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "4 months ago"
  },
  {
    "id": 86,
    "courseId": 29,
    "userName": "James Wilson",
    "userAvatar": "/images/students/student-4.png",
    "role": "Frontend Architect",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Serverless Functions on AWS & Vercel. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "1 week ago"
  },
  {
    "id": 87,
    "courseId": 29,
    "userName": "Nadia Hassan",
    "userAvatar": "/images/students/student-5.png",
    "role": "Digital Strategist",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Serverless Functions on AWS & Vercel was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 88,
    "courseId": 30,
    "userName": "Sarah Jenkins",
    "userAvatar": "/images/students/student-1.png",
    "role": "Product Designer",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Building Accessible Web Applications (a11y). The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "1 week ago"
  },
  {
    "id": 89,
    "courseId": 30,
    "userName": "Albert Flores",
    "userAvatar": "/images/students/student-2.png",
    "role": "Senior UX Engineer",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Building Accessible Web Applications (a11y) was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 90,
    "courseId": 30,
    "userName": "David Kim",
    "userAvatar": "/images/students/student-3.png",
    "role": "Full-Stack Developer",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Building Accessible Web Applications (a11y) were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "1 month ago"
  },
  {
    "id": 91,
    "courseId": 31,
    "userName": "Emily Zhao",
    "userAvatar": "/images/students/student-4.png",
    "role": "Creative Director",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Progressive Web Apps (PWA) Hands-On was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 92,
    "courseId": 31,
    "userName": "Marcus Sterling",
    "userAvatar": "/images/students/student-5.png",
    "role": "Tech Lead",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Progressive Web Apps (PWA) Hands-On were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "1 month ago"
  },
  {
    "id": 93,
    "courseId": 31,
    "userName": "Priya Patel",
    "userAvatar": "/images/students/student-1.png",
    "role": "Growth Specialist",
    "rating": 4,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "2 months ago"
  },
  {
    "id": 94,
    "courseId": 32,
    "userName": "Liam O'Connor",
    "userAvatar": "/images/students/student-2.png",
    "role": "Freelance Creator",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in WebGL & Three.js 3D Interactive Web were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "1 month ago"
  },
  {
    "id": 95,
    "courseId": 32,
    "userName": "Chloe Dubois",
    "userAvatar": "/images/students/student-3.png",
    "role": "Design Systems Lead",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "2 months ago"
  },
  {
    "id": 96,
    "courseId": 32,
    "userName": "James Wilson",
    "userAvatar": "/images/students/student-4.png",
    "role": "Frontend Architect",
    "rating": 4,
    "comment": "The step-by-step breakdown made mastering WebGL & Three.js 3D Interactive Web feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "3 months ago"
  },
  {
    "id": 97,
    "courseId": 33,
    "userName": "Nadia Hassan",
    "userAvatar": "/images/students/student-5.png",
    "role": "Digital Strategist",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "2 months ago"
  },
  {
    "id": 98,
    "courseId": 33,
    "userName": "Sarah Jenkins",
    "userAvatar": "/images/students/student-1.png",
    "role": "Product Designer",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Modern CSS Layouts: Grid & Flexbox feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "3 months ago"
  },
  {
    "id": 99,
    "courseId": 33,
    "userName": "Albert Flores",
    "userAvatar": "/images/students/student-2.png",
    "role": "Senior UX Engineer",
    "rating": 4,
    "comment": "This course provided a transformative understanding of Modern CSS Layouts: Grid & Flexbox. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "4 months ago"
  },
  {
    "id": 100,
    "courseId": 34,
    "userName": "David Kim",
    "userAvatar": "/images/students/student-3.png",
    "role": "Full-Stack Developer",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Docker for Frontend Developers feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "3 months ago"
  },
  {
    "id": 101,
    "courseId": 34,
    "userName": "Emily Zhao",
    "userAvatar": "/images/students/student-4.png",
    "role": "Creative Director",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Docker for Frontend Developers. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "4 months ago"
  },
  {
    "id": 102,
    "courseId": 34,
    "userName": "Marcus Sterling",
    "userAvatar": "/images/students/student-5.png",
    "role": "Tech Lead",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Docker for Frontend Developers was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "1 week ago"
  },
  {
    "id": 103,
    "courseId": 35,
    "userName": "Priya Patel",
    "userAvatar": "/images/students/student-1.png",
    "role": "Growth Specialist",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Testing React Applications with Vitest. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "4 months ago"
  },
  {
    "id": 104,
    "courseId": 35,
    "userName": "Liam O'Connor",
    "userAvatar": "/images/students/student-2.png",
    "role": "Freelance Creator",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Testing React Applications with Vitest was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "1 week ago"
  },
  {
    "id": 105,
    "courseId": 35,
    "userName": "Chloe Dubois",
    "userAvatar": "/images/students/student-3.png",
    "role": "Design Systems Lead",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Testing React Applications with Vitest were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 106,
    "courseId": 36,
    "userName": "James Wilson",
    "userAvatar": "/images/students/student-4.png",
    "role": "Frontend Architect",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Node.js & Express API Architecture was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "1 week ago"
  },
  {
    "id": 107,
    "courseId": 36,
    "userName": "Nadia Hassan",
    "userAvatar": "/images/students/student-5.png",
    "role": "Digital Strategist",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Node.js & Express API Architecture were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 108,
    "courseId": 36,
    "userName": "Sarah Jenkins",
    "userAvatar": "/images/students/student-1.png",
    "role": "Product Designer",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "1 month ago"
  },
  {
    "id": 109,
    "courseId": 37,
    "userName": "Albert Flores",
    "userAvatar": "/images/students/student-2.png",
    "role": "Senior UX Engineer",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in PostgreSQL Mastery & Query Optimization were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 110,
    "courseId": 37,
    "userName": "David Kim",
    "userAvatar": "/images/students/student-3.png",
    "role": "Full-Stack Developer",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "1 month ago"
  },
  {
    "id": 111,
    "courseId": 37,
    "userName": "Emily Zhao",
    "userAvatar": "/images/students/student-4.png",
    "role": "Creative Director",
    "rating": 4,
    "comment": "The step-by-step breakdown made mastering PostgreSQL Mastery & Query Optimization feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "2 months ago"
  },
  {
    "id": 112,
    "courseId": 38,
    "userName": "Marcus Sterling",
    "userAvatar": "/images/students/student-5.png",
    "role": "Tech Lead",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "1 month ago"
  },
  {
    "id": 113,
    "courseId": 38,
    "userName": "Priya Patel",
    "userAvatar": "/images/students/student-1.png",
    "role": "Growth Specialist",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Building Microservices with Go feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "2 months ago"
  },
  {
    "id": 114,
    "courseId": 38,
    "userName": "Liam O'Connor",
    "userAvatar": "/images/students/student-2.png",
    "role": "Freelance Creator",
    "rating": 4,
    "comment": "This course provided a transformative understanding of Building Microservices with Go. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "3 months ago"
  },
  {
    "id": 115,
    "courseId": 39,
    "userName": "Chloe Dubois",
    "userAvatar": "/images/students/student-3.png",
    "role": "Design Systems Lead",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering MongoDB and NoSQL Database Design feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "2 months ago"
  },
  {
    "id": 116,
    "courseId": 39,
    "userName": "James Wilson",
    "userAvatar": "/images/students/student-4.png",
    "role": "Frontend Architect",
    "rating": 5,
    "comment": "This course provided a transformative understanding of MongoDB and NoSQL Database Design. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "3 months ago"
  },
  {
    "id": 117,
    "courseId": 39,
    "userName": "Nadia Hassan",
    "userAvatar": "/images/students/student-5.png",
    "role": "Digital Strategist",
    "rating": 4,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning MongoDB and NoSQL Database Design was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "4 months ago"
  },
  {
    "id": 118,
    "courseId": 40,
    "userName": "Sarah Jenkins",
    "userAvatar": "/images/students/student-1.png",
    "role": "Product Designer",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Redis Caching & Real-time PubSub. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "3 months ago"
  },
  {
    "id": 119,
    "courseId": 40,
    "userName": "Albert Flores",
    "userAvatar": "/images/students/student-2.png",
    "role": "Senior UX Engineer",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Redis Caching & Real-time PubSub was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "4 months ago"
  },
  {
    "id": 120,
    "courseId": 40,
    "userName": "David Kim",
    "userAvatar": "/images/students/student-3.png",
    "role": "Full-Stack Developer",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Redis Caching & Real-time PubSub were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "1 week ago"
  },
  {
    "id": 121,
    "courseId": 41,
    "userName": "Emily Zhao",
    "userAvatar": "/images/students/student-4.png",
    "role": "Creative Director",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Cloud Architecture with AWS Solutions was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "4 months ago"
  },
  {
    "id": 122,
    "courseId": 41,
    "userName": "Marcus Sterling",
    "userAvatar": "/images/students/student-5.png",
    "role": "Tech Lead",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Cloud Architecture with AWS Solutions were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "1 week ago"
  },
  {
    "id": 123,
    "courseId": 41,
    "userName": "Priya Patel",
    "userAvatar": "/images/students/student-1.png",
    "role": "Growth Specialist",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 124,
    "courseId": 42,
    "userName": "Liam O'Connor",
    "userAvatar": "/images/students/student-2.png",
    "role": "Freelance Creator",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Google Cloud Platform for Developers were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "1 week ago"
  },
  {
    "id": 125,
    "courseId": 42,
    "userName": "Chloe Dubois",
    "userAvatar": "/images/students/student-3.png",
    "role": "Design Systems Lead",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 126,
    "courseId": 42,
    "userName": "James Wilson",
    "userAvatar": "/images/students/student-4.png",
    "role": "Frontend Architect",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Google Cloud Platform for Developers feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "1 month ago"
  },
  {
    "id": 127,
    "courseId": 43,
    "userName": "Nadia Hassan",
    "userAvatar": "/images/students/student-5.png",
    "role": "Digital Strategist",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 128,
    "courseId": 43,
    "userName": "Sarah Jenkins",
    "userAvatar": "/images/students/student-1.png",
    "role": "Product Designer",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Kubernetes & Container Orchestration feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "1 month ago"
  },
  {
    "id": 129,
    "courseId": 43,
    "userName": "Albert Flores",
    "userAvatar": "/images/students/student-2.png",
    "role": "Senior UX Engineer",
    "rating": 4,
    "comment": "This course provided a transformative understanding of Kubernetes & Container Orchestration. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "2 months ago"
  },
  {
    "id": 130,
    "courseId": 44,
    "userName": "David Kim",
    "userAvatar": "/images/students/student-3.png",
    "role": "Full-Stack Developer",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Building Event-Driven Systems with Kafka feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "1 month ago"
  },
  {
    "id": 131,
    "courseId": 44,
    "userName": "Emily Zhao",
    "userAvatar": "/images/students/student-4.png",
    "role": "Creative Director",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Building Event-Driven Systems with Kafka. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "2 months ago"
  },
  {
    "id": 132,
    "courseId": 44,
    "userName": "Marcus Sterling",
    "userAvatar": "/images/students/student-5.png",
    "role": "Tech Lead",
    "rating": 4,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Building Event-Driven Systems with Kafka was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "3 months ago"
  },
  {
    "id": 133,
    "courseId": 45,
    "userName": "Priya Patel",
    "userAvatar": "/images/students/student-1.png",
    "role": "Growth Specialist",
    "rating": 5,
    "comment": "This course provided a transformative understanding of RESTful & gRPC API Design Standards. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "2 months ago"
  },
  {
    "id": 134,
    "courseId": 45,
    "userName": "Liam O'Connor",
    "userAvatar": "/images/students/student-2.png",
    "role": "Freelance Creator",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning RESTful & gRPC API Design Standards was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "3 months ago"
  },
  {
    "id": 135,
    "courseId": 45,
    "userName": "Chloe Dubois",
    "userAvatar": "/images/students/student-3.png",
    "role": "Design Systems Lead",
    "rating": 4,
    "comment": "Exceptional quality! The lessons in RESTful & gRPC API Design Standards were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "4 months ago"
  },
  {
    "id": 136,
    "courseId": 46,
    "userName": "James Wilson",
    "userAvatar": "/images/students/student-4.png",
    "role": "Frontend Architect",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Practical Prompt Engineering for LLMs was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "3 months ago"
  },
  {
    "id": 137,
    "courseId": 46,
    "userName": "Nadia Hassan",
    "userAvatar": "/images/students/student-5.png",
    "role": "Digital Strategist",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Practical Prompt Engineering for LLMs were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "4 months ago"
  },
  {
    "id": 138,
    "courseId": 46,
    "userName": "Sarah Jenkins",
    "userAvatar": "/images/students/student-1.png",
    "role": "Product Designer",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "1 week ago"
  },
  {
    "id": 139,
    "courseId": 47,
    "userName": "Albert Flores",
    "userAvatar": "/images/students/student-2.png",
    "role": "Senior UX Engineer",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Python for Data Analysis & Pandas were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "4 months ago"
  },
  {
    "id": 140,
    "courseId": 47,
    "userName": "David Kim",
    "userAvatar": "/images/students/student-3.png",
    "role": "Full-Stack Developer",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "1 week ago"
  },
  {
    "id": 141,
    "courseId": 47,
    "userName": "Emily Zhao",
    "userAvatar": "/images/students/student-4.png",
    "role": "Creative Director",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Python for Data Analysis & Pandas feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 142,
    "courseId": 48,
    "userName": "Marcus Sterling",
    "userAvatar": "/images/students/student-5.png",
    "role": "Tech Lead",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "1 week ago"
  },
  {
    "id": 143,
    "courseId": 48,
    "userName": "Priya Patel",
    "userAvatar": "/images/students/student-1.png",
    "role": "Growth Specialist",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Machine Learning with Scikit-Learn feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 144,
    "courseId": 48,
    "userName": "Liam O'Connor",
    "userAvatar": "/images/students/student-2.png",
    "role": "Freelance Creator",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Machine Learning with Scikit-Learn. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "1 month ago"
  },
  {
    "id": 145,
    "courseId": 49,
    "userName": "Chloe Dubois",
    "userAvatar": "/images/students/student-3.png",
    "role": "Design Systems Lead",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Deep Learning & Neural Networks Bootcamp feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 146,
    "courseId": 49,
    "userName": "James Wilson",
    "userAvatar": "/images/students/student-4.png",
    "role": "Frontend Architect",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Deep Learning & Neural Networks Bootcamp. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "1 month ago"
  },
  {
    "id": 147,
    "courseId": 49,
    "userName": "Nadia Hassan",
    "userAvatar": "/images/students/student-5.png",
    "role": "Digital Strategist",
    "rating": 4,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Deep Learning & Neural Networks Bootcamp was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "2 months ago"
  },
  {
    "id": 148,
    "courseId": 50,
    "userName": "Sarah Jenkins",
    "userAvatar": "/images/students/student-1.png",
    "role": "Product Designer",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Building AI Agents with LangChain. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "1 month ago"
  },
  {
    "id": 149,
    "courseId": 50,
    "userName": "Albert Flores",
    "userAvatar": "/images/students/student-2.png",
    "role": "Senior UX Engineer",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Building AI Agents with LangChain was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "2 months ago"
  },
  {
    "id": 150,
    "courseId": 50,
    "userName": "David Kim",
    "userAvatar": "/images/students/student-3.png",
    "role": "Full-Stack Developer",
    "rating": 4,
    "comment": "Exceptional quality! The lessons in Building AI Agents with LangChain were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "3 months ago"
  },
  {
    "id": 151,
    "courseId": 51,
    "userName": "Emily Zhao",
    "userAvatar": "/images/students/student-4.png",
    "role": "Creative Director",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Computer Vision & OpenCV Projects was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "2 months ago"
  },
  {
    "id": 152,
    "courseId": 51,
    "userName": "Marcus Sterling",
    "userAvatar": "/images/students/student-5.png",
    "role": "Tech Lead",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Computer Vision & OpenCV Projects were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "3 months ago"
  },
  {
    "id": 153,
    "courseId": 51,
    "userName": "Priya Patel",
    "userAvatar": "/images/students/student-1.png",
    "role": "Growth Specialist",
    "rating": 4,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "4 months ago"
  },
  {
    "id": 154,
    "courseId": 52,
    "userName": "Liam O'Connor",
    "userAvatar": "/images/students/student-2.png",
    "role": "Freelance Creator",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Natural Language Processing Fundamentals were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "3 months ago"
  },
  {
    "id": 155,
    "courseId": 52,
    "userName": "Chloe Dubois",
    "userAvatar": "/images/students/student-3.png",
    "role": "Design Systems Lead",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "4 months ago"
  },
  {
    "id": 156,
    "courseId": 52,
    "userName": "James Wilson",
    "userAvatar": "/images/students/student-4.png",
    "role": "Frontend Architect",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Natural Language Processing Fundamentals feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "1 week ago"
  },
  {
    "id": 157,
    "courseId": 53,
    "userName": "Nadia Hassan",
    "userAvatar": "/images/students/student-5.png",
    "role": "Digital Strategist",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "4 months ago"
  },
  {
    "id": 158,
    "courseId": 53,
    "userName": "Sarah Jenkins",
    "userAvatar": "/images/students/student-1.png",
    "role": "Product Designer",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Fine-Tuning Open Source LLMs feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "1 week ago"
  },
  {
    "id": 159,
    "courseId": 53,
    "userName": "Albert Flores",
    "userAvatar": "/images/students/student-2.png",
    "role": "Senior UX Engineer",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Fine-Tuning Open Source LLMs. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 160,
    "courseId": 54,
    "userName": "David Kim",
    "userAvatar": "/images/students/student-3.png",
    "role": "Full-Stack Developer",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Data Visualization with D3.js & Tableau feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "1 week ago"
  },
  {
    "id": 161,
    "courseId": 54,
    "userName": "Emily Zhao",
    "userAvatar": "/images/students/student-4.png",
    "role": "Creative Director",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Data Visualization with D3.js & Tableau. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 162,
    "courseId": 54,
    "userName": "Marcus Sterling",
    "userAvatar": "/images/students/student-5.png",
    "role": "Tech Lead",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Data Visualization with D3.js & Tableau was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "1 month ago"
  },
  {
    "id": 163,
    "courseId": 55,
    "userName": "Priya Patel",
    "userAvatar": "/images/students/student-1.png",
    "role": "Growth Specialist",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Vector Databases & RAG Architecture. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 164,
    "courseId": 55,
    "userName": "Liam O'Connor",
    "userAvatar": "/images/students/student-2.png",
    "role": "Freelance Creator",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Vector Databases & RAG Architecture was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "1 month ago"
  },
  {
    "id": 165,
    "courseId": 55,
    "userName": "Chloe Dubois",
    "userAvatar": "/images/students/student-3.png",
    "role": "Design Systems Lead",
    "rating": 4,
    "comment": "Exceptional quality! The lessons in Vector Databases & RAG Architecture were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "2 months ago"
  },
  {
    "id": 166,
    "courseId": 56,
    "userName": "James Wilson",
    "userAvatar": "/images/students/student-4.png",
    "role": "Frontend Architect",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning React Native & Expo: Build Cross-Platform Apps was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "1 month ago"
  },
  {
    "id": 167,
    "courseId": 56,
    "userName": "Nadia Hassan",
    "userAvatar": "/images/students/student-5.png",
    "role": "Digital Strategist",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in React Native & Expo: Build Cross-Platform Apps were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "2 months ago"
  },
  {
    "id": 168,
    "courseId": 56,
    "userName": "Sarah Jenkins",
    "userAvatar": "/images/students/student-1.png",
    "role": "Product Designer",
    "rating": 4,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "3 months ago"
  },
  {
    "id": 169,
    "courseId": 57,
    "userName": "Albert Flores",
    "userAvatar": "/images/students/student-2.png",
    "role": "Senior UX Engineer",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Flutter & Dart Complete Masterclass were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "2 months ago"
  },
  {
    "id": 170,
    "courseId": 57,
    "userName": "David Kim",
    "userAvatar": "/images/students/student-3.png",
    "role": "Full-Stack Developer",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "3 months ago"
  },
  {
    "id": 171,
    "courseId": 57,
    "userName": "Emily Zhao",
    "userAvatar": "/images/students/student-4.png",
    "role": "Creative Director",
    "rating": 4,
    "comment": "The step-by-step breakdown made mastering Flutter & Dart Complete Masterclass feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "4 months ago"
  },
  {
    "id": 172,
    "courseId": 58,
    "userName": "Marcus Sterling",
    "userAvatar": "/images/students/student-5.png",
    "role": "Tech Lead",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "3 months ago"
  },
  {
    "id": 173,
    "courseId": 58,
    "userName": "Priya Patel",
    "userAvatar": "/images/students/student-1.png",
    "role": "Growth Specialist",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Swift & SwiftUI iOS App Architecture feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "4 months ago"
  },
  {
    "id": 174,
    "courseId": 58,
    "userName": "Liam O'Connor",
    "userAvatar": "/images/students/student-2.png",
    "role": "Freelance Creator",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Swift & SwiftUI iOS App Architecture. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "1 week ago"
  },
  {
    "id": 175,
    "courseId": 59,
    "userName": "Chloe Dubois",
    "userAvatar": "/images/students/student-3.png",
    "role": "Design Systems Lead",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Kotlin & Jetpack Compose Android Guide feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "4 months ago"
  },
  {
    "id": 176,
    "courseId": 59,
    "userName": "James Wilson",
    "userAvatar": "/images/students/student-4.png",
    "role": "Frontend Architect",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Kotlin & Jetpack Compose Android Guide. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "1 week ago"
  },
  {
    "id": 177,
    "courseId": 59,
    "userName": "Nadia Hassan",
    "userAvatar": "/images/students/student-5.png",
    "role": "Digital Strategist",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Kotlin & Jetpack Compose Android Guide was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 178,
    "courseId": 60,
    "userName": "Sarah Jenkins",
    "userAvatar": "/images/students/student-1.png",
    "role": "Product Designer",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Mobile App Performance & Offline Sync. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "1 week ago"
  },
  {
    "id": 179,
    "courseId": 60,
    "userName": "Albert Flores",
    "userAvatar": "/images/students/student-2.png",
    "role": "Senior UX Engineer",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Mobile App Performance & Offline Sync was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 180,
    "courseId": 60,
    "userName": "David Kim",
    "userAvatar": "/images/students/student-3.png",
    "role": "Full-Stack Developer",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Mobile App Performance & Offline Sync were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "1 month ago"
  },
  {
    "id": 181,
    "courseId": 61,
    "userName": "Emily Zhao",
    "userAvatar": "/images/students/student-4.png",
    "role": "Creative Director",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning In-App Purchases & Monetization Strategy was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 182,
    "courseId": 61,
    "userName": "Marcus Sterling",
    "userAvatar": "/images/students/student-5.png",
    "role": "Tech Lead",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in In-App Purchases & Monetization Strategy were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "1 month ago"
  },
  {
    "id": 183,
    "courseId": 61,
    "userName": "Priya Patel",
    "userAvatar": "/images/students/student-1.png",
    "role": "Growth Specialist",
    "rating": 4,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "2 months ago"
  },
  {
    "id": 184,
    "courseId": 62,
    "userName": "Liam O'Connor",
    "userAvatar": "/images/students/student-2.png",
    "role": "Freelance Creator",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Growth Hacking for Digital Products were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "1 month ago"
  },
  {
    "id": 185,
    "courseId": 62,
    "userName": "Chloe Dubois",
    "userAvatar": "/images/students/student-3.png",
    "role": "Design Systems Lead",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "2 months ago"
  },
  {
    "id": 186,
    "courseId": 62,
    "userName": "James Wilson",
    "userAvatar": "/images/students/student-4.png",
    "role": "Frontend Architect",
    "rating": 4,
    "comment": "The step-by-step breakdown made mastering Growth Hacking for Digital Products feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "3 months ago"
  },
  {
    "id": 187,
    "courseId": 63,
    "userName": "Nadia Hassan",
    "userAvatar": "/images/students/student-5.png",
    "role": "Digital Strategist",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "2 months ago"
  },
  {
    "id": 188,
    "courseId": 63,
    "userName": "Sarah Jenkins",
    "userAvatar": "/images/students/student-1.png",
    "role": "Product Designer",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering SEO Mastery: Rank #1 on Google feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "3 months ago"
  },
  {
    "id": 189,
    "courseId": 63,
    "userName": "Albert Flores",
    "userAvatar": "/images/students/student-2.png",
    "role": "Senior UX Engineer",
    "rating": 4,
    "comment": "This course provided a transformative understanding of SEO Mastery: Rank #1 on Google. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "4 months ago"
  },
  {
    "id": 190,
    "courseId": 64,
    "userName": "David Kim",
    "userAvatar": "/images/students/student-3.png",
    "role": "Full-Stack Developer",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Social Media Content Strategy That Converts feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "3 months ago"
  },
  {
    "id": 191,
    "courseId": 64,
    "userName": "Emily Zhao",
    "userAvatar": "/images/students/student-4.png",
    "role": "Creative Director",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Social Media Content Strategy That Converts. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "4 months ago"
  },
  {
    "id": 192,
    "courseId": 64,
    "userName": "Marcus Sterling",
    "userAvatar": "/images/students/student-5.png",
    "role": "Tech Lead",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Social Media Content Strategy That Converts was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "1 week ago"
  },
  {
    "id": 193,
    "courseId": 65,
    "userName": "Priya Patel",
    "userAvatar": "/images/students/student-1.png",
    "role": "Growth Specialist",
    "rating": 5,
    "comment": "This course provided a transformative understanding of High-Converting Email Marketing Campaigns. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "4 months ago"
  },
  {
    "id": 194,
    "courseId": 65,
    "userName": "Liam O'Connor",
    "userAvatar": "/images/students/student-2.png",
    "role": "Freelance Creator",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning High-Converting Email Marketing Campaigns was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "1 week ago"
  },
  {
    "id": 195,
    "courseId": 65,
    "userName": "Chloe Dubois",
    "userAvatar": "/images/students/student-3.png",
    "role": "Design Systems Lead",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in High-Converting Email Marketing Campaigns were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 196,
    "courseId": 66,
    "userName": "James Wilson",
    "userAvatar": "/images/students/student-4.png",
    "role": "Frontend Architect",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Google Ads & Performance Marketing was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "1 week ago"
  },
  {
    "id": 197,
    "courseId": 66,
    "userName": "Nadia Hassan",
    "userAvatar": "/images/students/student-5.png",
    "role": "Digital Strategist",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Google Ads & Performance Marketing were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 198,
    "courseId": 66,
    "userName": "Sarah Jenkins",
    "userAvatar": "/images/students/student-1.png",
    "role": "Product Designer",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "1 month ago"
  },
  {
    "id": 199,
    "courseId": 67,
    "userName": "Albert Flores",
    "userAvatar": "/images/students/student-2.png",
    "role": "Senior UX Engineer",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Brand Storytelling & Copywriting Secrets were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 200,
    "courseId": 67,
    "userName": "David Kim",
    "userAvatar": "/images/students/student-3.png",
    "role": "Full-Stack Developer",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "1 month ago"
  },
  {
    "id": 201,
    "courseId": 67,
    "userName": "Emily Zhao",
    "userAvatar": "/images/students/student-4.png",
    "role": "Creative Director",
    "rating": 4,
    "comment": "The step-by-step breakdown made mastering Brand Storytelling & Copywriting Secrets feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "2 months ago"
  },
  {
    "id": 202,
    "courseId": 68,
    "userName": "Marcus Sterling",
    "userAvatar": "/images/students/student-5.png",
    "role": "Tech Lead",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "1 month ago"
  },
  {
    "id": 203,
    "courseId": 68,
    "userName": "Priya Patel",
    "userAvatar": "/images/students/student-1.png",
    "role": "Growth Specialist",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Influencer Marketing & Brand Partnerships feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "2 months ago"
  },
  {
    "id": 204,
    "courseId": 68,
    "userName": "Liam O'Connor",
    "userAvatar": "/images/students/student-2.png",
    "role": "Freelance Creator",
    "rating": 4,
    "comment": "This course provided a transformative understanding of Influencer Marketing & Brand Partnerships. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "3 months ago"
  },
  {
    "id": 205,
    "courseId": 69,
    "userName": "Chloe Dubois",
    "userAvatar": "/images/students/student-3.png",
    "role": "Design Systems Lead",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Affiliate Marketing for Beginners feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "2 months ago"
  },
  {
    "id": 206,
    "courseId": 69,
    "userName": "James Wilson",
    "userAvatar": "/images/students/student-4.png",
    "role": "Frontend Architect",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Affiliate Marketing for Beginners. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "3 months ago"
  },
  {
    "id": 207,
    "courseId": 69,
    "userName": "Nadia Hassan",
    "userAvatar": "/images/students/student-5.png",
    "role": "Digital Strategist",
    "rating": 4,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Affiliate Marketing for Beginners was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "4 months ago"
  },
  {
    "id": 208,
    "courseId": 70,
    "userName": "Sarah Jenkins",
    "userAvatar": "/images/students/student-1.png",
    "role": "Product Designer",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Analytics & Conversion Rate Optimization (CRO). The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "3 months ago"
  },
  {
    "id": 209,
    "courseId": 70,
    "userName": "Albert Flores",
    "userAvatar": "/images/students/student-2.png",
    "role": "Senior UX Engineer",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Analytics & Conversion Rate Optimization (CRO) was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "4 months ago"
  },
  {
    "id": 210,
    "courseId": 70,
    "userName": "David Kim",
    "userAvatar": "/images/students/student-3.png",
    "role": "Full-Stack Developer",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Analytics & Conversion Rate Optimization (CRO) were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "1 week ago"
  },
  {
    "id": 211,
    "courseId": 71,
    "userName": "Emily Zhao",
    "userAvatar": "/images/students/student-4.png",
    "role": "Creative Director",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning B2B SaaS Content Marketing Strategy was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "4 months ago"
  },
  {
    "id": 212,
    "courseId": 71,
    "userName": "Marcus Sterling",
    "userAvatar": "/images/students/student-5.png",
    "role": "Tech Lead",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in B2B SaaS Content Marketing Strategy were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "1 week ago"
  },
  {
    "id": 213,
    "courseId": 71,
    "userName": "Priya Patel",
    "userAvatar": "/images/students/student-1.png",
    "role": "Growth Specialist",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 214,
    "courseId": 72,
    "userName": "Liam O'Connor",
    "userAvatar": "/images/students/student-2.png",
    "role": "Freelance Creator",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Agile & Scrum for Modern Tech Teams were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "1 week ago"
  },
  {
    "id": 215,
    "courseId": 72,
    "userName": "Chloe Dubois",
    "userAvatar": "/images/students/student-3.png",
    "role": "Design Systems Lead",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 216,
    "courseId": 72,
    "userName": "James Wilson",
    "userAvatar": "/images/students/student-4.png",
    "role": "Frontend Architect",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Agile & Scrum for Modern Tech Teams feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "1 month ago"
  },
  {
    "id": 217,
    "courseId": 73,
    "userName": "Nadia Hassan",
    "userAvatar": "/images/students/student-5.png",
    "role": "Digital Strategist",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 218,
    "courseId": 73,
    "userName": "Sarah Jenkins",
    "userAvatar": "/images/students/student-1.png",
    "role": "Product Designer",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Product Management: Ideation to Launch feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "1 month ago"
  },
  {
    "id": 219,
    "courseId": 73,
    "userName": "Albert Flores",
    "userAvatar": "/images/students/student-2.png",
    "role": "Senior UX Engineer",
    "rating": 4,
    "comment": "This course provided a transformative understanding of Product Management: Ideation to Launch. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "2 months ago"
  },
  {
    "id": 220,
    "courseId": 74,
    "userName": "David Kim",
    "userAvatar": "/images/students/student-3.png",
    "role": "Full-Stack Developer",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Financial Modeling for Tech Startups feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "1 month ago"
  },
  {
    "id": 221,
    "courseId": 74,
    "userName": "Emily Zhao",
    "userAvatar": "/images/students/student-4.png",
    "role": "Creative Director",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Financial Modeling for Tech Startups. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "2 months ago"
  },
  {
    "id": 222,
    "courseId": 74,
    "userName": "Marcus Sterling",
    "userAvatar": "/images/students/student-5.png",
    "role": "Tech Lead",
    "rating": 4,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Financial Modeling for Tech Startups was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "3 months ago"
  },
  {
    "id": 223,
    "courseId": 75,
    "userName": "Priya Patel",
    "userAvatar": "/images/students/student-1.png",
    "role": "Growth Specialist",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Remote Team Leadership & Communication. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "2 months ago"
  },
  {
    "id": 224,
    "courseId": 75,
    "userName": "Liam O'Connor",
    "userAvatar": "/images/students/student-2.png",
    "role": "Freelance Creator",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Remote Team Leadership & Communication was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "3 months ago"
  },
  {
    "id": 225,
    "courseId": 75,
    "userName": "Chloe Dubois",
    "userAvatar": "/images/students/student-3.png",
    "role": "Design Systems Lead",
    "rating": 4,
    "comment": "Exceptional quality! The lessons in Remote Team Leadership & Communication were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "4 months ago"
  },
  {
    "id": 226,
    "courseId": 76,
    "userName": "James Wilson",
    "userAvatar": "/images/students/student-4.png",
    "role": "Frontend Architect",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Freelancing: How to Win 0K+ Clients was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "3 months ago"
  },
  {
    "id": 227,
    "courseId": 76,
    "userName": "Nadia Hassan",
    "userAvatar": "/images/students/student-5.png",
    "role": "Digital Strategist",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Freelancing: How to Win 0K+ Clients were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "4 months ago"
  },
  {
    "id": 228,
    "courseId": 76,
    "userName": "Sarah Jenkins",
    "userAvatar": "/images/students/student-1.png",
    "role": "Product Designer",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "1 week ago"
  },
  {
    "id": 229,
    "courseId": 77,
    "userName": "Albert Flores",
    "userAvatar": "/images/students/student-2.png",
    "role": "Senior UX Engineer",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Pricing Strategies for Digital Products were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "4 months ago"
  },
  {
    "id": 230,
    "courseId": 77,
    "userName": "David Kim",
    "userAvatar": "/images/students/student-3.png",
    "role": "Full-Stack Developer",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "1 week ago"
  },
  {
    "id": 231,
    "courseId": 77,
    "userName": "Emily Zhao",
    "userAvatar": "/images/students/student-4.png",
    "role": "Creative Director",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Pricing Strategies for Digital Products feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 232,
    "courseId": 78,
    "userName": "Marcus Sterling",
    "userAvatar": "/images/students/student-5.png",
    "role": "Tech Lead",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "1 week ago"
  },
  {
    "id": 233,
    "courseId": 78,
    "userName": "Priya Patel",
    "userAvatar": "/images/students/student-1.png",
    "role": "Growth Specialist",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Negotiation Skills for Professionals feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 234,
    "courseId": 78,
    "userName": "Liam O'Connor",
    "userAvatar": "/images/students/student-2.png",
    "role": "Freelance Creator",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Negotiation Skills for Professionals. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "1 month ago"
  },
  {
    "id": 235,
    "courseId": 79,
    "userName": "Chloe Dubois",
    "userAvatar": "/images/students/student-3.png",
    "role": "Design Systems Lead",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Time Management & Focus for Creators feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 236,
    "courseId": 79,
    "userName": "James Wilson",
    "userAvatar": "/images/students/student-4.png",
    "role": "Frontend Architect",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Time Management & Focus for Creators. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "1 month ago"
  },
  {
    "id": 237,
    "courseId": 79,
    "userName": "Nadia Hassan",
    "userAvatar": "/images/students/student-5.png",
    "role": "Digital Strategist",
    "rating": 4,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Time Management & Focus for Creators was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "2 months ago"
  },
  {
    "id": 238,
    "courseId": 80,
    "userName": "Sarah Jenkins",
    "userAvatar": "/images/students/student-1.png",
    "role": "Product Designer",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Pitch Deck Mastery for Raising Venture Capital. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "1 month ago"
  },
  {
    "id": 239,
    "courseId": 80,
    "userName": "Albert Flores",
    "userAvatar": "/images/students/student-2.png",
    "role": "Senior UX Engineer",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Pitch Deck Mastery for Raising Venture Capital was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "2 months ago"
  },
  {
    "id": 240,
    "courseId": 80,
    "userName": "David Kim",
    "userAvatar": "/images/students/student-3.png",
    "role": "Full-Stack Developer",
    "rating": 4,
    "comment": "Exceptional quality! The lessons in Pitch Deck Mastery for Raising Venture Capital were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "3 months ago"
  },
  {
    "id": 241,
    "courseId": 81,
    "userName": "Emily Zhao",
    "userAvatar": "/images/students/student-4.png",
    "role": "Creative Director",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Legal & Tax Basics for Solopreneurs was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "2 months ago"
  },
  {
    "id": 242,
    "courseId": 81,
    "userName": "Marcus Sterling",
    "userAvatar": "/images/students/student-5.png",
    "role": "Tech Lead",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Legal & Tax Basics for Solopreneurs were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "3 months ago"
  },
  {
    "id": 243,
    "courseId": 81,
    "userName": "Priya Patel",
    "userAvatar": "/images/students/student-1.png",
    "role": "Growth Specialist",
    "rating": 4,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "4 months ago"
  },
  {
    "id": 244,
    "courseId": 82,
    "userName": "Liam O'Connor",
    "userAvatar": "/images/students/student-2.png",
    "role": "Freelance Creator",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Motion Graphics in Adobe After Effects were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "3 months ago"
  },
  {
    "id": 245,
    "courseId": 82,
    "userName": "Chloe Dubois",
    "userAvatar": "/images/students/student-3.png",
    "role": "Design Systems Lead",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "4 months ago"
  },
  {
    "id": 246,
    "courseId": 82,
    "userName": "James Wilson",
    "userAvatar": "/images/students/student-4.png",
    "role": "Frontend Architect",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Motion Graphics in Adobe After Effects feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "1 week ago"
  },
  {
    "id": 247,
    "courseId": 83,
    "userName": "Nadia Hassan",
    "userAvatar": "/images/students/student-5.png",
    "role": "Digital Strategist",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "4 months ago"
  },
  {
    "id": 248,
    "courseId": 83,
    "userName": "Sarah Jenkins",
    "userAvatar": "/images/students/student-1.png",
    "role": "Product Designer",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Digital Illustration in Procreate feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "1 week ago"
  },
  {
    "id": 249,
    "courseId": 83,
    "userName": "Albert Flores",
    "userAvatar": "/images/students/student-2.png",
    "role": "Senior UX Engineer",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Digital Illustration in Procreate. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 250,
    "courseId": 84,
    "userName": "David Kim",
    "userAvatar": "/images/students/student-3.png",
    "role": "Full-Stack Developer",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Cinematic Video Editing in Premiere Pro feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "1 week ago"
  },
  {
    "id": 251,
    "courseId": 84,
    "userName": "Emily Zhao",
    "userAvatar": "/images/students/student-4.png",
    "role": "Creative Director",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Cinematic Video Editing in Premiere Pro. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 252,
    "courseId": 84,
    "userName": "Marcus Sterling",
    "userAvatar": "/images/students/student-5.png",
    "role": "Tech Lead",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Cinematic Video Editing in Premiere Pro was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "1 month ago"
  },
  {
    "id": 253,
    "courseId": 85,
    "userName": "Priya Patel",
    "userAvatar": "/images/students/student-1.png",
    "role": "Growth Specialist",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Audio Engineering & Podcast Production. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 254,
    "courseId": 85,
    "userName": "Liam O'Connor",
    "userAvatar": "/images/students/student-2.png",
    "role": "Freelance Creator",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Audio Engineering & Podcast Production was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "1 month ago"
  },
  {
    "id": 255,
    "courseId": 85,
    "userName": "Chloe Dubois",
    "userAvatar": "/images/students/student-3.png",
    "role": "Design Systems Lead",
    "rating": 4,
    "comment": "Exceptional quality! The lessons in Audio Engineering & Podcast Production were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "2 months ago"
  },
  {
    "id": 256,
    "courseId": 86,
    "userName": "James Wilson",
    "userAvatar": "/images/students/student-4.png",
    "role": "Frontend Architect",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Blender 3D Modeling for Beginners was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "1 month ago"
  },
  {
    "id": 257,
    "courseId": 86,
    "userName": "Nadia Hassan",
    "userAvatar": "/images/students/student-5.png",
    "role": "Digital Strategist",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Blender 3D Modeling for Beginners were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "2 months ago"
  },
  {
    "id": 258,
    "courseId": 86,
    "userName": "Sarah Jenkins",
    "userAvatar": "/images/students/student-1.png",
    "role": "Product Designer",
    "rating": 4,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "3 months ago"
  },
  {
    "id": 259,
    "courseId": 87,
    "userName": "Albert Flores",
    "userAvatar": "/images/students/student-2.png",
    "role": "Senior UX Engineer",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Color Grading & Cinematic Look Design were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "2 months ago"
  },
  {
    "id": 260,
    "courseId": 87,
    "userName": "David Kim",
    "userAvatar": "/images/students/student-3.png",
    "role": "Full-Stack Developer",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "3 months ago"
  },
  {
    "id": 261,
    "courseId": 87,
    "userName": "Emily Zhao",
    "userAvatar": "/images/students/student-4.png",
    "role": "Creative Director",
    "rating": 4,
    "comment": "The step-by-step breakdown made mastering Color Grading & Cinematic Look Design feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "4 months ago"
  },
  {
    "id": 262,
    "courseId": 88,
    "userName": "Marcus Sterling",
    "userAvatar": "/images/students/student-5.png",
    "role": "Tech Lead",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "3 months ago"
  },
  {
    "id": 263,
    "courseId": 88,
    "userName": "Priya Patel",
    "userAvatar": "/images/students/student-1.png",
    "role": "Growth Specialist",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Game Development with Unity & C# feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "4 months ago"
  },
  {
    "id": 264,
    "courseId": 88,
    "userName": "Liam O'Connor",
    "userAvatar": "/images/students/student-2.png",
    "role": "Freelance Creator",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Game Development with Unity & C#. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "1 week ago"
  },
  {
    "id": 265,
    "courseId": 89,
    "userName": "Chloe Dubois",
    "userAvatar": "/images/students/student-3.png",
    "role": "Design Systems Lead",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Creative Coding with p5.js and Canvas feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "4 months ago"
  },
  {
    "id": 266,
    "courseId": 89,
    "userName": "James Wilson",
    "userAvatar": "/images/students/student-4.png",
    "role": "Frontend Architect",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Creative Coding with p5.js and Canvas. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "1 week ago"
  },
  {
    "id": 267,
    "courseId": 89,
    "userName": "Nadia Hassan",
    "userAvatar": "/images/students/student-5.png",
    "role": "Digital Strategist",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Creative Coding with p5.js and Canvas was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 268,
    "courseId": 90,
    "userName": "Sarah Jenkins",
    "userAvatar": "/images/students/student-1.png",
    "role": "Product Designer",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Web Application Security & OWASP Top 10. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "1 week ago"
  },
  {
    "id": 269,
    "courseId": 90,
    "userName": "Albert Flores",
    "userAvatar": "/images/students/student-2.png",
    "role": "Senior UX Engineer",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Web Application Security & OWASP Top 10 was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 270,
    "courseId": 90,
    "userName": "David Kim",
    "userAvatar": "/images/students/student-3.png",
    "role": "Full-Stack Developer",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Web Application Security & OWASP Top 10 were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "1 month ago"
  },
  {
    "id": 271,
    "courseId": 91,
    "userName": "Emily Zhao",
    "userAvatar": "/images/students/student-4.png",
    "role": "Creative Director",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Ethical Hacking & Penetration Testing was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 272,
    "courseId": 91,
    "userName": "Marcus Sterling",
    "userAvatar": "/images/students/student-5.png",
    "role": "Tech Lead",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Ethical Hacking & Penetration Testing were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "1 month ago"
  },
  {
    "id": 273,
    "courseId": 91,
    "userName": "Priya Patel",
    "userAvatar": "/images/students/student-1.png",
    "role": "Growth Specialist",
    "rating": 4,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "2 months ago"
  },
  {
    "id": 274,
    "courseId": 92,
    "userName": "Liam O'Connor",
    "userAvatar": "/images/students/student-2.png",
    "role": "Freelance Creator",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in CI/CD Pipelines with GitHub Actions were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "1 month ago"
  },
  {
    "id": 275,
    "courseId": 92,
    "userName": "Chloe Dubois",
    "userAvatar": "/images/students/student-3.png",
    "role": "Design Systems Lead",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "2 months ago"
  },
  {
    "id": 276,
    "courseId": 92,
    "userName": "James Wilson",
    "userAvatar": "/images/students/student-4.png",
    "role": "Frontend Architect",
    "rating": 4,
    "comment": "The step-by-step breakdown made mastering CI/CD Pipelines with GitHub Actions feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "3 months ago"
  },
  {
    "id": 277,
    "courseId": 93,
    "userName": "Nadia Hassan",
    "userAvatar": "/images/students/student-5.png",
    "role": "Digital Strategist",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "2 months ago"
  },
  {
    "id": 278,
    "courseId": 93,
    "userName": "Sarah Jenkins",
    "userAvatar": "/images/students/student-1.png",
    "role": "Product Designer",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Linux Command Line & Bash Scripting feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "3 months ago"
  },
  {
    "id": 279,
    "courseId": 93,
    "userName": "Albert Flores",
    "userAvatar": "/images/students/student-2.png",
    "role": "Senior UX Engineer",
    "rating": 4,
    "comment": "This course provided a transformative understanding of Linux Command Line & Bash Scripting. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "4 months ago"
  },
  {
    "id": 280,
    "courseId": 94,
    "userName": "David Kim",
    "userAvatar": "/images/students/student-3.png",
    "role": "Full-Stack Developer",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Zero Trust Architecture Fundamentals feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "3 months ago"
  },
  {
    "id": 281,
    "courseId": 94,
    "userName": "Emily Zhao",
    "userAvatar": "/images/students/student-4.png",
    "role": "Creative Director",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Zero Trust Architecture Fundamentals. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "4 months ago"
  },
  {
    "id": 282,
    "courseId": 94,
    "userName": "Marcus Sterling",
    "userAvatar": "/images/students/student-5.png",
    "role": "Tech Lead",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Zero Trust Architecture Fundamentals was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "1 week ago"
  },
  {
    "id": 283,
    "courseId": 95,
    "userName": "Priya Patel",
    "userAvatar": "/images/students/student-1.png",
    "role": "Growth Specialist",
    "rating": 5,
    "comment": "This course provided a transformative understanding of DevSecOps: Automated Security in Pipelines. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "4 months ago"
  },
  {
    "id": 284,
    "courseId": 95,
    "userName": "Liam O'Connor",
    "userAvatar": "/images/students/student-2.png",
    "role": "Freelance Creator",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning DevSecOps: Automated Security in Pipelines was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "1 week ago"
  },
  {
    "id": 285,
    "courseId": 95,
    "userName": "Chloe Dubois",
    "userAvatar": "/images/students/student-3.png",
    "role": "Design Systems Lead",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in DevSecOps: Automated Security in Pipelines were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 286,
    "courseId": 96,
    "userName": "James Wilson",
    "userAvatar": "/images/students/student-4.png",
    "role": "Frontend Architect",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Full-Stack AI Application Development was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "1 week ago"
  },
  {
    "id": 287,
    "courseId": 96,
    "userName": "Nadia Hassan",
    "userAvatar": "/images/students/student-5.png",
    "role": "Digital Strategist",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Full-Stack AI Application Development were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 288,
    "courseId": 96,
    "userName": "Sarah Jenkins",
    "userAvatar": "/images/students/student-1.png",
    "role": "Product Designer",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "1 month ago"
  },
  {
    "id": 289,
    "courseId": 97,
    "userName": "Albert Flores",
    "userAvatar": "/images/students/student-2.png",
    "role": "Senior UX Engineer",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Brand Identity Design from Logo to Guidelines were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "2 weeks ago"
  },
  {
    "id": 290,
    "courseId": 97,
    "userName": "David Kim",
    "userAvatar": "/images/students/student-3.png",
    "role": "Full-Stack Developer",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "1 month ago"
  },
  {
    "id": 291,
    "courseId": 97,
    "userName": "Emily Zhao",
    "userAvatar": "/images/students/student-4.png",
    "role": "Creative Director",
    "rating": 4,
    "comment": "The step-by-step breakdown made mastering Brand Identity Design from Logo to Guidelines feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "2 months ago"
  },
  {
    "id": 292,
    "courseId": 98,
    "userName": "Marcus Sterling",
    "userAvatar": "/images/students/student-5.png",
    "role": "Tech Lead",
    "rating": 5,
    "comment": "One of the best investments I have made in my skills this year. The workflows taught here saved me countless hours of trial and error.",
    "createdAt": "1 month ago"
  },
  {
    "id": 293,
    "courseId": 98,
    "userName": "Priya Patel",
    "userAvatar": "/images/students/student-1.png",
    "role": "Growth Specialist",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering E-Commerce Development with Shopify & Next.js feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "2 months ago"
  },
  {
    "id": 294,
    "courseId": 98,
    "userName": "Liam O'Connor",
    "userAvatar": "/images/students/student-2.png",
    "role": "Freelance Creator",
    "rating": 4,
    "comment": "This course provided a transformative understanding of E-Commerce Development with Shopify & Next.js. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "3 months ago"
  },
  {
    "id": 295,
    "courseId": 99,
    "userName": "Chloe Dubois",
    "userAvatar": "/images/students/student-3.png",
    "role": "Design Systems Lead",
    "rating": 5,
    "comment": "The step-by-step breakdown made mastering Data Structures & Algorithms in TypeScript feel approachable and fun. Highly recommended to anyone looking to level up!",
    "createdAt": "2 months ago"
  },
  {
    "id": 296,
    "courseId": 99,
    "userName": "James Wilson",
    "userAvatar": "/images/students/student-4.png",
    "role": "Frontend Architect",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Data Structures & Algorithms in TypeScript. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "3 months ago"
  },
  {
    "id": 297,
    "courseId": 99,
    "userName": "Nadia Hassan",
    "userAvatar": "/images/students/student-5.png",
    "role": "Digital Strategist",
    "rating": 4,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Data Structures & Algorithms in TypeScript was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "4 months ago"
  },
  {
    "id": 298,
    "courseId": 100,
    "userName": "Sarah Jenkins",
    "userAvatar": "/images/students/student-1.png",
    "role": "Product Designer",
    "rating": 5,
    "comment": "This course provided a transformative understanding of Modern Software Architecture & Design Patterns. The exercises were incredibly practical and immediately boosted the quality of my output.",
    "createdAt": "3 months ago"
  },
  {
    "id": 299,
    "courseId": 100,
    "userName": "Albert Flores",
    "userAvatar": "/images/students/student-2.png",
    "role": "Senior UX Engineer",
    "rating": 5,
    "comment": "Clear, concise, and packed with high-value takeaways. Learning Modern Software Architecture & Design Patterns was seamless and the instructor explained every nuance with great clarity.",
    "createdAt": "4 months ago"
  },
  {
    "id": 300,
    "courseId": 100,
    "userName": "David Kim",
    "userAvatar": "/images/students/student-3.png",
    "role": "Full-Stack Developer",
    "rating": 5,
    "comment": "Exceptional quality! The lessons in Modern Software Architecture & Design Patterns were structured logically and the capstone project gave me a stellar piece for my portfolio.",
    "createdAt": "1 week ago"
  }
];
