import Image from "next/image";

import { Navbar } from "./components/layout/navbar";
import { GridBackground } from "./components/ui/grid-background";
import { HeroSection } from "./components/home/hero-section";

export default function Home() {
  return (
     <GridBackground>
      <Navbar />

      <main>
        {/* Hero */}
        <HeroSection></HeroSection>
      </main>
    </GridBackground>
  );
}
