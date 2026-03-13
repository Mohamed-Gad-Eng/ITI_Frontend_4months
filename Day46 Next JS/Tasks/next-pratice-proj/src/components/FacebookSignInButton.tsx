"use client";

import Image from "next/image";

type FacebookSignInButtonProps = {
  onClick?: () => void;
};

function FacebookSignInButton({ onClick }: FacebookSignInButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center justify-center gap-3 text-base border border-slate-300 rounded-lg px-6 py-3 font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
    >
      <Image
        src="https://authjs.dev/img/providers/facebook.svg"
        alt="Facebook logo"
        width={24}
        height={24}
      />
      <span>Continue with Facebook</span>
    </button>
  );
}

export default FacebookSignInButton;
