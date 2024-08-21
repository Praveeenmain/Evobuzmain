import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css'; // Import custom CSS for additional styling

const AboutUs = () => {
  return (
    <div className="about-us py-5">
      <div className="container">
        <h2 className=" mb-4">About Us</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="about-section">
              <h3>Company Background</h3>
              <p>
                At Evobuz, we are dedicated to revolutionizing the event planning industry. As a dynamic startup, we focus on creating a seamless platform that connects vendors and customers, making it easier to plan and manage events. Our innovative approach bridges the gap between service providers and clients, ensuring a smooth and efficient process for booking services.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="about-section">
              <h3>Mission and Vision</h3>
              <p>
                Our mission is to empower both vendors and customers by providing a robust platform that enhances event planning experiences. We envision a world where event planning is simplified, connections are strengthened, and every event is a success. By focusing on user satisfaction and continuous improvement, we aim to be the go-to solution for event management.
              </p>
            </div>
          </div>
        
          <div className="col-md-6 mb-4">
            <div className="about-section">
              <h3>Core Values</h3>
              <ul>
                <li><strong>Customer-Centric:</strong> Our customers are at the heart of everything we do. We strive to meet their needs with excellence and empathy.</li>
                <li><strong>Innovation:</strong> We are committed to continuously improving our platform and services to stay ahead in the industry.</li>
                <li><strong>Integrity:</strong> We uphold the highest standards of honesty and transparency in all our interactions and business practices.</li>
                <li><strong>Collaboration:</strong> We believe in the power of working together with vendors and customers to achieve common goals and create memorable events.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
