import Image from "next/image";
import { AuthCourseCards } from "./auth-course-cards";

export function RegisterVisual() {
  return (
    <section className="hidden lg:block">
      <div className="max-w-[520px] mb-10">
        <h1 className="text-[24px] font-semibold tracking-tight text-white">
          Sign up and come in
        </h1>

        <p className="mt-4 max-w-[480px] text-[16px] leading-7 text-white/75">
          The registration process is straightforward, uncomplicated,
          and efficient, allowing users to sign up quickly, easily, and
          at no cost
        </p>
      </div>

<AuthCourseCards/>
    </section>
  );
}