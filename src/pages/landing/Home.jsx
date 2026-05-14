import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// IMPORT DATA OPEN TRIP ASLI
import { dataOpenTrip } from '../../services/data/OpenTrip';

// IMPORT GAMBAR SESUAI FOLDERMU
import bgHome from '../../assets/images/assetsbg-home-jogja.png';
import imgKeraton from '../../assets/images/keratonSejarah-budaya.png';
import imgWayang from '../../assets/images/seniPertunjukan-budaya.png';

// IMPORT FILE CSS 
import '../../style/home-style/home.css'; 

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const previewWisata = [
    { judul: 'Pantai Timang', desc: 'Konten sedang disiapkan oleh tim wisata.' },
    { judul: 'Gunung Merapi', desc: 'Konten sedang disiapkan oleh tim wisata.' },
    { judul: 'Hutan Pinus', desc: 'Konten sedang disiapkan oleh tim wisata.' },
  ];

  const previewBudaya = [
    { 
      judul: 'Kraton Yogyakarta', 
      desc: 'Pusat peradaban dan identitas budaya Jawa yang agung.', 
      img: imgKeraton 
    },
    { 
      judul: 'Wayang Kulit', 
      desc: 'Mahakarya seni pertunjukan yang sarat akan filosofi hidup.', 
      img: imgWayang 
    },
  ];

  // AMBIL 2 DATA PERTAMA DARI FILE ASLI
  const previewTrip = dataOpenTrip.slice(0, 2);

  return (
    <div className="bg-[#fcfaf7]">
      
      {/* ================= HERO SECTION ================= */}
      <div
        className="min-h-screen bg-cover bg-center bg-fixed flex items-center relative"
        style={{ backgroundImage: `url(${bgHome})` }}
      >
        <div className="bg-gray-900/60 absolute inset-0 z-0" />
        
        <div className="relative z-10 text-white text-center w-full px-6 flex flex-col items-center mt-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">Rasakan Jiwa</h1>
          <h2 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600 mb-6 drop-shadow-2xl">
            Budaya Asli
          </h2>
          <p className="text-xl md:text-2xl mt-4 text-gray-200 mb-10 font-light max-w-2xl leading-relaxed">
            Yogyakarta menunggumu dengan sejuta cerita, keindahan alam, dan pesona budaya.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection('section-wisata')} className="btn-hero-primary">
              Eksplorasi Sekarang
            </button>
            <button onClick={() => scrollToSection('section-trip')} className="btn-hero-secondary">
              Lihat Open Trip
            </button>
          </div>
        </div>
      </div>

      {/* ================= CONTENT PREVIEWS ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-40">
        
        {/* SECTION WISATA */}
        <motion.section 
          id="section-wisata" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 serif">Wisata Populer</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previewWisata.map((item, index) => (
              <div key={index} className="card-wisata group">
                <h4 className="text-xl font-bold text-gray-900 mb-2 serif">{item.judul}</h4>
                <p className="text-sm text-gray-500 mb-6">{item.desc}</p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center text-emerald-700 font-bold text-xs">
                  Coming Soon <span>✦</span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* SECTION BUDAYA */}
        <motion.section 
          id="section-budaya" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
            <div>
              <h3 className="text-5xl font-bold text-gray-900 serif">Warisan & <span className="text-[#c9a452]">Identitas</span></h3>
            </div>
            <Link to="/budaya" className="px-8 py-3 bg-[#b8963e] text-white font-bold rounded-lg hover:bg-[#d4a843] transition-all">
              Lihat Semua Budaya
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {previewBudaya.map((item, index) => (
              <div key={index} className="card-warisan-home group">
                <div className="overflow-hidden relative">
                  <img src={item.img} alt={item.judul} className="group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-[#2d1f0a]/80 text-[#c9a452] px-4 py-1 text-[10px] tracking-widest uppercase">
                      Warisan Budaya</div>
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 serif">{item.judul}</h4>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{item.desc}</p>
                  <Link to="/budaya" className="text-[#b8963e] font-bold text-xs uppercase tracking-widest hover:underline">
                    Pelajari Sejarah →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* SECTION OPEN TRIP (FIXED NAVIGATION) */}
        <motion.section 
          id="section-trip" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
            <div>
              <h3 className="text-5xl font-bold text-gray-900 serif">Open Trip <span className="text-[#c9a452]">Seru</span></h3>
              <p className="text-gray-600 mt-2">Pilih paket petualangan terbaikmu di Yogyakarta.</p>
            </div>
            <Link to="/trip" className="mt-6 md:mt-0 px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-md">
              Jelajahi Trip Lainnya →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {previewTrip.map((item, index) => (
              <div key={index} className="bg-[#1a1207] rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col group cursor-pointer border border-[#2d1f0a]">
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={item.gambar} 
                    alt={item.nama} 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-1 text-[10px] tracking-widest uppercase font-bold rounded-full">
                    HOT DEALS
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow text-left">
                  <h4 className="text-2xl font-bold mb-4 serif text-white line-clamp-1">{item.nama}</h4>
                  
                  <div className="text-gray-400 mb-6 text-sm flex gap-4">
                    <span>🕒 {item.durasi}</span>
                    <span>📍 {item.lokasi}</span>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <small className="text-gray-500 text-xs block mb-1">Mulai dari</small>
                      <div className="text-xl font-bold text-[#c9a452]">Rp {item.harga.toLocaleString('id-ID')}</div>
                    </div>
                    {/* PERBAIKAN DI SINI: Navigasi langsung ke ID Detail Paket */}
                    <Link to={`/trip/${item.id}`} className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg text-xs hover:bg-blue-700 transition-all">
                      Ikut Trip
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}

export default Home;