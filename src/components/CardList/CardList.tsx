import { Link } from 'react-router-dom';
import './CardList.css';

// components
import { Card } from '../Card/Card';
// restaurants customized context
import { useRestaurantContext } from '../../contexts/RestaurantContext';

export const CardList = () => {
  // useContext hook invoked to consume actual context
  const { restaurants } = useRestaurantContext();
  return (
    <div className='main-grid-container'>
      {restaurants.map((restaurant) => (
        <Link
          className='card-link'
          to={{ pathname: `/restaurants/${restaurant.id}` }}
        >
          <Card restaurant={restaurant} key={restaurant.id} />
        </Link>
      ))}
    </div>
  );
};
