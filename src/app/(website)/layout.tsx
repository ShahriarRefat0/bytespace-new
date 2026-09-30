import { Navbar } from "@/app/components/layout/navbar";
import { Footer } from "@/app/components/layout/footer";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Navbar />

      {children}

      <Footer />
    </div>
  );
}