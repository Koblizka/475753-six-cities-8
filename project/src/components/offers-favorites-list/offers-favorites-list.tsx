import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFavoritesAction} from '../../store/api-actions';
import {getFavoriteOffers} from '../../store/offers/selectors';
import {getCityOffers} from '../../utils/utils';
import {OfferFavoriteCard} from '../offer-favorite-card/offer-favorite-card';

function OffersFavoritesList(): JSX.Element{
  const dispatch = useDispatch();
  const offers = useSelector(getFavoriteOffers);

  const distinctPlaces = new Set<string>();

  useEffect(()=> {
    dispatch(fetchFavoritesAction());
  },[dispatch]);

  offers?.forEach((offer) => distinctPlaces.add(offer.city.name));

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
                  offers && getCityOffers(city ,offers)
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
