import Image from "next/image";

export function CreatorCtaDecorations() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Top-left yellow shape */}
      <Image
        src="/images/home/creator-cta/yellow-left.png"
        alt=""
        width={220}
        height={220}
        className="absolute -left-1 -top-25 w-[230px]"
      />

      {/* Top-left white squiggle */}
      <Image
        src="/images/home/creator-cta/white-left.png"
        alt=""
        width={140}
        height={180}
        className="absolute left-[12%] top-8 w-[220px]"
      />

      {/* Top-right yellow triangle */}
      <Image
        src="/images/home/creator-cta/yellow-triangle.png"
        alt=""
        width={190}
        height={190}
        className="absolute right-[14%] top-8 w-[170px]"
      />

      {/* Top-right white shape */}
      <Image
        src="/images/home/creator-cta/yellow-triangle.png"
        alt=""
        width={220}
        height={300}
        className="absolute right-50 -bottom-[70px] w-[260px]"
      />

      {/* Bottom-left white triangle */}
      <Image
        src="/images/home/creator-cta/white-bottom-left.png"
        alt=""
        width={180}
        height={220}
        className="absolute -left-10 bottom-[10%] w-[170px]"
      />

      {/* Bottom-left yellow ring */}
      <Image
        src="/images/home/creator-cta/yellow-ring.png"
        alt=""
        width={320}
        height={320}
        className="absolute -bottom-[170px] left-[5%] w-[330px]"
      />

      {/* Bottom-right yellow squiggle */}
      <Image
        src="/images/home/creator-cta/white-right.png"
        alt=""
        width={220}
        height={250}
        className="absolute -bottom-10 right-[0%] w-[220px]"
      />
    </div>
  );
}