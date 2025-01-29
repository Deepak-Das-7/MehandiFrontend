// NavbarItem.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavbarItemProps {
  to: string;
  iconClass: string;
  label: string;
  onClick: () => void;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ to, iconClass, label, onClick }) => {
  return (
    <li className="nav-item">
      <NavLink
        className={({ isActive }) =>
          isActive ? 'nav-link px-3 text-white fw-bold' : 'nav-link px-3 text-white'
        }
        to={to}
        onClick={onClick} // Collapse menu when clicked
      >
        <i className={`${iconClass} me-2`}></i> {label}
      </NavLink>
    </li>
  );
};

export default NavbarItem;
