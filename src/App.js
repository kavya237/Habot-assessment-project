import React from 'react';
import Navbar from './components/Navbar';
import HomeBanner from './components/HomeBanner/HomeBanner';
import MainComponent from './components/MainComponent';
import SupplierSection from './components/Supplier/SupplierSection';
import BuyerSection from './components/Buyer/BuyerSection';
import WorkSection from './components/WorkSection/WorkSection';

import  './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <HomeBanner />
      <MainComponent />
      <BuyerSection />
      <SupplierSection />
      <WorkSection />
      
    </div>
  );
};

export default App;
