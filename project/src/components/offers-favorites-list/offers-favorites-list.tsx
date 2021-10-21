import {Offer} from '../../types/offer';
import {OfferFavoriteCard} from '../offer-favorite-card/offer-favorite-card';

type OffersFavoritesListProps = {
  offers: Offer[];
}

function OffersFavoritesList({offers}: OffersFavoritesListProps): JSX.Element{
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
                      <OfferFavoriteCard
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


export {OffersFavoritesList};
