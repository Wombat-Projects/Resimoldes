import React, { useState } from "react";
import "./login.css";
import { Navigate } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Iniciar Sesión</h1>
        <form className="login-form">
          <label htmlFor="username">
            <b>CORREO ELECTRÓNICO</b>
          </label>
          <input type="text" id="username" placeholder="Correo electrónico" />

          <label htmlFor="password">
            <b>CONTRASEÑA</b>
          </label>
          <input type="text" id="password" placeholder="Contraseña"  />

          <a href="/homr"><button type="submit">Iniciar sesión</button></a>

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
        <a href="/singup" className="signup-button">
          Registrarse
        </a>
      </div>
    </div>
  );
};

export default Login;
