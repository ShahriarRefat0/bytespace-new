import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  textClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  showText?: boolean;
}

export function Logo({
  className = "",
  textClassName = "",
  width = 36,
  height = 40,
  priority = true,
  showText = true,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 ${className}`}
      aria-label="ByteSpace home"
    >
      <Image
        src="/branding/logo.png"
        alt=""
        width={width}
        height={height}
        priority={priority}
        className="h-[37px] w-auto object-contain"
      />

      {showText && (
        <span
          className={`text-2xl font-bold leading-none tracking-tight ${textClassName}`}
        >
          ByteSpace
        </span>
      )}
    </Link>
  );
}