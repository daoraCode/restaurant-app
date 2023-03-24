import React, { createContext, useContext, useState } from 'react';
import { data } from '../data/data';
import { RestaurantType } from '../model/Restaurant';

type RestaurantContextProps = {
  children: React.ReactNode;
};

// array of each restaurant (shape of object's data/interface)
export type RestaurantContextType = {
  restaurants: RestaurantType[];
};

// customized createContext() hook
const RestaurantContext = createContext<RestaurantContextType>({
  restaurants: [],
});

// customized useContext() hook
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
    useState<RestaurantType[]>(data);

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
