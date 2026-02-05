export default function Navbar() {
  return (
    <nav className="bg-[#3b5d50] text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <h1 className="text-2xl font-bold">
          Furni<span className="text-orange-400">.</span>
        </h1>

        <ul className="flex items-center gap-8 text-sm font-medium">
          <li className="border-b-2 border-orange-400 pb-1 cursor-pointer">
            Home
          </li>
          <li className="text-white/70 hover:text-white cursor-pointer">
            Shop
          </li>
          <li className="text-white/70 hover:text-white cursor-pointer">
            About us
          </li>
          <li className="text-white/70 hover:text-white cursor-pointer">
            Services
          </li>
          <li className="text-white/70 hover:text-white cursor-pointer">
            Blog
          </li>
          <li className="text-white/70 hover:text-white cursor-pointer">
            Contact us
          </li>
        </ul>
      </div>
    </nav>
  );
}
