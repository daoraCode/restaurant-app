import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../Card/Card';
import { useRestaurantContext } from '../../context/RestaurantContext';
import './CardGrid.css';

export const CardGrid = () => {
  const { restaurants } = useRestaurantContext();
  return (
    <div className='grid-container'>
      {restaurants.map((restaurant) => (
        <Link key={restaurant.id} to={{ pathname: `/info/${restaurant.id}` }}>
          <Card restaurant={restaurant} />
        </Link>
      ))}
    </div>
  );
};
