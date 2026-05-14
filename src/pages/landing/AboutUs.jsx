import { useEffect } from 'react';
import { motion } from 'framer-motion';

// IMPORT CSS KHUSUS RRQ STYLE
import '../../style/home-style/about.css';

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamData = [
    {
      id: 1,
      nama: "Raden Mas (Kamu)",
      posisi: "Front-End Developer",
      tugas: "Memastikan visual Landing Page berjalan mulus dan sistem Contact Us terintegrasi dengan sempurna.",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600"
    },
    {
      id: 2,
      nama: "Teman Kedua",
      posisi: "UI/UX Designer",
      tugas: "Bertanggung jawab atas estetika visual 'Kalcer-Minimalis' di seluruh halaman platform.",
      foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600"
    },
    {
      id: 3,
      nama: "Teman Ketiga",
      posisi: "Full-Stack Developer",
      tugas: "Menangani logika pemesanan Open Trip dan memastikan alur data dari Front-end ke Database aman.",
      foto: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600"
    },
    {
      id: 4,
      nama: "Teman Keempat",
      posisi: "Back-End Developer",
      tugas: "Mengelola arsitektur database untuk katalog Budaya dan sinkronisasi harga paket perjalanan.",
      foto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600"
    },
    {
      id: 5,
      nama: "Teman Kelima",
      posisi: "Project Manager",
      tugas: "Mengawasi jalannya timeline pengerjaan dan memastikan kualitas akhir project tetap terjaga.",
      foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600"
    }
  ];

  return (
    <div className="about-root">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER ALA BRAND PAGE */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-[#c9a452]"></div>
            <span className="text-[#c9a452] font-bold tracking-[0.2em] text-sm uppercase">Meet The Team</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase sans italic leading-none">
            OUR <br /> <span className="text-[#c9a452]">CREATIVES.</span>
          </h1>
        </motion.div>

        {/* TEAM GRID (RRQ BRAND AMBASSADOR STYLE) */}
        <div className="team-container">
          {teamData.map((member, index) => (
            <motion.div 
              key={member.id}
              className={`rrq-card member-${index + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <img src={member.foto} alt={member.nama} className="rrq-photo" />
              
              <div className="rrq-overlay">
                <div className="rrq-role">{member.posisi}</div>
                <h3 className="rrq-name">{member.nama}</h3>
                
                <div className="rrq-task">
                  <p className="sans italic text-white/80 border-l-2 border-[#c9a452] pl-3">
                    {member.tugas}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default AboutUs;