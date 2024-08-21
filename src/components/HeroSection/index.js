import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css'; // Import custom CSS for additional styling
import CarouselComponent from '../HeaderCarousel';
import PopUp from '../popup';

const HeroSection = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleGetStartedClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="hero-section text-center text-white py-5">
      <div className="container d-flex flex-column flex-md-row align-items-center">
        <div className="w-100 w-md-50 mb-4 mb-md-0">
          <CarouselComponent />
        </div>
        <div className="text-center text-md-center p-md-5 p-3">
          <h1 className="display-4 fw-bold">One-Stop Application for Event Planning</h1>
          <p className="lead my-4">
            Effortlessly plan and manage your events with our all-in-one platform.<br />
            Connect with vendors, streamline logistics, and make every event unforgettable.
          </p>
          <div className="cta-buttons mt-4">
            <button onClick={handleGetStartedClick} className="btn btn-primary btn-lg me-3">Get Started</button>
            <a href="https://evobuz-vendor.vercel.app/" className="btn btn-outline-light btn-lg me-3">Join as Vendor</a>
            <br />
            <a href="https://evobuz-customer.vercel.app/signup" className="btn btn-secondary btn-lg">Explore Services</a>
          </div>
        </div>
      </div>

      {isPopupVisible && <PopUp onClose={handleClosePopup} />}
    </div>
  );
};

export default HeroSection;
