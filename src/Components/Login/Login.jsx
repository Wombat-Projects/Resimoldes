import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToHome, setRedirectToHome] = useState(false); // Estado para redirección
  const navigate = useNavigate();

  const handleLogin = () => {
    // Comprueba si los datos ingresados son válidos
    if (email === "admin@admin.com" && password === "password") {
      // Establece el estado para redirigir
      setRedirectToHome(true);
    } else {
      // Muestra un mensaje de error o realiza alguna otra acción
      navigate("/");
    }
  };

  if (redirectToHome) {
    // Si redirectToHome es true, redirige al usuario a la página "home"
    return navigate("/home");
  }

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Iniciar Sesión</h1>
        <form className="login-form">
          <label htmlFor="username">
            <b>CORREO ELECTRÓNICO</b>
          </label>
          <input
            type="text"
            id="username"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">
            <b>CONTRASEÑA</b>
          </label>
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="button" onClick={handleLogin}>
            Iniciar sesión
          </button>

          <div className="checkbox-group">
            <label className="remember-checkbox">
              <input type="checkbox" defaultChecked /> Recuérdame
              <span className="checkmark"></span>
            </label>
            <a href="#" className="forgot-password">
              Olvidé mi contraseña
            </a>
          </div>
        </form>
      </div>
      <div className="login-right">
        <h2>Wombatmoldes</h2>
        <p className="smaller-text">¿No tienes una cuenta?</p>
        <a href="/registro" className="signup-button">
          Registrarse
        </a>
      </div>
    </div>
  );
};

export default Login;
