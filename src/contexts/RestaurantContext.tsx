import React, { createContext, useContext, useState } from 'react';
import { data } from '../data/data';
import { Restaurant } from '../model/Restaurant';

type RestaurantContextProps = {
  children: React.ReactNode;
};

// array of each restaurant (shape of object's data/interface)
export type RestaurantContextType = {
  restaurants: Restaurant[];
};

// customization createContext() hook
const RestaurantContext = createContext<RestaurantContextType>({
  restaurants: [],
});

// customization useContext() hook
export const useRestaurantContext = () => {
  const context = useContext(RestaurantContext);
  // runtime checking when provider does not wrapping component properly
  if (!context) {
    throw new Error(
      'restaurantContext has to be used within <RestaurantContext.Provider>'
    );
  }
  return context;
};

export const RestaurantProvider = ({ children }: RestaurantContextProps) => {
  const [currentRestaurants, setCurrentRestaurants] =
    useState<Restaurant[]>(data);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants: currentRestaurants,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};