"use client";

import { useCart } from "@/components/cart/CartProvider";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart } = useCart();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <section className="max-w-5xl mx-auto py-16 px-4 text-white">
        <h1 className="text-3xl font-semibold mb-4">Your cart is empty</h1>
        <p className="mb-6 text-slate-300">
          Browse products and add items to your cart.
        </p>
        <Link
          href="/products"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Go to products
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto py-12 px-4 text-white">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-semibold">Your cart</h1>
        <button
          type="button"
          onClick={clearCart}
          className="text-sm text-slate-300 hover:text-red-300"
        >
          Clear cart
        </button>
      </div>

      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 items-center rounded-xl bg-slate-900/70 border border-slate-800 p-4"
          >
            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-slate-800">
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                sizes="80px"
                className="object-contain"
              />
            </div>

            <div className="flex-1 space-y-1">
              <h2 className="text-sm font-semibold text-white line-clamp-2">
                {item.title}
              </h2>
              <p className="text-sm text-blue-300 font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="inline-flex items-center rounded-lg border border-slate-700 overflow-hidden">
                <button
                  type="button"
                  onClick={() =>
                    updateQuantity(item.id, item.quantity - 1)
                  }
                  className="px-3 py-1 text-lg text-slate-200 hover:bg-slate-800"
                >
                  -
                </button>
                <span className="px-3 py-1 text-sm">
                  {item.quantity}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    updateQuantity(item.id, item.quantity + 1)
                  }
                  className="px-3 py-1 text-lg text-slate-200 hover:bg-slate-800"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={() => removeItem(item.id)}
                className="text-xs text-red-300 hover:text-red-400"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between border-t border-slate-800 pt-6">
        <span className="text-sm text-slate-300">Total</span>
        <span className="text-2xl font-bold text-blue-400">
          ${total.toFixed(2)}
        </span>
      </div>
    </section>
  );
}
