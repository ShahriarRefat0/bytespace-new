import Image from "next/image";

export function AuthCourseCards() {
    return (
        <div className="relative h-[585px] w-[548px]">
            {/* Border Frame */}
            <div className="absolute inset-0 border-2 border-cyan-400/70" />

            {/* Back Card */}
            <div className="absolute left-[35px] top-[120px] w-[300px] rotate-[-1deg] rounded-[20px] bg-white p-4 shadow-xl">
                <div className="relative h-[205px] overflow-hidden rounded-[14px] bg-gray-200">
                    <Image
                        src="/images/home/courses/course-1.png"
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>

                <h3 className="mt-4 text-lg font-bold text-gray-900">
                    Build Digital Asset
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                    by{" "}
                    <span className="text-[#1555e8]">
                        purepearl studio
                    </span>
                </p>

                <div className="mt-5 flex items-center gap-1">
                    <span className="text-xl font-bold text-[#1555e8]">
                        $25
                    </span>
                    <span className="text-xs text-gray-400">
                        /lifetime
                    </span>
                </div>
            </div>

            {/* Main Card */}
            <div className="absolute left-[180px] top-1 w-[350px] rounded-[20px] bg-white p-4 shadow-2xl">
                {/* Image */}
                <div className="relative h-[255px] overflow-hidden rounded-[14px]">
                    <Image
                        src="/images/home/courses/course-2.png"
                        alt="The Power of Big Data"
                        fill
                        className="object-cover"
                    />

                    {/* Image Stats */}
                    <div className="absolute bottom-3 left-3 flex gap-2">
                        <span className="rounded-full bg-white/80 px-3 py-2 text-[11px] font-medium text-gray-600 backdrop-blur">
                            17 Lessons
                        </span>

                        <span className="rounded-full bg-white/80 px-3 py-2 text-[11px] font-medium text-gray-600 backdrop-blur">
                            2 hours 16 mins
                        </span>

                        <span className="rounded-full bg-white/80 px-3 py-2 text-[11px] font-medium text-gray-600 backdrop-blur">
                            59 Comments
                        </span>
                    </div>
                </div>

                {/* Title */}
                <div className="mt-5 flex items-start justify-between gap-3">
                    <div>
                        <h3 className="text-[19px] font-bold leading-tight text-gray-900">
                            The Power of Big Data
                        </h3>

                        <p className="mt-1 text-xs text-gray-500">
                            by{" "}
                            <span className="text-[#1555e8]">
                                purepearl studio
                            </span>
                        </p>
                    </div>

                    <span className="shrink-0 text-sm font-medium text-gray-700">
                        4.5
                        <span className="ml-1 text-[#d8ff00]">★</span>
                    </span>
                </div>

                {/* Level + Students */}
                <div className="mt-5 flex items-center gap-4">
                    <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2">
                        <span className="text-xs text-gray-700">▮▮▮</span>
                        <span className="text-xs font-medium text-gray-600">
                            Beginner
                        </span>
                    </div>

                    <div className="flex items-center">
                        {[
                            "/images/students/student-1.png",
                            "/images/students/student-2.png",
                            "/images/students/student-3.png",
                            "/images/students/student-4.png",
                        ].map((avatar, index) => (
                            <div
                                key={avatar}
                                className={`relative h-8 w-8 overflow-hidden rounded-full border-2 border-white ${index > 0 ? "-ml-2" : ""
                                    }`}
                            >
                                <Image
                                    src={avatar}
                                    alt=""
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}

                        <span className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-black text-[10px] font-semibold text-white">
                            26+
                        </span>
                    </div>
                </div>

                {/* Price */}
                <div className="mt-5">
                    <span className="text-[24px] font-bold text-[#1555e8]">
                        $25
                    </span>

                    <span className="ml-1 text-xs text-gray-400">
                        /lifetime
                    </span>
                </div>
            </div>

            {/* Lime Ring */}
            <div className="absolute left-[50px] -top-10 flex h-[85px] w-[185px] rotate-[-15deg] items-center justify-center rounded-full">
                  <Image
                        src="/images/home/creator-cta/yellow-ring.png"
                        alt=""
                        width={320}
                        height={320}
                        className="absolute -bottom-[170px] left-[5%] w-[330px]"
                      />
                
            </div>

            {/* Triangle */}
            <div
                className="
          absolute
          bottom-[35px]
          left-[35px]
          h-0
          w-0
          rotate-[10deg]
          border-b-[110px]
          border-l-[60px]
          border-r-[60px]
          border-b-[#d8ff00]
          border-l-transparent
          border-r-transparent
        "
            />

            {/* White Scribble */}
            <div className="absolute bottom-[145px] right-[25px] rotate-[-18deg]">
                <div className="h-8 w-20 rounded-full bg-white" />
                <div className="-mt-3 ml-4 h-8 w-20 rounded-full bg-white" />
                <div className="-mt-3 ml-8 h-8 w-20 rounded-full bg-white" />
            </div>

            {/* Happy Students */}
            <div className="absolute bottom-0 right-[15px] w-[245px] rounded-[16px] bg-[#d8ff00] p-4 shadow-xl">
                <p className="text-[15px] font-semibold text-black">
                    Happy Students
                </p>

                <p className="mt-1 text-xs text-black/70">
                    4.5 (240K) ★
                </p>

                <div className="mt-3 flex items-center">
                    {[
                        "/images/students/student-1.png",
                        "/images/students/student-2.png",
                        "/images/students/student-3.png",
                        "/images/students/student-4.png",
                    ].map((avatar, index) => (
                        <div
                            key={avatar}
                            className={`relative h-9 w-9 overflow-hidden rounded-full border-2 border-[#d8ff00] ${index > 0 ? "-ml-2" : ""
                                }`}
                        >
                            <Image
                                src={avatar}
                                alt=""
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}

                    <div className="-ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-black text-[10px] font-semibold text-white">
                        2K+
                    </div>
                </div>
            </div>
        </div>
    );
}