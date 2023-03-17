import React from 'react';

import { Restaurant } from '../../model/Restaurant';

type RestaurantTypeProps = {
  restaurant: Restaurant;
};

export const Card = ({ restaurant }: RestaurantTypeProps) => {
  return (
    <div className="card-container">
      <div className="inner">
        <img src={`${restaurant.img}`} alt="meal" loading="lazy" />
        <h2 className="card-title">{restaurant.name}</h2>
        <h2 className="card-title">{restaurant.description_short}</h2>
      </div>
      <div className="card_favorite_btn"></div>
    </div>
  );
};
