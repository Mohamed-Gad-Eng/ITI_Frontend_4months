import { getCategoryProducts, type Product } from './page';


export default async function CategoryProducts({ slug }: { slug: string }) {
  const products = await getCategoryProducts(slug);

  if (products.length === 0) {
    return (
      <p className="text-gray-500">No products found.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product: Product) => (
        <div
          key={product.id}
          className="bg-white border rounded-lg p-4 hover:shadow-lg transition"
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-40 mx-auto object-contain mb-4"
          />
          <h3 className="font-semibold line-clamp-2">
            {product.title}
          </h3>
          <p className="text-blue-600 font-bold mt-2">
            ${product.price}
          </p>
        </div>
      ))}
    </div>
  );
}
