import Image from "next/image";

import { HappyStudentsCard } from "./happy-students-card";
import { RevenueCard } from "./revenue-card";

export function CreatorVisual() {
  return (
    <div className="relative mx-auto h-[540px] w-full max-w-[600px]">
      {/* Revenue cards */}
      <RevenueCard type="revenue" />
      <RevenueCard type="year" />

      {/* Creator */}
      <Image
        src="/images/home/growth/creator.png"
        alt="Course creator"
        width={600}
        height={700}
        className="absolute bottom-0 top-0 left-[5%] z-20 w-[95%] object-contain"
      />

      {/* Yellow decoration */}
      <Image
        src="/images/home/growth/yellow-squiggle.png"
        alt=""
        width={110}
        height={160}
        aria-hidden="true"
        className="absolute left-[57%] top-[130px] z-30 w-[160px]"
      />

      {/* Happy students */}
      <HappyStudentsCard />
    </div>
  );
}