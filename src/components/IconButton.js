// ReusableButton.jsx
import React from 'react';

const IconButton = ({ text, icon, onClick }) => {
  return (
    <button className="today-button" onClick={onClick}>
     
      <span className="button-text">{text}</span>
      <img src={icon} alt="icon"  aria-label="icon" className="button-icon" />
    </button>
  );
};

export default IconButton;
