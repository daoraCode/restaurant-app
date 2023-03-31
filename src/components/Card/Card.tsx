import React from 'react';
import { Link } from 'react-router-dom';
import { RestaurantType } from '../../model/Restaurant';
import LikeButton from '../Button/LikeButton';
import './Card.css';

type RestaurantTypeProps = {
  restaurant: RestaurantType;
};

export const Card = ({ restaurant }: RestaurantTypeProps) => {
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
        <LikeButton />
      </div>
    </div>
  );
};
