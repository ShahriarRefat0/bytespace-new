import { ChevronLeft, ChevronRight } from "lucide-react";

export function CoursePagination() {
  return (
    <div className="mt-12 flex items-center justify-center gap-2">
      <button className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50">
        <ChevronLeft size={16} />
      </button>

      {[1, 2, 3, 4, 5].map((page) => (
        <button
          key={page}
          className={`flex h-9 w-9 items-center justify-center rounded-full text-sm ${
            page === 1
              ? "bg-[#1555e8] text-white"
              : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          {page}
        </button>
      ))}

      <button className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50">
        <ChevronRight size={16} />
      </button>
    </div>
  );
}