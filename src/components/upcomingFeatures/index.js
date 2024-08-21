import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css'; // Import custom CSS for additional styling

const UpcomingFeatures = () => {
  return (
    <div className="upcoming-features py-5">
      <div className="container">
        <h2 className="mb-4">Upcoming Features</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
             
            <div className="feature-card">
            <img src={require('../../assets/delivery.avif')} alt="delivey" className='image-carousel-1'/>
             
              <h3>Food Delivery</h3>
              <p>
                We're excited to announce that we'll soon be adding food delivery integration to our platform. This feature will allow you to easily order food for your events or daily needs directly through our app. Stay tuned for more updates!
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="feature-card">
              <img src={require('../../assets/eccom.jpg')} alt="Ecomme" className='image-carousel-2'/>
              <h3>E-Commerce Expansion</h3>
              <p>
                Our platform is expanding to include e-commerce capabilities. This new feature will enable vendors to sell products and services directly through our app, providing a seamless shopping experience for your event needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingFeatures;
