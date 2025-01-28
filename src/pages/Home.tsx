import React from 'react';
import DesignCard from '../components/DesignCard';
import BookingForm from '../components/BookingForm';
import { designs } from '../data/dummyData';

const Home: React.FC = () => {
  return (
    <div className="container">
      <section className="hero d-flex flex-column justify-content-center align-items-center text-center py-2 mb-4">
        <p className="lead mb-0">Book your appointment and explore our beautiful designs!</p>
      </section>

      <section className="featured-designs row mb-5">
        {designs.map((design, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <DesignCard {...design} />
          </div>
        ))}
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