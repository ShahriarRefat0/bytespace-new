"use client";

import { SlidersHorizontal, ListFilter, ChevronDown } from "lucide-react";

export function CourseFilters() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap gap-3">
        <button className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-600 transition hover:border-gray-300">
          <SlidersHorizontal size={15} />
          Filter
        </button>

        <button className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-600 transition hover:border-gray-300">
          <ListFilter size={15} />
          Level
        </button>

        <button className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-600 transition hover:border-gray-300">
          <ListFilter size={15} />
          Category
        </button>
      </div>

      <button className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-600">
        <ListFilter size={15} />
        Most relevant
        <ChevronDown size={15} />
      </button>
    </div>
  );
}