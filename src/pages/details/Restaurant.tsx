import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RestaurantType } from '../../model/Restaurant';
import { useRestaurantContext } from '../../context/RestaurantContext';
import { DeletionModal } from '../../components/Modal/DeletionModal';
import { useFavoritesContext } from '../../context/FavoritesContext';
import './Restaurant.css';

export const Restaurant = () => {
  const { removeFavorites, addFavorites } = useFavoritesContext();
  const { restaurants } = useRestaurantContext();

  const { restaurantId } = useParams();

  const [showModal, setShowModal] = useState(false);
  const [restaurantDetail, setRestaurantDetail] =
    useState<RestaurantType | null>(null);

  useEffect(() => {
    const restaurant = restaurants.find(
      (restaurant) => restaurant.id === Number(restaurantId)
    );
    setRestaurantDetail(restaurant ?? null);
  }, [restaurants, restaurantId]);

  if (restaurantDetail == null) {
    return null;
  }

  const handleRemove = (restId: number) => {
    if (restaurantDetail) setShowModal(true);
    else addFavorites(restId);
  };

  return (
    <main className='detail-container'>
      <h1 className='detail-heading'>Information</h1>
      <div className='detail_inner'>
        <h2 className='detail-name'>{restaurantDetail.name}</h2>
        <p className='detail-info'>{restaurantDetail.description_long}</p>
      </div>
      <img
        className='rest-img'
        src={`${restaurantDetail.img}`}
        alt={`Restaurant ${restaurantDetail.name}`}
        loading='lazy'
      />
      <button
        className='remove-btn-detail'
        onClick={() => handleRemove(restaurantDetail.id)}
      >
        Retirer des Favoris
      </button>
      <div className='menu-item'>{restaurantDetail.menu.deserts}</div>
      <div className='menu-item'>{restaurantDetail.menu.dishes}</div>
      <div className='menu-item'>{restaurantDetail.menu.entrees}</div>
      <DeletionModal
        show={showModal}
        handleCancel={() => setShowModal(false)}
        restaurant={restaurantDetail}
      />
    </main>
  );
};
