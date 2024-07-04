// MainComponent.jsx
import React from 'react';
import CustomButton from './CustomButton';
import IconButton from './IconButton';
import RightArrow from '../images/right-arrow.png'


const data = {
  content: {
    Heading: "Ready to dive into",
    subHeading: "HABOT ?",
    Description:'Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.',
    buttonText: "Sign up Today !",
    Icon:{RightArrow}
  },
  buttonContent: {
    buttons: ["Abu Dhabi", "Dubai", "Sharjah & Ajman", "Fujairah", "Ras Al Khaimah", "Umm Al Quwain"]
  }
};

const MainComponent = () => {
  const handleClick = (buttonText) => {
    alert(`${buttonText} clicked`);
  };

  return (
    <div className="container pad-40">
  
      <div className="Client-section">
      <div className=" content">
        <h1>{data.content.Heading} <span>{data.content.subHeading}</span> </h1>
        <p>{data.content.Description}</p>
        <IconButton
          text={data.content.buttonText}
          icon={RightArrow}
          onClick={() => handleClick(data.section1.buttonText)}
        />
      </div>
      <div className=" Button-Component">
        {data.buttonContent.buttons.map((buttonText, index) => (
          <CustomButton key={index} text={buttonText} onClick={() => handleClick(buttonText)} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default MainComponent;
