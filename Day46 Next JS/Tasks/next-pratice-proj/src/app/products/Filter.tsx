"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const TAGS = [
  "all",
  "bathroom",
  "beauty",
  "beds",
  "bedside tables",
  "beverages",
  "cat food",
  "condiments",
  "cooking essentials",
  "dairy",
  "desserts",
  "dog food",
  "eyeshadow",
  "face powder",
  "fragrances",
  "fruits",
  "furniture",
  "lipstick",
  "mascara",
  "meat",
  "nail polish",
  "office chairs",
  "perfumes",
  "pet supplies",
  "seafood",
  "sofas",
  "vegetables",
];

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function handleFilter(tag: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (tag === "all") {
      params.delete("tag");
    } else {
      params.set("tag", tag);
    }

    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="mb-8">
  <div
    className="
      flex gap-4 px-4 py-3
      overflow-x-auto
      whitespace-nowrap
      rounded-xl
      bg-gray-100
      text-sm font-semibold text-gray-600
      shadow-sm
    "
  >
    {TAGS.map((tag) => (
      <button
        key={tag}
        onClick={() => handleFilter(tag)}
        className="
          flex-shrink-0
          px-4 py-2
          rounded-full
          bg-white
          hover:bg-sky-100
          hover:text-sky-600
          transition
        "
      >
        {tag}
      </button>
    ))}
  </div>
</div>

  );
}
