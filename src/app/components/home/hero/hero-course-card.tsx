export function HeroCourseCard() {
  return (
    <div
      className="
        absolute
        left-1/2
        top-[100px]
        z-30
        hidden
        w-[200px]
        -translate-x-[260px]
        rounded-2xl
        bg-white
        px-5
        py-3.5
        text-left
        shadow-[0_12px_32px_rgba(0,0,0,0.14)]
        md:block
        lg:-translate-x-[280px]
      "
    >
      <p className="text-sm font-bold text-gray-900">
        UI/UX Design
      </p>

      <p className="mt-1 text-xs text-gray-400">
        200 Courses &bull; 1000+ Students
      </p>
    </div>
  );
}