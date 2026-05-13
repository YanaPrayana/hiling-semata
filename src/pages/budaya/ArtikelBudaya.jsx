import { dataArtikel } from "../../services/data/budayaData";

export default function ArtikelBudaya() {
  return (
    <div
      style={{
        padding: "100px 20px",
        textAlign: "center",
        background: "#fdfaf3",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#8b6914" }}>Artikel Budaya</h1>
      <div
        style={{
          maxWidth: "800px",
          margin: "40px auto",
          textAlign: "left",
          background: "white",
          padding: "40px",
          borderRadius: "20px",
        }}
      >
        {dataArtikel.map((artikel) => (
          <div key={artikel.id}>
            <img
              src={artikel.image}
              style={{ width: "100%", borderRadius: "10px" }}
              alt={artikel.title}
            />
            <h2 style={{ marginTop: "20px" }}>{artikel.title}</h2>
            <p style={{ color: "#555", lineHeight: "1.8" }}>
              {artikel.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
