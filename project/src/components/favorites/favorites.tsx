import {OffersFavoritesList} from '../offers-favorites-list/offers-favorites-list';
import PageHeader from '../../components/header/header';
import {getFavoritesPlaces} from '../../utils/utils';
import {useSelector} from 'react-redux';
import {getOffers} from '../../store/offers/selectors';


function FavoritesScreen(): JSX.Element {
  const offers = useSelector(getOffers);

  return (
    <div className="page">
      <PageHeader />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <OffersFavoritesList
              offers={getFavoritesPlaces(offers)}
            />
          </section>
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
