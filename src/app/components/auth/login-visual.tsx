import Image from "next/image";
import { AuthCourseCards } from "./auth-course-cards";

export function LoginVisual() {
  return (
    <section className="hidden lg:block">
      <div className="max-w-[520px] mb-15">
        <h1 className="text-[24px] font-semibold tracking-tight text-white">
          Sign in with ease
        </h1>

        <p className="mt-4 max-w-[480px] text-[16px] leading-7 text-white/75">
          Experience a seamless and efficient sign-in process that grants
          you instant access to a world of knowledge.
        </p>
      </div>

<AuthCourseCards/>

    </section>
  );
}