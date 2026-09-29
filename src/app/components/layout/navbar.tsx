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
      <div className="flex h-20 w-full items-center justify-between px-6 sm:px-10 md:px-12 lg:px-16">
        {/* Logo */}
        <Logo textClassName="text-xl sm:text-2xl" />

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-white ${link.label === "Home" ? "text-white" : "text-white/80"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-6 md:gap-7">
          <Link
            href="/login"
            className="text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            Sign In
          </Link>

          <Link
            href="/register"
            className="text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            Join Us
          </Link>

          <Link
            href="/cart"
            aria-label="Shopping bag"
            className="text-white/90 transition-colors hover:text-white"
          >
            <ShoppingBag size={21} strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </header>
  );
}