import OffersSort from '../offers-sort/offers-sort';
import CitiesList from '../cities-list/cities-list';
import UserNav from '../user-nav/user-nav';
import {Offer} from '../../types/offer';
import {OffersCitiesList} from '../offers-cities-list/offers-cities-list';
import {Map} from '../../components/map/map';
import {cities} from '../../mocks/cities';
import {Dispatch} from 'react';
import {CardClassType} from '../../common/const';
import {State} from '../../types/state';
import {chooseActiveOffer} from '../../store/actions';
import {Actions} from '../../types/actions';
import {connect, ConnectedProps} from 'react-redux';
import {applySort, getCityOffers} from '../../utils/utils';
import {Loader} from '../loader/loader';


const mapStateToProps = ({activeCity, offers, activeOffer, activeSort, isOffersLoaded, authorizationStatus}: State) => ({
  activeCity,
  offers,
  activeOffer,
  activeSort,
  isOffersLoaded,
  authorizationStatus,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => (
  {
    onOfferChoose(offer: Offer | null) {
      dispatch(chooseActiveOffer(offer));
    },
  }
);

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function MainScreen({offers, activeCity, activeOffer, activeSort, isOffersLoaded, onOfferChoose}: ConnectedComponentProps): JSX.Element {

  if (!isOffersLoaded) {
    return (
      <Loader />
    );
  }

  const cityOffers = getCityOffers(activeCity.name, offers);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active" href="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <UserNav />
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              cities={cities}
              activeCity={activeCity}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cityOffers.length} places to stay in {activeCity.name}</b>
              <OffersSort />
              <OffersCitiesList
                offers={applySort(activeSort, cityOffers)}
                onOfferChoose={onOfferChoose}
                className={CardClassType.Cities}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  offers={cityOffers}
                  activeCity={activeCity}
                  selectedOffer={activeOffer}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export {MainScreen};
export default connector(MainScreen);
