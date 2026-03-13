"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButtons() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <span className="text-sm text-gray-500">Loading...</span>;
  }

  if (!session) {
    return (
      <button
        onClick={() => (window.location.href = "/signin")}
        className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium"
      >
        Sign in
      </button>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-700">
        {session.user?.name ?? session.user?.email}
      </span>
      <button
        onClick={() => signOut({ callbackUrl: "/signin" })}
        className="px-3 py-1.5 rounded border border-gray-300 text-sm hover:bg-gray-100"
      >
        Logout
      </button>
    </div>
  );
}
