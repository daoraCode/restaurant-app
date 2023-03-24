import { useState, useEffect } from 'react';
import { RestaurantType } from '../../model/Restaurant';
import { useParams } from 'react-router-dom';
import { useRestaurantContext } from '../../context/RestaurantContext';
import './Restaurant.css';

export const Restaurant = () => {
  const { restaurants } = useRestaurantContext();
  const { restaurantId } = useParams();
  const [restaurantDetail, setRestaurantDetail] =
    useState<RestaurantType | null>(null);

  useEffect(() => {
    const restaurant = restaurants.find(
      (restaurant) => restaurant.id === Number(restaurantId)
    );
    setRestaurantDetail(restaurant ?? null);
  }, [restaurantId, restaurants]);

  console.log('10', restaurantId);
  if (restaurantDetail == null) {
    return null;
  }

  return (
    <main className='detail-container'>
      <h1 className='detail-heading'>Infos</h1>
      <div className='detail_inner'>
        <h2 className='detail-name'>{restaurantDetail.name}</h2>
        <p className='detail-info'>{restaurantDetail.description_long}</p>
      </div>
      <img
        className='rest-img'
        src={`${restaurantDetail.img}`}
        alt={`Restaurant ${restaurantDetail.name}`}
        loading='lazy'
      />
    </main>
  );
};
