import Link from "next/link";
import { CreatorCtaDecorations } from "./reator-cta-decorations";
import { GridBackground } from "../ui/grid-background";


export function CreatorCtaSection() {
  return (
    <GridBackground minHeight="min-h-0">
      <section className="relative overflow-hidden">
        <CreatorCtaDecorations />
        <div className="relative z-10 mx-auto flex min-h-[480px] max-w-[1240px] flex-col items-center justify-center px-6 py-16 md:py-20 text-center">
          <h2 className="max-w-[850px] text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[50px]">
            Unlock Your Potential as a
            <br />
            Creator with ByteSpace
          </h2>

          <p className="mt-6 max-w-[980px] text-sm leading-6 text-white/80 md:text-base md:leading-8">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>

          <Link
            href="/register"
            className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-[#C7FF00] px-9 text-base font-semibold text-[#111827] transition-transform duration-200 hover:scale-105"
          >
            Join as Creator
          </Link>
        </div>
      </section>
    </GridBackground>
  );
}