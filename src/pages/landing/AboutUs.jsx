import { useEffect } from 'react';
import { motion } from 'framer-motion';

// IMPORT CSS DARI FOLDER HOME-STYLE
import '../../style/home-style/about.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamData = [
    {
      id: 1,
      nama: "I Gede Putra Aditya",
      posisi: "Ketua Kami",
      tugas: "Mengerjakan Bagian Budaya.",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600"
    },
    {
      id: 2,
      nama: "Fachri Ardra Farrosi",
      posisi: "Anggota",
      tugas: "Mengerjakan Bagian Open Trip.",
      foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600"
    },
    {
      id: 3,
      nama: "Buchori Thallenta Suprayogo",
      posisi: "Anggota",
      tugas: "Mengerjakan Bagian User.",
      foto: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600"
    },
    {
      id: 4,
      nama: "Tio Khafidh Ritoga",
      posisi: "Anggota",
      tugas: "Mengerjakan Bagian Wisata.",
      foto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600"
    },
    {
      id: 5,
      nama: "Muhammad Ghaffan Al Fayadh Naufal Idris ",
      posisi: "Anggota",
      tugas: "Mengerjakan Bagian Home.",
      foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600"
    }
  ];

  return (
    <div className="about-root sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-24"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="text-[#c9a452] uppercase tracking-[0.3em] text-xs mb-4 font-bold">Tentang Kami</div>
          <h1 className="text-5xl md:text-6xl font-bold serif text-gray-900 mb-6 leading-tight">
            Kreator di Balik <br /> <span className="text-[#b8963e]">Hiling Semata</span>
          </h1>
          <p className="text-gray-500 leading-relaxed text-lg">
            Sinergi lima talenta yang berdedikasi melestarikan warisan Mataram melalui inovasi digital.
          </p>
        </motion.div>

        {/* TEAM GRID */}
        <div className="team-grid">
          {teamData.map((member, index) => (
            <motion.div 
              key={member.id}
              className="team-card group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="member-photo-wrapper">
                <img src={member.foto} alt={member.nama} className="member-photo" />
              </div>

              <div className="member-info">
                <div className="member-role">{member.posisi}</div>
                <h3 className="member-name serif">{member.nama}</h3>
                <div className="member-divider"></div>
                <p className="member-task">{member.tugas}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default AboutUs;