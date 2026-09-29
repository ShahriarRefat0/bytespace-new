import type { ReactNode } from "react";

interface GridBackgroundProps {
  children: ReactNode;
  className?: string;
}

export function GridBackground({
  children,
  className = "",
}: GridBackgroundProps) {
  return (
    <div
      className={`relative min-h-screen overflow-hidden bg-[#123FE5] ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(255, 255, 255, 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.08) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "120px 120px",
        }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}