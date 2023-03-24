import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../Card/Card';
import { useRestaurantContext } from '../../context/RestaurantContext';

import './CardGrid.css';

export const CardGrid = () => {
  // custmized useContext hook API invoked for applied actual restaurant context
  const { restaurants } = useRestaurantContext();
  return (
    <div className='grid-container'>
      {restaurants.map((restaurant) => (
        <Link to={{ pathname: `/restaurants/detail/${restaurant.id}` }}>
          <Card restaurant={restaurant} key={restaurant.id} />
        </Link>
      ))}
    </div>
  );
};
