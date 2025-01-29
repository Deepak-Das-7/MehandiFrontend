import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <Link className="navbar-brand text-white" to="/">
          <strong>Indu Mehendi</strong>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle} // Trigger the toggle function on button click
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNav">
          <ul className="navbar-nav ms-auto gap-1">
            <li className="nav-item">
              <Link className="nav-link px-3 text-white" to="/designs">
                <i className="bi bi-images me-2"></i> Designs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 text-white" to="/bookings">
                <i className="bi bi-calendar-check me-2"></i> Appointments
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 text-white" to="/about">
                <i className="bi bi-info-circle me-2"></i> About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 text-white" to="/contact">
                <i className="bi bi-telephone me-2"></i> Contact
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-light ms-3" type="button">
                Login
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-light ms-2" type="button">
                Signup
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
