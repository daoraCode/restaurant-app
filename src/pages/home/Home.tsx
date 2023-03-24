import React from 'react';
import './Home.css';
import { CardGrid } from '../../components/CardGrid/CardGrid';

export const Home = () => {
  return (
    <main className='home-container'>
      <h1 className='home-heading'>Menu Principal</h1>
      <CardGrid />
    </main>
  );
};
