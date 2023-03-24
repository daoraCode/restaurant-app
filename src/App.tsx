import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/home/Home';
import { Restaurant } from './pages/details/Restaurant';
import { Bookmarks } from './pages/bookmarks/Bookmarks';
import { NotFound } from './pages/not_found/NotFound';
import { RestaurantProvider } from './context/RestaurantContext';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <RestaurantProvider>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/details/:restaurantId' element={<Restaurant />} />
          <Route path='/bookmarks' element={<Bookmarks />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </RestaurantProvider>
    </BrowserRouter>
  );
}

export default App;
