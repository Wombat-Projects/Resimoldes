import React, { useState } from 'react'
import "./productos.css"
import Filtro from './Filtro'
import Cartas from './Cartas'

const listado = [
    {
        id: 1,
        name: 'Producto 1',
        price: '$19.99',
        category: 'avanzado',
        imageUrl: 'https://i.pinimg.com/564x/39/61/ab/3961ab8dd6a2e963101aa3c507aa8ea9.jpg',
      },
      {
        id: 2,
        name: 'Producto 2',
        price: '$29.99',
        category: 'basico',
        imageUrl: 'https://i.pinimg.com/564x/39/61/ab/3961ab8dd6a2e963101aa3c507aa8ea9.jpg',
      },
      {
        id: 3,
        name: 'Producto 1',
        price: '$19.99',
        category: 'basico',
        imageUrl: 'https://i.pinimg.com/564x/39/61/ab/3961ab8dd6a2e963101aa3c507aa8ea9.jpg',
      },
      {
        id: 4,
        name: 'Producto 2',
        price: '$29.99',
        category: 'basico',
        imageUrl: 'https://i.pinimg.com/564x/39/61/ab/3961ab8dd6a2e963101aa3c507aa8ea9.jpg',
      },
      {
        id: 5,
        name: 'Producto 1',
        price: '$19.99',
        category: 'basico',
        imageUrl: 'https://i.pinimg.com/564x/39/61/ab/3961ab8dd6a2e963101aa3c507aa8ea9.jpg',
      },
      {
        id: 6,
        name: 'Producto 2',
        price: '$29.99',
        category: 'basico',
        imageUrl: 'https://i.pinimg.com/564x/39/61/ab/3961ab8dd6a2e963101aa3c507aa8ea9.jpg',
      },
      {
        id: 7,
        name: 'Producto 1',
        price: '$19.99',
        category: 'avanzado',
        imageUrl: 'https://i.pinimg.com/564x/39/61/ab/3961ab8dd6a2e963101aa3c507aa8ea9.jpg',
      },
      {
        id: 8,
        name: 'Producto 1',
        price: '$19.99',
        category: 'avanzado',
        imageUrl: 'https://i.pinimg.com/564x/39/61/ab/3961ab8dd6a2e963101aa3c507aa8ea9.jpg',
      },
      {
        id: 9,
        name: 'Producto 1',
        price: '$19.99',
        category: 'avanzado',
        imageUrl: 'https://i.pinimg.com/564x/39/61/ab/3961ab8dd6a2e963101aa3c507aa8ea9.jpg',
      },
]

const Producto  = () =>{
    const [selectedFilter, setselectedFilter] = useState(null)

    const handleFilterChange  = (option) =>{
        setselectedFilter(option)
    }

    const filteredProducts = selectedFilter ? listado.filter((producto)=> producto.category === selectedFilter) : listado

  return (
    <section className="products-section">
        <div className="left-panel">
            <Filtro onFilterChange={handleFilterChange }/>
        </div>
        <div className="center-panel">
            {filteredProducts.map((producto) =>(
            <Cartas key={producto.id} producto={producto}/>
            ))}
        </div>
    </section>
  )
}

export default Producto