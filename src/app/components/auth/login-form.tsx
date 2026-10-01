"use client";

import Link from "next/link";
import { useState } from "react";
import {  Eye, EyeOff } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full">
      <div className="rounded-[28px] bg-white px-8 py-10 shadow-2xl sm:px-12 sm:py-14">
        {/* Heading */}
        <div>
          <p className="text-[16px] font-medium text-[#1555e8]">
            Sign In
          </p>

          <h2 className="mt-2 text-[40px] font-bold leading-[1.08] tracking-tight text-gray-900">
            Welcome Back
          </h2>
        </div>

        {/* Form */}
        <form className="mt-10 space-y-6">
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
                px-5
                text-sm
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
                  px-5
                  pr-12
                  text-sm
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
                onClick={() =>
                  setShowPassword((value) => !value)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Sign In */}
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
              Sign In
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="mt-14 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200" />

          <span className="text-sm text-gray-400">
            or
          </span>

          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Social Login */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            type="button"
            aria-label="Continue with Facebook"
            className="
              flex
              h-[72px]
              w-[72px]
              cursor-pointer
              items-center
              justify-center
              rounded-[20px]
              border
              border-gray-200
              text-gray-900
              transition
              hover:bg-gray-50
            "
          >
            <FaFacebookF
              size={28}
              fill="currentColor"
            />
          </button>

          <button
            type="button"
            aria-label="Continue with Google"
            className="
              flex
              h-[72px]
              w-[72px]
              cursor-pointer
              items-center
              justify-center
              rounded-[20px]
              border
              border-gray-200
              text-2xl
              font-semibold
              text-gray-900
              transition
              hover:bg-gray-50
            "
          >
            G
          </button>
        </div>

        {/* Register */}
        <p className="mt-20 text-center text-sm text-gray-500">
          New user?{" "}
          <Link
            href="/register"
            className="font-medium text-[#1555e8] hover:underline"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}