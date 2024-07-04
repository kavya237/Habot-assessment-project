import React from 'react';
import './OverlayImage.css';
import Youtube from '../../../images/youtube.png';
import Post from '../../../images/post.png';

const OverlayImage = () => {
  return (
    <div className="image-container">
     
     <div class="post-image">
     <img 
        src={Post} 
        alt="Background" 
        className="background-image"
      />
     </div>
    
      <img 
        src={Youtube}
        alt="Overlay" 
        className="overlay-image"
      />
    </div>
  );
};

export default OverlayImage;
