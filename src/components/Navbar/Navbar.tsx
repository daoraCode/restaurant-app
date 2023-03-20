import React from 'react';
import './Navbar.css';

// router
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='blur-container'>
      <header className='header'>
        <Link className='navbar-link' to='/'>
          Restaurants Adorés
        </Link>
      </header>
    </div>
  );
};
