import { WebsiteShell } from "@/app/components/layout/website-shell";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <WebsiteShell>{children}</WebsiteShell>;
}