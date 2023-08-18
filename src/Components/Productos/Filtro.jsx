import React from "react";

const Filtro = ({ onFilterChange }) => {
  const handleFilterChamge = (event) => {
    const selectedOption = event.target.value;
    onFilterChange(selectedOption);
  };
  return (
    <div className="product-filter">
      <h1 className="product-title">Categorías</h1>
      <select className="custom-select" onChange={handleFilterChamge}>
        <option value="">Mostrar todos</option>
        <option value="Moldes">Moldes de silicón</option>
        <option value="Pigmentos">Pigmentos</option>
        <option value="Decoracion">Decoración</option>
        <option value="Herramientas">Herramientas</option>
        <option value="Resinas">Resinas</option>
        <option value="Bisutería">Bisutería</option>
      </select>
    </div>
  );
};

export default Filtro;
