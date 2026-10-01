import type { CourseLesson } from "@/data/courses/course-lessons";

export type CourseLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

export interface Course {
  id: number;
  slug: string;
  title: string;
  image: string;
  creatorId: string;
  category: string;
  level: CourseLevel;
  rating: number;
  reviewCount: number;
  studentCount: number;
  price: number;

  subtitle?: string;
  instructor?: string;
  instructorAvatar?: string;
  instructorBio?: string;
  description?: string[];
  previewImages?: string[];
  keyPoints?: string[];
  includes?: string[];
  lessons?: CourseLesson[];
  lessonCount?: number;
  duration?: string;
  students?: string[];
}


