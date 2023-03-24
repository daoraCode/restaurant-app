import React from 'react';
import './Home.css';
import { CardGrid } from '../../components/CardGrid/CardGrid';

export const Home = () => {
  return (
    <main className='main-home'>
      <h1 className='main-title-home'>Menu Principal</h1>
      <CardGrid />
    </main>
  );
};
