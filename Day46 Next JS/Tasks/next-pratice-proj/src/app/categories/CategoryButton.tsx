"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  name: string;
  slug: string;
};

export default function CategoryButton({ name, slug }: Props) {
  const pathname = usePathname();
  const href = `/categories/${slug}`;
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-full border text-sm font-medium transition
        ${
          isActive
            ? "bg-blue-600 text-white border-blue-600"
            : "bg-white text-gray-700 hover:bg-blue-50"
        }`}
    >
      {name}
    </Link>
  );
}
