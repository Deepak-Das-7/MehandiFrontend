import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const About: React.FC = () => {
  return (
    <div className="container">
      <h1 className="display-4 text-center mb-4">About Us</h1>
      <p className="lead">
        Welcome to Mehendi Designs! We specialize in creating stunning Mehendi
        art for all occasions. From bridal Mehendi to traditional and Arabic
        designs, our experienced artists ensure each design is unique and
        memorable. Book your appointment today and let us add beauty to your
        special moments!
      </p>
    </div>
  );
};

export default About;