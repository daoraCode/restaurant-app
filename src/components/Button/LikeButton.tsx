import React, { useState } from 'react';
import './LikeButton.css';
import { Heart } from '../../svg/Heart';

export const LikeButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <button className='like-button' onClick={() => setIsClicked(!isClicked)}>
      {isClicked ? <Heart /> : <Heart />}
    </button>
  );
};
