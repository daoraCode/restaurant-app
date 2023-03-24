import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar/Navbar';

import { Home } from './pages/home/Home';
import { RestaurantDetail } from './pages/detail/RestaurantDetail';
import { Bookmark } from './pages/bookmark/Bookmark';
import { NotFound } from './pages/not_found/NotFound';

import { RestaurantProvider } from './context/RestaurantContext';

function App() {
  return (
    <BrowserRouter>
      <RestaurantProvider>
        <Navbar />
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route
              path='/restaurants/detail/:id'
              element={<RestaurantDetail />}
            />
            <Route path='/bookmarks' element={<Bookmark />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </RestaurantProvider>
    </BrowserRouter>
  );
}

export default App;
