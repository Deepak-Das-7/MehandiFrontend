import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarItem from './NavbarItem'; // Import NavbarItem component

const Navbar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsCollapsed(true);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg">
      <div className="container">
        <Link className="navbar-brand text-white fw-bold fs-2" to="/">
          Indu Mehendi
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2" style={{ alignItems: 'center' }}>
            <NavbarItem to="/designs" iconClass="bi bi-images" label="Designs" onClick={handleLinkClick} />
            <NavbarItem to="/bookings" iconClass="bi bi-calendar-check" label="Appointments" onClick={handleLinkClick} />
            <NavbarItem to="/about" iconClass="bi bi-info-circle" label="About" onClick={handleLinkClick} />
            <NavbarItem to="/contact" iconClass="bi bi-telephone" label="Contact" onClick={handleLinkClick} />
            <NavbarItem to="/login" iconClass="bi bi-box-arrow-in-right" label="Login" onClick={handleLinkClick} />
            <NavbarItem to="/register" iconClass="bi bi-person-plus" label="Signup" onClick={handleLinkClick} />
            <NavbarItem to="/login" iconClass="bi bi-person-plus" label="Logout" onClick={handleLinkClick} />
            <NavbarItem to="/admin" iconClass="bi bi-person-plus" label="Admin" onClick={handleLinkClick} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
