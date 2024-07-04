import React from 'react';
import CardComponent from './CardComponent';
import  Edit  from '../../images/edit.png';
import  Flie  from '../../images/flie.png';
import  Handshake  from '../../images/handshake.png';
import  User  from '../../images/user.png';
import  Search  from '../../images/search.png';
import  Quote  from '../../images/quote-request.png';
import  './WorkSection.css';

function WorkSection() {
     const cardData = [
        {
          icon: User,
          description: 'Select Your Role and  Sign Up',
        },
        {
          icon: Flie,
          description: 'Buyers Post Your Requirements',
        },
        {
          icon: Search,
          description: ' Review, Select, and Contact the Best Suppliers',
        },
        {
            icon: Edit,
            description: ' Suppliers Complete your profile and get notified for opportunities',
          },
          {
            icon: Quote,
            description: 'Contact to Buyers and Share your Quote for the service',
          },
          {
            icon: Handshake,
            description: 'Both the Parties can Connect and Make Business Leave a Feedback',
          },
      ];
      
  return (
    <div className="container my-5 mx-auto">
      <h1 className="text-center mb-3 works-head">How it works?</h1>
      <p className="text-center mb-3 works-des">Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers,
         and build successful business relationships, sharing valuable feedback.</p>
      <div className="row">
        {cardData.map((card, index) => (
          <div key={index} className="col-12 col-md-4">
            <CardComponent 
              icon={card.icon} 
              description={card.description} 
              isOdd={index % 2 === 0} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkSection;
