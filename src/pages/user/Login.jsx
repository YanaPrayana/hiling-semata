import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulasi login berhasil
    // Di aplikasi nyata, Anda akan memanggil API di sini
    const userData = {
      name: "Sobat Hiling",
      email: email,
      avatar: null, // Bisa diisi URL gambar profil jika ada
    };

    // Simpan ke localStorage agar Navbar bisa mendeteksi status login
    localStorage.setItem("user", JSON.stringify(userData));

    // Arahkan ke dashboard setelah login
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-50 px-4 py-20">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header Form */}
        <div className="bg-emerald-900 p-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Selamat <span className="text-amber-400">Datang</span>
          </h2>
          <p className="text-emerald-200 mt-2 text-sm">
            Masuk untuk merencanakan petualanganmu di Yogyakarta
          </p>
        </div>

        {/* Body Form */}
        <form onSubmit={handleLogin} className="p-8 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Alamat Email
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
              placeholder="nama@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-gray-700">
                Kata Sandi
              </label>
              <a href="#" className="text-xs text-emerald-600 hover:underline">
                Lupa sandi?
              </a>
            </div>
            <input
              type="password"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg shadow-lg shadow-amber-500/30 transition-all transform hover:-translate-y-0.5"
          >
            Masuk Sekarang
          </button>

          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-xs uppercase">
              Atau
            </span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <p className="text-center text-sm text-gray-600">
            Belum punya akun?{" "}
            <Link
              to="/register"
              className="text-emerald-600 font-bold hover:text-emerald-700"
            >
              Daftar Gratis
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
