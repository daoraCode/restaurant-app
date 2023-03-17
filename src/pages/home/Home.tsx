import React from 'react';

// css
import './Home.css';

// components
import { CardList } from '../../components/CardList/CardList';

// context
import { useRestaurantContext } from '../../contexts/RestaurantsContext';

export const Home = () => {
  // const [restaurant, setRestaurants] = uesState<RestaurantType[]>([]);
  const { restaurants } = useRestaurantContext();

  return (
    <main>
      <h1>Homepage</h1>
      <CardList restaurants={restaurants} />
    </main>
  );
};
