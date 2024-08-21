import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css'; // Import custom CSS for additional styling
import VendorCarouselComponent from '../Vendorcarousel';
import CustomerCarouselComponent from '../customerCarousel'
const FeaturesAndBenefits = () => {
  return (
    <div className="features-benefits-section py-5">
      <div className="container">
        <h2 className="FeatureHeading mb-4">Features and Benefits</h2>
      
        <div className="row">
          <div className="col-md-6">
            <h3>For Vendors</h3>
            <VendorCarouselComponent/>
            <ul className="list-unstyled">
             
              <li><strong>Expand Your Reach:</strong> Tap into a wider audience by listing your services on our platform. Attract new clients and grow your business.</li>
              <li><strong>Streamlined Event Management:</strong> Easily manage bookings, schedules, and client communications through our intuitive dashboard.</li>
              <li><strong>Enhanced Networking Opportunities:</strong> Connect with other industry professionals and potential partners within our network.</li>
              <li><strong>Comprehensive Analytics:</strong> Access detailed performance metrics to track your success and make informed decisions.</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h3>For Customers</h3>
            <CustomerCarouselComponent/>
            <ul className="list-unstyled">
           
              <li><strong>All-in-One Event Planning:</strong> Find and book all the services you need for your event in one place, from venues to catering.</li>
              <li><strong>Curated Vendor Selection:</strong> Browse a curated list of top-rated vendors, each vetted for quality and reliability.</li>
              <li><strong>Easy Booking and Management:</strong> Enjoy a seamless booking experience with user-friendly forms and secure payment options.</li>
              <li><strong>Personalized Recommendations:</strong> Receive tailored suggestions based on your event type, preferences, and past bookings.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesAndBenefits;
