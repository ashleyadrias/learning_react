// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p>&copy; {new Date().getFullYear()} To-Do List App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;