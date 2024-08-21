import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const CustomerCarouselComponent = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel"  data-bs-interval="2000">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={require('../../assets/customers/flat-style-wedding-people_24908-57563.avif')} className="d-block w-100 image-carousel" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={require('../../assets/customers/group-friends-eating-restaurant_23-2148006604.avif')} className="d-block w-100 image-carousel" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={require('../../assets/customers/medium-shot-happy-people-celebrating_23-2149295583.avif')} className="d-block w-100 image-carousel" alt="Slide 3" />
        </div>
        <div className="carousel-item">
          <img src={require('../../assets/customers/people-taking-part-business-event_23-2149333693.avif')} className="d-block w-100 image-carousel" alt="Slide 4" />
        </div>
        <div className="carousel-item">
          <img src={require('../../assets/customers/side-view-smiley-friends-flea-market_23-2149536964.avif')} className="d-block w-100 image-carousel" alt="Slide 5" />
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

export default CustomerCarouselComponent;
