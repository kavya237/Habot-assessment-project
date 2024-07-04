import React from 'react';
import checked from '../../../images/checked.png';
import './PointsList.css';

const PointsList = ({ points }) => {
  return (
    <div className="container mt-4">
      {points.map(point => (
        <div key={point.id} className="row rows align-items-start">
          <div className="col-auto">
            <img
              src={checked}
              alt="Overlay"
              className="overlay-images"
            />
          </div>
          <div className="col ">
            <p className='points'>{point.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PointsList;
