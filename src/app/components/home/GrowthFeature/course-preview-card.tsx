import Image from "next/image";

export function CoursePreviewCard() {
  return (
    <div className="absolute left-0 top-5 z-10 w-[330px] overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
      {/* Course Image */}
      <div className="relative h-[175px] w-full overflow-hidden">
        <Image
          src="/images/home/growth/course-preview.png"
          alt="Learn Figma course"
          fill
          className="object-cover"
          sizes="330px"
        />

        {/* Lesson information */}
        <div className="absolute bottom-3 left-3 flex gap-2">
          <span className="rounded-full bg-white/95 px-3 py-1 text-[10px] font-medium text-gray-600">
            17 Lessons
          </span>

          <span className="rounded-full bg-white/95 px-3 py-1 text-[10px] font-medium text-gray-600">
            2 hours 16 mins
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="truncate text-lg font-bold text-[#111827]">
          Learn Figma from Basic
        </h3>

        <p className="mt-1 text-xs text-[#1450E5]">
          by purepearl studio
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
            Beginner
          </span>

          <p className="text-lg font-bold text-[#1450E5]">
            $25
            <span className="ml-1 text-xs font-normal text-gray-500">
              /lifetime
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}