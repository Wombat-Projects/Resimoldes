import "./Inicio.css";
import React from 'react';

const Slider = () => {
    return (
    <> 
    <div className="slider">
        <div id="carouselExampleRide" class="carousel slide carousel-fade" data-bs-ride="true" data-bs-interval="10000">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Vombatus_ursinus_-Maria_Island_National_Park.jpg/1200px-Vombatus_ursinus_-Maria_Island_National_Park.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
            <img src="https://cdn.britannica.com/22/65322-050-5AA2B60C/Common-wombat.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
            <img src="https://billiken.lat/wp-content/uploads/2022/06/wombat-SITIO-1280x720.jpg" class="d-block w-100" alt="..." />
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    </div>        
    </>

    )
}

export default Slider