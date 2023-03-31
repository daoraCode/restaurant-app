import { useState, useEffect } from 'react';
import { Heart } from '../SVG:Image/Heart';
import './LikeButton.css';

const LikeButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleLikeBtn = () => {
    console.log('hello');
    setIsClicked(!isClicked);
  };

  return (
    <button
      className={isClicked ? 'like-fill-btn' : 'like-btn'}
      onClick={handleLikeBtn}
    >
      <Heart />
    </button>
  );
};

export default LikeButton;
