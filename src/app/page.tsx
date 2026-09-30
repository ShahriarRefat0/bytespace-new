import Image from "next/image";

import { Navbar } from "./components/layout/navbar";
import { GridBackground } from "./components/ui/grid-background";
import { HeroSection } from "./components/home/hero/hero-section";
import { BrandLogosSection } from "./components/home/brand/brand-logos";
import { CoursesSection } from "./components/home/courses/courses-section";
import { LearningPathsSection } from "./components/home/learning-paths/learning-paths-section";
import { GrowthSection } from "./components/home/GrowthFeature/growth-section";
import { CreatorCtaSection } from "./components/home/creator-cta/creator-cta-section";

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

        <CoursesSection/>
         <LearningPathsSection />
         <GrowthSection />
         <CreatorCtaSection/>
      </main>
    </div>
  );
}
