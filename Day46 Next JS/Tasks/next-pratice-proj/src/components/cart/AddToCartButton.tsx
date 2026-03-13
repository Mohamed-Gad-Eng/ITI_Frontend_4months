"use client";

import { useCart } from "./CartProvider";

export type AddToCartButtonProduct = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

type Props = {
  product: AddToCartButtonProduct;
};

export default function AddToCartButton({ product }: Props) {
  const { addItem } = useCart();

  return (
    <button
      type="button"
      onClick={() => addItem({ ...product, quantity: 1 })}
      className="mt-4 w-full rounded-md bg-blue-600 text-white py-2 text-sm font-semibold hover:bg-blue-700 transition-colors"
    >
      Add to cart
    </button>
  );
}
