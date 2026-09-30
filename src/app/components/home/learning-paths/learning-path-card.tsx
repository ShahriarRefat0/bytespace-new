import type { LucideIcon } from "lucide-react";

interface LearningPathCardProps {
  title: string;
  icon: LucideIcon;
}

export function LearningPathCard({
  title,
  icon: Icon,
}: LearningPathCardProps) {
  return (
    <article className="group flex h-[230px] flex-col items-center justify-center rounded-[24px] border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg">
      {/* Icon */}
      <div className="flex h-[82px] w-[82px] items-center justify-center rounded-full bg-[#D7FF00] text-[#111827]">
        <Icon size={38} strokeWidth={2.4} />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-[22px] font-medium tracking-tight text-[#111827]">
        {title}
      </h3>
    </article>
  );
}