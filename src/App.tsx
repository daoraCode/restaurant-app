import React from 'react';

// react-router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// navbar component
import { Navbar } from './components/Navbar/Navbar';

// pages
import { Home } from './pages/home/Home';
import { Detail } from './pages/detail/Detail';
import { NotFound } from './not_found/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/home'>
          <Route index element={<Home />} />
          <Route path='/restaurants/:id' element={<Detail />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
