import {CardType} from '../../common/const';
import {Place} from '../../types/place';
import {PlaceCard} from '../place-card/place-card';

type favoriteItemProps = {
  offers: Place[]
}

function FavoriteItem({offers}: favoriteItemProps): JSX.Element{
  const distinctPlaces = new Set<string>();

  offers.map((offer) => distinctPlaces.add(offer.city));

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
                    .filter((offer) => offer.city === city)
                    .map((location): JSX.Element => (
                      <PlaceCard
                        offer={location}
                        key={location.id}
                        cardType={CardType.Favorites}
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
