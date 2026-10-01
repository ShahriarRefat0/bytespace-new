import Image from "next/image";
import { GlowLight } from "../ui/glow-light";
import { HappyStudentsCard } from "./happy-students-card";
import { RevenueCard } from "./revenue-card";

export function CreatorVisual() {
  return (
    <div className="relative mx-auto h-[540px] w-full max-w-[600px]">
      {/* Ambient glow behind creator visual */}
      <GlowLight
        variant="yellow"
        size={460}
        opacity={0.35}
        className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
      />

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