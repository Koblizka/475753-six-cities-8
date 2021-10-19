import {Offer} from '../../types/offer';
import {OffersList} from '../../components/offers-list/offers-list';
import {Map} from '../../components/map/map';
import {CitiesList} from '../cities-list/cities-list';
import {cities} from '../../mocks/cities';
import {City} from '../../common/const';
import {useState} from 'react';

type MainPageProps = {
  amountPlacesToLive: number;
  offers: Offer[];
};

function MainScreen({amountPlacesToLive, offers}: MainPageProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);

  const handleOfferChoose = (offer: Offer | null):void => {
    setActiveOffer(offer);
  };

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
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/login">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              cities={cities}
              activeCity={City.Amsterdam}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{amountPlacesToLive} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <OffersList
                offers={offers}
                handleOfferChoose={handleOfferChoose}
              />
            </section>
            <div className="cities__right-section">
              <Map
                offers={offers}
                city={cities[3]}
                selectedOffer={activeOffer}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export {MainScreen};
