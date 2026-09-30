"use client";

import { useState } from "react";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

interface CourseCategoryFilterProps {
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export function CourseCategoryFilter({
  activeCategory,
  onCategoryChange,
}: CourseCategoryFilterProps = {}) {
  const [internalCategory, setInternalCategory] = useState("Featured");
  const currentCategory = activeCategory ?? internalCategory;

  const handleSelect = (category: string) => {
    if (onCategoryChange) {
      onCategoryChange(category);
    } else {
      setInternalCategory(category);
    }
  };

  return (
    <div className="mx-auto mt-12 flex max-w-[1100px] flex-wrap items-center justify-center gap-3">
      {categories.map((category) => {
        const isActive = currentCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => handleSelect(category)}
            className={`
              rounded-full
              px-5
              py-2.5
              text-sm
              font-medium
              transition-all
              duration-200
              ${
                isActive
                  ? "bg-[#D7FF00] text-[#111827]"
                  : "bg-[#F5F5F5] text-[#555] hover:bg-[#EBEBEB]"
              }
            `}
          >
            {category}
          </button>
        );
      })}

      <button
        type="button"
        className="
          rounded-full
          px-3
          py-2.5
          text-sm
          font-medium
          text-[#1450E5]
          transition-colors
          hover:text-[#0D3DB5]
        "
      >
        + More
      </button>
    </div>
  );
}