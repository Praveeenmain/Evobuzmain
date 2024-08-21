import React from 'react';
import './index.css';

const PopUp = ({ onClose }) => {
  // Functions to handle button clicks
  const handleExploreServicesClick = () => {
    window.location.href = 'https://evobuz-customer.vercel.app/signup';
  };

  const handleJoinVendorClick = () => {
    window.location.href = 'https://evobuz-vendor.vercel.app';
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <button onClick={onClose} className="button-close">Close</button>
        <h2>Welcome</h2>
        <p>Please choose an option:</p>
        <button onClick={handleExploreServicesClick} className="explore-services-button">
          Explore Services
        </button>
        <button onClick={handleJoinVendorClick} className="join-vendor-button">
          Join as Vendor
        </button>
      </div>
    </div>
  );
};

export default PopUp;
