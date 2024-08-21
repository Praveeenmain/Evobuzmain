import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const VendorCarouselComponent = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel"  data-bs-interval="2000">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={require('../../assets/vendorphotos/close-up-volunteer-oganizing-stuff-donation_23-2149134462.avif')} className="d-block w-100 image-carousel" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={require('../../assets/vendorphotos/cooked-rice-baked-pumpkin_140725-3547.avif')} className="d-block w-100 image-carousel" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={require('../../assets/vendorphotos/full-shot-man-woman-garage-sale_23-2150540701.avif')} className="d-block w-100 image-carousel" alt="Slide 3" />
        </div>
        <div className="carousel-item">
          <img src={require('../../assets/vendorphotos/man-with-camera_23-2147689324.avif')} className="d-block w-100 image-carousel" alt="Slide 4" />
        </div>
        <div className="carousel-item">
          <img src={require('../../assets/vendorphotos/modern-equipped-computer-lab_23-2149241213.avif')} className="d-block w-100 image-carousel" alt="Slide 5" />
        </div>
        <div className="carousel-item">
          <img src={require('../../assets/vendorphotos/partners-shaking-hands-landing-page_74855-2502.avif')} className="d-block w-100 image-carousel" alt="Slide 5" />
        </div>
        <div className="carousel-item">
          <img src={require('../../assets/vendorphotos/two-indian-business-man-suits-sitting-office-cafe-looking-laptop-drinking-coffee_627829-1513.avif')} className="d-block w-100 image-carousel" alt="Slide 5" />
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

export default VendorCarouselComponent;
