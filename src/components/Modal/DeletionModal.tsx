import React from 'react';
import './DeletionModal.css';
// import { useRestaurantContext } from "../../context/RestaurantContext";

type DeletionModalProps = {
  show: boolean;
  handleClose: () => void;
  // removeFavorites: () => void;
};

export const DeletionModal = ({
  show,
}: // handleClose,
// removeFvaorites,
DeletionModalProps) => {
  if (!show) return null;

  return (
    <main className='modal'>
      <h1 className='heading-modal-text '>{`Retirer ce restaurant de la liste des favoris ?`}</h1>
      <div className='remove-btn-container'>
        <button className='confirm-btn'>Confirmer</button>
        <button className='cancel-btn'>Annuler</button>
      </div>
    </main>
  );
};
