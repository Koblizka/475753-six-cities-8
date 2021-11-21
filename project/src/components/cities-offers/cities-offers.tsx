import OffersSort from '../offers-sort/offers-sort';
import OffersCitiesList from '../offers-cities-list/offers-cities-list';
import {Offer} from '../../types/offer';
import {CardClassType} from '../../common/const';
import CityMap from '../city-map/city-map';
import {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {getActiveOffer} from '../../store/processes/selectors';

type CitiesOffersProps = {
  offersAmount: number;
  cityOffers: Offer[];
  activeCity: string;
  offers: Offer[];
  onOfferChoose: (offer: Offer | null) => void;
}

function CitiesOffers({offersAmount, activeCity, offers, onOfferChoose, cityOffers}: CitiesOffersProps): JSX.Element {
  const activeOffer = useSelector(getActiveOffer);

  return (
    <Fragment>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offersAmount} places to stay in {activeCity}</b>
        <OffersSort />
        <OffersCitiesList
          offers={offers}
          onOfferChoose={onOfferChoose}
          className={CardClassType.Cities}
        />
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <CityMap
            offers={cityOffers}
            activeOffer={activeOffer as Offer}
          />
        </section>
      </div>
    </Fragment>
  );
}

export default CitiesOffers;
