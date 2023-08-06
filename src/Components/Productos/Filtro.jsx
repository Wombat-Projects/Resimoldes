import React from 'react'

const Filtro = ({onFilterChange}) => {
  const handleFilterChamge = (event) =>{
    const selectedOption = event.target.value;
    onFilterChange(selectedOption)
  }
  return (
    <div className="product-filter">
      <h1>Filtros</h1>
      <select onChange={handleFilterChamge}>
          <option value="">Mostrar todos</option>
          <option value="basico">Categoría 1</option>
          <option value="avanzado">Categoría 2</option>
      </select>
    </div>
  )
}

export default Filtro