import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFavoritesContext } from '../../context/FavoritesContext';
import { RestaurantType } from '../../model/Restaurant';
import { Heart } from '../SVG:Image/Heart';
import { DeletionModal } from '../../components/Modal/DeletionModal';

import './Card.css';

type RestaurantTypeProps = {
  restaurant: RestaurantType;
};

export const Card = ({ restaurant }: RestaurantTypeProps) => {
  const { favoritesIds, addFavorites } = useFavoritesContext();

  const [showModal, setShowModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(
    favoritesIds.some((id) => id === restaurant.id)
  );

  const handleClick = (restId: number, isFavorite: boolean) => {
    if (isFavorite) setShowModal(true);
    else addFavorites(restId);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className='card-container'>
      <Link to={{ pathname: `/restaurants/${restaurant.id}` }}>
        <div className='card-hero-img'>
          <img
            className='card-img'
            src={`${restaurant.img}`}
            alt='restaurant'
            loading='lazy'
          />
        </div>
      </Link>
      <div className='card-footer'>
        <div className='card-footer-content'>
          <p className='card-name'>{restaurant.name}</p>
          <p className='card-description'>{restaurant.description_short}</p>
        </div>
        <button
          className={isFavorite ? 'like-fill-btn' : 'like-btn'}
          onClick={() => handleClick(restaurant.id, isFavorite)}
        >
          <Heart />
        </button>
        <DeletionModal
          show={showModal}
          handleCancel={() => setShowModal(false)}
          restaurant={restaurant}
        />
      </div>
    </div>
  );
};
