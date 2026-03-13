"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  name: string;
  href: string;
};

export default function NavLink({ name, href }: NavLinkProps) {
  const pathname = usePathname();

  const isActive =
    pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={`font-medium transition ${
        isActive
          ? "text-blue-600 border-b-2 border-blue-600"
          : "text-gray-700 hover:text-blue-600"
      }`}
    >
      {name}
    </Link>
  );
}
