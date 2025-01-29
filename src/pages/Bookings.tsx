import React from 'react';
import { useBookingContext } from '../context/Bookings'; 
import BookingCard from '../components/BookingCard';

const Bookings: React.FC = () => {
  const { bookings, loading, error } = useBookingContext();

  if (loading) {
    return (
      <div className="container mt-5">
        <div className="d-flex justify-content-center mt-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-1">
      <ul className="list-group">
        {bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <BookingCard key={index} {...booking} />
          ))
        ) : (
          <div className="col-12 text-center">
            <p className="text-muted">No bookings available.</p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Bookings;
