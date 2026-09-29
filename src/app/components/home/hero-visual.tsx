import Image from "next/image";

import { HeroCourseCard } from "./hero-course-card";
import { HeroProgressCard } from "./hero-progress-card";
import { HeroStudentsCard } from "./hero-students-card";

export function HeroVisual() {
    return (
        <div className="relative mx-auto mt-4 h-[580px] sm:h-[620px] md:h-[660px] lg:h-[700px] w-full overflow-visible">
            {/* Lime Arch Background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-1/2 z-10 w-[860px] -translate-x-1/2 select-none md:w-[1040px] lg:w-[1220px]"
            >
                <Image
                    src="/images/home/hero/sub-bg.png"
                    alt=""
                    width={1149}
                    height={442}
                    priority
                    className="h-auto w-full object-contain"
                />
            </div>

            {/* --- Left 3D Elements --- */}

            {/* 1. Top-Left Lime Coil */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-[10px] z-20 hidden w-[140px] select-none md:block lg:left-2 lg:w-[185px]"
            >
                <Image
                    src="/images/home/hero/yellow-left.png"
                    alt=""
                    width={267}
                    height={387}
                    className="h-auto w-full object-contain"
                />
            </div>

            {/* 2. Mid-Left White Squiggle */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[90px] top-[195px] z-20 hidden w-[85px] rotate-[35deg] select-none md:block md:left-[130px] lg:left-[180px] lg:w-[105px]"
            >
                <Image
                    src="/images/home/hero/white-right.png"
                    alt=""
                    width={317}
                    height={332}
                    className="h-auto w-full object-contain"
                />
            </div>

            {/* 3. Bottom-Left White Torus */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 bottom-[15px] z-20 hidden w-[180px] select-none md:block lg:left-3 lg:w-[230px]"
            >
                <Image
                    src="/images/home/hero/white-ring.png"
                    alt=""
                    width={346}
                    height={343}
                    className="h-auto w-full object-contain"
                />
            </div>

            {/* --- Right 3D Elements --- */}

            {/* 4. Top-Right Lime Cone */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-[10px] z-20 hidden w-[150px] select-none md:block lg:right-2 lg:w-[195px]"
            >
                <Image
                    src="/images/home/hero/yellow-right.png"
                    alt=""
                    width={213}
                    height={372}
                    className="h-auto w-full object-contain"
                />
            </div>

            {/* 5. Mid-Right White Pyramid */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[95px] top-[185px] z-20 hidden w-[100px] select-none md:block md:right-[130px] lg:right-[180px] lg:w-[125px]"
            >
                <Image
                    src="/images/home/hero/mask-group.png"
                    alt=""
                    width={189}
                    height={189}
                    className="h-auto w-full object-contain"
                />
            </div>

            {/* 6. Bottom-Right White Squiggle */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 bottom-[25px] z-20 hidden w-[120px] -rotate-[35deg] select-none md:block lg:right-3 lg:w-[155px]"
            >
                <Image
                    src="/images/home/hero/white-right.png"
                    alt=""
                    width={317}
                    height={332}
                    className="h-auto w-full object-contain"
                />
            </div>

            {/* Center Main Person */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 z-20 w-[420px] -translate-x-1/2 select-none sm:w-[480px] md:w-[540px] lg:w-[590px]">
                <Image
                    src="/images/home/hero/hero-person.png"
                    alt="Student learning online"
                    width={722}
                    height={515}
                    priority
                    className="h-auto w-full object-contain"
                />
            </div>

            {/* UI/UX Card */}
            <HeroCourseCard />

            {/* Learning Progress Card */}
            <HeroProgressCard />

            {/* Happy Students Card */}
            <HeroStudentsCard />
        </div>
    );
}