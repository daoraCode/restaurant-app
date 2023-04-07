import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/home/Home';
import { Restaurant } from './pages/details/Restaurant';
import { NotFound } from './pages/not_found/NotFound';
import { RestaurantProvider } from './context/RestaurantContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { Favorites } from './pages/favorites/Favorites';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <RestaurantProvider>
        <FavoritesProvider>
          <Routes>
            <Route index path='/' element={<Home />} />
            <Route path='/restaurants/:restaurantId' element={<Restaurant />} />
            <Route path='/bookmarks' element={<Favorites />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </FavoritesProvider>
      </RestaurantProvider>
    </BrowserRouter>
  );
}

export default App;
