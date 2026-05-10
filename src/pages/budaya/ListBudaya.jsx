import { useState } from "react";
import { Link } from "react-router-dom";

// Data sementara (nanti diganti dengan data dari API/database)
const dataBudaya = [
  {
    id: 1,
    nama: "Wayang Kulit",
    kategori: "Seni Pertunjukan",
    deskripsi:
      "Seni pertunjukan tradisional menggunakan boneka kulit yang dimainkan oleh dalang dengan iringan gamelan.",
    gambar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Wayang_Kulit.jpg/640px-Wayang_Kulit.jpg",
    lokasi: "Seluruh Yogyakarta",
  },
  {
    id: 2,
    nama: "Batik Yogyakarta",
    kategori: "Kerajinan",
    deskripsi:
      "Batik khas Yogyakarta dengan motif yang kaya makna filosofis dan nilai budaya yang tinggi.",
    gambar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Batik_Yogya.jpg/640px-Batik_Yogya.jpg",
    lokasi: "Kotagede, Yogyakarta",
  },
  {
    id: 3,
    nama: "Tari Bedhaya",
    kategori: "Seni Tari",
    deskripsi:
      "Tarian sakral keraton Yogyakarta yang dibawakan oleh sembilan penari wanita dengan gerakan yang lembut dan penuh makna.",
    gambar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Bedhaya_Ketawang.jpg/640px-Bedhaya_Ketawang.jpg",
    lokasi: "Keraton Yogyakarta",
  },
  {
    id: 4,
    nama: "Gamelan",
    kategori: "Seni Musik",
    deskripsi:
      "Orkes tradisional Jawa yang terdiri dari berbagai instrumen perkusi yang menghasilkan musik harmonis.",
    gambar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Gamelan.jpg/640px-Gamelan.jpg",
    lokasi: "Keraton & Sanggar Seni",
  },
  {
    id: 5,
    nama: "Sekaten",
    kategori: "Tradisi & Upacara",
    deskripsi:
      "Perayaan tradisional menyambut Maulid Nabi Muhammad SAW yang diadakan di alun-alun Keraton Yogyakarta.",
    gambar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Sekaten.jpg/640px-Sekaten.jpg",
    lokasi: "Alun-alun Utara, Yogyakarta",
  },
  {
    id: 6,
    nama: "Keraton Yogyakarta",
    kategori: "Warisan Budaya",
    deskripsi:
      "Istana resmi Kesultanan Ngayogyakarta Hadiningrat yang menjadi pusat budaya dan seni Jawa.",
    gambar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Keraton_Yogyakarta.jpg/640px-Keraton_Yogyakarta.jpg",
    lokasi: "Jl. Rotowijayan, Yogyakarta",
  },
];

const kategoriList = [
  "Semua",
  "Seni Pertunjukan",
  "Kerajinan",
  "Seni Tari",
  "Seni Musik",
  "Tradisi & Upacara",
  "Warisan Budaya",
];

function ListBudaya() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [search, setSearch] = useState("");

  const filtered = dataBudaya.filter((item) => {
    const cocokKategori =
      kategoriAktif === "Semua" || item.kategori === kategoriAktif;
    const cocokSearch = item.nama.toLowerCase().includes(search.toLowerCase());
    return cocokKategori && cocokSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-emerald-800 text-white py-14 px-4 text-center">
        <h1 className="text-4xl font-bold mb-3">Budaya Yogyakarta</h1>
        <p className="text-emerald-200 text-lg max-w-xl mx-auto">
          Temukan kekayaan budaya dan tradisi Daerah Istimewa Yogyakarta yang
          telah diwariskan turun-temurun.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Cari budaya..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Filter Kategori */}
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

        {/* Grid Kartu */}
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 py-16">
            Budaya tidak ditemukan.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <img
                  src={item.gambar}
                  alt={item.nama}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/400x200/065f46/ffffff?text=" +
                      item.nama;
                  }}
                />
                <div className="p-5">
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                    {item.kategori}
                  </span>
                  <h2 className="text-lg font-bold text-gray-800 mt-2 mb-1">
                    {item.nama}
                  </h2>
                  <p className="text-gray-500 text-sm mb-1">📍 {item.lokasi}</p>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {item.deskripsi}
                  </p>
                  <Link
                    to={`/budaya/${item.id}`}
                    className="inline-block px-4 py-2 bg-emerald-700 text-white text-sm font-medium rounded-lg hover:bg-emerald-800 transition-colors"
                  >
                    Lihat Detail →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ListBudaya;
