import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-emerald-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-1">
              Hiling <span className="text-amber-400">Semata</span>
            </h2>
            <p className="text-emerald-200 text-sm leading-relaxed mt-2">
              Jelajahi keindahan wisata dan kekayaan budaya Daerah Istimewa Yogyakarta bersama kami.
            </p>
          </div>

          {/* Wisata & Budaya */}
          <div>
            <h3 className="font-semibold text-amber-400 mb-3">Wisata</h3>
            <ul className="space-y-2 text-sm text-emerald-200">
              <li><Link to="/wisata" className="hover:text-white transition-colors">Semua Wisata</Link></li>
              <li><Link to="/wisata/kategori/pantai" className="hover:text-white transition-colors">Pantai</Link></li>
              <li><Link to="/wisata/kategori/gunung" className="hover:text-white transition-colors">Gunung</Link></li>
              <li><Link to="/wisata/kategori/kota" className="hover:text-white transition-colors">Wisata Kota</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-amber-400 mb-3">Budaya</h3>
            <ul className="space-y-2 text-sm text-emerald-200">
              <li><Link to="/budaya" className="hover:text-white transition-colors">Semua Budaya</Link></li>
              <li><Link to="/budaya/artikel" className="hover:text-white transition-colors">Artikel Budaya</Link></li>
              <li><Link to="/trip" className="hover:text-white transition-colors">Open Trip</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold text-amber-400 mb-3">Informasi</h3>
            <ul className="space-y-2 text-sm text-emerald-200">
              <li><Link to="/about" className="hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Kontak</Link></li>
              <li><Link to="/login" className="hover:text-white transition-colors">Masuk</Link></li>
              <li><Link to="/register" className="hover:text-white transition-colors">Daftar</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-700 pt-6 text-center text-sm text-emerald-400">
          <p>© 2025 Hiling Semata. Dibuat dengan ❤️ untuk Yogyakarta.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;