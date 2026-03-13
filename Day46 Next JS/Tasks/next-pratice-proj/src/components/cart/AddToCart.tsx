"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";

export type AddToCartProduct = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  stock?: number;
};

type Props = {
  product: AddToCartProduct;
};

export default function AddToCart({ product }: Props) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const max = product.stock ?? 99;

  function handleChange(next: number) {
    if (next < 1) next = 1;
    if (next > max) next = max;
    setQuantity(next);
  }

  function handleAdd() {
    addItem({ ...product, quantity });
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-sm text-slate-600">Quantity</span>
        <div className="inline-flex items-center rounded-lg border border-slate-300 overflow-hidden">
          <button
            type="button"
            onClick={() => handleChange(quantity - 1)}
            className="px-3 py-1 text-lg text-slate-700 hover:bg-slate-100"
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            min={1}
            max={max}
            onChange={(e) => handleChange(Number(e.target.value))}
            className="w-14 text-center text-sm py-1 border-x border-slate-300 focus:outline-none"
          />
          <button
            type="button"
            onClick={() => handleChange(quantity + 1)}
            className="px-3 py-1 text-lg text-slate-700 hover:bg-slate-100"
          >
            +
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={handleAdd}
        className="w-full rounded-lg bg-blue-600 text-white py-3 font-semibold hover:bg-blue-700 transition-colors"
      >
        Add to cart
      </button>
    </div>
  );
}
