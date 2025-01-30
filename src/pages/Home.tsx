// src/pages/Home.tsx
import React from 'react';
import DesignCard from '../components/DesignCard';
import BookingForm from '../components/booking/BookingForm';
import { useDesignContext } from '../context/DesignContext'; // Import the custom hook

const Home: React.FC = () => {
  const { designs, loading, error } = useDesignContext(); // Use context to access the data

  // Handle loading and error states
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container">
      <section className="hero d-flex flex-column justify-content-center align-items-center text-center py-2 mb-4">
        <p className="lead mb-0">Book your appointment and explore our beautiful designs!</p>
      </section>

      <section className="featured-designs mb-5">
        {/* Horizontal Scrollable Container with Bootstrap Classes */}
        <div className="d-flex overflow-auto flex-nowrap">
          {designs.map((design, index) => (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 mx-2" key={index}>
              <DesignCard {...design} />
            </div>
          ))}
        </div>
      </section>

      <section className="booking-form row">
        <h2 className="col-12 mb-4 text-center">Book Now</h2>
        <div className="col-md-8 mx-auto">
          <BookingForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
