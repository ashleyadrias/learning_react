import React from 'react';
import { useState } from 'react'
import './App.css';

function App() {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: 'Label 1', checked: false },
    { id: 2, label: 'Label 2', checked: false },
    { id: 3, label: 'Label 3', checked: false },
  ]);

  const handleCheckboxChange = (id) => {
    setCheckboxes(prevCheckboxes =>
      prevCheckboxes.map(checkbox =>
        checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
      )
    );
  };

  return (
    <div className="main-container">
      {checkboxes.map(checkbox => (
        <div className="checkbox" key={checkbox.id}>
          <div className="checkbox-unselected">
            <input
              type="checkbox"
              className="base-checkbox"
              checked={checkbox.checked}
              onChange={() => handleCheckboxChange(checkbox.id)}
            />
          </div>
          <label className="label">{checkbox.label}</label>
        </div>
      ))}
    </div>
  );
};

export default App
