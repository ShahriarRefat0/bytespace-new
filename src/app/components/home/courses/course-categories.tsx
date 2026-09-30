"use client";

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

export function CourseCategories() {
  return (
    <div className="mt-7 flex flex-wrap gap-3">
      {categories.map((category, index) => (
        <button
          key={category}
          className={`rounded-full px-4 py-2 text-sm transition ${
            index === 0
              ? "bg-[#d8ff00] text-black"
              : "bg-[#f5f5f5] text-gray-600 hover:bg-gray-100"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}