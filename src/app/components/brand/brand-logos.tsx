import { Earth, Shell, Target, Vegan, Zap } from "lucide-react";

interface LogoItemProps {
  name: string;
}

export function BrandLogosSection() {
  return (
    <section className="w-full bg-[#F7F8F9] py-14 border-t border-gray-100">
      <div className="mx-auto flex w-full max-w-[1360px] flex-wrap items-center justify-between gap-8 px-6 sm:px-10 lg:px-16">
        {/* Logo 1 - Waves */}
        <div className="flex items-center gap-3 text-[#64748B] transition-opacity hover:opacity-80">
         <Earth />
          <span className="text-xl font-bold tracking-tight text-[#5A6578]">
            Logoipsum
          </span>
        </div>

        {/* Logo 2 - Sunburst */}
        <div className="flex items-center gap-3 text-[#64748B] transition-opacity hover:opacity-80">
          <Target />
          <span className="text-xl font-bold tracking-tight text-[#5A6578]">
            Logoipsum
          </span>
        </div>

        {/* Logo 3 - Lightning in Circle */}
        <div className="flex items-center gap-3 text-[#64748B] transition-opacity hover:opacity-80">
       <Zap />
          <span className="text-xl font-bold tracking-tight text-[#5A6578]">
            Logoipsum
          </span>
        </div>

        {/* Logo 4 - Flower / Clover in Circle */}
        <div className="flex items-center gap-3 text-[#64748B] transition-opacity hover:opacity-80">
          <Shell />
          <span className="text-xl font-bold tracking-tight text-[#5A6578]">
            Logoipsum
          </span>
        </div>

        {/* Logo 5 - Ripple / Target in Circle */}
        <div className="flex items-center gap-3 text-[#64748B] transition-opacity hover:opacity-80">
          <Vegan />
          <span className="text-xl font-bold tracking-tight text-[#5A6578]">
            Logoipsum
          </span>
        </div>
      </div>
    </section>
  );
}
