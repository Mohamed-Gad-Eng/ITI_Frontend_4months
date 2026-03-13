"use client";

import AddToCart from "@/components/cart/AddToCart";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  brand?: string;
  category?: string;
  thumbnail: string;
  images?: string[];
};

async function fetchProduct(id: string): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  return res.json();
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const {
    data: product,
    isLoading,
    error,
  } = useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto py-16 text-white">Loading product...</div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-5xl mx-auto py-16 text-red-400">
        Failed to load product.
      </div>
    );
  }

  const mainImage = product.images?.[0] ?? product.thumbnail;

  return (
    <section className="max-w-5xl mx-auto py-12 px-4 text-slate-900">
      <div className="grid md:grid-cols-2 gap-10 bg-white rounded-2xl p-8 shadow-lg">
        <div className="flex items-center justify-center bg-slate-50 rounded-xl p-6">
          <Image
            src={mainImage}
            alt={product.title}
            width={400}
            height={400}
            className="object-contain max-h-80"
          />
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-slate-900">
              {product.title}
            </h1>
            {product.brand && (
              <p className="text-sm text-slate-500">by {product.brand}</p>
            )}
            <p className="text-3xl font-bold text-blue-600">${product.price}</p>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            {product.description}
          </p>

          <p className="text-xs text-slate-500">
            {product.stock > 0 ? `In stock (${product.stock} available)` : "Out of stock"}
          </p>

          <AddToCart
            product={{
              id: product.id,
              title: product.title,
              price: product.price,
              thumbnail: product.thumbnail,
              stock: product.stock,
            }}
          />
        </div>
      </div>
    </section>
  );
}
