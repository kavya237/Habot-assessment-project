import React from 'react';
import PropTypes from 'prop-types';
import './CardComponent.css';

const CardComponent = ({ icon, description, isOdd }) => {
  return (
    <div className={`card text-center ${isOdd ? 'bg-blue' : ''}`}>
      <div className="card-body">
      <div className="card-sec">
        <img className="card-icon mb-3" src={icon} alt="icon"/>
        </div>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

CardComponent.propTypes = {
  icon: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  isOdd: PropTypes.bool.isRequired,
};

export default CardComponent;
