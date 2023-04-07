import { useFavoritesContext } from '../../context/FavoritesContext';
import { RestaurantType } from '../../model/Restaurant';
import './DeletionModal.css';

type DeletionModalProps = {
  show: boolean;
  restaurant: RestaurantType;
  handleCancel: () => void;
};

export const DeletionModal = ({
  show,
  restaurant,
  handleCancel,
}: DeletionModalProps) => {
  const { removeFavorites } = useFavoritesContext();

  const handleRemove = (restId: number) => {
    removeFavorites(restId);
    handleCancel();
  };

  if (!show) return null;

  return (
    <main className='modal'>
      <h1 className='heading-modal-text '>{`Retirer ce restaurant de la liste des favoris ?`}</h1>
      <div className='remove-btn-container'>
        <button
          className='confirm-btn'
          onClick={() => handleRemove(restaurant.id)}
        >
          Confirmer
        </button>
        <button className='cancel-btn' onClick={() => handleCancel()}>
          Annuler
        </button>
      </div>
    </main>
  );
};
