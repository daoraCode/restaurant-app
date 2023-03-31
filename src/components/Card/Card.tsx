import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RestaurantType } from '../../model/Restaurant';
import { Heart } from '../SVG:Image/Heart';
// import { useRestaurantContext } from '../../context/RestaurantContext';
import './Card.css';

type RestaurantTypeProps = {
  restaurant: RestaurantType;
};

export const Card = ({ restaurant }: RestaurantTypeProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handlClickBtn = () => {
    console.log('hello');
    setIsClicked(!isClicked);
  };

  return (
    <div className='card-container'>
      <Link to={{ pathname: `/restaurants/${restaurant.id}` }}>
        <div className='card-hero-img'>
          <img
            className='card-img'
            src={`${restaurant.img}`}
            alt='restaurant'
            loading='lazy'
          />
        </div>
      </Link>
      <div className='card-footer'>
        <div className='card-footer-content'>
          <p className='card-name'>{restaurant.name}</p>
          <p className='card-description'>{restaurant.description_short}</p>
        </div>
        <button
          className={isClicked ? 'like-fill-btn' : 'like-btn'}
          onClick={handlClickBtn}
        >
          <Heart />
        </button>
      </div>
    </div>
  );
};
