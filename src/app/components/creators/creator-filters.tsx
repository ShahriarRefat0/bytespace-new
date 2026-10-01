"use client";

import { useState } from "react";
import {
  Check,
  ChevronDown,
  ListFilter,
  SlidersHorizontal,
} from "lucide-react";

interface CreatorCourseFiltersProps {
  selectedLevel: string;
  sortBy: string;
  onLevelChange: (level: string) => void;
  onSortChange: (sort: string) => void;
}

const levels = [
  "All levels",
  "Beginner",
  "Intermediate",
  "Advanced",
];

const sortOptions = [
  "Most relevant",
  "Highest rated",
  "Price: Low to High",
  "Price: High to Low",
];

export function CreatorCourseFilters({
  selectedLevel,
  sortBy,
  onLevelChange,
  onSortChange,
}: CreatorCourseFiltersProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu((current) => (current === menu ? null : menu));
  };

  return (
    <div className="relative mt-8 flex flex-wrap items-center justify-between gap-4">
      {/* Left Filters */}
      <div className="flex flex-wrap gap-3">
        {/* Filter */}
        <button
          type="button"
          onClick={() => toggleMenu("filter")}
          className="flex cursor-pointer items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-600 transition hover:border-gray-300 hover:bg-gray-50"
        >
          <SlidersHorizontal size={15} />
          <span>Filter</span>
        </button>

        {/* Level */}
        <div className="relative">
          <button
            type="button"
            onClick={() => toggleMenu("level")}
            className="flex cursor-pointer items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-600 transition hover:border-gray-300 hover:bg-gray-50"
          >
            <ListFilter size={15} />

            <span>
              {selectedLevel === "All levels"
                ? "Level"
                : selectedLevel}
            </span>

            <ChevronDown size={15} />
          </button>

          {openMenu === "level" && (
            <div className="absolute left-0 top-12 z-30 w-48 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
              {levels.map((level) => {
                const isSelected = selectedLevel === level;

                return (
                  <button
                    key={level}
                    type="button"
                    onClick={() => {
                      onLevelChange(level);
                      setOpenMenu(null);
                    }}
                    className={`flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition ${
                      isSelected
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <span>{level}</span>

                    {isSelected && <Check size={15} />}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Sort */}
      <div className="relative">
        <button
          type="button"
          onClick={() => toggleMenu("sort")}
          className="flex cursor-pointer items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-600 transition hover:border-gray-300 hover:bg-gray-50"
        >
          <ListFilter size={15} />

          <span>{sortBy}</span>

          <ChevronDown size={15} />
        </button>

        {openMenu === "sort" && (
          <div className="absolute right-0 top-12 z-30 w-56 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
            {sortOptions.map((option) => {
              const isSelected = sortBy === option;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    onSortChange(option);
                    setOpenMenu(null);
                  }}
                  className={`flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition ${
                    isSelected
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <span>{option}</span>

                  {isSelected && <Check size={15} />}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}