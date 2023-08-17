import React from "react";

const Cartas = ({ producto }) => {
  return (
    <div className="product-card">
      <div className="product__img">
        <img src={producto.imageUrl} alt={producto.name} />
      </div>
      <div className="product__info">
        <h1>{producto.name}</h1>
      </div>
        <hr />
        <div className="price">
          <p>Costo {producto.price}</p>
          <a href="#"><i class='bx bx-cart-add'></i></a>
        </div>
    </div>
  );
};

export default Cartas;
