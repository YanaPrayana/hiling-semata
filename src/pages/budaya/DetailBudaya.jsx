import { useParams, Link } from "react-router-dom";

// Data sementara (nanti diganti API)
const dataBudaya = [
  {
    id: 1,
    nama: "Wayang Kulit",
    kategori: "Seni Pertunjukan",
    deskripsi:
      "Seni pertunjukan tradisional menggunakan boneka kulit yang dimainkan oleh dalang dengan iringan gamelan.",
    deskripsiPanjang: `Wayang Kulit adalah seni pertunjukan tradisional Jawa yang menggunakan boneka yang terbuat dari kulit kerbau. Pertunjukan ini dimainkan oleh seorang dalang yang juga menjadi narator dan pengisi suara semua tokoh.

Pertunjukan wayang kulit biasanya berlangsung semalam suntuk dan mengisahkan cerita dari kitab Mahabharata atau Ramayana. Dalang memainkan wayang di balik layar putih yang diterangi lampu, sehingga penonton melihat bayangan boneka tersebut.

Gamelan mengiringi seluruh pertunjukan, menciptakan atmosfer yang magis dan penuh penghayatan. Wayang kulit telah diakui oleh UNESCO sebagai Warisan Budaya Takbenda Dunia sejak tahun 2003.`,
    gambar: "../src/assets/images/wayangkulit.png",
    lokasi: "Seluruh Yogyakarta",
    waktu: "Malam hari, biasanya acara khusus",
    tiket: "Gratis - Rp 50.000 (tergantung acara)",
    fakta: [
      "Diakui UNESCO tahun 2003",
      "Pertunjukan bisa berlangsung 8 jam",
      "Dalang bisa memainkan ratusan karakter",
    ],
  },
  {
    id: 2,
    nama: "Batik Yogyakarta",
    kategori: "Kerajinan",
    deskripsi:
      "Batik khas Yogyakarta dengan motif yang kaya makna filosofis dan nilai budaya yang tinggi.",
    deskripsiPanjang: `Batik Yogyakarta adalah salah satu warisan budaya Indonesia yang paling terkenal di dunia. Batik ini memiliki ciri khas motif dengan warna dasar putih atau krem dengan corak hitam dan biru tua.

Proses pembuatan batik tulis Yogyakarta dilakukan secara manual menggunakan canting, yaitu alat kecil dari tembaga yang digunakan untuk menggoreskan lilin panas pada kain. Proses ini membutuhkan ketelitian dan kesabaran tinggi.

Motif-motif batik Yogyakarta seperti Parang, Kawung, dan Sido Mukti memiliki makna filosofis yang dalam dan biasanya berkaitan dengan kehidupan, keselarasan, dan kemakmuran.`,
    gambar:
      "../src/assets/images/batikyogyakarta.png",
    lokasi: "Kotagede, Yogyakarta",
    waktu: "Setiap hari",
    tiket: "Gratis (kunjungan workshop mulai Rp 25.000)",
    fakta: [
      "Diakui UNESCO tahun 2009",
      "Ada ratusan motif berbeda",
      "Motif tertentu hanya boleh dipakai bangsawan",
    ],
  },
];

function DetailBudaya() {
  const { id } = useParams();
  const budaya = dataBudaya.find((item) => item.id === parseInt(id));

  if (!budaya) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Budaya tidak ditemukan
        </h2>
        <Link to="/budaya" className="text-emerald-600 hover:underline">
          ← Kembali ke Daftar Budaya
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Gambar Header */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={budaya.gambar}
          alt={budaya.nama}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src =
              "https://placehold.co/800x400/065f46/ffffff?text=" + budaya.nama;
          }}
        />
        <div className="absolute inset-0 bg-black/40 flex items-end p-6">
          <div>
            <span className="text-xs font-semibold text-amber-300 bg-emerald-900/80 px-3 py-1 rounded-full">
              {budaya.kategori}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">
              {budaya.nama}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-emerald-600">
            Beranda
          </Link>
          <span className="mx-2">/</span>
          <Link to="/budaya" className="hover:text-emerald-600">
            Budaya
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{budaya.nama}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Konten Utama */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Tentang {budaya.nama}
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-3">
              {budaya.deskripsiPanjang.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Fakta Menarik */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Fakta Menarik
              </h3>
              <ul className="space-y-2">
                {budaya.fakta.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-sm p-5">
              <h3 className="font-bold text-gray-800 mb-4">Informasi</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-400">Lokasi</p>
                  <p className="text-gray-700 font-medium">
                    📍 {budaya.lokasi}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">Waktu</p>
                  <p className="text-gray-700 font-medium">🕐 {budaya.waktu}</p>
                </div>
                <div>
                  <p className="text-gray-400">Tiket Masuk</p>
                  <p className="text-gray-700 font-medium">🎫 {budaya.tiket}</p>
                </div>
              </div>
            </div>

            <Link
              to="/trip"
              className="block w-full text-center py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-colors"
            >
              Ikut Open Trip →
            </Link>

            <Link
              to="/budaya"
              className="block w-full text-center py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-medium rounded-xl transition-colors"
            >
              ← Kembali ke Daftar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailBudaya;
