import React, { useState } from 'react';
import  Logo from '../images/logo.png'
import arrow from '../images/arrow.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light p-3">
      <div className="container">
      <a className="navbar-brand ml-auto" href="/">
          <img src={Logo} alt="logo" aria-label='logo' style={{width:'140px'}}/>
        </a>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
       
        <div className={`collapse navbar-collapse menu ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item menu-item">
              <a className="nav-link" href="#home">Find Suppliers</a>
            </li>
            <li className="nav-item dropdown menu-item">
              <a className="nav-link dropdown-toggle d-flex align-items-center" href="#contact" id="navbarDropdown" role="button">
              Find Service Tags
                <img src={arrow} alt="arrow" className="dropdown-arrow" />
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#contact1">Service 1</a>
                <a className="dropdown-item" href="#contact2">Service 2</a>
         
              </div>
            </li>
           
            <li className="nav-item px-1">
              <button className="btn btn-outline-warning nav-link login-btn">Login / Sign Up</button>
            </li>
          </ul>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
