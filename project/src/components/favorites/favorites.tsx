import {OffersFavoritesList} from '../offers-favorites-list/offers-favorites-list';
import PageHeader from '../../components/header/header';
import {useDispatch, useSelector} from 'react-redux';
import {getFavoriteOffers} from '../../store/offers/selectors';
import {useEffect} from 'react';
import {fetchFavoritesAction} from '../../store/api-actions';
import clsx from 'clsx';
import OffersFavoritesListEmpty from '../offers-favorite-list-empty/offers-favorite-list-empty';


function FavoritesScreen(): JSX.Element {
  const dispatch = useDispatch();
  const offers = useSelector(getFavoriteOffers);
  const hasOffers = Boolean(offers?.length);

  useEffect(()=> {
    dispatch(fetchFavoritesAction());
  },[dispatch]);

  return (
    <div className={`page ${clsx(hasOffers && 'page--favorites-empty')}`}>
      <PageHeader />
      <main className={`page__main page__main--favorites ${clsx(hasOffers && 'page__main--favorites-empty')}`}>
        <div className="page__favorites-container container">
          {
            hasOffers
              ?
              (
                <OffersFavoritesList offers={offers} />
              )
              :
              (
                <OffersFavoritesListEmpty />
              )
          }
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export {FavoritesScreen};
export default FavoritesScreen;
