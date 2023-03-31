import { createContext, useContext, useEffect, useState } from 'react';
import { data } from '../data/data';
type FavoritesContextProps = {
  children: React.ReactNode;
};

export type FavoritesContextType = {
  favoritesIds: number[];
  addBookmark: (restId: number) => void; // add
  removeBookmark: (restId: number) => void; // remove
};

const FavoritesContext = createContext<FavoritesContextType>({
  favoritesIds: [],
  addBookmark: () => undefined,
  removeBookmark: () => undefined,
});

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);
  // runtime checking when provider does not wrapping component properly
  if (!context) {
    throw new Error(
      'restaurantContext has to be used within FavoritesProvider'
    );
  }
  return context;
};

const favIds = localStorage.getItem('favoritesIds');
const parsed = favIds != null ? JSON.parse(favIds) : [];

export const FavoritesProvider = ({ children }: FavoritesContextProps) => {
  const [favoritesIds, setFavoritesIds] = useState<number[]>(parsed);

  const addBookmark = (restId: number) => {
    // add id from favoritesIds
  };

  const removeBookmark = (restId: number) => {
    // delete id from favoritesIds
  };

  useEffect(() => {
    localStorage.setItem('favoritesIds', JSON.stringify(favoritesIds));
  }, [favoritesIds]);

  return (
    <FavoritesContext.Provider
      value={{
        favoritesIds,
        removeBookmark,
        addBookmark,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
