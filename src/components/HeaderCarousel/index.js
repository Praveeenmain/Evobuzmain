import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
const CarouselComponent = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel"  data-bs-interval="2000">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={require('../../assets/Eventphotos/close-up-evning-glam-prepared-table_8353-9914.avif')} className="d-block w-100 image-carousel" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={require('../../assets/Eventphotos/colleagues-having-fun-business-event_23-2149370528.avif')} className="d-block w-100 image-carousel" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={require('../../assets/Eventphotos/people-festival_1160-736.avif')} className="d-block w-100 image-carousel" alt="Slide 3" />
        </div>
        <div className="carousel-item">
          <img src={require('../../assets/Eventphotos/people-having-fun-wedding-hall_1303-19593.avif')} className="d-block w-100 image-carousel" alt="Slide 4" />
        </div>
        <div className="carousel-item">
          <img src={require('../../assets/Eventphotos/people-taking-part-high-protocol-event_23-2150951261.avif')} className="d-block w-100 image-carousel" alt="Slide 5" />
        </div>
        <div className="carousel-item">
          <img src={require('../../assets/Eventphotos/people-taking-part-high-protocol-event_23-2150951399.avif')} className="d-block w-100 image-carousel" alt="Slide 5" />
        </div>
        <div className="carousel-item">
          <img src={require('../../assets/Eventphotos/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481485.avif')} className="d-block w-100 image-carousel" alt="Slide 5" />
        </div>
        <div className="carousel-item">
          <img src={require('../../assets/Eventphotos/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481534.avif')} className="d-block w-100 image-carousel" alt="Slide 5" />
        </div>
        <div className="carousel-item">
          <img src={require('../../assets/Eventphotos/view-black-white-person-attending-theatre_23-2151184584.jpg')} className="d-block w-100 image-carousel" alt="Slide 5" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselComponent;
