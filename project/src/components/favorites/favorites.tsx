import UserNav from '../user-nav/user-nav';
import {OffersFavoritesList} from '../offers-favorites-list/offers-favorites-list';
import {getFavoritesPlaces} from '../../utils/utils';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';

const mapStateToProps = ({offers}: State) => ({
  offers,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function FavoritesScreen({offers}: PropsFromRedux): JSX.Element {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <UserNav />
          </div>
        </div>
      </header>
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
export default connector(FavoritesScreen);
