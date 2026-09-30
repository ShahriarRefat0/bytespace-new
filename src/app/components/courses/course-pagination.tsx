"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface CoursePaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export function CoursePagination({
  currentPage = 1,
  totalPages = 9,
  onPageChange = () => {},
}: CoursePaginationProps) {
  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, "...", totalPages];
    }
    if (currentPage >= totalPages - 3) {
      return [1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
  };

  const pages = getPageNumbers();

  return (
    <div className="mt-12 flex items-center justify-center gap-2">
      {/* Previous Page */}
      <button
        type="button"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Previous page"
        className={`flex h-9 w-9 items-center justify-center rounded-full border transition ${
          currentPage <= 1
            ? "border-gray-200 text-gray-300 cursor-not-allowed"
            : "border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
        }`}
      >
        <ChevronLeft size={16} />
      </button>

      {/* Page Numbers */}
      {pages.map((page, index) => {
        if (page === "...") {
          return (
            <span
              key={`ellipsis-${index}`}
              className="flex h-9 w-7 items-center justify-center text-sm font-medium text-gray-400 select-none"
            >
              ...
            </span>
          );
        }

        const pageNum = Number(page);
        const isActive = pageNum === currentPage;

        return (
          <button
            key={pageNum}
            type="button"
            onClick={() => onPageChange(pageNum)}
            aria-current={isActive ? "page" : undefined}
            className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition cursor-pointer ${
              isActive
                ? "bg-[#1555e8] text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            {pageNum}
          </button>
        );
      })}

      {/* Next Page */}
      <button
        type="button"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="Next page"
        className={`flex h-9 w-9 items-center justify-center rounded-full border transition ${
          currentPage >= totalPages
            ? "border-gray-200 text-gray-300 cursor-not-allowed"
            : "border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
        }`}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}