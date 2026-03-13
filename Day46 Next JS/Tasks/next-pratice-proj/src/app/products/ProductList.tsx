import Filter from "./Filter";
import AddToCartButton from "@/components/cart/AddToCartButton";
import DescriptionToggle from "@/components/DescriptionToggle";
import Sort from "./Sort";
import Link from "next/link";
import { addToWishlistAction } from "@/wishlist/actions";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  tags: string[];
};

interface Props {
  filteredTag: string;
  sortBy: string;
}

async function getProducts(): Promise<Product[]> {
  const res = await fetch(
    "https://dummyjson.com/products?limit=100"
  );

  const data = await res.json();
  return data.products ?? [];
}

export default async function ProductList({
  filteredTag,
  sortBy,
}: Props) {
  const products = await getProducts();

  let filteredProducts: Product[] = [];

  if (filteredTag === "all") {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter((product) =>
      product.tags?.includes(filteredTag)
    );
  }

  if (sortBy === "price-asc") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "title-asc") {
    filteredProducts = [...filteredProducts].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  return (
    <div>
      <div className="flex flex-col gap-4">
        <Filter />
        <div className="flex justify-end">
          <Sort />
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg p-4"
          >
            <Link href={`/products/${product.id}`} className="block">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-40 mx-auto object-contain mb-4"
              />
              <h3 className="font-semibold line-clamp-2 mb-1">
                {product.title}
              </h3>
            </Link>
            <p className="text-blue-600 font-bold">
              ${product.price}
            </p>

            <DescriptionToggle text={product.description} />


            <div className="flex gap-2 mt-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <AddToCartButton
              product={{
                id: product.id,
                title: product.title,
                price: product.price,
                thumbnail: product.thumbnail,
              }}
            />

            <form action={addToWishlistAction} className="mt-2">
              <input type="hidden" name="productId" value={product.id} />
              <button
                type="submit"
                className="w-full rounded-md border border-gray-300 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                Add to wishlist
              </button>
            </form>

          </div>
        ))}
      </div>
    </div>
  );
}
