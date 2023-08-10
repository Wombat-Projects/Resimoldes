import React from 'react';
import './login.css';

function Signup() {
  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Crear Cuenta</h1>
        <form className="login-form">
          <label htmlFor="username"><b>CORREO ELECTRÓNICO</b></label>
          <input type="text" id="username" placeholder="Correo electrónico" />

          <label htmlFor="password"><b>CONTRASEÑA</b></label>
          <input type="password" id="password" placeholder="Contraseña" />

          <label htmlFor="confirm-password"><b>USUARIO</b></label>
          <input type="password" id="confirm-password" placeholder="Usuario" />

          <button type="submit">Crear cuenta</button>
        </form>
      </div>
      <div className="login-right">
        <h2>Wombatmoldes</h2>
        <p className="smaller-text">¿Ya tienes una cuenta?</p>
        <a href="#" className="signup-button">Iniciar sesión</a>
      </div>
    </div>
  );
}

export default Signup;
