import CitiesList from '../cities-list/cities-list';
import {cities} from '../../mocks/cities';
import {DataStatus} from '../../common/const';
import {useSelector} from 'react-redux';
import PageHeader from '../page-header/page-header';
import {getActiveCity} from '../../store/processes/selectors';
import {getOffers, getOffersLoadStatus} from '../../store/offers/selectors';
import clsx from 'clsx';
import CityOffersContainer from '../city-offers-container/city-offer-container';
import { Loader } from '../loader/loader';


function MainScreen(): JSX.Element {
  const activeCity = useSelector(getActiveCity);
  const offers = useSelector(getOffers);
  const offersLoadStatus = useSelector(getOffersLoadStatus);
  const hasOffers = Boolean(offersLoadStatus === DataStatus.IsLoaded || offers.length);

  return (
    <div className="page page--gray page--main">
      <PageHeader />
      <main className={`page__main page__main--index ${clsx((offersLoadStatus === DataStatus.NotLoaded || !offers.length) && 'page__main--index-empty')}`}>
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
          <div className={`cities__places-container ${clsx(hasOffers && 'cities__places-container--empty')} container`}>
            {
              offersLoadStatus === DataStatus.IsLoading
                ?
                (
                  <Loader />
                )
                :
                (
                  <CityOffersContainer
                    hasOffers={hasOffers}
                  />
                )
            }
          </div>
        </div>
      </main>
    </div>
  );
}

export {MainScreen};
export default MainScreen;
