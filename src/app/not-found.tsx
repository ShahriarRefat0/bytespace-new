import Link from "next/link";
import { Navbar } from "@/app/components/layout/navbar";
import { Footer } from "@/app/components/layout/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-[#0b43e8]">
        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(255,255,255,0.12) 2px,
                transparent 2px
              ),
              linear-gradient(
                to bottom,
                rgba(255,255,255,0.12) 2px,
                transparent 2px
              )
            `,
            backgroundSize: "124px 124px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1100px] px-6 text-center">
          <div
            className="
              select-none
              text-[250px]
              font-medium
              leading-[0.72]
              tracking-[-0.08em]
              text-[#d8ff00]
              sm:text-[320px]
              md:text-[400px]
            "
          >
            404
          </div>

          <div className="relative z-10 -mt-1">
            <h1 className="text-[36px] font-semibold leading-[1.15] tracking-[-0.035em] text-white sm:text-[46px] md:text-[58px]">
              The page you are looking
              <br />
              for doesn&apos;t exist
            </h1>

            <p className="mt-7 text-sm text-white/50 md:text-base">
              Try to use a correct url or go back to homepage to start again
            </p>

            <Link
              href="/"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#d8ff00] px-7 text-sm font-medium text-black transition hover:bg-[#cfff00]"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}