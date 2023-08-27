import React, {useEffect} from "react";
import Header from "../Components/Inicio/Header";
import Slider from "../Components/Inicio/Slider";
import { useLocation } from 'react-router-dom';

const Home = () => {
  //Esto es lo ocupa para cada seccion en especifico
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash === '#seccionEspecifica') {
      const element = document.getElementById('seccionEspecifica');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);
  return (
    <div>
      <Header />
      <Slider />
      <div id="seccionEspecifica">
        <h1>Hola</h1>
      </div>
    </div>
  );
};

export default Home;
