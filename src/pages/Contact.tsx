import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Contact: React.FC = () => {
  return (
    <div className="container mb-5">
      <h1 className="display-4 text-center mb-4">Contact Us</h1>
      <div className="row">
        <div className="col-md-6">
          <p className="mb-0">
            <strong>Phone:</strong> +91 9876543210
          </p>
          <p className="mb-0">
            <strong>Email:</strong> info@mehendidesigns.com
          </p>
        </div>
        <div className="col-md-6">
          <p className="mb-0">
            <strong>Address:</strong> 123 Mehendi Lane, Koderma, Jharkhand, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;