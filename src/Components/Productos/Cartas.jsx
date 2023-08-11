import React from 'react'

const Cartas = ({producto}) => {
  return (
    <div className='product-card'>
      <img src={producto.imageUrl} alt={producto.name} />
      <h3 className='nameProduct'>{producto.name}</h3>
      <p>{producto.price}</p>
    </div>
  )
}

export default Cartas