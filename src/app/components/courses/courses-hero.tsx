import { Search, ChevronDown } from "lucide-react";

export function CoursesHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex min-h-[300px] max-w-[1240px] flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
          Find Your Next Course
        </h1>

        <div className="mt-8 flex w-full max-w-2xl flex-col gap-3 sm:flex-row">
          <div className="flex h-12 flex-1 items-center gap-3 rounded-full bg-white px-5">
            <Search
              size={18}
              className="shrink-0 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
            />
          </div>

          <button className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#d8ff00] px-7 font-medium text-black transition hover:bg-[#cfff00]">
            Courses
            <ChevronDown size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}