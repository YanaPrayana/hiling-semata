import { useParams, Link } from "react-router-dom";
import { dataBudaya } from "../../services/data/budayaData";

export default function DetailBudaya() {
  const { id } = useParams();
  const budaya = dataBudaya.find((b) => b.id === parseInt(id));
  const relasiData = budaya
    ? dataBudaya.filter((b) => budaya.relasi?.includes(b.id))
    : [];

  if (!budaya) {
    return (
      <div
        style={{
          background: "#12100a",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Lato',sans-serif",
        }}
      >
        <p style={{ color: "#fff", fontSize: "18px", marginBottom: "16px" }}>
          Budaya tidak ditemukan.
        </p>
        <Link to="/budaya" style={{ color: "#c9a452" }}>
          ← Kembali ke Daftar Budaya
        </Link>
      </div>
    );
  }

  return (
    <div className="detail-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Lato:wght@300;400;700&display=swap');
        .detail-root { font-family:'Cormorant Garamond',Georgia,serif; background:#f2e9d8; min-height:100vh; }

        /* HERO */
        .dh-hero { position:relative; height:65vh; min-height:420px; display:flex; align-items:flex-end; }
        .dh-hero-bg { position:absolute; inset:0; }
        .dh-hero-bg img { width:100%; height:100%; object-fit:cover; }
        .dh-hero-bg::after { content:''; position:absolute; inset:0; background:linear-gradient(to top,rgba(8,6,2,.98) 0%,rgba(8,6,2,.5) 50%,rgba(8,6,2,.15) 100%),linear-gradient(105deg,rgba(8,6,2,.7) 0%,transparent 60%); }
        .dh-hero-body { position:relative; z-index:2; max-width:1200px; margin:0 auto; padding:0 32px 40px; width:100%; }
        .dh-badge { display:inline-block; font-family:'Lato',sans-serif; font-size:10px; letter-spacing:.2em; text-transform:uppercase; background:rgba(184,150,62,.25); border:1px solid rgba(184,150,62,.5); color:#c9a452; padding:5px 14px; margin-bottom:14px; }
        .dh-title { font-size:clamp(36px,5vw,60px); font-weight:700; color:#fff; line-height:1.1; margin-bottom:10px; }
        .dh-tagline { font-size:clamp(18px,2.5vw,26px); font-style:italic; color:#c9a452; }

        /* BREADCRUMB */
        .dh-breadcrumb { background:#1c1509; padding:12px 0; border-bottom:1px solid rgba(184,150,62,.15); }
        .dh-breadcrumb-inner { max-width:1200px; margin:0 auto; padding:0 32px; display:flex; align-items:center; gap:8px; font-family:'Lato',sans-serif; font-size:12px; color:rgba(255,255,255,.35); }
        .dh-breadcrumb a { color:rgba(255,255,255,.35); text-decoration:none; transition:color .2s; }
        .dh-breadcrumb a:hover { color:#c9a452; }
        .dh-breadcrumb-cur { color:#c9a452; }

        /* MAIN */
        .dh-main { max-width:1200px; margin:0 auto; padding:48px 32px; display:grid; grid-template-columns:1fr 320px; gap:40px; align-items:start; }
        @media(max-width:900px){ .dh-main { grid-template-columns:1fr; } }

        /* ARTIKEL */
        .dh-gold-line { width:64px; height:2px; background:linear-gradient(90deg,#b8963e,transparent); margin-bottom:28px; }
        .dh-para { font-family:'Lato',sans-serif; font-size:15px; color:#3a2e1e; line-height:1.85; margin-bottom:20px; }

        /* FAKTA */
        .dh-fakta { background:#2d1f0a; border-radius:12px; padding:28px; margin-top:36px; }
        .dh-fakta-title { font-family:'Lato',sans-serif; font-size:11px; letter-spacing:.25em; color:#c9a452; text-transform:uppercase; margin-bottom:20px; }
        .dh-fakta-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
        @media(max-width:600px){ .dh-fakta-grid { grid-template-columns:1fr; } }
        .dh-fakta-item { display:flex; align-items:flex-start; gap:10px; }
        .dh-fakta-dot { color:#c9a452; font-size:18px; line-height:1.3; flex-shrink:0; }
        .dh-fakta-text { font-family:'Lato',sans-serif; font-size:13px; color:rgba(255,255,255,.7); line-height:1.6; }

        /* RELASI */
        .dh-relasi { margin-top:48px; }
        .dh-relasi-label { font-family:'Lato',sans-serif; font-size:11px; letter-spacing:.25em; color:#b8963e; text-transform:uppercase; margin-bottom:6px; }
        .dh-relasi-title { font-size:22px; font-weight:700; color:#2a1f0e; margin-bottom:20px; }
        .dh-relasi-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }
        @media(max-width:600px){ .dh-relasi-grid { grid-template-columns:1fr; } }
        .dh-relasi-card { position:relative; border-radius:10px; overflow:hidden; height:150px; text-decoration:none; display:block; transition:transform .3s; }
        .dh-relasi-card:hover { transform:translateY(-4px); }
        .dh-relasi-card img { width:100%; height:100%; object-fit:cover; }
        .dh-relasi-card::after { content:''; position:absolute; inset:0; background:linear-gradient(to top,rgba(8,5,1,.92) 0%,rgba(8,5,1,.2) 60%); }
        .dh-relasi-body { position:absolute; bottom:0; left:0; right:0; z-index:2; padding:12px; }
        .dh-relasi-kat { font-family:'Lato',sans-serif; font-size:9px; letter-spacing:.2em; color:#c9a452; text-transform:uppercase; margin-bottom:3px; }
        .dh-relasi-nama { font-size:15px; font-weight:700; color:#fff; }

        /* SIDEBAR */
        .dh-sidebar { display:flex; flex-direction:column; gap:16px; }
        .dh-info-box { border-radius:12px; overflow:hidden; border:1px solid #e2d5bc; background:#fff; }
        .dh-info-head { background:#2d1f0a; padding:16px 20px; }
        .dh-info-head-title { font-family:'Lato',sans-serif; font-size:11px; letter-spacing:.25em; color:#c9a452; text-transform:uppercase; }
        .dh-info-body { padding:20px; display:flex; flex-direction:column; gap:18px; }
        .dh-info-label { font-family:'Lato',sans-serif; font-size:10px; letter-spacing:.15em; color:#9a8870; text-transform:uppercase; margin-bottom:4px; }
        .dh-info-val { font-family:'Lato',sans-serif; font-size:14px; color:#3a2e1e; font-weight:600; }
        .dh-cta-trip { background:#2d1f0a; border-radius:12px; padding:24px; text-align:center; }
        .dh-cta-eyebrow { font-family:'Lato',sans-serif; font-size:10px; letter-spacing:.25em; color:#c9a452; text-transform:uppercase; margin-bottom:8px; }
        .dh-cta-title { font-size:20px; font-weight:700; color:#fff; line-height:1.3; margin-bottom:18px; }
        .dh-cta-btn { display:block; padding:12px; background:#b8963e; color:#12100a; font-family:'Lato',sans-serif; font-size:13px; font-weight:700; letter-spacing:.08em; text-decoration:none; border-radius:6px; transition:background .3s; margin-bottom:10px; }
        .dh-cta-btn:hover { background:#d4a843; }
        .dh-back-btn { display:flex; align-items:center; justify-content:center; gap:6px; padding:12px; border:1px solid #b8963e; color:#8b6914; font-family:'Lato',sans-serif; font-size:13px; text-decoration:none; border-radius:6px; transition:all .3s; }
        .dh-back-btn:hover { background:#b8963e; color:#12100a; }
        .dh-artikel-btn { display:flex; align-items:center; justify-content:center; gap:6px; padding:12px; border:1px solid #e2d5bc; color:#7a6a50; font-family:'Lato',sans-serif; font-size:13px; text-decoration:none; border-radius:6px; transition:all .3s; background:#fff; }
        .dh-artikel-btn:hover { border-color:#b8963e; color:#8b6914; }
      `}</style>

      {/* HERO */}
      <div className="dh-hero">
        <div className="dh-hero-bg">
          <img
            src={budaya.gambar}
            alt={budaya.nama}
            onError={(e) => {
              e.target.src = `https://placehold.co/1400x600/2d1f0a/c9a84c?text=${budaya.nama}`;
            }}
          />
        </div>
        <div className="dh-hero-body">
          <span className="dh-badge">{budaya.kategori}</span>
          <h1 className="dh-title">{budaya.nama}</h1>
          <p className="dh-tagline">{budaya.tagline}</p>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="dh-breadcrumb">
        <div className="dh-breadcrumb-inner">
          <Link to="/">Beranda</Link>
          <span>›</span>
          <Link to="/budaya">Budaya</Link>
          <span>›</span>
          <span className="dh-breadcrumb-cur">{budaya.nama}</span>
        </div>
      </div>

      {/* MAIN */}
      <div className="dh-main">
        {/* KIRI */}
        <div>
          <div className="dh-gold-line" />
          {budaya.paragraf.map((p, i) => (
            <p key={i} className="dh-para">
              {p}
            </p>
          ))}

          <div className="dh-fakta">
            <div className="dh-fakta-title">✦ &nbsp;Fakta Menarik</div>
            <div className="dh-fakta-grid">
              {budaya.fakta.map((f, i) => (
                <div key={i} className="dh-fakta-item">
                  <span className="dh-fakta-dot">◆</span>
                  <p className="dh-fakta-text">{f}</p>
                </div>
              ))}
            </div>
          </div>

          {relasiData.length > 0 && (
            <div className="dh-relasi">
              <div className="dh-relasi-label">── Eksplorasi Lebih ──</div>
              <div className="dh-relasi-title">Budaya Terkait</div>
              <div className="dh-relasi-grid">
                {relasiData.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/budaya/${rel.id}`}
                    className="dh-relasi-card"
                  >
                    <img
                      src={rel.gambar}
                      alt={rel.nama}
                      onError={(e) => {
                        e.target.src = `https://placehold.co/400x180/2d1f0a/c9a84c?text=${rel.nama}`;
                      }}
                    />
                    <div className="dh-relasi-body">
                      <div className="dh-relasi-kat">{rel.kategori}</div>
                      <div className="dh-relasi-nama">{rel.nama}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* SIDEBAR */}
        <div className="dh-sidebar">
          <div className="dh-info-box">
            <div className="dh-info-head">
              <div className="dh-info-head-title">Informasi Kunjungan</div>
            </div>
            <div className="dh-info-body">
              {[
                { label: "Lokasi", icon: "📍", val: budaya.lokasi },
                { label: "Waktu", icon: "🕐", val: budaya.waktu },
                { label: "Tiket Masuk", icon: "🎫", val: budaya.tiket },
              ].map((info) => (
                <div key={info.label}>
                  <div className="dh-info-label">{info.label}</div>
                  <div className="dh-info-val">
                    {info.icon} &nbsp;{info.val}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="dh-cta-trip">
            <div className="dh-cta-eyebrow">Rasakan Langsung</div>
            <div className="dh-cta-title">Ikut Open Trip Budaya Yogyakarta</div>
            <Link to="/trip" className="dh-cta-btn">
              Lihat Open Trip →
            </Link>
          </div>
          <Link to="/budaya" className="dh-back-btn">
            ← Kembali ke Daftar
          </Link>
          <Link to="/budaya/artikel" className="dh-artikel-btn">
            📖 &nbsp;Baca Artikel Budaya
          </Link>
        </div>
      </div>
    </div>
  );
}
