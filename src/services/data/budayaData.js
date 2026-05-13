// src/services/data/budayaData.js
// ─────────────────────────────────────────────────────────────
// Semua data budaya terpusat di sini.
// Import di halaman dengan:
//   import { dataBudaya, dataOpenTrip, dataArtikel, kategoriList, sidebarKat } from "../../services/data/budayaData";
// ─────────────────────────────────────────────────────────────

export const dataBudaya = [
  {
    id: 1,
    nama: "Wayang Kulit",
    kategori: "Wayang",
    tagline: "Lebih dari Sekadar Boneka Kulit",
    deskripsi:
      "Wayang adalah cermin kehidupan. Setiap tokoh, setiap gerakan, dan setiap dialog mengajarkan tentang kebijaksanaan, keberanian, dan nilai-nilai luhur Jawa.",
    gambar: "../src/assets/images/wayangkulit.png",
    featured: true,
    lokasi: "Seluruh Yogyakarta",
    waktu: "Malam hari, acara khusus",
    tiket: "Gratis – Rp 50.000",
    paragraf: [
      "Wayang Kulit adalah seni pertunjukan tradisional Jawa yang menggunakan boneka dari kulit kerbau. Pertunjukan ini dimainkan oleh seorang dalang yang merangkap sebagai narator dan pengisi suara seluruh tokoh.",
      "Kisah yang dibawakan biasanya bersumber dari epos Mahabharata atau Ramayana — disampaikan melalui bayangan boneka di balik layar putih yang diterangi lampu blencong. Gamelan mengalun sepanjang malam, menciptakan atmosfer sakral dan penuh penghayatan.",
      "Wayang Kulit telah diakui UNESCO sebagai Warisan Budaya Takbenda Dunia sejak 2003, sebuah pengakuan atas kekayaan nilai filosofis, estetika, dan spiritual yang dikandungnya.",
    ],
    fakta: [
      "Diakui UNESCO sebagai Warisan Dunia sejak tahun 2003",
      "Pertunjukan bisa berlangsung 6–9 jam semalam suntuk",
      "Dalang tunggal bisa memainkan ratusan karakter berbeda",
      "Setiap tokoh wayang memiliki makna dan filosofi tersendiri",
    ],
    relasi: [2, 3, 4],
  },
  {
    id: 2,
    nama: "Batik Jogja",
    kategori: "Batik",
    tagline: "Motif yang Penuh Makna",
    deskripsi:
      "Setiap goresan canting menyimpan filosofi mendalam tentang kehidupan.",
    gambar: "../src/assets/images/batikyogyakarta.png",
    featured: false,
    lokasi: "Kotagede, Yogyakarta",
    waktu: "Setiap hari",
    tiket: "Gratis (workshop mulai Rp 25.000)",
    paragraf: [
      "Batik Yogyakarta dikenal dengan warna dasarnya yang didominasi putih, biru tua, dan hitam — berbeda dari batik Solo yang lebih cokelat keemasan. Perbedaan ini bukan sekadar estetika, melainkan cerminan filosofi yang berbeda antara dua kerajaan besar Jawa.",
      "Motif-motif seperti Parang, Kawung, dan Sido Mukti bukan sekadar hiasan — setiap garis, titik, dan pola mengandung doa, harapan, dan pandangan hidup yang diwariskan dari generasi ke generasi.",
      "Proses membuat batik tulis membutuhkan kesabaran luar biasa: malam (lilin) dituangkan dengan canting di atas kain, kemudian diwarnai, dilorot, dan diulang berkali-kali hingga motif sempurna terbentuk.",
    ],
    fakta: [
      "Diakui UNESCO sebagai Warisan Dunia sejak tahun 2009",
      "Ada ratusan motif batik dengan makna yang berbeda-beda",
      "Motif tertentu dahulu hanya boleh dipakai kalangan keraton",
      "Proses batik tulis bisa memakan waktu berbulan-bulan",
    ],
    relasi: [1, 3, 4],
  },
  {
    id: 3,
    nama: "Gudeg",
    kategori: "Kuliner",
    tagline: "Rasa Manis yang Punya Cerita",
    deskripsi: "Kuliner khas Yogyakarta yang menjadi simbol keramahan Jawa.",
    gambar: "../src/assets/images/gudeg-budaya.png",
    featured: false,
    lokasi: "Seluruh Yogyakarta",
    waktu: "Pagi hingga malam hari",
    tiket: "Rp 10.000 – Rp 50.000",
    paragraf: [
      "Gudeg adalah masakan khas Yogyakarta yang terbuat dari nangka muda yang dimasak berjam-jam bersama santan, gula aren, dan berbagai rempah. Hasilnya adalah cita rasa manis, gurih, dan lembut yang khas.",
      "Lebih dari sekadar makanan, gudeg adalah identitas. Ketika seseorang menyebut Yogyakarta, gudeg hampir selalu menjadi hal pertama yang terlintas di benak. Ia hadir di warung sederhana pinggir jalan hingga meja makan sultan.",
      "Ada dua jenis gudeg: gudeg kering yang lebih awet dan bisa dibawa sebagai oleh-oleh, serta gudeg basah yang berkuah santan kental dan lebih sering dinikmati di tempat.",
    ],
    fakta: [
      "Dimasak semalam suntuk untuk menghasilkan rasa terbaik",
      "Gudeg kering bisa tahan 2–3 hari tanpa kulkas",
      "Sentra gudeg legendaris ada di Wijilan dan Bu Tjitro",
      "Setiap warung punya resep rahasia yang turun-temurun",
    ],
    relasi: [1, 2, 4],
  },
  {
    id: 4,
    nama: "Keraton Yogyakarta",
    kategori: "Sejarah & Keraton",
    tagline: "Pusat Kebudayaan dan Sejarah Jawa",
    deskripsi:
      "Istana megah yang menjadi pusat kebudayaan Kesultanan Ngayogyakarta.",
    gambar: "../src/assets/images/keraton.png",
    featured: false,
    lokasi: "Jl. Rotowijayan, Yogyakarta",
    waktu: "Senin–Minggu, 08.00–14.00 WIB",
    tiket: "Rp 15.000 (wisatawan lokal)",
    paragraf: [
      "Keraton Ngayogyakarta Hadiningrat berdiri sejak tahun 1755, dibangun oleh Sri Sultan Hamengku Buwono I setelah Perjanjian Giyanti yang membelah Mataram. Sejak hari pertama, keraton dirancang bukan hanya sebagai kediaman raja, tetapi sebagai poros kosmologi Jawa.",
      "Seluruh tata letak keraton — dari Gunung Merapi di utara hingga Laut Selatan di ujung selatan — mencerminkan konsep Sangkan Paraning Dumadi, filosofi Jawa tentang asal-usul dan tujuan kehidupan.",
      "Hingga hari ini, Keraton Yogyakarta tetap didiami oleh Sri Sultan Hamengku Buwono X beserta keluarga. Berbagai tradisi, tarian, dan upacara adat terus dilestarikan sebagai warisan budaya yang hidup.",
    ],
    fakta: [
      "Berdiri sejak 7 Oktober 1756 oleh Sri Sultan HB I",
      "Masih aktif didiami Sultan dan keluarga hingga kini",
      "Memiliki museum koleksi keris, wayang, dan pusaka keraton",
      "Pusat pertunjukan seni budaya rutin setiap minggu",
    ],
    relasi: [1, 2, 3],
  },
];

export const dataOpenTrip = [
  {
    id: 1,
    nama: "Kraton Yogyakarta",
    harga: "Rp 150.000",
    gambar: "../src/assets/images/keraton-budaya.png",
    deskripsi: "Telusuri sejarah dan nilai-nilai luhur di pusat kerajaan Jawa.",
  },
  {
    id: 2,
    nama: "Desa Wisata Kasongan",
    harga: "Rp 120.000",
    gambar: "../src/assets/images/kasongan-budaya.png",
    deskripsi: "Lihat langsung proses kerajinan gerabah khas Jogja.",
  },
  {
    id: 3,
    nama: "Saksikan Wayang Kulit",
    harga: "Rp 200.000",
    gambar: "../src/assets/images/pertunjukan-wayang.png",
    deskripsi: "Nikmati pertunjukan wayang kulit dengan dalang berpengalaman.",
  },
  {
    id: 4,
    nama: "Belajar Membatik",
    harga: "Rp 175.000",
    gambar: "../src/assets/images/membatik-budaya.png",
    deskripsi: "Pengalaman membatik langsung bersama pengrajin lokal.",
  },
];

export const dataArtikel = [
  {
    id: 1,
    judul: "Filosofi di Balik Motif Batik Parang",
    kategori: "Batik",
    penulis: "Tim Hiling Semata",
    tanggal: "10 Mei 2025",
    menit: "5 menit",
    ringkasan:
      "Motif Parang adalah salah satu motif batik tertua di Yogyakarta. Di balik keindahannya, tersimpan filosofi tentang kekuatan dan keberanian yang tak pernah padam.",
    gambar: "../src/assets/images/batikyogyakarta.png",
    featured: true,
  },
  {
    id: 2,
    judul: "Wayang Kulit: Seni Bertutur yang Melampaui Zaman",
    kategori: "Wayang",
    penulis: "Tim Hiling Semata",
    tanggal: "3 Mei 2025",
    menit: "7 menit",
    ringkasan:
      "Dari panggung tradisional hingga pentas internasional, wayang kulit terus membuktikan diri sebagai warisan budaya yang relevan di era modern.",
    gambar: "../src/assets/images/wayangkulit.png",
    featured: false,
  },
  {
    id: 3,
    judul: "Keraton Yogyakarta: Jantung yang Masih Berdenyut",
    kategori: "Sejarah & Keraton",
    penulis: "Tim Hiling Semata",
    tanggal: "25 Apr 2025",
    menit: "6 menit",
    ringkasan:
      "Keraton bukan sekadar bangunan bersejarah. Ia adalah jantung kebudayaan Yogyakarta yang terus berdenyut hingga hari ini.",
    gambar: "../src/assets/images/keraton.png",
    featured: false,
  },
  {
    id: 4,
    judul: "Gudeg: Warisan Rasa yang Tak Lekang Waktu",
    kategori: "Kuliner",
    penulis: "Tim Hiling Semata",
    tanggal: "18 Apr 2025",
    menit: "4 menit",
    ringkasan:
      "Lebih dari sekadar makanan, gudeg adalah cerita panjang tentang identitas dan kebanggaan warga Yogyakarta.",
    gambar: "../src/assets/images/gudeg-budaya.png",
    featured: false,
  },
  {
    id: 5,
    judul: "Makna Sekaten bagi Warga Yogyakarta",
    kategori: "Tradisi & Upacara",
    penulis: "Tim Hiling Semata",
    tanggal: "10 Apr 2025",
    menit: "5 menit",
    ringkasan:
      "Setiap tahun, ribuan warga berkumpul di alun-alun untuk merayakan Sekaten. Apa sesungguhnya makna di balik perayaan yang telah berlangsung berabad-abad ini?",
    gambar: "../src/assets/images/keraton-budaya.png",
    featured: false,
  },
  {
    id: 6,
    judul: "Membatik: Meditasi di Atas Kain",
    kategori: "Batik",
    penulis: "Tim Hiling Semata",
    tanggal: "1 Apr 2025",
    menit: "6 menit",
    ringkasan:
      "Setiap goresan canting adalah sebuah doa. Membatik bukan sekadar kerajinan — ia adalah proses meditasi yang menghubungkan diri dengan leluhur.",
    gambar: "../src/assets/images/membatik-budaya.png",
    featured: false,
  },
];

export const kategoriList = [
  {
    nama: "Semua",
    svg: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z",
  },
  {
    nama: "Tari",
    svg: "M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2zm0 12c-5 0-9 2.5-9 4v2h18v-2c0-1.5-4-4-9-4z",
  },
  {
    nama: "Wayang",
    svg: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z",
  },
  { nama: "Batik", svg: "M12 3L2 12h3v9h6v-6h2v6h6v-9h3z" },
  {
    nama: "Kuliner",
    svg: "M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7H1v-2h15.03v2zm0-4H1v-2h15.03v2z",
  },
  {
    nama: "Sejarah & Keraton",
    svg: "M12 3L2 12h3v9h6v-6h2v6h6v-9h3L12 3zm0 12.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",
  },
  {
    nama: "Tradisi & Upacara",
    svg: "M17 8C8 10 5.9 16.17 3.82 20.49L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20c4-1 6-5 6-5s-4 1-5 3c0 0 3-8 9-10z",
  },
  {
    nama: "Kesenian",
    svg: "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z",
  },
  {
    nama: "Arsitektur",
    svg: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  },
];

export const sidebarKat = [
  { nama: "Tari Tradisional", ikon: "💃" },
  { nama: "Wayang", ikon: "🎭" },
  { nama: "Batik", ikon: "🎨" },
  { nama: "Kuliner", ikon: "🍽️" },
  { nama: "Sejarah & Keraton", ikon: "🏛️" },
  { nama: "Tradisi & Upacara", ikon: "🌸" },
  { nama: "Kesenian", ikon: "🎶" },
  { nama: "Arsitektur", ikon: "🏯" },
];
