import React, { useState } from "react";
import "./css-forms-contacto.css";
import { Navigate } from "react-router-dom";

const Forms = () => {
  return (
    <> 
    <br /> <br /> <br /> <br /> <br /> <br />
      <div className="login-container" id='contacto'>
          <div className="login-left">
              <h1>¡ Contactanos !</h1>
              <form className="login-form">
                  <label htmlFor="username">
                    <b>NOMBRE COMPLETO</b>
                  </label>
                  <input type="text" id="username" placeholder="Nombre y apellidos" />

                  <label htmlFor="password">
                    <b>MENSAJE</b>
                  </label>
                  <input type="text" id="password" placeholder="Mensaje" rows="4" />

                  <a href="/homr"><button type="submit">Enviar</button></a>

                  
                </form>
              </div>
              <div className="login-right">
                <h2>Wombat</h2>
                <p className="smaller-text">Frase tipíca aki</p>
                
              </div>
            </div>
            <br /> <br /> <br /> <br /> <br /> <br />

      </>
  );
};

export default Forms;
