import {Place} from '../../types/place';
import {FavoriteOfferCard} from '../offer-favorite-card/offer-favorite-card';

type favoriteItemProps = {
  offers: Place[]
}

function FavoriteItem({offers}: favoriteItemProps): JSX.Element{
  const distinctPlaces = new Set<string>();

  offers.forEach((offer) => distinctPlaces.add(offer.city.name));

  return (
    <ul className="favorites__list">
      {
        [...distinctPlaces]
          .map((city): JSX.Element => (
            <li className="favorites__locations-items" key={city}>
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="/">
                    <span>{city}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {
                  offers
                    .filter((offer) => offer.city.name === city)
                    .map((location): JSX.Element => (
                      <FavoriteOfferCard
                        offer={location}
                        key={location.id}
                      />
                    ),
                    )
                }
              </div>
            </li>
          ))
      }
    </ul>
  );
}


export {FavoriteItem};
