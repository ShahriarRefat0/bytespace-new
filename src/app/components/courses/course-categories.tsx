"use client";

import { useState } from "react";

interface CourseCategoriesProps {
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export const categories = [
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

export function CourseCategories({
  selectedCategory,
  onCategoryChange,
}: CourseCategoriesProps) {
  const [internalCategory, setInternalCategory] = useState("Featured");
  const currentCategory = selectedCategory ?? internalCategory;

  const handleClick = (category: string) => {
    if (onCategoryChange) {
      onCategoryChange(category);
    } else {
      setInternalCategory(category);
    }
  };

  return (
    <div className="mt-7 flex flex-wrap gap-3">
      {categories.map((category) => {
        const isActive = currentCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => handleClick(category)}
            className={`cursor-pointer rounded-full px-4 py-2 text-sm transition ${
              isActive
                ? "bg-[#d8ff00] text-black"
                : "bg-[#f5f5f5] text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}