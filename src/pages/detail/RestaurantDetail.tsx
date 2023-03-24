import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RestaurantType } from '../../model/Restaurant';

import './RestaurantDetail.css';

export const RestaurantDetail = () => {
  const { restaurantId } = useParams();
  const [restaurantDetail, setRestaurantDetail] =
    useState<RestaurantType | null>(null);

  useEffect(() => {}, []);
  return (
    <main className='main-rest-detail'>
      <h1 className='rest-detail-title'>Infos</h1>
      <div className='rest-detail-hero'>
        <div className='rest-detail-description-container'>
          <h2 className='rest-detail'>{}</h2>
        </div>
      </div>
    </main>
  );
};
