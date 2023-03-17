import React from 'react';
import { Link } from 'react-router-dom';
import { RestaurantType } from '../../model/Restaurant';
import { Card } from '../Card/Card';

type RestaurantListProp = {
  restaurants: RestaurantType[];
};

export const CardList = ({ restaurants }: RestaurantListProp) => {
  return (
    <div className='cards-grid'>
      {restaurants?.map((el: RestaurantType) => (
        <Link to={{ pathname: `/restaurants/${el.id}` }}>
          <Card restaurant={el} key={el.id} />
        </Link>
      ))}
    </div>
  );
};
