import { Suspense } from 'react';
import CategoryProducts from './CategoryProducts'
import ProductsLoading from '@/components/Loading'

export type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

export async function getCategoryProducts(slug: string): Promise<Product[]> {
  const res = await fetch(
    `https://dummyjson.com/products/category/${slug}`
  );

  const data = await res.json();

  return data.products;
}

export default async function CategoryProductsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const products = await getCategoryProducts(slug);

  return (
    <>
      <h1 className="text-3xl font-heading mb-6 capitalize">
        {slug.replace("-", " ")}
      </h1>

      {products.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <Suspense fallback={<ProductsLoading />}>
          <CategoryProducts slug={slug} />
        </Suspense>
      )}
    </>
  );
}
