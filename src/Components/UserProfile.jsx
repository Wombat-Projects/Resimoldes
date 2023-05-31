import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../store/userSlice"; // Asegúrate de importar la acción setUser desde el archivo correcto

// Función para realizar la consulta GraphQL
async function fetchGraphQL(query, variables = {}) {
  const response = await fetch("http://localhost:3000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  return response.json();
}

// Consulta GraphQL
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
function UserProfile() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const response = await fetchGraphQL(GET_USER_QUERY);

      if (response.data && response.data.getUser) {
        dispatch(setUser(response.data.getUser));
      }
    }

    fetchData();
  }, [dispatch]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Username: {user.username}</p>
      <p>Password: {user.password}</p>
      <p>ID: {user.id}</p>
    </div>
  );
}
 export default UserProfile;