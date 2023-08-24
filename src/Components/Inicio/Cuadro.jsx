import React from 'react';
import "./Inicio.css";

const Cuadro = () => { 
    return (
        <> 
        <div className="cuadro" id='aboutus'>
            <div className="contenedor-principal">
                <div className="texto grid-3-columnas">
                <h1 className='Title'>¿Quiénes somos?</h1>
                </div>              
            
                <div className="imagen primera-img">
                <img src="https://media.cnnchile.com/sites/4/2020/01/image.adapt_.1920.medium.jpg" alt="" />
                </div>
                <div className="texto">

                <p className='textBody'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, earum labore atque qui id libero illum vel optio cupiditate eaque adipisci doloremque placeat, voluptate quod quo eos! Quis, iste facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias labore tempore facere maiores odio aperiam, consectetur eligendi expedita eaque culpa laborum quo vel eius animi in quas accusantium modi suscipit.</p>
                </div>
            </div>
        </div>


        </>
    )
}

export default Cuadro