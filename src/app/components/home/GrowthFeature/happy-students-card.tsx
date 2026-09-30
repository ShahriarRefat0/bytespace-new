import Image from "next/image";

const students = [
  "/images/home/hero/student-1.png",
  "/images/home/hero/student-2.png",
  "/images/home/hero/student-3.png",
  "/images/home/hero/student-4.png",
  "/images/home/hero/student-5.png",
];

export function HappyStudentsCard() {
  return (
    <div className="absolute bottom-[40px] right-0 z-30 rounded-[18px] bg-white px-5 py-4 shadow-[0_15px_40px_rgba(0,0,0,0.12)]">
      <p className="text-sm font-medium text-[#111827]">
        Happy Students
      </p>

      <p className="mt-1 text-xs text-gray-500">
        4.5 (240){" "}
        <span className="text-[#C7FF00]">★</span>
      </p>

      <div className="mt-3 flex items-center">
        <div className="flex">
          {students.map((student, index) => (
            <div
              key={student}
              className={`relative h-9 w-9 overflow-hidden rounded-full border-2 border-white ${
                index !== 0 ? "-ml-2" : ""
              }`}
            >
              <Image
                src={student}
                alt=""
                fill
                className="object-cover"
                sizes="36px"
              />
            </div>
          ))}
        </div>

        <span className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#C7FF00] text-xs font-semibold text-[#111827]">
          2K+
        </span>
      </div>
    </div>
  );
}