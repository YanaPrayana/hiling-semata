import { useState } from "react";
import { Link } from "react-router-dom";

const dataArtikel = [
  {
    id: 1,
    judul: "Mengenal Filosofi di Balik Motif Batik Parang",
    kategori: "Kerajinan",
    ringkasan:
      "Motif Parang adalah salah satu motif batik tertua di Yogyakarta. Di balik keindahannya, tersimpan filosofi tentang kekuatan dan keberanian.",
    gambar: "https://placehold.co/600x350/065f46/ffffff?text=Batik+Parang",
    penulis: "Tim Hiling Semata",
    tanggal: "10 Mei 2025",
    estimasiBaca: "5 menit",
  },
  {
    id: 2,
    judul: "Wayang Kulit: Seni Bertutur yang Melampaui Zaman",
    kategori: "Seni Pertunjukan",
    ringkasan:
      "Dari panggung tradisional hingga pentas internasional, wayang kulit terus membuktikan diri sebagai warisan budaya yang relevan di era modern.",
    gambar: "https://placehold.co/600x350/065f46/ffffff?text=Wayang+Kulit",
    penulis: "Tim Hiling Semata",
    tanggal: "3 Mei 2025",
    estimasiBaca: "7 menit",
  },
  {
    id: 3,
    judul: "Keraton Yogyakarta: Pusat Kebudayaan Jawa yang Tetap Hidup",
    kategori: "Warisan Budaya",
    ringkasan:
      "Keraton bukan sekadar bangunan bersejarah, ia adalah jantung kebudayaan Yogyakarta yang terus berdenyut hingga hari ini.",
    gambar:
      "https://placehold.co/600x350/065f46/ffffff?text=Keraton+Yogyakarta",
    penulis: "Tim Hiling Semata",
    tanggal: "25 April 2025",
    estimasiBaca: "6 menit",
  },
  {
    id: 4,
    judul: "Gamelan: Harmoni Bunyi yang Menyatukan Jiwa",
    kategori: "Seni Musik",
    ringkasan:
      "Mendengar gamelan bukan sekadar menikmati musik, tetapi merasakan denyut kehidupan masyarakat Jawa yang penuh keselarasan.",
    gambar: "https://placehold.co/600x350/065f46/ffffff?text=Gamelan",
    penulis: "Tim Hiling Semata",
    tanggal: "18 April 2025",
    estimasiBaca: "4 menit",
  },
  {
    id: 5,
    judul: "Tradisi Sekaten dan Maknanya bagi Warga Yogyakarta",
    kategori: "Tradisi & Upacara",
    ringkasan:
      "Setiap tahun, ribuan warga berkumpul di alun-alun untuk merayakan Sekaten. Apa sesungguhnya makna di balik perayaan ini?",
    gambar: "https://placehold.co/600x350/065f46/ffffff?text=Sekaten",
    penulis: "Tim Hiling Semata",
    tanggal: "10 April 2025",
    estimasiBaca: "5 menit",
  },
  {
    id: 6,
    judul: "Tari Bedhaya: Gerakan Suci dari Keraton",
    kategori: "Seni Tari",
    ringkasan:
      "Sembilan penari, gerakan lembut, dan musik gamelan yang mengalun — Tari Bedhaya bukan sekadar pertunjukan, melainkan sebuah doa.",
    gambar: "https://placehold.co/600x350/065f46/ffffff?text=Tari+Bedhaya",
    penulis: "Tim Hiling Semata",
    tanggal: "1 April 2025",
    estimasiBaca: "6 menit",
  },
];

const kategoriList = [
  "Semua",
  "Kerajinan",
  "Seni Pertunjukan",
  "Warisan Budaya",
  "Seni Musik",
  "Tradisi & Upacara",
  "Seni Tari",
];

function ArtikelBudaya() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");

  const filtered = dataArtikel.filter(
    (a) => kategoriAktif === "Semua" || a.kategori === kategoriAktif,
  );

  const artikelUtama = filtered[0];
  const artikelLainnya = filtered.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-emerald-800 text-white py-14 px-4 text-center">
        <h1 className="text-4xl font-bold mb-3">Artikel Budaya</h1>
        <p className="text-emerald-200 text-lg max-w-xl mx-auto">
          Bacaan menarik seputar kekayaan budaya dan tradisi Daerah Istimewa
          Yogyakarta.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {kategoriList.map((kat) => (
            <button
              key={kat}
              onClick={() => setKategoriAktif(kat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                kategoriAktif === kat
                  ? "bg-emerald-700 text-white"
                  : "bg-white text-gray-600 border border-gray-300 hover:bg-emerald-50"
              }`}
            >
              {kat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 py-16">
            Artikel tidak ditemukan.
          </p>
        ) : (
          <>
            {/* Artikel Utama (featured) */}
            {artikelUtama && (
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8 md:flex">
                <img
                  src={artikelUtama.gambar}
                  alt={artikelUtama.judul}
                  className="w-full md:w-2/5 h-56 md:h-auto object-cover"
                />
                <div className="p-6 flex flex-col justify-center">
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full w-fit mb-3">
                    {artikelUtama.kategori}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    {artikelUtama.judul}
                  </h2>
                  <p className="text-gray-500 text-sm mb-4">
                    {artikelUtama.ringkasan}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <span>✍️ {artikelUtama.penulis}</span>
                    <span>📅 {artikelUtama.tanggal}</span>
                    <span>⏱️ {artikelUtama.estimasiBaca}</span>
                  </div>
                  <Link
                    to={`/budaya/${artikelUtama.id}`}
                    className="inline-block px-5 py-2 bg-emerald-700 text-white text-sm font-medium rounded-lg hover:bg-emerald-800 transition-colors w-fit"
                  >
                    Baca Artikel →
                  </Link>
                </div>
              </div>
            )}

            {/* Grid Artikel Lainnya */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {artikelLainnya.map((artikel) => (
                <div
                  key={artikel.id}
                  className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <img
                    src={artikel.gambar}
                    alt={artikel.judul}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-5">
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                      {artikel.kategori}
                    </span>
                    <h3 className="text-base font-bold text-gray-800 mt-2 mb-2 line-clamp-2">
                      {artikel.judul}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                      {artikel.ringkasan}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                      <span>📅 {artikel.tanggal}</span>
                      <span>⏱️ {artikel.estimasiBaca}</span>
                    </div>
                    <Link
                      to={`/budaya/${artikel.id}`}
                      className="text-emerald-600 text-sm font-medium hover:underline"
                    >
                      Baca Selengkapnya →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Link ke semua budaya */}
        <div className="text-center mt-12">
          <Link
            to="/budaya"
            className="inline-block px-6 py-3 border-2 border-emerald-700 text-emerald-700 font-semibold rounded-xl hover:bg-emerald-700 hover:text-white transition-colors"
          >
            Lihat Semua Budaya →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ArtikelBudaya;
