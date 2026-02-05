import { NavLink } from "react-router";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [open, setOpen] = useState(false);

  const { t, i18n } = useTranslation()

  const changeLanguage = () => {
    const lang = localStorage.getItem('lang') == 'en' ? 'ar' : 'en'
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)

    document.documentElement.dir = (lang == 'en') ? 'ltr' : 'rtl'
  }

  const routes = [
    { path: '/', name: t('Home') },
    { path: '/favorites', name: t('Favorites') },
    { path: '/signin', name: t('Register') },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-500">{t('Title')}</h1>
        <button
          className="px-4 py-2 rounded-full bg-white text-black hover:bg-gray-400 transition text-sm font-medium"
          onClick={changeLanguage}>lang</button>
        {/* Desktop links */}
        <div className="hidden md:flex gap-6">
          {routes.map((route) =>
            <NavLink to={route.path} className={({ isActive }) =>
              isActive ? "text-red-500 font-semibold" : "hover:text-red-400"
            } key={route.name}>{route.name}</NavLink>
          )}

          {/* <NavLink to="/" className={({ isActive }) =>
            isActive ? "text-red-500 font-semibold" : "hover:text-red-400"
          }>
            Home
          </NavLink>

          <NavLink to="/favorites" className={({ isActive }) =>
            isActive ? "text-red-500 font-semibold" : "hover:text-red-400"
          }>
            Favorites
          </NavLink>

          <NavLink to="/signin" className={({ isActive }) =>
            isActive ? "text-red-500 font-semibold" : "hover:text-red-400"
          }>
            Sign in
          </NavLink> */}
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-2">
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/favorites" onClick={() => setOpen(false)}>Favorites</NavLink>
          <NavLink to="/signin" onClick={() => setOpen(false)}>Sign in</NavLink>
        </div>
      )}
    </nav>
  );
}
