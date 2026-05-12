import { useState } from "react";
import { Link } from "react-router-dom";
import { dataArtikel } from "../../services/data/budayaData";

const kategoriArtikel = [
  "Semua",
  "Batik",
  "Wayang",
  "Sejarah & Keraton",
  "Kuliner",
  "Tradisi & Upacara",
];

export default function ArtikelBudaya() {
  const [aktif, setAktif] = useState("Semua");
  const [search, setSearch] = useState("");

  const filtered = dataArtikel.filter((a) => {
    const cocokKat = aktif === "Semua" || a.kategori === aktif;
    const cocokSearch = a.judul.toLowerCase().includes(search.toLowerCase());
    return cocokKat && cocokSearch;
  });

  const featured = filtered[0];
  const lainnya = filtered.slice(1);

  return (
    <div className="artikel-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Lato:wght@300;400;700&display=swap');
        .artikel-root { font-family:'Cormorant Garamond',Georgia,serif; background:#12100a; min-height:100vh; color:#fff; }

        /* HEADER */
        .ar-header { position:relative; padding:100px 24px 64px; text-align:center; overflow:hidden; }
        .ar-header-bg { position:absolute; inset:0; }
        .ar-header-bg img { width:100%; height:100%; object-fit:cover; opacity:.2; }
        .ar-header-bg::after { content:''; position:absolute; inset:0; background:linear-gradient(to bottom,rgba(18,16,10,.6),rgba(18,16,10,.95)); }
        .ar-header-inner { position:relative; z-index:2; max-width:640px; margin:0 auto; }
        .ar-eyebrow { font-family:'Lato',sans-serif; font-size:11px; letter-spacing:.35em; color:#c9a452; text-transform:uppercase; margin-bottom:14px; }
        .ar-eyebrow span { color:#c9a452; margin:0 6px; }
        .ar-title { font-size:clamp(36px,5vw,56px); font-weight:700; color:#fff; margin-bottom:16px; }
        .ar-gold-line { width:64px; height:2px; background:linear-gradient(90deg,#b8963e,transparent); margin:0 auto 20px; }
        .ar-desc { font-family:'Lato',sans-serif; font-size:14px; color:rgba(255,255,255,.5); line-height:1.7; }

        /* SEARCH + FILTER */
        .ar-controls { background:#1c1509; border-bottom:1px solid rgba(184,150,62,.15); position:sticky; top:64px; z-index:40; }
        .ar-controls-inner { max-width:1200px; margin:0 auto; padding:0 24px; display:flex; align-items:center; gap:16px; flex-wrap:wrap; }
        .ar-search { flex:1; min-width:200px; padding:12px 16px; background:rgba(255,255,255,.05); border:1px solid rgba(184,150,62,.2); color:#fff; font-family:'Lato',sans-serif; font-size:13px; outline:none; border-radius:6px; transition:border .2s; }
        .ar-search:focus { border-color:#b8963e; }
        .ar-search::placeholder { color:rgba(255,255,255,.3); }
        .ar-filter-wrap { display:flex; gap:0; overflow-x:auto; scrollbar-width:none; }
        .ar-filter-wrap::-webkit-scrollbar { display:none; }
        .ar-filter-btn { white-space:nowrap; padding:14px 18px; border:none; background:transparent; cursor:pointer; font-family:'Lato',sans-serif; font-size:11px; letter-spacing:.12em; color:rgba(255,255,255,.4); text-transform:uppercase; border-bottom:2px solid transparent; transition:all .2s; }
        .ar-filter-btn.active, .ar-filter-btn:hover { color:#c9a452; border-bottom-color:#b8963e; }

        /* FEATURED */
        .ar-featured-wrap { max-width:1200px; margin:0 auto; padding:48px 24px 0; }
        .ar-featured-label { font-family:'Lato',sans-serif; font-size:11px; letter-spacing:.25em; color:#b8963e; text-transform:uppercase; margin-bottom:20px; }
        .ar-featured { display:grid; grid-template-columns:1fr 1fr; border-radius:16px; overflow:hidden; transition:transform .3s; text-decoration:none; }
        .ar-featured:hover { transform:translateY(-4px); }
        @media(max-width:768px){ .ar-featured { grid-template-columns:1fr; } }
        .ar-featured-img { position:relative; min-height:320px; }
        .ar-featured-img img { width:100%; height:100%; object-fit:cover; position:absolute; inset:0; }
        .ar-featured-img::after { content:''; position:absolute; inset:0; background:linear-gradient(to right,transparent,rgba(28,21,9,.95)); }
        @media(max-width:768px){ .ar-featured-img::after { background:linear-gradient(to top,rgba(28,21,9,.95),transparent); } }
        .ar-featured-body { background:#1c1509; padding:40px 36px; display:flex; flex-direction:column; justify-content:center; }
        .ar-feat-badge { display:inline-block; font-family:'Lato',sans-serif; font-size:9px; letter-spacing:.2em; text-transform:uppercase; background:rgba(184,150,62,.2); border:1px solid rgba(184,150,62,.4); color:#c9a452; padding:4px 12px; border-radius:2px; margin-bottom:16px; width:fit-content; }
        .ar-feat-title { font-size:clamp(22px,3vw,32px); font-weight:700; color:#fff; line-height:1.2; margin-bottom:12px; }
        .ar-feat-ring { font-family:'Lato',sans-serif; font-size:13px; color:rgba(255,255,255,.5); line-height:1.7; margin-bottom:20px; }
        .ar-feat-meta { font-family:'Lato',sans-serif; font-size:11px; color:rgba(255,255,255,.3); margin-bottom:20px; display:flex; gap:16px; flex-wrap:wrap; }
        .ar-feat-btn { display:inline-flex; align-items:center; gap:8px; padding:11px 22px; border:1px solid rgba(184,150,62,.5); color:#c9a452; font-family:'Lato',sans-serif; font-size:12px; letter-spacing:.08em; background:transparent; transition:all .3s; width:fit-content; }
        .ar-feat-btn:hover { background:#b8963e; color:#12100a; }

        /* GRID ARTIKEL */
        .ar-grid-wrap { max-width:1200px; margin:0 auto; padding:48px 24px 64px; }
        .ar-grid-label { font-family:'Lato',sans-serif; font-size:11px; letter-spacing:.25em; color:#b8963e; text-transform:uppercase; margin-bottom:6px; }
        .ar-grid-title { font-size:22px; font-weight:700; color:#fff; margin-bottom:28px; }
        .ar-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        @media(max-width:900px){ .ar-grid { grid-template-columns:repeat(2,1fr); } }
        @media(max-width:500px){ .ar-grid { grid-template-columns:1fr; } }
        .ar-card { background:#1c1509; border-radius:12px; overflow:hidden; transition:transform .3s,box-shadow .3s; text-decoration:none; display:block; }
        .ar-card:hover { transform:translateY(-5px); box-shadow:0 20px 40px rgba(0,0,0,.4); }
        .ar-card-img { position:relative; height:180px; }
        .ar-card-img img { width:100%; height:100%; object-fit:cover; }
        .ar-card-img::after { content:''; position:absolute; inset:0; background:linear-gradient(to top,rgba(8,5,1,.9) 0%,transparent 60%); }
        .ar-card-badge { position:absolute; top:12px; left:12px; z-index:2; font-family:'Lato',sans-serif; font-size:9px; letter-spacing:.18em; text-transform:uppercase; background:rgba(139,105,20,.85); color:#fff; padding:3px 8px; border-radius:2px; }
        .ar-card-body { padding:20px; }
        .ar-card-title { font-size:18px; font-weight:700; color:#fff; line-height:1.3; margin-bottom:8px; }
        .ar-card-ring { font-family:'Lato',sans-serif; font-size:12px; color:rgba(255,255,255,.4); line-height:1.6; margin-bottom:14px; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
        .ar-card-meta { font-family:'Lato',sans-serif; font-size:11px; color:rgba(255,255,255,.25); display:flex; align-items:center; justify-content:space-between; }
        .ar-card-read { color:#c9a452; font-size:12px; }

        /* EMPTY */
        .ar-empty { text-align:center; padding:80px 24px; font-family:'Lato',sans-serif; color:rgba(255,255,255,.3); font-size:14px; }

        /* CTA BAWAH */
        .ar-cta { background:#1c1509; border-top:1px solid rgba(184,150,62,.15); padding:64px 24px; text-align:center; }
        .ar-cta-inner { max-width:520px; margin:0 auto; }
        .ar-cta-eyebrow { font-family:'Lato',sans-serif; font-size:11px; letter-spacing:.35em; color:#c9a452; text-transform:uppercase; margin-bottom:12px; }
        .ar-cta-title { font-size:28px; font-weight:700; color:#fff; margin-bottom:8px; }
        .ar-cta-sub { font-family:'Lato',sans-serif; font-size:13px; color:rgba(255,255,255,.4); margin-bottom:28px; line-height:1.7; }
        .ar-cta-btns { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
        .ar-cta-btn-outline { padding:12px 28px; border:1px solid rgba(184,150,62,.5); color:#c9a452; font-family:'Lato',sans-serif; font-size:13px; text-decoration:none; transition:all .3s; }
        .ar-cta-btn-outline:hover { background:#b8963e; color:#12100a; }
        .ar-cta-btn-solid { padding:12px 28px; background:#b8963e; color:#12100a; font-family:'Lato',sans-serif; font-size:13px; font-weight:700; text-decoration:none; transition:background .3s; border-radius:4px; }
        .ar-cta-btn-solid:hover { background:#d4a843; }
      `}</style>

      {/* 1. HEADER */}
      <div className="ar-header">
        <div className="ar-header-bg">
          <img
            src="../src/assets/images/bangunan_hero_section.png"
            alt=""
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
        <div className="ar-header-inner">
          <p className="ar-eyebrow">
            <span>──</span> Warisan Tertulis <span>──</span>
          </p>
          <h1 className="ar-title">Artikel Budaya</h1>
          <div className="ar-gold-line" />
          <p className="ar-desc">
            Bacaan mendalam seputar kekayaan budaya dan tradisi Daerah Istimewa
            Yogyakarta.
          </p>
        </div>
      </div>

      {/* 2. SEARCH + FILTER */}
      <div className="ar-controls">
        <div className="ar-controls-inner">
          <input
            type="text"
            placeholder="Cari artikel..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="ar-search"
          />
          <div className="ar-filter-wrap">
            {kategoriArtikel.map((kat) => (
              <button
                key={kat}
                className={`ar-filter-btn ${aktif === kat ? "active" : ""}`}
                onClick={() => setAktif(kat)}
              >
                {kat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="ar-empty">
          <p>Artikel tidak ditemukan.</p>
          <button
            onClick={() => {
              setAktif("Semua");
              setSearch("");
            }}
            style={{
              marginTop: "12px",
              background: "transparent",
              border: "1px solid rgba(184,150,62,.4)",
              color: "#c9a452",
              padding: "8px 20px",
              cursor: "pointer",
              fontFamily: "'Lato',sans-serif",
              fontSize: "12px",
            }}
          >
            Reset Filter
          </button>
        </div>
      ) : (
        <>
          {/* 3. FEATURED */}
          {featured && (
            <div className="ar-featured-wrap">
              <div className="ar-featured-label">── Artikel Pilihan ──</div>
              <Link to={`/budaya/${featured.id}`} className="ar-featured">
                <div className="ar-featured-img">
                  <img
                    src={featured.gambar}
                    alt={featured.judul}
                    onError={(e) => {
                      e.target.src = `https://placehold.co/700x400/2d1f0a/c9a84c?text=${featured.judul}`;
                    }}
                  />
                </div>
                <div className="ar-featured-body">
                  <span className="ar-feat-badge">{featured.kategori}</span>
                  <h2 className="ar-feat-title">{featured.judul}</h2>
                  <p className="ar-feat-ring">{featured.ringkasan}</p>
                  <div className="ar-feat-meta">
                    <span>📅 {featured.tanggal}</span>
                    <span>⏱ {featured.menit}</span>
                    <span>✍️ {featured.penulis}</span>
                  </div>
                  <span className="ar-feat-btn">Baca Artikel →</span>
                </div>
              </Link>
            </div>
          )}

          {/* 4. GRID */}
          {lainnya.length > 0 && (
            <div className="ar-grid-wrap">
              <div className="ar-grid-label">── Artikel Lainnya ──</div>
              <div className="ar-grid-title">Cerita Budaya Lainnya</div>
              <div className="ar-grid">
                {lainnya.map((artikel) => (
                  <Link
                    key={artikel.id}
                    to={`/budaya/${artikel.id}`}
                    className="ar-card"
                  >
                    <div className="ar-card-img">
                      <img
                        src={artikel.gambar}
                        alt={artikel.judul}
                        onError={(e) => {
                          e.target.src = `https://placehold.co/600x200/2d1f0a/c9a84c?text=${artikel.judul}`;
                        }}
                      />
                      <span className="ar-card-badge">{artikel.kategori}</span>
                    </div>
                    <div className="ar-card-body">
                      <h3 className="ar-card-title">{artikel.judul}</h3>
                      <p className="ar-card-ring">{artikel.ringkasan}</p>
                      <div className="ar-card-meta">
                        <span>
                          📅 {artikel.tanggal} · ⏱ {artikel.menit}
                        </span>
                        <span className="ar-card-read">Baca →</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* 5. CTA */}
      <div className="ar-cta">
        <div className="ar-cta-inner">
          <p className="ar-cta-eyebrow">Lebih dari Sekadar Membaca</p>
          <h3 className="ar-cta-title">Rasakan Budayanya Langsung</h3>
          <p className="ar-cta-sub">
            Bergabunglah dalam open trip budaya Yogyakarta dan jadikan setiap
            cerita menjadi pengalaman nyata.
          </p>
          <div className="ar-cta-btns">
            <Link to="/budaya" className="ar-cta-btn-outline">
              ← Semua Budaya
            </Link>
            <Link to="/trip" className="ar-cta-btn-solid">
              Lihat Open Trip →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
