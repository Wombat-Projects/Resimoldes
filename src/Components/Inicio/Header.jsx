import React from 'react';
import "./Inicio.css";

const Header = () => {
    return (
    <> 
    <div className="container-principal">
        <div>   </div>
        <div className="logo"> <img src="https://i.imgur.com/rOPvZaF.png" alt="wombat logo" className='logo' /> </div>  
        <div className='Logo-login'> <a href="#"><ion-icon name="person"  size="large"></ion-icon></a></div>
    </div>

    {/* HEADER */}
    <nav class="navbar navbar-expand-lg navbar-light header">
        <div class="container-fluid">

            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>   

            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <a class="navbar-brand hover-underline" href="#">Inicio</a>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link hover-underline" aria-current="page" href="#">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link hover-underline" href="#aboutus">Sobre Nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link hover-underline" href="#contacto">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    
    </>

    )
}

export default Header