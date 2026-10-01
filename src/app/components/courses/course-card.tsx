import Image from "next/image";
import Link from "next/link";
import { BarChart3, Star } from "lucide-react";

interface CourseCardProps {
  slug?: string;
  image: string;
  title: string;
  instructor: string;
  rating: number;
  level: string;
  price: number;
  students: string[];
  studentCount: string;
}

export function CourseCard({
  slug,
  image,
  title,
  instructor,
  rating,
  level,
  price,
  students,
  studentCount,
}: CourseCardProps) {
  const cardContent = (
    <article className="group overflow-hidden rounded-[20px] border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-lg">
      {/* Course Image */}
      <div className="relative mx-3 mt-3 overflow-hidden rounded-[14px]">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="aspect-[1.7/1] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />

        {/* Image Meta */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-gray-700 backdrop-blur-sm">
            17 Lessons
          </span>

          <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-gray-700 backdrop-blur-sm">
            2 hours 16 mins
          </span>

          <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-gray-700 backdrop-blur-sm">
            59 Comments
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-4 pt-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-1 text-[17px] font-semibold text-gray-900 group-hover:text-[#1450E5] transition-colors">
            {title}
          </h3>

          <div className="flex shrink-0 items-center gap-1 text-sm text-gray-500">
            <span>{rating}</span>
            <Star size={14} fill="currentColor" />
          </div>
        </div>

        <p className="mt-1 text-xs text-gray-400">
          by{" "}
          <span className="text-[#2563EB]">
            {instructor}
          </span>
        </p>

        {/* Bottom Meta */}
        <div className="mt-4 flex items-center justify-between">
          {/* Level */}
          <div className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs text-gray-600">
            <BarChart3 size={14} strokeWidth={2} />
            <span>{level}</span>
          </div>

          {/* Students */}
          <div className="flex items-center">
            <div className="flex -space-x-2">
              {students.slice(0, 5).map((student, index) => (
                <Image
                  key={`${student}-${index}`}
                  src={student}
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>

            <span className="ml-1 flex h-7 min-w-7 items-center justify-center rounded-full bg-[#D7FF00] px-1.5 text-[10px] font-semibold text-black">
              {studentCount}
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="mt-4">
          <span className="text-xl font-bold text-[#1450E5]">
            ${price}
          </span>

          <span className="ml-1 text-[11px] text-gray-400">
            /lifetime
          </span>
        </div>
      </div>
    </article>
  );

  if (slug) {
    return (
      <Link href={`/course/${slug}`} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}