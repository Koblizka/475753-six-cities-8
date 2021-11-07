import OffersSort from '../offers-sort/offers-sort';
import CitiesList from '../cities-list/cities-list';
import {Offer} from '../../types/offer';
import OffersCitiesList from '../offers-cities-list/offers-cities-list';
import CityMap from '../../components/map/map';
import {cities} from '../../mocks/cities';
import {useMemo} from 'react';
import {CardClassType} from '../../common/const';
import {chooseActiveOffer} from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import {applySort, getCityOffers} from '../../utils/utils';
import {Loader} from '../loader/loader';
import PageHeader from '../header/header';
import {getActiveCity, getActiveSort} from '../../store/processes/selectors';
import {getOffers, getOffersLoadStatus} from '../../store/offers/selectors';


function MainScreen(): JSX.Element {
  const dispatch = useDispatch();

  const activeCity = useSelector(getActiveCity);
  const activeSort = useSelector(getActiveSort);
  const offers = useSelector(getOffers);
  const offersLoadStatus = useSelector(getOffersLoadStatus);

  const handleOfferChoose = (offer: Offer | null) => dispatch(chooseActiveOffer(offer));


  const cityOffers = useMemo(
    () => getCityOffers(activeCity.name, offers),
    [offers, activeCity.name],
  );

  const sortedOffers = useMemo(
    () => applySort(activeSort, cityOffers),
    [activeSort, cityOffers],
  );

  if (!offersLoadStatus) {
    return (
      <Loader />
    );
  }

  return (
    <div className="page page--gray page--main">
      <PageHeader />
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
                offers={sortedOffers}
                onOfferChoose={handleOfferChoose}
                className={CardClassType.Cities}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <CityMap
                  offers={cityOffers}
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
export default MainScreen;
