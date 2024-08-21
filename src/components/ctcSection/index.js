import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css'; // Import custom CSS for additional styling

const CTASections = () => {
  return (
    <div className="cta-sections py-5">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-6 mb-4">
            <div className="cta-card vendor-cta">
              <h2>Join Our Network of Vendors</h2>
              <p>
                Are you a vendor looking to showcase your services and expand your reach? Join our platform and connect with potential clients for upcoming events. 
                Gain visibility, increase your business opportunities, and grow with us!
              </p>
              <a href="https://evobuz-vendor.vercel.app" className="btn btn-primary btn-lg">Join as Vendor</a>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="cta-card customer-cta">
              <h2>Discover Unforgettable Events</h2>
              <p>
                Looking for the perfect event planning solution? Explore our platform to find top-notch vendors, manage your events effortlessly, and make your occasions memorable. 
                Get started now and experience event planning like never before!
              </p>
              <a href="https://evobuz-customer.vercel.app/signup" className="btn btn-secondary btn-lg">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASections;
