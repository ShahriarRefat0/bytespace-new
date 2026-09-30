export function HeroProgressCard() {
  return (
    <div
      className="
        absolute
        right-1/2
        top-[115px]
        z-30
        hidden
        w-[215px]
        translate-x-[260px]
        rounded-2xl
        bg-white
        p-4.5
        text-left
        shadow-[0_12px_32px_rgba(0,0,0,0.14)]
        md:block
        lg:translate-x-[280px]
      "
    >
      <p className="text-xs font-semibold text-gray-700">
        Learning Progress
      </p>

      <p className="mt-1 text-4xl font-bold leading-none text-gray-900">
        55%
      </p>

      <div className="mt-3.5 h-2 overflow-hidden rounded-full bg-gray-100">
        <div className="h-full w-[55%] rounded-full bg-[#D5FB21]" />
      </div>
    </div>
  );
}