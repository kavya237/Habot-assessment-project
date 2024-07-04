import React, { useState } from 'react';
import bannerImage from '../../images/home-banner.png'; 
import Location from '../../images/location.png'; 
import Suitcase from '../../images/suitcase.png'; 

const HomeBanner = () => {
    const [services, setServices] = useState('');
    const [location, setLocation] = useState('');
  
    const handleSearch = () => {
      console.log('Searching for services:', services);
      console.log('In location:', location);
    };
  return (
    <div className="home-banner">
      <img src={bannerImage} alt="Banner" className="banner-image" />
      <div className="banner-content">
        <h1>Are You a Supplier?
       </h1>
        <h2> Explore Matching Opportunities.</h2>
        <div className="search-bar">
          <div className="input-container">
            <img src={Suitcase} className="input-icon" alt="Suitcase" aria-label='Suitcase' />
            <input
              type="text"
              className="input-field"
              placeholder="Search your required service here"
              value={services}
              onChange={(e) => setServices(e.target.value)}
            />
          </div>
          <div className="input-container">
          <img src={Location} className="input-icon" alt="Location" aria-label='Location'/>
            <input
              type="text"
              className="input-field"
              placeholder="Search your desired location here"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <button className="search-button btn btn-success" onClick={handleSearch}>Search</button>
        </div>
        <div className="banner-footer">
          <h3 >Are you a buyer?   <a href="#link"> Click here if you are looking to post a requirements</a></h3>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
