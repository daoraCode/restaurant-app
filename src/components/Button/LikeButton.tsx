import { useState } from 'react';
import { Heart } from '../SVG:Image/Heart';
import './LikeButton.css';

const LikeButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handlClickBtn = () => {
    console.log('hello');
    setIsClicked(!isClicked);
  };

  return (
    <button className={isClicked ? 'like-fill-btn' : 'like-btn'}>
      <Heart />
    </button>
  );
};

export default LikeButton;
