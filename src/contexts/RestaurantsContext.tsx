import React, { createContext, useContext, useState } from 'react';
import { Restaurant } from '../model/Restaurant';

type RestaurantsContextProps = {
  children: React.ReactNode;
};

// array of restaurants
export type RestaurantsContextType = {
  restaurants: Restaurant[];
};

// createContext hook invoked for using restaurant values from anywhere
export const RestaurantsContext = createContext<RestaurantsContextType | null>(
  null
);

// custom useContext() hook,
// runtime checking when provider not wrapping component properly
// (other way could be type assertion)
export const useRestaurant = () => {
  const restaurantsContext = useContext(RestaurantsContext);

  if (!restaurantsContext) {
    throw new Error(
      'resurantContext has to be used within <RestaurantContext.Provider>'
    );
  }

  return restaurantsContext;
};

export const RestaurantsContextProvider = ({
  children,
}: RestaurantsContextProps) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  return (
    <RestaurantsContext.Provider value={{ restaurants }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
