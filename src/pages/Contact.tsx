import React from "react";

const Contact: React.FC = () => {

  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mb-4">Contact Us</h1>
      <p className="lead text-center mb-5">
        Have any questions? Reach out to us, and we’ll be happy to help!
      </p>

      {/* Contact Details */}
      <div className="row">
        <div className="col-md-6">
          <div className="card shadow-lg p-4 border-0">
            <h3 className="mb-3">Get in Touch</h3>
            <p><strong>Phone:</strong> +91 9876543210</p>
            <p><strong>Email:</strong> info@mehendidesigns.com</p>
            <p><strong>Address:</strong> 123 Mehendi Lane, Koderma, Jharkhand, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-6">
          <div className="card shadow-lg p-4 border-0">
            <h3 className="mb-3">Send us a Message</h3>
            <form>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows={4} placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-5">
        <h3 className="text-center mb-4">Our Location</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src={process.env.REACT_APP_LOCATION}
            width="600"
            height="450"
            loading="lazy"
            title="Google Map"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
