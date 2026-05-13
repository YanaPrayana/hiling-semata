import { useState } from "react";
import { motion } from "framer-motion";
import { kategoriList, warisanData } from "../../services/data/budayaData";

// Import CSS terpisah
import "../../style/budaya-style/ListBudaya.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function ListBudaya() {
  const [aktif, setAktif] = useState("Seni & Pertunjukan");

  return (
    <div className="budaya-page">
      {/* Hero Section */}
      <section className="hero">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="hero-tag">Selamat Datang di</div>
          <h1 className="hero-title serif">
            Jantung Budaya <br /> di Tanah{" "}
            <span className="gold-text">Mataram</span>
          </h1>
          <p className="hero-desc">
            Daerah Istimewa Yogyakarta adalah cermin budaya Jawa yang hidup dan
            terus lestari. Temukan keindahan tradisi, kearifan lokal, dan
            warisan leluhur yang tak ternilai.
          </p>
          <div className="btn-group">
            <motion.button whileHover={{ scale: 1.05 }} className="btn-main">
              Jelajahi Budaya DIY <span>→</span>
            </motion.button>
            <a href="#" className="btn-video">
              <div className="play-icon">▶</div>
              Tonton Video
            </a>
          </div>
        </motion.div>

        <div className="hero-wave">
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,213.3C840,224,960,224,1080,202.7C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Info Section */}
      <motion.section
        className="info-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <div className="hero-tag">Mengenal DIY</div>
          <h2
            className="serif"
            style={{ fontSize: "42px", lineHeight: 1.2, margin: "15px 0" }}
          >
            Lebih dari Sekadar Tempat, <br />
            Ini <span className="gold-text">Warisan dan Identitas</span>
          </h2>
          <p
            style={{
              color: "#666",
              lineHeight: 1.8,
              marginBottom: "30px",
              fontSize: "15px",
            }}
          >
            DIY bukan hanya destinasi, tapi rumah bagi nilai-nilai luhur, seni,
            tradisi, dan cara hidup yang terus dijaga turun-temurun.
          </p>
          <button
            style={{
              background: "none",
              border: "1px solid #ccc",
              padding: "12px 25px",
              borderRadius: "50px",
              cursor: "pointer",
            }}
          >
            Tentang DIY →
          </button>
        </motion.div>

        <div className="info-cards">
          {warisanData.map((item) => (
            <motion.div
              key={item.id}
              className={`card-warisan ${item.type === "tall" ? "tall" : ""}`}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <img src={item.img} alt={item.title} />
              <div className="card-body">
                <div className="card-icon-wrap">{item.icon}</div>
                <h4
                  className="serif"
                  style={{ fontSize: "20px", marginBottom: "8px" }}
                >
                  {item.title}
                </h4>
                <p style={{ fontSize: "12px", color: "#888", lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Category Nav */}
      <motion.div
        className="category-nav"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {kategoriList.map((kat) => (
          <div
            key={kat.id}
            className={`cat-btn ${aktif === kat.nama ? "active" : ""}`}
            onClick={() => setAktif(kat.nama)}
          >
            <div className="cat-icon">{kat.ikon}</div>
            <div className="cat-label">{kat.nama.toUpperCase()}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
