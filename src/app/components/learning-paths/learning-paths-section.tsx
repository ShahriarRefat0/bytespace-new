import {
  BriefcaseBusiness,
  Camera,
  Code2,
  Laptop,
  Megaphone,
  Palette,
} from "lucide-react";

import { LearningPathCard } from "./learning-path-card";

const learningPaths = [
  {
    title: "Design",
    icon: Palette,
  },
  {
    title: "Development",
    icon: Code2,
  },
  {
    title: "IT & Software",
    icon: Laptop,
  },
  {
    title: "Business",
    icon: BriefcaseBusiness,
  },
  {
    title: "Marketing",
    icon: Megaphone,
  },
  {
    title: "Photography",
    icon: Camera,
  },
];

export function LearningPathsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1240px] px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-[1000px] text-center">
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#111827] md:text-[46px]">
            Explore Diverse Learning Paths at Bytespace
          </h2>

          <p className="mx-auto mt-6 max-w-[950px] text-base leading-7 text-gray-400 md:text-[18px]">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your
            potential and explore our carefully curated categories.
          </p>
        </div>

        {/* Learning Paths */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {learningPaths.map((path) => (
            <LearningPathCard
              key={path.title}
              title={path.title}
              icon={path.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}