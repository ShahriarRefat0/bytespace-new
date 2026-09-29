import Image from "next/image";

const students = [
  "/images/home/hero/student-1.png",
  "/images/home/hero/student-2.png",
  "/images/home/hero/student-3.png",
  "/images/home/hero/student-4.png",
  "/images/home/hero/student-5.png",
];

export function HeroStudentsCard() {
  return (
    <div
      className="
        absolute
        bottom-[65px]
        left-1/2
        z-30
        hidden
        w-[250px]
        -translate-x-[360px]
        rounded-2xl
        bg-white
        p-4
        text-left
        shadow-[0_12px_32px_rgba(0,0,0,0.14)]
        md:block
        lg:-translate-x-[390px]
      "
    >
      <p className="text-xs font-semibold text-gray-900">
        Happy Students
      </p>

      <p className="mt-0.5 text-xs text-gray-500 font-medium">
        4.5 (240)
        <span className="ml-1 text-amber-400">★</span>
      </p>

      <div className="mt-2.5 flex items-center">
        {/* Student avatars */}
        <div className="flex -space-x-2">
          {students.map((student) => (
            <Image
              key={student}
              src={student}
              alt=""
              width={34}
              height={34}
              className="h-8 w-8 rounded-full border-2 border-white object-cover"
            />
          ))}
        </div>

        {/* 2K+ */}
        <div className="ml-2.5 flex h-8 min-w-8 items-center justify-center rounded-full bg-[#D5FB21] px-2 text-xs font-bold text-black">
          2K+
        </div>
      </div>
    </div>
  );
}