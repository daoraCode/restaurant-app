import { createContext, useContext, useEffect, useState } from 'react';

type FavoritesContextProps = {
  children: React.ReactNode;
};

export type FavoritesContextType = {
  favoritesIds: number[];
  addFavorites: (restId: number) => void; // add
  removeFavorites: (restId: number) => void; // remove
};

const FavoritesContext = createContext<FavoritesContextType>({
  favoritesIds: [],
  addFavorites: () => undefined,
  removeFavorites: () => undefined,
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

  const addFavorites = (restId: number) => {
    setFavoritesIds([...favoritesIds, restId]);
  };

  const removeFavorites = (restId: number) => {
    const tmpFavIds = [...favoritesIds].filter((id) => id !== restId);
    setFavoritesIds(tmpFavIds);
  };

  useEffect(() => {
    localStorage.setItem('favoritesIds', JSON.stringify(favoritesIds));
  }, [favoritesIds]);

  return (
    <FavoritesContext.Provider
      value={{
        favoritesIds,
        addFavorites,
        removeFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
