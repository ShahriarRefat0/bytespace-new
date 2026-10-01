import Image from "next/image";
import Link from "next/link";

export function AuthBrand() {
  return (
    <Link
      href="/"
      aria-label="ByteSpace home"
      className="inline-flex"
    >
      <Image
        src="/branding/logo.png"
        alt="ByteSpace"
        width={42}
        height={42}
        priority
        className="h-[38px] w-auto object-contain"
      />
    </Link>
  );
}