import { useState } from "react";
import { Link } from "react-router-dom";
import "../../style/User/register.css";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="registerPage">
      <div className="registerShell">
        <div className="registerHero" role="region" aria-label="Register">
          <div className="registerGlass">
            <div className="registerCopy">
              <h1 className="registerHeading">Buat Akun Baru</h1>
              <p className="registerSubheading">
                Isi data diri Anda untuk mulai menggunakan layanan Hiling Semata.
              </p>
            </div>

            <form className="registerForm">
              <div className="registerField">
                <label className="registerLabel" htmlFor="fullName">
                  Nama lengkap
                </label>
                <input
                  className="registerInput"
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Masukkan nama lengkap"
                  autoComplete="name"
                />
              </div>

              <div className="registerField">
                <label className="registerLabel" htmlFor="email">
                  Email
                </label>
                <input
                  className="registerInput"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Masukkan email"
                  autoComplete="email"
                />
              </div>

              <div className="registerField">
                <label className="registerLabel" htmlFor="phone">
                  Nomor HP
                </label>
                <input
                  className="registerInput"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Masukkan nomor HP"
                  autoComplete="tel"
                />
              </div>

              <div className="registerField">
                <label className="registerLabel" htmlFor="password">
                  Kata sandi
                </label>
                <div className="registerInputWrap">
                  <input
                    className="registerInput registerInputWithToggle"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Masukkan kata sandi"
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className="registerToggleBtn"
                    onClick={() => setShowPassword((value) => !value)}
                    aria-pressed={showPassword}
                    aria-label={showPassword ? "Sembunyikan kata sandi" : "Lihat kata sandi"}
                  >
                    {showPassword ? "Sembunyi" : "Lihat"}
                  </button>
                </div>
              </div>

              <div className="registerField">
                <label className="registerLabel" htmlFor="confirmPassword">
                  Konfirmasi kata sandi
                </label>
                <div className="registerInputWrap">
                  <input
                    className="registerInput registerInputWithToggle"
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Konfirmasi kata sandi"
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className="registerToggleBtn"
                    onClick={() => setShowConfirmPassword((value) => !value)}
                    aria-pressed={showConfirmPassword}
                    aria-label={showConfirmPassword ? "Sembunyikan konfirmasi kata sandi" : "Lihat konfirmasi kata sandi"}
                  >
                    {showConfirmPassword ? "Sembunyi" : "Lihat"}
                  </button>
                </div>
              </div>

              <button type="submit" className="registerPrimaryBtn">
                Daftar
              </button>

              <div className="registerDivider" aria-hidden="true">
                <span className="registerDividerLine" />
                <span className="registerDividerText">OR</span>
                <span className="registerDividerLine" />
              </div>

              <button type="button" className="registerGoogleBtn">
                Daftar dengan Google
              </button>
            </form>

            <div className="registerBottomText">
              <span>Sudah punya akun?</span>
              <Link to="/login" className="registerBottomLink">
                Masuk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;