// src/components/Navbar.jsx
import React from 'react';
import '../styles/Navbar.css';
import NavItem from './NavItem';  // Import NavItem component

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="wordmark">
        <h1 className="logo-text">Mates</h1>
      </div>
      <div className="nav-navigation-menu">
        <NavItem label="Flights" isActive={true} />
        <NavItem label="Hotels" />
        <NavItem label="Packages" />
        <NavItem label="Sign in" />
        <button className="sign-up-btn">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;