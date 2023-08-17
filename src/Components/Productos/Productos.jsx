import React, { useState } from 'react'
import "./productos.css"
import Filtro from './Filtro'
import Cartas from './Cartas'

const listado = [
    {
        id: 1,
        name: 'Molde-1',
        price: '₡2.000',
        category: 'Moldes',
        imageUrl: 'https://i.pinimg.com/564x/39/61/ab/3961ab8dd6a2e963101aa3c507aa8ea9.jpg',
      },
      {
        id: 2,
        name: 'Molde-2',
        price: '₡2.000',
        category: 'Moldes',
        imageUrl: 'https://i.pinimg.com/564x/39/61/ab/3961ab8dd6a2e963101aa3c507aa8ea9.jpg',
      },
      {
        id: 3,
        name: 'Molde-3',
        price: '₡2.000',
        category: 'Moldes',
        imageUrl: 'https://i.pinimg.com/564x/39/61/ab/3961ab8dd6a2e963101aa3c507aa8ea9.jpg',
      },
      //=======================================================================================
      //=======================================================================================
      {
        id: 4,
        name: 'Pigmento Rojo',
        price: '₡2.000',
        category: 'Pigmentos',
        imageUrl: 'https://i.pinimg.com/564x/39/61/ab/3961ab8dd6a2e963101aa3c507aa8ea9.jpg',
      },
      {
        id: 5,
        name: 'Pigmento Azul',
        price: '₡2.000',
        category: 'Pigmentos',
        imageUrl: 'https://i.pinimg.com/564x/39/61/ab/3961ab8dd6a2e963101aa3c507aa8ea9.jpg',
      },
      {
        id: 6,
        name: 'Pigmento Negro',
        price: '₡2.000',
        category: 'Pigmentos',
        imageUrl: 'https://i.pinimg.com/564x/39/61/ab/3961ab8dd6a2e963101aa3c507aa8ea9.jpg',
      },
      //=======================================================================================
      //=======================================================================================
      {
        id: 7,
        name: 'Decoración-1',
        price: '₡2.000',
        category: 'Decoracion',
        imageUrl: 'https://i.pinimg.com/564x/39/61/ab/3961ab8dd6a2e963101aa3c507aa8ea9.jpg',
      },
      {
        id: 8,
        name: 'Decoración-2',
        price: '₡2.000',
        category: 'Decoracion',
        imageUrl: 'https://i.pinimg.com/564x/39/61/ab/3961ab8dd6a2e963101aa3c507aa8ea9.jpg',
      },
      {
        id: 9,
        name: 'Decoración-3',
        price: '₡2.000',
        category: 'Decoracion',
        imageUrl: 'https://i.pinimg.com/564x/39/61/ab/3961ab8dd6a2e963101aa3c507aa8ea9.jpg',
      },
      //=======================================================================================
      //=======================================================================================
      {
        id: 10,
        name: 'Herramienta-1',
        price: '₡2.000',
        category: 'Herramientas',
        imageUrl: 'https://i.pinimg.com/564x/39/61/ab/3961ab8dd6a2e963101aa3c507aa8ea9.jpg',
      },
      {
        id: 11,
        name: 'Herramienta-2',
        price: '₡2.000',
        category: 'Herramientas',
        imageUrl: 'https://i.pinimg.com/564x/39/61/ab/3961ab8dd6a2e963101aa3c507aa8ea9.jpg',
      },
      {
        id: 12,
        name: 'Herramienta-3',
        price: '₡2.000',
        category: 'Herramientas',
        imageUrl: 'https://i.pinimg.com/564x/39/61/ab/3961ab8dd6a2e963101aa3c507aa8ea9.jpg',
      },
      //=======================================================================================
      //=======================================================================================
      {
        id: 13,
        name: 'Resinas-1',
        price: '₡2.000',
        category: 'Resinas',
        imageUrl: 'https://i.pinimg.com/564x/39/61/ab/3961ab8dd6a2e963101aa3c507aa8ea9.jpg',
      },
      {
        id: 14,
        name: 'Resinas-2',
        price: '₡2.000',
        category: 'Resinas',
        imageUrl: 'https://i.pinimg.com/564x/39/61/ab/3961ab8dd6a2e963101aa3c507aa8ea9.jpg',
      },
      {
        id: 15,
        name: 'Resinas-3',
        price: '₡2.000',
        category: 'Resinas',
        imageUrl: 'https://i.pinimg.com/564x/39/61/ab/3961ab8dd6a2e963101aa3c507aa8ea9.jpg',
      },
      //=======================================================================================
      //=======================================================================================
      {
        id: 16,
        name: 'Bisutería-1',
        price: '₡2.000',
        category: 'Bisutería',
        imageUrl: 'https://i.pinimg.com/564x/39/61/ab/3961ab8dd6a2e963101aa3c507aa8ea9.jpg',
      },
      {
        id: 17,
        name: 'Bisutería-2',
        price: '₡2.000',
        category: 'Bisutería',
        imageUrl: 'https://i.pinimg.com/564x/39/61/ab/3961ab8dd6a2e963101aa3c507aa8ea9.jpg',
      },
      {
        id: 18,
        name: 'Bisutería-3',
        price: '₡2.000',
        category: 'Bisutería',
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