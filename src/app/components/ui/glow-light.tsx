interface GlowLightProps {
  variant?: "yellow" | "blue";
  className?: string;
  size?: number;
  opacity?: number;
}

export function GlowLight({
  variant = "yellow",
  className = "",
  size = 600,
  opacity = 0.8,
}: GlowLightProps) {
  const glowColor =
    variant === "yellow"
      ? "rgba(204, 255, 0, 0.95)"
      : "rgba(0, 60, 255, 0.9)";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{
        width: size,
        height: size,
        opacity,
        background: `
          radial-gradient(
            circle,
            ${glowColor} 0%,
            ${variant === "yellow"
              ? "rgba(204, 255, 0, 0.7)"
              : "rgba(0, 60, 255, 0.7)"} 25%,
            ${variant === "yellow"
              ? "rgba(204, 255, 0, 0.35)"
              : "rgba(0, 60, 255, 0.35)"} 45%,
            transparent 72%
          )
        `,
      }}
    />
  );
}