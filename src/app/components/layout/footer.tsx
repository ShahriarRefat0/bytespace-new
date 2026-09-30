import Link from "next/link";

import { Logo } from "../ui/logo";

const footerColumns = [
  {
    title: "",
    links: [
      { label: "Featured Courses", href: "/courses" },
      { label: "Featured Categories", href: "/categories" },
      { label: "Business", href: "/courses?category=business" },
      { label: "IT", href: "/courses?category=it" },
      { label: "Design", href: "/courses?category=design" },
    ],
  },
  {
    title: "",
    links: [
      { label: "Development", href: "/courses?category=development" },
      { label: "Marketing", href: "/courses?category=marketing" },
      { label: "Photography", href: "/courses?category=photography" },
      { label: "Finance", href: "/courses?category=finance" },
      { label: "Sport", href: "/courses?category=sport" },
    ],
  },
  {
    title: "",
    links: [
      { label: "Become a Creator", href: "/creators/join" },
      { label: "Affiliate Program", href: "/affiliate" },
      { label: "Contact", href: "/contact" },
      { label: "Help", href: "/help" },
      { label: "About", href: "/about" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5] bg-white">
      <div className="mx-auto max-w-[1240px] px-6">
        {/* Main footer */}
        <div className="grid gap-14 py-16 md:grid-cols-[1.5fr_2fr] lg:py-20">
          {/* Newsletter */}
          <div>
            <Logo
              width={36}
              height={40}
              textClassName="text-2xl text-[#080D24]"
            />

            <p className="mt-6 max-w-[520px] text-sm leading-6 text-[#666666]">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Newsletter form */}
            <form className="mt-12 flex max-w-[550px] items-center gap-5">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>

              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email"
                className="h-14 flex-1 rounded-full border border-[#D9D9D9] bg-white px-6 text-sm text-[#080D24] outline-none transition focus:border-[#CCFF00]"
              />

              <button
                type="submit"
                className="h-14 rounded-full bg-[#CCFF00] px-8 text-sm font-medium text-[#080D24] transition hover:bg-[#bff000]"
              >
                Search
              </button>
            </form>

            <p className="mt-7 max-w-[540px] text-xs leading-5 text-[#666666]">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Footer links */}
          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-3"
          >
            {footerColumns.map((column, columnIndex) => (
              <div key={columnIndex}>
                <ul className="space-y-6">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#555555] transition-colors hover:text-[#1555E8]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col gap-6 border-t border-[#E5E5E5] py-7 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-[#666666]">
            © 2023 ByteSpace. All rights reserved.
          </p>

          <nav
            aria-label="Legal navigation"
            className="flex flex-wrap gap-x-7 gap-y-3"
          >
            <Link
              href="/privacy"
              className="text-xs text-[#666666] transition-colors hover:text-[#080D24]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-xs text-[#666666] transition-colors hover:text-[#080D24]"
            >
              Terms of Service
            </Link>

            <Link
              href="/cookies"
              className="text-xs text-[#666666] transition-colors hover:text-[#080D24]"
            >
              Cookies Settings
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}