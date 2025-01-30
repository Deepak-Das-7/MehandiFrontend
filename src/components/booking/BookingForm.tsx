import React, { useState } from 'react';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert(`Appointment booked for ${name} on ${date} at ${time}`);
  };

  return (
    <form className="booking-form container mb-3" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-control" // Apply Bootstrap form control styling
          />
        </div>
        <div className="col-md-6">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="form-control" // Apply Bootstrap form control styling
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className="form-control" // Apply Bootstrap form control styling
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Book Appointment
      </button>
    </form>
  );
};

export default BookingForm;