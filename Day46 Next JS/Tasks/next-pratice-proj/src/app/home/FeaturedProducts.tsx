"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import AddToCartButton from "@/components/cart/AddToCartButton";

export type FeaturedProduct = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

async function fetchFeatured(): Promise<FeaturedProduct[]> {
  const res = await fetch("https://dummyjson.com/products?limit=9");
  if (!res.ok) throw new Error("Failed to load featured products");
  const data = await res.json();
  return data.products ?? [];
}

type Props = {
  initialProducts: FeaturedProduct[];
};

export default function FeaturedProducts({ initialProducts }: Props) {
  const { data } = useQuery({
    queryKey: ["featured-products"],
    queryFn: fetchFeatured,
    initialData: initialProducts,
  });

  const products = data ?? [];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {products.map((product) => (
        <div key={product.id} className="bg-white border rounded-lg p-4">
          <Link href={`/products/${product.id}`} className="block">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-40 mx-auto object-contain mb-4"
            />
            <h3 className="font-semibold line-clamp-2 mb-1">{product.title}</h3>
          </Link>
          <p className="text-blue-600 font-bold">${product.price}</p>
          <AddToCartButton
            product={{
              id: product.id,
              title: product.title,
              price: product.price,
              thumbnail: product.thumbnail,
            }}
          />
        </div>
      ))}
    </div>
  );
}
