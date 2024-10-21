import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Track whether the menu is open or closed

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close state
  };

  return (
    <nav className="navbar">
      <div className="wordmark">
        <h1 className="logo-text">Mates</h1>
      </div>

      {/* Navigation menu with toggleable "open" class */}
      <div className={`nav-navigation-menu ${isOpen ? 'open' : ''}`}>
        <NavLink 
          to="/matches" 
          className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
        >
          Matches
        </NavLink>
        <NavLink 
          to="/expert-help" 
          className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
        >
          Expert Help
        </NavLink>
        <NavLink 
          to="/explore" 
          className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
        >
          Explore
        </NavLink>
        <NavLink 
          to="/signin" 
          className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
        >
          Sign in
        </NavLink>
        <button className="sign-up-btn">Sign up</button>
      </div>

      {/* Hamburger icon for smaller screens */}
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;