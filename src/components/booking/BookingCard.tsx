import React from 'react';
import { FaCalendarDay, FaClock } from 'react-icons/fa';

interface Booking {
  customer: { name: string };
  bookingDate: string;
  bookingTime: string;
}

const BookingCard: React.FC<Booking> = ({ customer, bookingDate, bookingTime }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center mb-2 shadow-sm rounded-3 bg-light p-3">
      <div className="d-flex flex-column">
        <h6 className="mb-1 text-primary" style={{ fontSize: '1.1rem', fontWeight: '600' }}>
          {customer.name}
        </h6>
        <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>
          <span>
            <FaCalendarDay className="me-2 text-secondary" />
            <span style={{ fontSize: '12px', fontWeight: '500' }}>
              {new Date(bookingDate).toLocaleDateString()}
            </span>
          </span>
          <br />
          <span>
            <FaClock className="me-2 text-secondary" />
            <span style={{ fontSize: '12px' }}>{bookingTime}</span>
          </span>
        </p>
      </div>

      <div className="d-flex align-items-center gap-3">
        <button className="btn btn-sm btn-outline-warning rounded-3 py-1 px-3 hover-shadow" style={{ transition: 'all 0.3s ease' }}>
          Edit
        </button>
        <button className="btn btn-sm btn-outline-danger rounded-3 py-1 px-3 hover-shadow" style={{ transition: 'all 0.3s ease' }}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default BookingCard;
