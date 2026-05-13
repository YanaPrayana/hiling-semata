import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Navbar berubah saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Wisata", path: "/wisata" },
    { name: "Budaya", path: "/budaya" },
    { name: "Open Trip", path: "/trip" },
    { name: "Tentang Kami", path: "/about" },
    { name: "Kontak", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="../src/assets/images/logo-hs.png"
            alt="Hiling Semata Logo"
            className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-105"
          />

          <div className="leading-tight">
            <span className="block text-white font-bold text-base tracking-wide">
              Hiling <span className="text-amber-400">Semata</span>
            </span>

            <span className="block text-amber-300/70 text-xs tracking-widest uppercase">
              Tour & Travel
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 group ${
                isActive(link.path)
                  ? "text-amber-400"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.name}
              {/* Garis bawah animasi */}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-amber-400 transition-all duration-300 ${
                  isActive(link.path) ? "w-4/5" : "w-0 group-hover:w-4/5"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Tombol kanan */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="text-white/70 text-sm hover:text-white transition-colors"
          >
            Masuk
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-white text-sm font-semibold rounded-full shadow-md hover:shadow-amber-500/30 transition-all duration-200"
          >
            Hubungi Kami
          </Link>
        </div>

        {/* Hamburger Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-gray-900/95 backdrop-blur-md px-6 pt-2 pb-6 space-y-1 border-t border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? "text-amber-400 bg-white/5"
                  : "text-white/80 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 flex gap-3">
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="flex-1 text-center py-2.5 border border-white/30 text-white text-sm rounded-full hover:bg-white/10 transition-colors"
            >
              Masuk
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex-1 text-center py-2.5 bg-amber-500 text-white text-sm font-semibold rounded-full hover:bg-amber-400 transition-colors"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
