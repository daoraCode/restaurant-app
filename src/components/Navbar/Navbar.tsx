import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='nav'>
        <Link to='/'>
          <p className='logo'>
            LES RESTAURANTS ADORÉS <span> 🍧</span>
          </p>
        </Link>
        <Link to='/bookmarks'>
          <p className='bookmarks-link'>FAVORIS</p>
        </Link>
      </div>
    </div>
  );
};
