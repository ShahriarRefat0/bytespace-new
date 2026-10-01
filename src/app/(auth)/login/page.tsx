import { AuthBrand } from "@/app/components/auth/auth-brand";
import { LoginForm } from "@/app/components/auth/login-form";
import { LoginVisual } from "@/app/components/auth/login-visual";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#0b43e8]">
      <div
        className="min-h-screen"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(255,255,255,0.12) 2px,
              transparent 2px
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.12) 2px,
              transparent 2px
            )
          `,
          backgroundSize: "116px 116px",
        }}
      >
        <div className="mx-auto min-h-screen max-w-[1280px] px-6 py-8">
          <AuthBrand />

          <div className="grid min-h-[calc(100vh-120px)] grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_560px]">
            <LoginVisual />

            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}