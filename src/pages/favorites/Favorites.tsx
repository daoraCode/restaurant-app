import React from 'react';
import { useRestaurantContext } from '../../context/RestaurantContext';
import { useFavoritesContext } from '../../context/FavoritesContext';
import { Card } from '../../components/Card/Card';
import './Favorites.css';

export const Favorites = () => {
  const { restaurants } = useRestaurantContext();
  const { favoritesIds } = useFavoritesContext();

  const favoriteRestaurants = restaurants.filter((restaurant) =>
    favoritesIds.includes(restaurant.id)
  );

  return (
    <main className='main-favorites'>
      <h1 className='main-title-favorites'>Mes favoris</h1>
      <div className='grid-favorites-container'>
        {favoriteRestaurants.map((restaurant) => {
          return <Card key={restaurant.id} restaurant={restaurant} />;
        })}
      </div>
    </main>
  );
};
