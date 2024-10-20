// src/components/NavItem.jsx
import React from 'react';
import '../styles/NavItem.css';

const NavItem = ({ label, isActive }) => {
  return (
    <div className={`nav-list-item ${isActive ? 'active' : ''}`}>
      <div className="label">{label}</div>
    </div>
  );
};

export default NavItem;