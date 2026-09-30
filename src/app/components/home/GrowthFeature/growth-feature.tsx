import type { ReactNode } from "react";
import { Check } from "lucide-react";

interface Stat {
  value: string;
  label: string;
}

interface GrowthFeatureProps {
  title: ReactNode;
  description: ReactNode;
  visual: ReactNode;
  reverse?: boolean;
  stats?: Stat[];
  benefits?: string[];
}

export function GrowthFeature({
  title,
  description,
  visual,
  reverse = false,
  stats,
  benefits,
}: GrowthFeatureProps) {
  return (
    <div
      className={`grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-20 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Content */}
      <div>
        <h2 className="text-4xl font-bold leading-[1.08] tracking-tight text-[#111827] md:text-5xl">
          {title}
        </h2>

        <p className="mt-7 max-w-[570px] text-base leading-7 text-[#6B7280] md:text-[17px]">
          {description}
        </p>

        {/* Stats */}
        {stats && stats.length > 0 && (
          <div className="mt-10 flex items-start gap-10 md:gap-14">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-semibold text-[#1450E5] md:text-4xl">
                  {stat.value}
                </p>

                <p className="mt-1 text-sm text-[#6B7280]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Benefits */}
        {benefits && benefits.length > 0 && (
          <ul className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-3 text-base text-[#333333] md:text-[17px]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1450E5] text-white">
                  <Check size={13} strokeWidth={3} />
                </span>

                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Visual */}
      <div className="min-w-0">
        {visual}
      </div>
    </div>
  );
}