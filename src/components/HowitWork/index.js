import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css'; // Import custom CSS for additional styling
import VendorCarouselComponent from '../Vendorcarousel';
import CustomerCarouselComponent from '../customerCarousel';
const HowItWorks = () => {
  return (
    <div className="how-it-works-section py-5">
      <div className="container">
        <h2 className="mb-4">How It Works</h2>
        <div className="row">
          <div className="col-md-6">
            <h3>For Vendors</h3>
            <VendorCarouselComponent/>
            <ul className="list-unstyled">
           
              <li><strong>Join Our Platform:</strong> Sign up and create a profile to showcase your services. Customize your offerings and set your availability.</li>
              <li><strong>Manage Your Listings:</strong> List your services, set pricing, and manage availability through our easy-to-use dashboard.</li>
              <li><strong>Connect with Clients:</strong> Receive notifications for new inquiries and booking requests directly on your dashboard.</li>
              <li><strong>Analyze Performance:</strong> Access detailed analytics to track your performance and understand client preferences.</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h3>For Customers</h3>
            <CustomerCarouselComponent/>
            <ul className="list-unstyled">
             
              <li><strong>Browse and Select Vendors:</strong> Search for vendors based on your event needs and preferences. Filter by location, type of service, and reviews.</li>
              <li><strong>Book Services:</strong> Book services directly through our platform with a few simple clicks. Choose your services, set a date, and confirm your booking.</li>
              <li><strong>Communicate and Coordinate:</strong> Use our messaging system to communicate with vendors, ask questions, and coordinate event details.</li>
              <li><strong>Review and Feedback:</strong> After your event, leave reviews and feedback for the vendors to help others make informed decisions.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
