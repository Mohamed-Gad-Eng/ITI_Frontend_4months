import CategoryButton from "./CategoryButton";

type RawCategory =
  | string
  | {
      slug: string;
      name: string;
      url: string;
    };

type Category = {
  slug: string;
  name: string;
};

async function getCategories(): Promise<Category[]> {
  const res = await fetch(
    "https://dummyjson.com/products/categories"
  );

  const data: RawCategory[] = await res.json();

  return data.map((item) => {
    if (typeof item === "string") {
      return {
        slug: item,
        name: item.replace(/-/g, " "),
      };
    }

    return {
      slug: item.slug,
      name: item.name,
    };
  });
}

export default async function CategoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();

  return (
    <section className="max-w-7xl mx-auto mt-5">
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <CategoryButton
            key={cat.slug}
            name={cat.name}
            slug={cat.slug}
          />
        ))}
      </div>

      {children}
    </section>
  );
}
