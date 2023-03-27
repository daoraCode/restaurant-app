import { createContext, useContext } from 'react';
import { data } from '../data/data';
import { RestaurantType } from '../model/Restaurant';

type RestaurantContextProps = {
  children: React.ReactNode;
};

export type RestaurantContextType = {
  restaurants: RestaurantType[];
};

const RestaurantContext = createContext<RestaurantContextType>({
  restaurants: [],
});

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
  return (
    <RestaurantContext.Provider
      value={{
        restaurants: data,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
