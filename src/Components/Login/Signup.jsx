import React, { useState } from 'react';
import './login.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      query: `
        mutation SignupUser($input: SignupInput!) {
          signupUser(input: $input) {
            id
            username
            email
          }
        }
      `,
      variables: {
        input: {
          email,
          password,
          username
        }
      }
    };

    try {
      const response = await fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
        },
        body: JSON.stringify(requestBody)
      });

      const responseData = await response.json();
      console.log('User created:', responseData.data.signupUser);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Crear Cuenta</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="username"><b>CORREO ELECTRÓNICO</b></label>
          <input type="text" id="username" placeholder="Correo electrónico" onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="password"><b>CONTRASEÑA</b></label>
          <input type="password" id="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />

          <label htmlFor="confirm-password"><b>USUARIO</b></label>
          <input type="text" id="confirm-password" placeholder="Usuario" onChange={(e) => setUsername(e.target.value)} />

          <button type="submit">Crear cuenta</button>
        </form>
      </div>
      <div className="login-right">
        <h2>Wombatmoldes</h2>
        <p className="smaller-text">¿Ya tienes una cuenta?</p>
        <a href="/" className="signup-button">Iniciar sesión</a>
      </div>
    </div>
  );
}

export default Signup;
