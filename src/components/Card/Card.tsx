import React from 'react';
import './Card.css';

import { Restaurant } from '../../model/Restaurant';

type RestaurantTypeProps = {
  restaurant: Restaurant;
};

export const Card = ({ restaurant }: RestaurantTypeProps) => {
  return (
    <div className='grid-item'>
      <div className='inner_grid'>
        <img src={`${restaurant.img}`} alt='meal' loading='lazy' />
        <p className='card-name'>{restaurant.name}</p>
        <p className='card-description'>{restaurant.description_short}</p>
      </div>
      <div className='grid-item-like-button'></div>
    </div>
  );
};
