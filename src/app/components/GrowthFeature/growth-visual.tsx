import Image from "next/image";
import { CoursePreviewCard } from "./course-preview-card";
import { LearningProgressCard } from "./learning-progress-card";



export function GrowthVisual() {
  return (
    <div className="relative mx-auto h-[500px] w-full max-w-[600px]">
      {/* Course preview */}
      <CoursePreviewCard />

      {/* Main student */}
      <Image
        src="/images/home/growth/growth-student.png"
        alt="Student learning through ByteSpace"
        width={600}
        height={700}
        priority
        className="absolute bottom-0 top-0 z-20 w-[100%] object-contain"
      />

      {/* Learning progress */}
      <LearningProgressCard />

      {/* Yellow decoration */}
      <Image
        src="/images/home/growth/yellow-squiggle-left.png"
        alt=""
        width={110}
        height={160}
        aria-hidden="true"
        className="absolute right-0 top-[20%] z-30 w-[190px]"
      />
    </div>
  );
}