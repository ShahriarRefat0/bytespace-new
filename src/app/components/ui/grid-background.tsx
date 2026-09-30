import type { ReactNode } from "react";

interface GridBackgroundProps {
  children: ReactNode;
  className?: string;
  minHeight?: string;
}

export function GridBackground({
  children,
  className = "",
  minHeight = "min-h-screen",
}: GridBackgroundProps) {
  return (
    <div
      className={`relative overflow-hidden bg-[#0738E8] ${minHeight} ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(255, 255, 255, 0.13) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.13) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "110px 110px",
        }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}