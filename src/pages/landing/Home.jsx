import { Link } from 'react-router-dom';
import bgHome from '../../assets/images/assetsbg-home-jogja.png';

function Home() {
  // FUNGSI SCROLL MULUS
  // Menangani perpindahan posisi layar ke elemen ID tertentu saat tombol diklik
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // DATA PREVIEW (Wisata tanpa gambar sesuai permintaan)
  const previewWisata = [
    { judul: 'Pantai Timang', desc: 'Menunggu pembaruan konten dari tim wisata.', harga: 'Segera Hadir' },
    { judul: 'Gunung Merapi', desc: 'Menunggu pembaruan konten dari tim wisata.', harga: 'Segera Hadir' },
    { judul: 'Hutan Pinus', desc: 'Menunggu pembaruan konten dari tim wisata.', harga: 'Segera Hadir' },
  ];

  const previewBudaya = [
    { judul: 'Kraton Yogyakarta', desc: 'Telusuri sejarah dan nilai-nilai luhur di pusat kerajaan Jawa.', harga: 'Rp 20.000', img: 'https://images.unsplash.com/photo-1578305691153-27e1fba73499?q=80&w=600' },
    { judul: 'Wayang Kulit', desc: 'Nikmati pertunjukan epik mahakarya warisan budaya dunia.', harga: 'Gratis - Donasi', img: 'https://images.unsplash.com/photo-1615887023516-9fcafaa9250b?q=80&w=600' },
  ];

  const previewTrip = [
    { judul: 'Sunrise Borobudur', desc: 'Saksikan matahari terbit dari kemegahan candi.', harga: 'Rp 450.000', img: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?q=80&w=600' },
  ];

  return (
    <div className="bg-gray-50">
      {/* ================= HERO SECTION ================= */}
      <div
        className="min-h-screen bg-cover bg-center flex items-center relative"
        style={{ backgroundImage: `url(${bgHome})` }}
      >
        <div className="bg-gray-900/60 absolute inset-0 z-0" />
        
        <div className="relative z-10 text-white text-center w-full px-6 flex flex-col items-center mt-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">Rasakan Jiwa</h1>
          <h2 className="text-6xl md:text-8xl font-extrabold text-amber-400 mb-6 drop-shadow-2xl">Budaya Asli</h2>
          <p className="text-xl md:text-2xl mt-4 text-gray-200 mb-10 font-light max-w-2xl">
            Yogyakarta menunggumu dengan sejuta cerita, keindahan alam, dan pesona budaya.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('section-wisata')}
              className="px-8 py-3.5 bg-amber-500 text-gray-900 font-bold rounded-full hover:bg-amber-400 transition-all shadow-lg hover:shadow-amber-500/40"
            >
              Eksplorasi Sekarang
            </button>
            <button 
              onClick={() => scrollToSection('section-trip')}
              className="px-8 py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all"
            >
              Lihat Open Trip
            </button>
          </div>
        </div>
      </div>

      {/* ================= CONTENT PREVIEWS ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        
        {/* --- SECTION WISATA (Tombol Hijau & Tanpa Gambar) --- */}
        <section id="section-wisata" className="scroll-mt-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-gray-200 pb-4">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">Wisata Populer</h3>
              <p className="text-gray-600">Konten dalam tahap pengembangan oleh tim wisata.</p>
            </div>
            {/* Tombol Wisata: Emerald (Hijau) */}
            <Link to="/wisata" className="mt-4 md:mt-0 px-6 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 font-medium transition-colors">
              Lihat Semua Wisata
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previewWisata.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 p-6 flex flex-col justify-center h-64">
                <div className="bg-emerald-50 w-fit px-3 py-1 rounded-full text-emerald-700 text-xs font-bold mb-4">WISATA</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.judul}</h4>
                <p className="text-sm text-gray-500 mb-6">{item.desc}</p>
                <button className="mt-auto py-2 bg-emerald-50 text-emerald-700 font-bold rounded-lg cursor-not-allowed">
                  {item.harga}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION BUDAYA (Tombol Coklat) --- */}
        <section id="section-budaya" className="scroll-mt-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-gray-200 pb-4">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">Budaya & Tradisi</h3>
              <p className="text-gray-600">Selami kekayaan kearifan lokal Yogyakarta.</p>
            </div>
            {/* Tombol Budaya: Coklat (Amber-900) */}
            <Link to="/budaya" className="mt-4 md:mt-0 px-6 py-2 bg-[#5C4033] text-white rounded-lg hover:bg-[#4A3329] font-bold transition-all shadow-md">
              Lihat Semua Budaya
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {previewBudaya.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col md:flex-row border border-gray-100">
                <div className="md:w-1/2 h-56 md:h-auto">
                  <img src={item.img} alt={item.judul} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:w-1/2 flex flex-col justify-center">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{item.judul}</h4>
                  <p className="text-gray-600 mb-6 text-sm">{item.desc}</p>
                  <div className="mt-auto">
                    {/* Tombol Detail Coklat */}
                    <button className="w-full py-2 border-2 border-[#5C4033] text-[#5C4033] font-bold rounded-xl hover:bg-stone-100 transition-colors">
                      Pelajari Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION OPEN TRIP (Tombol Biru) --- */}
        <section id="section-trip" className="scroll-mt-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-gray-200 pb-4">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">Open Trip</h3>
              <p className="text-gray-600">Petualangan seru bersama teman-teman baru.</p>
            </div>
            {/* Tombol Open Trip: Blue */}
            <Link to="/trip" className="mt-4 md:mt-0 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-bold transition-colors shadow-md">
              Lihat Semua Trip
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {previewTrip.map((item, index) => (
              <div key={index} className="bg-blue-600 rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row text-white">
                <div className="md:w-2/3 h-64 md:h-80">
                  <img src={item.img} alt={item.judul} className="w-full h-full object-cover opacity-80" />
                </div>
                <div className="p-8 md:w-1/3 flex flex-col justify-center bg-blue-700">
                  <h4 className="text-3xl font-bold mb-2">{item.judul}</h4>
                  <p className="text-blue-100 mb-8">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-xl">{item.harga}</p>
                    <button className="px-6 py-2 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all">
                      Ikut Trip
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

export default Home;