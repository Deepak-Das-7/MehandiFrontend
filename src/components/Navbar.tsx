import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarItem from './NavbarItem';
import { useLoggedUserContext } from '../context/Auth';

const Navbar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { isAdmin, isLoggedIn } = useLoggedUserContext();

  const handleToggle = () => setIsCollapsed(prev => !prev);
  const handleLinkClick = () => setIsCollapsed(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg">
      <div className="container">
        <Link className="navbar-brand text-white fw-bold" to="/" style={{ margin: '-5px 0 -5px 0' }}>
          <img src="/pngs/whiteLogo.png" alt="Logo" width={60} height={50} />
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
            <NavbarItem to="/about" iconClass="bi bi-info-circle" label="About" onClick={handleLinkClick} />
            <NavbarItem to="/contact" iconClass="bi bi-telephone" label="Contact" onClick={handleLinkClick} />

            {isAdmin && (
              <>
                <NavbarItem to="/bookings" iconClass="bi bi-calendar-check" label="Appointments" onClick={handleLinkClick} />
                <NavbarItem to="/admin" iconClass="bi bi-person-badge" label="Admin Portal" onClick={handleLinkClick} />
              </>
            )}
            {!isLoggedIn ? (
              <NavbarItem to="/login" iconClass="bi bi-box-arrow-in-right" label="Login" onClick={handleLinkClick} />
            ) : (
              <>
                <NavbarItem to="/profile" iconClass="bi bi-person-badge" label="Profile" onClick={handleLinkClick} />
                {!isAdmin && (
                  <NavbarItem to="/my-bookings" iconClass="bi bi-calendar-check" label="My Bookings" onClick={handleLinkClick} />
                )}
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
