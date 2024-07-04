import React from 'react';
import './SupplierSection.css';

const SupplierSection = () => {
  return (
    <div className="my-5 Supplier-Section py-5 ">
      <div className="container">
        <div className="row align-items-center Find">
          <div className="col-md-8 section-heading">
            <h2 className="">Let Suppliers Find You</h2>
          </div>
          <div className="col-md-4 Get">
            <button className=" Verified-btn">Get Verified</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierSection;
