import { GridBackground } from "@/app/components/ui/grid-background";
import { HeroSection } from "../components/hero/hero-section";
import { BrandLogosSection } from "../components/brand/brand-logos";
import { CoursesSection } from "../components/courses/courses-section";
import { LearningPathsSection } from "../components/learning-paths/learning-paths-section";
import { GrowthSection } from "../components/GrowthFeature/growth-section";
import { CreatorCtaSection } from "../components/creator-cta/creator-cta-section";
import { CommunityTestimonials } from "../components/testimonial/community-testimonials";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <GridBackground minHeight="min-h-0">
        <HeroSection />
      </GridBackground>

      <main>
        <BrandLogosSection />
        <CoursesSection />
        <LearningPathsSection />
        <GrowthSection />
        <CreatorCtaSection />
        <CommunityTestimonials />
      </main>
    </div>
  );
}