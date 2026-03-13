"use client";

import SignInButton from "@/components/SignInButton";
import FacebookSignInButton from "@/components/FacebookSignInButton";
import { signIn } from "next-auth/react";
import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-slate-900 via-slate-950 to-black">
      <div className="w-full max-w-md rounded-2xl bg-white/90 shadow-xl border border-slate-200 p-8 space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold text-slate-900">Sign in to your account</h1>
          <p className="text-sm text-slate-500">
            Choose one of the providers below to continue.
          </p>
        </div>

        <div className="space-y-4">
          <SignInButton
            onClick={() =>
              signIn("google", { callbackUrl: "/account" })
            }
          />

          <div className="flex items-center gap-3 text-xs text-slate-400">
            <div className="h-px flex-1 bg-slate-200" />
            <span>or</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <FacebookSignInButton
            onClick={() =>
              signIn("facebook", { callbackUrl: "/account" })
            }
          />
        </div>

        <p className="text-[11px] leading-relaxed text-slate-400 text-center">
          By continuing, you agree to our terms of service and acknowledge our privacy
          policy.
        </p>
      </div>
    </div>
  );
}