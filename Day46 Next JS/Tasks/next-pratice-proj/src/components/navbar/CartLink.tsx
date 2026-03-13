"use client";

import { useCart } from "@/components/cart/CartProvider";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function CartLink() {
  const { data: session, status } = useSession();
  const { items } = useCart();

  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  if (status === "loading") return null;
  if (!session) return null;

  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600"
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-300">
        🛒
      </span>
      <span>Cart</span>
      {count > 0 && (
        <span className="ml-1 inline-flex items-center justify-center rounded-full bg-blue-600 px-1.5 text-xs font-semibold text-white min-w-5">
          {count}
        </span>
      )}
    </Link>
  );
}
