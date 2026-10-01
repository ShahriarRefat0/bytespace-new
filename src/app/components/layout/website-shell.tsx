import { Navbar } from "./navbar";
import { Footer } from "./footer";

interface WebsiteShellProps {
  children: React.ReactNode;
}

export function WebsiteShell({
  children,
}: WebsiteShellProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}