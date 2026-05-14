import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// IMPORT CSS DARI FOLDER HOME-STYLE MILIKMU
import '../../style/home-style/contact.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    subjek: '',
    pesan: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Terima kasih ${formData.nama}! Pesan silaturahmi Anda telah kami terima.`);
    setFormData({ nama: '', email: '', subjek: '', pesan: '' });
  };

  return (
    <div className="contact-root">
      {/* Background Dot Pattern */}
      <div className="dot-pattern"></div>

      {/* Glow Effects */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-amber-400/10 blur-[100px] rounded-full z-0"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-600/5 blur-[100px] rounded-full z-0"></div>

      <div className="max-w-7xl mx-auto px-6 pt-32 relative z-10">
        
        {/* HEADER */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="text-[#c9a452] uppercase tracking-[0.3em] text-xs mb-4 font-bold sans">Mari Bersilaturahmi</div>
          <h1 className="text-5xl md:text-6xl font-bold serif text-gray-900 mb-6 leading-tight">
            Punya Pertanyaan Seputar <br /> <span className="text-[#b8963e]">Hiling Semata?</span>
          </h1>
          <p className="text-gray-500 sans leading-relaxed text-lg">
            Jangan ragu untuk menyapa. Kami selalu terbuka untuk membantu Anda merencanakan perjalanan budaya terbaik di Tanah Mataram.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          
          {/* INFO COLUMN */}
          <motion.div 
            className="lg:col-span-2 space-y-6"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="info-card">
              <div className="icon-box">📍</div>
              <div>
                <h4 className="font-bold text-gray-900 serif text-xl mb-1">Pusat Informasi</h4>
                <p className="text-gray-500 sans text-sm leading-relaxed">
                  Jl. Malioboro No. 52, Yogyakarta, DIY 55213
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="info-card">
              <div className="icon-box">💬</div>
              <div>
                <h4 className="font-bold text-gray-900 serif text-xl mb-1">WhatsApp</h4>
                <a href="#" className="text-[#b8963e] font-bold sans text-sm hover:underline">+62 812 3456 7890</a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="info-card">
              <div className="icon-box">✉️</div>
              <div>
                <h4 className="font-bold text-gray-900 serif text-xl mb-1">Email</h4>
                <a href="mailto:halo@hilingsemata.id" className="text-[#b8963e] font-bold sans text-sm hover:underline">halo@hilingsemata.id</a>
              </div>
            </motion.div>
          </motion.div>

          {/* FORM COLUMN */}
          <motion.div 
            className="lg:col-span-3"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-[#b8963e] to-blue-600"></div>
              <h3 className="text-3xl font-bold serif text-gray-900 mb-8">Kirim Pesan</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest sans">Nama Lengkap</label>
                    <input type="text" name="nama" value={formData.nama} onChange={handleChange} placeholder="Mas/Mba..." className="contact-input" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest sans">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="nama@email.com" className="contact-input" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest sans">Subjek / Keperluan</label>
                  <select name="subjek" value={formData.subjek} onChange={handleChange} className="contact-input appearance-none" required>
                    <option value="" disabled>Pilih Keperluan...</option>
                    <option value="Tanya Open Trip">Pertanyaan Open Trip</option>
                    <option value="Custom Trip">Request Custom Trip</option>
                    <option value="Kerjasama">Kerjasama B2B</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest sans">Pesan</label>
                  <textarea name="pesan" value={formData.pesan} onChange={handleChange} rows="4" placeholder="Ceritakan rencana perjalanan atau pertanyaan Anda di sini..." className="contact-input resize-none" required></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-[#2d1f0a] text-white font-bold sans rounded-xl hover:bg-[#1a1207] transition-all transform hover:-translate-y-1">
                  Kirim Pesan Sekarang
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default Contact;