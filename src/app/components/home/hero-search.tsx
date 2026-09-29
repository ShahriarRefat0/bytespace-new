import { Search } from "lucide-react";

export function HeroSearch() {
  return (
    <div className="relative z-30 mx-auto mt-8 flex w-full max-w-[530px] items-center rounded-full bg-white p-1.5 pl-5 shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
      <Search
        size={18}
        strokeWidth={2.2}
        className="shrink-0 text-gray-400"
      />

      <input
        type="search"
        placeholder="Course, topic, creator"
        aria-label="Search courses"
        className="ml-3 w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
      />

      <button
        type="button"
        className="h-[42px] shrink-0 rounded-full bg-[#D5FB21] px-7 text-sm font-semibold text-black transition-all duration-200 hover:bg-[#c9ef16] active:scale-95"
      >
        Search
      </button>
    </div>
  );
}