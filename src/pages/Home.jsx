import React from "react";
import Header from "../Components/Inicio/Header";
import Slider from "../Components/Inicio/Slider";
import Footer from "../Components/Inicio/Footer";
import Cuadro from "../Components/Inicio/Cuadro";
import Forms from "../Components/Inicio/forms-contactos";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Cuadro />
      <Forms />
      <Footer />
    </div>
  );
};

export default Home;
