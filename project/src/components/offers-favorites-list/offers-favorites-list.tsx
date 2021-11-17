import {Offer} from '../../types/offer';
import {getCityOffers} from '../../utils/utils';
import {OfferFavoriteCard} from '../offer-favorite-card/offer-favorite-card';

type OffersFavoritesListProps = {
  offers: Offer[] | null;
}

function OffersFavoritesList({offers}: OffersFavoritesListProps): JSX.Element{
  const distinctPlaces = new Set<string>();

  offers?.forEach((offer) => distinctPlaces.add(offer.city.name));

  return (
    <section className='favorites'>
      <h1 className="favorites__title">Saved listing</h1>
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
                    offers && getCityOffers(city, offers)
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
    </section>
  );
}


export {OffersFavoritesList};
