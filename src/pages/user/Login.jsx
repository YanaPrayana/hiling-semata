import { useState } from "react";
import { Link } from "react-router-dom";
import "../../style/User/login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="authPage">
      <div className="authShell">
        <div className="authHero" role="region" aria-label="Login">
          <div className="authGlass">
            <div className="authCopy">
              <h1 className="authHeading">Login Customer</h1>
              <p className="authSubheading">
                Masuk untuk melanjutkan eksplorasi wisata, budaya, dan open trip.
              </p>
            </div>

            <form className="authForm">
              <div className="authField">
                <label className="authLabel" htmlFor="email">
                  Email
                </label>
                <input
                  className="authInput"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Masukkan email"
                  autoComplete="email"
                />
              </div>

              <div className="authField">
                <label className="authLabel" htmlFor="password">
                  Kata sandi
                </label>
                <div className="authInputWrap">
                  <input
                    className="authInput authInputWithToggle"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Masukkan kata sandi"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="authToggleBtn"
                    onClick={() => setShowPassword((value) => !value)}
                    aria-pressed={showPassword}
                    aria-label={showPassword ? "Sembunyikan kata sandi" : "Lihat kata sandi"}
                  >
                    {showPassword ? "Sembunyi" : "Lihat"}
                  </button>
                </div>
              </div>

              <div className="authHelpRow">
                <button type="button" className="authForgot">
                  Lupa Kata Sandi?
                </button>
              </div>

              <button type="submit" className="authPrimaryBtn">
                Masuk
              </button>

              <div className="authDivider" aria-hidden="true">
                <span className="authDividerLine" />
                <span className="authDividerText">OR</span>
                <span className="authDividerLine" />
              </div>

              <button type="button" className="authGoogleBtn">
                Masuk dengan Google
              </button>
            </form>

            <div className="authBottomText">
              <span>Belum memiliki akun?</span>
              <Link to="/register" className="authBottomLink">
                Daftar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;