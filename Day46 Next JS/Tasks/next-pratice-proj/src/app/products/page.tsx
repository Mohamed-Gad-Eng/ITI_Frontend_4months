import ProductList from "./ProductList";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string; sort?: string }>;
}) {
  const { tag, sort } = await searchParams;
  const filteredTag = tag ?? "all";
  const sortBy = sort ?? "default";

  return (
    <section className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-heading">
        Products
      </h1>

      <ProductList filteredTag={filteredTag} sortBy={sortBy} />
    </section>
  );
}
