import { HeroSearch } from "./hero-search";
import { HeroVisual } from "./hero-visual";



export function HeroSection() {
    return (
        <section className="relative min-h-[850px] overflow-hidden pt-20">
            <div className="w-full">
                {/* Hero Heading */}
                <div className="relative z-20 mx-auto max-w-[1000px] text-center">
                    <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[76px]">
                        Get Access to Hundreds
                        <br />
                        Courses Available
                    </h1>

                    <p className="mx-auto mt-6 max-w-[780px] text-sm leading-6 text-white/80 sm:text-base font-normal">
                        Unlock your creativity, gain valuable knowledge, and grow your
                        business with our wide range of courses.
                    </p>
                </div>

                {/* Search */}
                <HeroSearch />

                {/* Main Hero Visual */}
                <HeroVisual />
            </div>
        </section>
    );
}