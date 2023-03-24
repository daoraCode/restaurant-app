import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export const NotFound = () => {
  return (
    <main className='main-not-found'>
      <h1 className='main-title-not-found'>Page introuvable</h1>
      <Link to='/'>
        <h3 className='not-found-link'>
          <span>◀</span> Retourner au menu principal
        </h3>
      </Link>
    </main>
  );
};
