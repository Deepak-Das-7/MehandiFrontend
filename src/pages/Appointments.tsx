import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { appointments } from '../data/dummyData';

// New component: AppointmentCard.js
interface AppointmentCardProps {
  name: string;
  date: string;
  time: string;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ name, date, time }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center"> 
      <div>
        <h6 className="mb-0">{name}</h6>
        <p className="text-muted mb-0">
          {date} - {time}
        </p>
      </div>
      <div>
        <button className="btn btn-sm btn-outline-secondary me-2">Edit</button>
        <button className="btn btn-sm btn-outline-danger">Delete</button>
      </div>
    </li>
  );
};

const Appointments: React.FC = () => {
  return (
    <div className="container">
      <h1 className="display-4 text-center mb-4">Your Appointments</h1>
      <ul className="list-group">
        {appointments.map((appointment, index) => (
          <AppointmentCard key={index} {...appointment} />
        ))}
      </ul>
    </div>
  );
};

export default Appointments;