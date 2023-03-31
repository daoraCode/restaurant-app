import React from 'react';
import { Card } from '../Card/Card';
import { useRestaurantContext } from '../../context/RestaurantContext';
import './CardGrid.css';

export const CardGrid = () => {
  const { restaurants } = useRestaurantContext();
  return (
    <div className='grid-container'>
      {restaurants.map((restaurant) => (
        <Card key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};
