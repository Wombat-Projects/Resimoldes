import React from 'react';
import "./Inicio.css";

const Footer = () => {
    return (
    <> 
        <footer>
                <div class="footer-content">
                    <div className="FContacs">
                    <h1>¡Comunicate con nosotros!</h1>
                    </div>
                    <div className="Fcontactos-info">
                        <a href="#"><ion-icon name="mail" size="large"></ion-icon> </a>
                        <a href="#"><ion-icon name="logo-github" size="large" ></ion-icon></a>
                        <a href="#"><ion-icon name="call-sharp" size="large" ></ion-icon></a>
                    </div>

                    <div class="credits">
                        <p>&copy; Wombat dev 2023 </p>
                    </div>
                </div>
            </footer>

    </> 
    )
    }

    export default Footer