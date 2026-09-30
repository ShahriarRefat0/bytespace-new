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
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-6">
        {/* Logo */}
        <Logo
          width={36}
          height={40}
          textClassName="text-white"
        />

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/90 transition-colors hover:text-[#D7FF00]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <Link
            href="/login"
            className="text-sm font-medium text-white/90 transition-colors hover:text-[#D7FF00]"
          >
            Sign In
          </Link>

          <Link
            href="/register"
            className="text-sm font-medium text-white/90 transition-colors hover:text-[#D7FF00]"
          >
            Join Us
          </Link>

          <Link
            href="/cart"
            aria-label="Shopping cart"
            className="text-white transition-colors hover:text-[#D7FF00]"
          >
            <ShoppingBag size={18} strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </header>
  );
}