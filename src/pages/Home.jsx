import React, {useEffect} from "react";
import Header from "../Components/Inicio/Header";
import Slider from "../Components/Inicio/Slider";
import { useLocation } from 'react-router-dom';
import Cuadro from "../Components/Inicio/Cuadro";
import Footer from "../Components/Inicio/Footer";
import Forms from "../Components/Inicio/forms-contactos";

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

  useEffect(() => {
    const hash = location.hash;
    if (hash === '#forms') {
      const element = document.getElementById('forms');
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
      <Cuadro />
      </div>

      <div id="forms">
      <Forms />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
