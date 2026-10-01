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
}