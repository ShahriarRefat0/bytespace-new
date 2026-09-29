import Image from "next/image";

import { Navbar } from "./components/layout/navbar";
import { GridBackground } from "./components/ui/grid-background";
import { HeroSection } from "./components/home/hero/hero-section";
import { BrandLogosSection } from "./components/home/brand/brand-logos";
import CareJournalPage from "./components/home/care-journal/CareJournalPage";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero Area */}
      <GridBackground>
        <Navbar />
        <HeroSection />
      </GridBackground>

      {/* Subsequent Sections */}
      <main className="w-full">
        {/* Brand Logos */}
        <BrandLogosSection />

        <CareJournalPage/>
      </main>
    </div>
  );
}
