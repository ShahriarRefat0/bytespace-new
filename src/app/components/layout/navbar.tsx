import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Logo } from "../ui/logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export function Navbar() {
  return (
    <header className="relative z-50 w-full">
      <div className="mx-auto flex h-24 max-w-[1240px] items-center justify-between px-6">
        
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/login"
            className="text-base text-white/80 transition-colors hover:text-white"
          >
            Sign In
          </Link>

          <Link
            href="/register"
            className="text-base text-white/80 transition-colors hover:text-white"
          >
            Join Us
          </Link>

          <Link
            href="/cart"
            aria-label="Shopping bag"
            className="text-white/90 transition-colors hover:text-white"
          >
            <ShoppingBag size={24} strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </header>
  );
}