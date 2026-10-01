"use client";

import Link from "next/link";
import { useState } from "react";

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full">
      <div className="rounded-[28px] bg-white px-8 py-10 shadow-2xl sm:px-12 sm:py-14">
        {/* Heading */}
        <div>
          <p className="text-[16px] font-medium text-[#1555e8]">
            Create an Account
          </p>

          <h2 className="mt-2 text-[40px] font-bold leading-[1.08] tracking-tight text-gray-900">
            Welcome to
            <br />
            ByteSpace
          </h2>
        </div>

        {/* Form */}
        <form className="mt-10 space-y-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="text-sm font-medium text-gray-800"
            >
              Full Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Jamie Davis"
              className="
                mt-2
                h-[50px]
                w-full
                rounded-xl
                border
                border-gray-200
                bg-white
                px-5
                text-sm
                text-gray-900
                outline-none
                transition
                placeholder:text-gray-400
                focus:border-[#1555e8]
                focus:ring-2
                focus:ring-[#1555e8]/10
              "
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-800"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="designer@example.com"
              className="
                mt-2
                h-[50px]
                w-full
                rounded-xl
                border
                border-gray-200
                bg-white
                px-5
                text-sm
                text-gray-900
                outline-none
                transition
                placeholder:text-gray-400
                focus:border-[#1555e8]
                focus:ring-2
                focus:ring-[#1555e8]/10
              "
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-800"
            >
              Password
            </label>

            <div className="relative mt-2">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className="
                  h-[50px]
                  w-full
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  px-5
                  pr-20
                  text-sm
                  text-gray-900
                  outline-none
                  transition
                  placeholder:text-gray-400
                  focus:border-[#1555e8]
                  focus:ring-2
                  focus:ring-[#1555e8]/10
                "
              />

              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-xs font-medium text-gray-400 hover:text-gray-700"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Continue */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="
                cursor-pointer
                rounded-full
                bg-[#d8ff00]
                px-7
                py-3
                text-[15px]
                font-semibold
                text-black
                transition
                hover:bg-[#cfff00]
              "
            >
              Continue
            </button>
          </div>
        </form>

        {/* Login */}
        <p className="mt-28 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-[#1555e8] hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}