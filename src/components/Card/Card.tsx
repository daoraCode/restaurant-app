import React from 'react';

import { RestaurantType } from '../../model/Restaurant';
import { LikeButton } from '../Button/LikeButton';

import './Card.css';

type RestaurantTypeProps = {
  restaurant: RestaurantType;
};

export const Card = ({ restaurant }: RestaurantTypeProps) => {
  return (
    <div className='card-container'>
      <div className='card-hero-img'>
        <img
          className='card-img'
          src={`${restaurant.img}`}
          alt='meal'
          loading='lazy'
        />
      </div>
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
