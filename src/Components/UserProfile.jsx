import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../store/userSlice"; // Asegúrate de importar la acción setUser desde el archivo correcto

// Función para realizar la consulta GraphQL
async function fetchGraphQL(query, variables = {}) {
  const response = await fetch(
    "http://localhost:3000/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    }
  );

  return response.json();
}

// Consulta GraphQL
const CREATE_USER_MUTATION = `
mutation CreateUser($input: UserInput!, $creatorInput: CreatorInput!) {
  createUser(input: $input, creatorInput: $creatorInput) {
    name
    username
    password
    id
    creator {
      name
      email
    }
  }
}
`;
const GET_USER_QUERY = `
query {
  getUser(id: 1) {
    name
    username
    password
    id
  }
}
`;

// Componente UserProfile
// Componente UserProfile
function UserProfile() {
  const [newUserName, setNewUserName] = useState('');
  const [newUserUsername, setNewUserUsername] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');
  const [createdUser, setCreatedUser] = useState(null); // Estado para almacenar el usuario creado

  async function handleCreateUser() {
    const userInput = {
      name: newUserName,
      username: newUserUsername,
      password: newUserPassword,
    };

    const response = await fetchGraphQL(CREATE_USER_MUTATION, {
      input: userInput,
    });

    if (response.data && response.data.createUser) {
      setCreatedUser(response.data.createUser);
    }

    // Limpia los campos después de la creación
    setNewUserName('');
    setNewUserUsername('');
    setNewUserPassword('');
  }

  return (
    <div>
      {createdUser ? (
        <div>
          <h2>Usuario Creado:</h2>
          <p>Nombre: {createdUser.name}</p>
          <p>Nombre de Usuario: {createdUser.username}</p>
          <p>ID: {createdUser.id}</p>
        </div>
      ) : (
        <div>
          <h2>Crear Nuevo Usuario</h2>
          <input
            type="text"
            placeholder="Nombre"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nombre de Usuario"
            value={newUserUsername}
            onChange={(e) => setNewUserUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={newUserPassword}
            onChange={(e) => setNewUserPassword(e.target.value)}
          />
          <button onClick={handleCreateUser}>Crear usuario</button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;