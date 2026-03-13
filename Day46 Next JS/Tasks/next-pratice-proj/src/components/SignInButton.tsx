"use client";

import Image from "next/image";

type SignInButtonProps = {
  onClick?: () => void;
};

function SignInButton({ onClick }: SignInButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center justify-center gap-3 text-base border border-slate-300 rounded-lg px-6 py-3 font-medium bg-white hover:bg-slate-50 transition-colors"
    >
      <Image
        src="https://authjs.dev/img/providers/google.svg"
        alt="Google logo"
        width={24}
        height={24}
      />
      <span>Continue with Google</span>
    </button>
  );
}

export default SignInButton;