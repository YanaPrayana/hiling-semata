import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu
  const [profileOpen, setProfileOpen] = useState(false); // Dropdown profil
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    const handleScroll = () => setScrolled(window.scrollY > 50);

    // Fungsi untuk menutup dropdown saat klik di luar area profil
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setProfileOpen(false);
    navigate("/");
  };

  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Wisata", path: "/wisata" },
    { name: "Budaya", path: "/budaya" },
    { name: "Open Trip", path: "/trip" },
    { name: "Tentang Kami", path: "/about" },
    { name: "Kontak", path: "/contact" },
  ];

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
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="../src/assets/images/logo-hs.png"
            alt="Logo"
            className="w-14 h-14 object-contain"
          />
          <div className="leading-tight">
            <span className="block text-white font-bold text-base">
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
              className="px-4 py-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* User Profile / Login (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-1.5 pr-4 rounded-full transition-all border border-white/10"
              >
                <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="text-white text-sm font-medium">
                  {user.name}
                </span>
                <svg
                  className={`w-4 h-4 text-white transition-transform ${profileOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu (Rak) */}
              <div
                className={`absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-200 origin-top-right ${profileOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
              >
                <div className="bg-emerald-900 px-4 py-3">
                  <p className="text-xs text-emerald-200">Selamat datang,</p>
                  <p className="text-sm font-bold text-white truncate">
                    {user.name}
                  </p>
                </div>
                <div className="p-2">
                  <Link
                    to="/dashboard"
                    onClick={() => setProfileOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Profil Saya
                  </Link>
                  <Link
                    to="/dashboard/riwayat"
                    onClick={() => setProfileOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Riwayat Booking
                  </Link>
                  <hr className="my-1 border-gray-100" />
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors text-left"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Keluar
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-6 py-2 bg-amber-500 hover:bg-amber-400 text-white text-sm font-semibold rounded-full shadow-md transition-all"
            >
              Masuk
            </Link>
          )}
        </div>

        {/* Hamburger Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white mt-1.5 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white mt-1.5 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {/* ... (bagian mobile menu bisa Anda sesuaikan mirip dengan dropdown desktop) ... */}
    </nav>
  );
}

export default Navbar;
