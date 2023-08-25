import React, { useState } from 'react'
import "./productos.css"
import Filtro from './Filtro'
import Cartas from './Cartas'

const listado = [
    {
        id: 1,
        name: 'Otoño',
        price: '₡2.000',
        category: 'Moldes',
        imageUrl: 'https://i.ibb.co/NTq7c3d/molde-1.jpg',
      },
      {
        id: 2,
        name: 'Mar',
        price: '₡2.000',
        category: 'Moldes',
        imageUrl: 'https://i.ibb.co/LrRN6S4/molde2.webp',
      },
      {
        id: 3,
        name: 'Navideño',
        price: '₡2.000',
        category: 'Moldes',
        imageUrl: 'https://i.ibb.co/0Fy6Drt/molde3.jpg',
      },
      //=======================================================================================
      //=======================================================================================
      {
        id: 4,
        name: 'Pigmento Rojo',
        price: '₡2.000',
        category: 'Pigmentos',
        imageUrl: 'https://i.ibb.co/Xs1cW7f/rojo.webp',
      },
      {
        id: 5,
        name: 'Pigmento Azul',
        price: '₡2.000',
        category: 'Pigmentos',
        imageUrl: 'https://i.ibb.co/NKY9w0H/azul.webp',
      },
      {
        id: 6,
        name: 'Pigmento Blanco',
        price: '₡2.000',
        category: 'Pigmentos',
        imageUrl: 'https://i.ibb.co/y53697y/blanco.webp',
      },
      //=======================================================================================
      //=======================================================================================
      {
        id: 7,
        name: 'Hojas plasticas',
        price: '₡2.000',
        category: 'Decoracion',
        imageUrl: 'https://i.ibb.co/pzs3cFR/hojas.webp',
      },
      {
        id: 8,
        name: 'Decoración Naturaleza',
        price: '₡2.000',
        category: 'Decoracion',
        imageUrl: 'https://i.ibb.co/qMjgF98/hojas2.jpg',
      },
      {
        id: 9,
        name: 'Papeles Dorados',
        price: '₡2.000',
        category: 'Decoracion',
        imageUrl: 'https://i.ibb.co/k9qdGQD/papelitos.jpg',
      },
      //=======================================================================================
      //=======================================================================================
      {
        id: 10,
        name: 'Alicate',
        price: '₡2.000',
        category: 'Herramientas',
        imageUrl: 'https://i.ibb.co/brTJbK3/alicate.jpg',
      },
      {
        id: 11,
        name: 'Alicate Cousin',
        price: '₡2.000',
        category: 'Herramientas',
        imageUrl: 'https://i.ibb.co/16LrzCz/Alicate2.jpg',
      },
      {
        id: 12,
        name: 'Kit basico',
        price: '₡2.000',
        category: 'Herramientas',
        imageUrl: 'https://i.ibb.co/Gx2Zj4c/Paquete-Ali.jpg',
      },
      //=======================================================================================
      //=======================================================================================
      {
        id: 13,
        name: 'Resinas  700ml',
        price: '₡2.000',
        category: 'Resinas',
        imageUrl: 'https://i.ibb.co/yp5kf02/resina.jpg',
      },
      {
        id: 14,
        name: 'Resinas epoxi',
        price: '₡2.000',
        category: 'Resinas',
        imageUrl: 'https://i.ibb.co/YRgxQVh/resina2.jpg',
      },
      {
        id: 15,
        name: 'Resinas No toxica',
        price: '₡2.000',
        category: 'Resinas',
        imageUrl: 'https://i.ibb.co/cQSGTDG/resina3.jpg',
      },
      //=======================================================================================
      //=======================================================================================
      {
        id: 16,
        name: 'Bisutería-1',
        price: '₡2.000',
        category: 'Bisutería',
        imageUrl: 'https://i.ibb.co/8DpPbc5/deco-2.jpg',
      },
      {
        id: 17,
        name: 'Bisutería-2',
        price: '₡2.000',
        category: 'Bisutería',
        imageUrl: 'https://i.ibb.co/VW5nSnY/deco-1.jpg',
      },
      {
        id: 18,
        name: 'Bisutería-3',
        price: '₡2.000',
        category: 'Bisutería',
        imageUrl: 'https://i.ibb.co/9sWR2qG/deco-3.jpg',
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