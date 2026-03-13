import Logo from "./Logo";
import Navigation from "./Navigation";
import AuthButtons from "./AuthButtons";
import CartLink from "./CartLink";

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-6">
          <Navigation />
          <CartLink />
          <AuthButtons />
        </div>
      </div>
    </nav>
  );
}
