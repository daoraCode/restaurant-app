import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

export const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='nav'>
        <Link to='/'>
          <p className='nav-link logo'>
            LES RESTAURANTS ADORÉS <span> 🍧</span>
          </p>
        </Link>
        <Link to='/bookmarks'>
          <p className='nav-link'>FAVORIS</p>
        </Link>
      </div>
    </div>
  );
};
