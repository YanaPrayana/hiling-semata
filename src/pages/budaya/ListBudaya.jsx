import { useState } from "react";
import { Link } from "react-router-dom";
import {
  dataBudaya,
  dataOpenTrip,
  kategoriList,
  sidebarKat,
} from "../../data/budaya/listBudayaData";

/* ─── KOMPONEN UTAMA ─────────────────────────────────────────────────── */
export default function ListBudaya() {
  const [aktif, setAktif] = useState("Semua");

  const filtered = dataBudaya.filter(
    (b) => aktif === "Semua" || b.kategori === aktif,
  );
  const featured = filtered.find((b) => b.featured) || filtered[0];
  const lainnya = filtered.filter((b) => b.id !== featured?.id).slice(0, 3);

  return (
    <div className="hiling-root">
      {/* ── STYLES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Lato:wght@300;400;700&display=swap');

        .hiling-root {
          font-family: 'Cormorant Garamond', Georgia, serif;
          background: #12100a;
          color: #fff;
          min-height: 100vh;
        }
        .f-lato  { font-family: 'Lato', sans-serif; }
        .c-gold  { color: #c9a452; }
        .bg-dark { background: #12100a; }
        .bg-card { background: #1c1509; }
        .bg-cream{ background: #f2e9d8; }
        .bg-cream2{ background: #ede3ce; }

        /* ─ HERO ─ */
        .hero-wrap { position:relative; min-height:520px; display:flex; align-items:flex-end; padding-bottom:48px; }
        .hero-bg   { position:absolute; inset:0; }
        .hero-bg img{ width:100%; height:100%; object-fit:cover; }
        .hero-bg::after {
          content:'';
          position:absolute; inset:0;
          background: linear-gradient(105deg,rgba(8,6,2,.96) 34%,rgba(8,6,2,.45) 70%,rgba(8,6,2,.15) 100%),
                      linear-gradient(to top,rgba(8,6,2,.9) 0%,transparent 55%);
        }
        .hero-content { position:relative; z-index:2; max-width:1200px; margin:0 auto; padding:0 32px; }
        .hero-sub  { font-family:'Lato',sans-serif; font-size:11px; letter-spacing:.35em; color:#c9a452; text-transform:uppercase; margin-bottom:10px; }
        .hero-title{ font-size:clamp(40px,6vw,72px); font-weight:700; line-height:1.1; color:#c9a452; margin-bottom:16px; }
        .hero-line { width:72px; height:2px; background:linear-gradient(90deg,#b8963e,transparent); margin-bottom:20px; }
        .hero-desc { font-family:'Lato',sans-serif; font-size:14px; font-weight:300; color:rgba(255,255,255,.65); line-height:1.7; max-width:320px; margin-bottom:28px; }
        .hero-btn  {
          display:inline-flex; align-items:center; gap:8px;
          padding:12px 24px; border:1px solid #b8963e;
          color:#c9a452; font-family:'Lato',sans-serif; font-size:13px; letter-spacing:.1em;
          background:transparent; cursor:pointer; transition:all .3s; text-decoration:none;
        }
        .hero-btn:hover { background:#b8963e; color:#12100a; }
        .hero-loc  { font-family:'Lato',sans-serif; font-size:11px; color:rgba(255,255,255,.3); letter-spacing:.1em; margin-top:20px; }

        /* ─ FILTER BAR ─ */
        .filter-bar {
          background:#f2e9d8;
          border-bottom:1px solid rgba(184,150,62,.2);
          position:sticky; top:64px; z-index:40;
        }
        .filter-inner { max-width:1200px; margin:0 auto; padding:0 24px; display:flex; gap:0; overflow-x:auto; scrollbar-width:none; }
        .filter-inner::-webkit-scrollbar { display:none; }
        .filter-btn {
          display:flex; flex-direction:column; align-items:center; gap:4px;
          padding:14px 20px; border:none; background:transparent; cursor:pointer;
          border-bottom:2px solid transparent; transition:all .2s; white-space:nowrap;
          font-family:'Lato',sans-serif; font-size:11px; letter-spacing:.08em; color:#7a6a50;
          text-transform:uppercase;
        }
        .filter-btn svg { width:28px; height:28px; }
        .filter-btn.active, .filter-btn:hover { color:#8b6914; border-bottom-color:#b8963e; }

        /* ─ SECTION CERITA ─ */
        .cerita-wrap { background:#f2e9d8; padding:40px 0 48px; }
        .cerita-inner{ max-width:1200px; margin:0 auto; padding:0 24px; }
        .cerita-head  { display:flex; align-items:center; justify-content:space-between; margin-bottom:24px; }
        .cerita-title-label {
          font-family:'Lato',sans-serif; font-size:11px; letter-spacing:.25em;
          color:#b8963e; text-transform:uppercase; margin-bottom:6px;
          display:flex; align-items:center; gap:6px;
        }
        .cerita-title { font-size:22px; font-weight:700; color:#2a1f0e; letter-spacing:.05em; }
        .see-all { font-family:'Lato',sans-serif; font-size:13px; color:#8b6914; text-decoration:none; display:flex; align-items:center; gap:4px; }
        .see-all:hover { text-decoration:underline; }

        /* 3-col grid */
        .cerita-grid { display:grid; grid-template-columns:2fr 1.2fr 1fr; gap:16px; }
        @media(max-width:900px){ .cerita-grid { grid-template-columns:1fr 1fr; } }
        @media(max-width:600px){ .cerita-grid { grid-template-columns:1fr; } }

        /* Featured card */
        .card-featured {
          position:relative; border-radius:12px; overflow:hidden;
          min-height:440px; display:flex; flex-direction:column; justify-content:flex-end;
          cursor:pointer; transition:transform .3s;
        }
        .card-featured:hover { transform:translateY(-4px); }
        .card-featured img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; }
        .card-featured::after {
          content:''; position:absolute; inset:0;
          background:linear-gradient(to top,rgba(8,5,1,.97) 0%,rgba(8,5,1,.5) 50%,rgba(8,5,1,.1) 100%);
        }
        .card-featured-body { position:relative; z-index:2; padding:24px; }
        .card-tag { display:inline-block; font-family:'Lato',sans-serif; font-size:10px; letter-spacing:.2em; text-transform:uppercase; background:rgba(40,30,10,.75); color:#fff; padding:4px 10px; margin-bottom:12px; }
        .card-featured-title { font-size:28px; font-weight:700; color:#fff; line-height:1.2; margin-bottom:8px; }
        .card-featured-sub   { font-size:18px; font-style:italic; color:#c9a452; margin-bottom:12px; }
        .card-featured-desc  { font-family:'Lato',sans-serif; font-size:13px; color:rgba(255,255,255,.55); line-height:1.65; margin-bottom:20px; }
        .card-featured-btn   { display:inline-flex; align-items:center; gap:8px; border:1px solid rgba(184,150,62,.6); color:#c9a452; font-family:'Lato',sans-serif; font-size:12px; padding:10px 18px; background:transparent; cursor:pointer; text-decoration:none; transition:all .3s; }
        .card-featured-btn:hover { background:#b8963e; color:#12100a; }

        /* Small cards col */
        .cards-small { display:flex; flex-direction:column; gap:12px; }
        .card-small {
          position:relative; border-radius:10px; overflow:hidden;
          height:136px; cursor:pointer; transition:transform .3s; text-decoration:none; display:block;
        }
        .card-small:hover { transform:translateY(-3px); }
        .card-small img { width:100%; height:100%; object-fit:cover; }
        .card-small::after {
          content:''; position:absolute; inset:0;
          background:linear-gradient(105deg,rgba(8,5,1,.88) 35%,rgba(8,5,1,.2) 100%);
        }
        .card-small-body { position:absolute; inset:0; z-index:2; padding:14px 16px; display:flex; flex-direction:column; justify-content:flex-end; }
        .card-small-tag  { font-family:'Lato',sans-serif; font-size:9px; letter-spacing:.2em; color:#c9a452; text-transform:uppercase; margin-bottom:4px; }
        .card-small-name { font-size:17px; font-weight:700; color:#fff; line-height:1.2; }
        .card-small-sub  { font-family:'Lato',sans-serif; font-size:11px; color:rgba(255,255,255,.5); }

        /* Sidebar */
        .sidebar { display:flex; flex-direction:column; gap:0; }
        .sidebar-box { background:#fff; border:1px solid #e2d5bc; border-radius:12px; overflow:hidden; }
        .sidebar-head { padding:16px 18px; border-bottom:1px solid #ede3ce; }
        .sidebar-head-title { font-size:15px; font-weight:700; color:#2a1f0e; letter-spacing:.05em; margin-bottom:4px; }
        .sidebar-head-sub   { font-family:'Lato',sans-serif; font-size:12px; color:#9a8870; }
        .sidebar-item { display:flex; align-items:center; justify-content:space-between; padding:11px 18px; border-bottom:1px solid #f0e8d8; cursor:pointer; transition:background .2s; text-decoration:none; }
        .sidebar-item:last-of-type { border-bottom:none; }
        .sidebar-item:hover { background:#faf5ec; }
        .sidebar-item-left { display:flex; align-items:center; gap:10px; font-family:'Lato',sans-serif; font-size:13px; color:#4a3a20; }
        .sidebar-item-arrow { color:#c9b88a; font-size:16px; }
        .sidebar-quote { margin:12px; padding:14px 16px; border-radius:8px; background:#2d1f0a; }
        .sidebar-quote-mark { font-size:32px; color:#c9a452; line-height:1; font-family:Georgia,serif; }
        .sidebar-quote-text { font-family:'Lato',sans-serif; font-size:12px; color:rgba(255,255,255,.7); font-style:italic; line-height:1.6; margin-top:2px; }

        /* ─ OPEN TRIP SECTION ─ */
        .trip-section { background:#ede3ce; padding:56px 0; }
        .trip-inner   { max-width:1200px; margin:0 auto; padding:0 24px; }
        .trip-header  { text-align:center; margin-bottom:36px; }
        .trip-eyebrow { font-family:'Lato',sans-serif; font-size:11px; letter-spacing:.35em; color:#8b6914; text-transform:uppercase; margin-bottom:10px; }
        .trip-title   { font-size:clamp(24px,4vw,36px); font-weight:700; color:#2a1f0e; margin-bottom:8px; }
        .trip-sub     { font-family:'Lato',sans-serif; font-size:13px; color:#7a6a50; max-width:520px; margin:0 auto; }
        .trip-grid    { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-bottom:32px; }
        @media(max-width:900px){ .trip-grid { grid-template-columns:repeat(2,1fr); } }
        @media(max-width:500px){ .trip-grid { grid-template-columns:1fr; } }
        .trip-card    { background:#fff; border-radius:12px; overflow:hidden; transition:transform .3s, box-shadow .3s; }
        .trip-card:hover { transform:translateY(-5px); box-shadow:0 16px 40px rgba(0,0,0,.15); }
        .trip-card-img { position:relative; height:180px; }
        .trip-card-img img { width:100%; height:100%; object-fit:cover; }
        .trip-card-img::after {
          content:''; position:absolute; inset:0;
          background:linear-gradient(to top,rgba(8,5,1,.85) 0%,transparent 55%);
        }
        .trip-badge { position:absolute; top:12px; left:12px; z-index:2; font-family:'Lato',sans-serif; font-size:9px; letter-spacing:.18em; background:rgba(139,105,20,.85); color:#fff; padding:4px 8px; border-radius:3px; text-transform:uppercase; }
        .trip-card-overlay { position:absolute; bottom:0; left:0; right:0; z-index:2; padding:12px; }
        .trip-card-name { font-size:15px; font-weight:700; color:#fff; margin-bottom:2px; }
        .trip-card-desc { font-family:'Lato',sans-serif; font-size:11px; color:rgba(255,255,255,.6); line-height:1.5; }
        .trip-card-body { padding:12px 14px; }
        .trip-price { font-family:'Lato',sans-serif; font-size:13px; color:#5a4820; margin-bottom:10px; }
        .trip-price span { color:#9a8870; }
        .trip-btn { display:block; width:100%; text-align:center; padding:9px; border:1px solid #b8963e; color:#8b6914; font-family:'Lato',sans-serif; font-size:12px; letter-spacing:.05em; background:transparent; cursor:pointer; border-radius:4px; transition:all .3s; text-decoration:none; }
        .trip-btn:hover { background:#b8963e; color:#fff; }
        .trip-see-all { display:flex; align-items:center; justify-content:center; }
        .trip-see-all a { display:inline-flex; align-items:center; gap:8px; padding:13px 36px; border:1px solid #2a1f0e; color:#2a1f0e; font-family:'Lato',sans-serif; font-size:13px; letter-spacing:.1em; text-decoration:none; transition:all .3s; }
        .trip-see-all a:hover { background:#2a1f0e; color:#f2e9d8; }

        /* ─ QUOTE SECTION ─ */
        .quote-section { background:#1a1208; padding:64px 0; position:relative; overflow:hidden; }
        .quote-bg-img  { position:absolute; left:0; top:0; bottom:0; width:280px; opacity:.25; }
        .quote-bg-img img { height:100%; width:100%; object-fit:cover; object-position:top; }
        .quote-bg-img::after { content:''; position:absolute; inset:0; background:linear-gradient(to right,transparent 60%,#1a1208); }
        .quote-inner   { max-width:1200px; margin:0 auto; padding:0 24px; display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; position:relative; z-index:2; }
        @media(max-width:768px){ .quote-inner { grid-template-columns:1fr; } }
        .quote-left    { padding-left:160px; }
        @media(max-width:768px){ .quote-left { padding-left:0; } }
        .quote-mark    { font-size:80px; color:#c9a452; line-height:.8; font-family:Georgia,serif; }
        .quote-text    { font-size:clamp(20px,2.5vw,30px); color:#fff; font-weight:400; line-height:1.45; font-style:italic; margin-top:-12px; }
        .quote-author  { font-family:'Lato',sans-serif; font-size:13px; color:#c9a452; letter-spacing:.15em; margin-top:18px; }
        .quote-right   { border:1px solid rgba(255,255,255,.12); border-radius:12px; padding:32px; }
        .quote-right-title { font-size:22px; font-weight:700; color:#fff; margin-bottom:10px; line-height:1.3; }
        .quote-right-sub   { font-family:'Lato',sans-serif; font-size:13px; color:rgba(255,255,255,.45); line-height:1.7; margin-bottom:24px; }
        .quote-right-btn   { display:inline-flex; align-items:center; gap:8px; padding:13px 24px; background:#b8963e; color:#12100a; font-family:'Lato',sans-serif; font-size:13px; font-weight:700; letter-spacing:.08em; text-decoration:none; border-radius:6px; transition:background .3s; }
        .quote-right-btn:hover { background:#d4a843; }
      `}</style>

      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="hero-wrap">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=1600&q=80"
            alt="Keraton Yogyakarta"
            onError={(e) => {
              e.target.style.background = "#2d1f0a";
              e.target.style.display = "none";
            }}
          />
        </div>
        <div className="hero-content w-full">
          <p className="hero-sub">Rasakan Jiwa</p>
          <h1 className="hero-title">
            Budaya Asli
            <br />
            Yogyakarta
          </h1>
          <div className="hero-line" />
          <p className="hero-desc">
            Lebih dari tradisi, ini adalah warisan yang hidup. Temukan cerita,
            makna, dan pengalaman budaya Jogja.
          </p>
          <Link to="/budaya" className="hero-btn">
            🏛️ &nbsp;Jelajahi Budaya Jogja
          </Link>
          <p className="hero-loc">📍 Kraton Ngayogyakarta Hadiningrat</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. FILTER KATEGORI
      ══════════════════════════════════════════ */}
      <div className="filter-bar">
        <div className="filter-inner">
          {kategoriList.map((kat) => (
            <button
              key={kat.nama}
              className={`filter-btn ${aktif === kat.nama ? "active" : ""}`}
              onClick={() => setAktif(kat.nama)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={kat.svg} />
              </svg>
              {kat.nama}
            </button>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          3. CERITA BUDAYA — EDITORIAL GRID
      ══════════════════════════════════════════ */}
      <section className="cerita-wrap">
        <div className="cerita-inner">
          {/* Header row */}
          <div className="cerita-head">
            <div>
              <div className="cerita-title-label">
                <span style={{ color: "#b8963e" }}>──</span>
              </div>
              <h2 className="cerita-title">CERITA BUDAYA YOGYAKARTA</h2>
            </div>
            <Link to="/budaya/artikel" className="see-all">
              Lihat Semua Budaya &nbsp;→
            </Link>
          </div>

          {/* 3-col editorial grid */}
          <div className="cerita-grid">
            {/* Col 1 — Featured big card */}
            {featured && (
              <Link
                to={`/budaya/${featured.id}`}
                className="card-featured"
                style={{ textDecoration: "none" }}
              >
                <img
                  src={featured.gambar}
                  alt={featured.nama}
                  onError={(e) => {
                    e.target.src = `https://placehold.co/600x480/2d1f0a/c9a84c?text=${featured.nama}`;
                  }}
                />
                <div className="card-featured-body">
                  <span className="card-tag">{featured.kategori}</span>
                  <div className="card-featured-title">{featured.nama}</div>
                  <div className="card-featured-sub">{featured.tagline}</div>
                  <p className="card-featured-desc">{featured.deskripsi}</p>
                  <span className="card-featured-btn">
                    Baca Cerita Lengkap &nbsp;→
                  </span>
                </div>
              </Link>
            )}

            {/* Col 2 — Stack of small cards */}
            <div className="cards-small">
              {lainnya.slice(0, 3).map((item) => (
                <Link
                  key={item.id}
                  to={`/budaya/${item.id}`}
                  className="card-small"
                >
                  <img
                    src={item.gambar}
                    alt={item.nama}
                    onError={(e) => {
                      e.target.src = `https://placehold.co/400x160/2d1f0a/c9a84c?text=${item.nama}`;
                    }}
                  />
                  <div className="card-small-body">
                    <span className="card-small-tag">{item.kategori}</span>
                    <div className="card-small-name">{item.nama}</div>
                    <div className="card-small-sub">{item.tagline}</div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Col 3 — Sidebar Jelajahi Budaya */}
            <div className="sidebar">
              <div className="sidebar-box">
                <div className="sidebar-head">
                  <div className="sidebar-head-title">JELAJAHI BUDAYA</div>
                  <div className="sidebar-head-sub">
                    Pilih kategori yang ingin kamu eksplorasi lebih dalam.
                  </div>
                </div>
                {sidebarKat.map((kat) => (
                  <button
                    key={kat.nama}
                    className="sidebar-item"
                    onClick={() => setAktif(kat.nama)}
                    style={{
                      width: "100%",
                      border: "none",
                      background: "transparent",
                      textAlign: "left",
                    }}
                  >
                    <span className="sidebar-item-left">
                      <span>{kat.ikon}</span> {kat.nama}
                    </span>
                    <span className="sidebar-item-arrow">›</span>
                  </button>
                ))}
                {/* Quote box */}
                <div className="sidebar-quote">
                  <div className="sidebar-quote-mark">"</div>
                  <p className="sidebar-quote-text">
                    Budaya bukan untuk dilihat, tapi untuk dihayati.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. OPEN TRIP
      ══════════════════════════════════════════ */}
      <section className="trip-section">
        <div className="trip-inner">
          <div className="trip-header">
            <p className="trip-eyebrow">Terhubung Langsung dengan Pengalaman</p>
            <h2 className="trip-title">
              Baca Ceritanya, Lalu Rasakan Langsung
            </h2>
            <p className="trip-sub">
              Setiap budaya punya tempatnya. Kunjungi langsung dan rasakan
              pengalaman aslinya bersama open trip Hiling Semata.
            </p>
          </div>

          <div className="trip-grid">
            {dataOpenTrip.map((trip) => (
              <div key={trip.id} className="trip-card">
                <div className="trip-card-img">
                  <img
                    src={trip.gambar}
                    alt={trip.nama}
                    onError={(e) => {
                      e.target.src = `https://placehold.co/400x200/2d1f0a/c9a84c?text=${trip.nama}`;
                    }}
                  />
                  <span className="trip-badge">Open Trip</span>
                  <div className="trip-card-overlay">
                    <div className="trip-card-name">{trip.nama}</div>
                    <div className="trip-card-desc">{trip.deskripsi}</div>
                  </div>
                </div>
                <div className="trip-card-body">
                  <div className="trip-price">
                    {trip.harga}
                    <span>/orang</span>
                  </div>
                  <Link to={`/trip/${trip.id}`} className="trip-btn">
                    Lihat Open Trip
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="trip-see-all">
            <Link to="/trip">Lihat Semua Open Trip &nbsp;→</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. QUOTE + CTA
      ══════════════════════════════════════════ */}
      <section className="quote-section">
        <div className="quote-bg-img">
          <img
            src="https://images.unsplash.com/photo-1604749781210-6d892d59f45c?w=400&q=70"
            alt=""
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
        <div className="quote-inner">
          <div className="quote-left">
            <div className="quote-mark">"</div>
            <p className="quote-text">
              Jogja bukan hanya tempat,
              <br />
              tapi rasa yang hidup dalam budaya.
            </p>
            <p className="quote-author">— Ki Manteb Sudarsono, Dalang</p>
          </div>
          <div className="quote-right">
            <h3 className="quote-right-title">
              Yuk, Jaga dan Lestarikan Budaya Kita
            </h3>
            <p className="quote-right-sub">
              Dengan memahami budaya, kita ikut menjaga warisan bersama
              pengrajin lokal untuk generasi mendatang.
            </p>
            <Link to="/budaya/artikel" className="quote-right-btn">
              Pelajari Lebih Dalam &nbsp;→
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
