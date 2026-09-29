import Image from "next/image";
import Hero from "./components/home/hero-section";
import { Navbar } from "./components/layout/navbar";
import { GridBackground } from "./components/ui/grid-background";

export default function Home() {
  return (
     <GridBackground>
      <Navbar />

      <main>
        {/* Hero */}
      </main>
    </GridBackground>
  );
}
