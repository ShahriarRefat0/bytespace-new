import Image from "next/image";

import { Check, Users } from "lucide-react";

import type { Creator } from "@/app/types/creator";

interface CreatorProfileHeroProps {
  creator: Creator;
}

export function CreatorProfileHero({
  creator,
}: CreatorProfileHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#1555e8]">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(255,255,255,0.35) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.35) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "82px 82px",
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-6 pb-14 pt-32">
        {/* Creator Identity */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            {/* Avatar */}
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-white/20 bg-white/10 sm:h-[68px] sm:w-[68px]">
              <Image
                src={creator.avatar}
                alt={creator.name}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Name + Role */}
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-bold tracking-tight text-white md:text-[38px]">
                  {creator.name}
                </h1>

                {creator.isVerified && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#d8ff00] px-3 py-1.5 text-xs font-medium text-black">
                    <Check size={12} strokeWidth={3} />
                    Creator
                  </span>
                )}
              </div>

              <p className="mt-1 text-sm text-white/80 md:text-base">
                {creator.role}
              </p>
            </div>
          </div>

          {/* Bio */}
          <div className="max-w-[1050px]">
            <p className="text-sm leading-6 text-white/80 md:text-base md:leading-7">
              {creator.bio}
            </p>
          </div>

          {/* Stats + Follow */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              {/* Products */}
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700">
                <span className="text-[#1555e8]">
                  {creator.productCount}
                </span>

                <span>Products</span>
              </div>

              {/* Followers */}
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700">
                <Users
                  size={15}
                  className="text-[#1555e8]"
                />

                <span>{creator.followerCount}</span>

                <span>Followers</span>
              </div>
            </div>

            {/* Follow */}
            <button
              type="button"
              className="w-fit cursor-pointer rounded-full bg-[#d8ff00] px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-[#c8ef00]"
            >
              Follow
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}