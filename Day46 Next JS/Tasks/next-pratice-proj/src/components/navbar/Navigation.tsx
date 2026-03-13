import NavLink from "./NavLink";

const links = [
  { name: "Home", href: "/home" },
  { name: "Products", href: "/products" },
  { name: "Categories", href: "/categories" },
];

export default function NavLinks() {
  return (
    <div className="flex gap-8">
      {links.map((link) => (
        <NavLink
          key={link.name}
          name={link.name}
          href={link.href}
        />
      ))}
    </div>
  );
}
