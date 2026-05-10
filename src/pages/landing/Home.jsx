// ============================================================
// TEMPLATE HALAMAN - Ganti isi sesuai halaman masing-masing
// ============================================================

function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?yogyakarta')",
      }}
    >
      <div className="bg-black/50 absolute inset-0" />
      <div className="relative z-10 text-white text-center w-full px-4">
        <h1 className="text-5xl font-bold">Rasakan Jiwa</h1>
        <h2 className="text-6xl font-extrabold text-amber-400">Budaya Asli</h2>
        <p className="text-xl mt-4">Yogyakarta menunggumu</p>
      </div>
    </div>
  );
}

export default Home;
