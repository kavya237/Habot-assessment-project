import React, { useState } from 'react';
import './MyTabs.css';
import PointsList from './PointsList';

const MyTabs = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const tab1Data = [
    { id: 1, text: 'Post your requirements'},
    { id: 2, text: 'Sit back for multiple suppliers to contact you.'},
    { id: 3, text: 'Choose among the suppliers based on the ratings and reviews.'},

  ];

  return (
    <div className="container mt-4 mtop">
      <ul className="nav nav-tabs">
        <li className="nav-item tabs">
          <button
            className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => handleTabClick('home')}
          >
           Buyer
          </button>
        </li>
        <li className="nav-item tabs">
          <button
            className={`nav-link  ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => handleTabClick('profile')}
          >
           Supplier
          </button>
        </li>
       
      </ul>
      <div className="tab-content">
        {activeTab === 'home' && <div> <PointsList points={tab1Data} /></div>}
        {activeTab === 'profile' && <div><PointsList points={tab1Data} /></div>}
      </div>
    </div>
  );
};

export default MyTabs;
