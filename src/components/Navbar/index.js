import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css'; // Import custom CSS for additional styling
import Logo from '../../assets/Logo.png'; // Corrected path for the logo image
import PopUp from '../popup';

const Navbar = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleSignUpClick = (event) => {
    event.preventDefault(); // Prevent default link behavior
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-transparent">
      <div className="container">
        {/* Logo with link */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={Logo} alt="Evobuz Logo" className="navbar-logo" />
          <span className="ms-2 text-white d-none d-lg-inline">Evobuz</span> {/* Hide text on smaller screens */}
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="https://evobuz-customer.vercel.app/signup">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="https://evobuz-vendor.vercel.app/about">About Us</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link text-white" href="/contact">Contact</a>
            </li> */}
            <li className="nav-item">
              <a
                href="/signup"
                className="btn btn-primary ms-2"
                onClick={handleSignUpClick}
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
      {isPopupVisible && <PopUp onClose={handleClosePopup} />}
    </nav>
  );
};

export default Navbar;
