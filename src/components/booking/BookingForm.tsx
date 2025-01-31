import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const BookingForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert(`Appointment booked for ${date} at ${time}`);
    handleClose(); // Close modal after booking
  };

  return (
    <>
      <Button variant="success" onClick={handleShow} className="w-100 py-2 rounded-pill shadow-sm">
        Book Appointment
      </Button>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Book Your Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">Select Date</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="form-control form-control-lg rounded-pill border-0 shadow-sm"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="time" className="form-label">Select Time</label>
              <input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                className="form-control form-control-lg rounded-pill border-0 shadow-sm"
              />
            </div>
            <div className="d-flex justify-content-end">
              <Button variant="secondary" onClick={handleClose} className="me-2">
                Close
              </Button>
              <Button type="submit" variant="primary">
                Confirm Booking
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BookingForm;
