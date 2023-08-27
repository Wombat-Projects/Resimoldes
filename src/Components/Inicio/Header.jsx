import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Inicio.css";

const Header = () => {
    const navigate = useNavigate();
    return (
        <> 
        <div className="container-principal">
            <div> </div>
            <div className="logo"> <h1> Wombatmoldes</h1> </div>  
            <div className='Logo-login'> 
                {/* Usa la función navigate en lugar de <a> */}
                <button onClick={() => navigate("/")}>
                    <ion-icon name="person" size="large"></ion-icon>
                </button>
            </div>
        </div>

        {/* HEADER */}
        <nav className="navbar navbar-expand-lg navbar-light header">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>   

                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <button className="navbar-brand hover-underline" onClick={() => navigate("/home")}>
                        Inicio
                    </button>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button className="nav-link hover-underline" onClick={() => navigate("/products")}>
                                Productos
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link hover-underline" onClick={() => navigate("/home#seccionEspecifica")}>
                                Sobre Nosotros
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link hover-underline" onClick={() => navigate("/home#forms")}>
                                Contacto
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Header;
