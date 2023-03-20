import React from 'react';

// react-router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// navbar component
import { Navbar } from './components/Navbar/Navbar';

// pages
import { Home } from './pages/home/Home';
import { Detail } from './pages/detail/Detail';
import { NotFound } from './notFound/NotFound';

// context
import { RestaurantProvider } from './contexts/RestaurantContext';

function App() {
  return (
    <BrowserRouter>
      <RestaurantProvider>
        <Navbar />
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='/restaurants/:id' element={<Detail />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </RestaurantProvider>
    </BrowserRouter>
  );
}

export default App;
