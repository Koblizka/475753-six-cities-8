import {Offer} from '../../types/offer';
import {OfferCityCard} from '../offer-city-card/offer-city-card';
import {City} from '../../common/const';

type OffersListProps = {
  offers: Offer[];
  activeCity: City;
  onOfferChoose: (offer: Offer | null) => void;
}

function OffersList({offers, onOfferChoose, activeCity}: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.filter((offer) => offer.city.name === activeCity).map((offer): JSX.Element =>
        (
          <OfferCityCard
            key={offer.id}
            offer={offer}
            onOfferChoose={onOfferChoose}
          />
        ),
      )}
    </div>
  );
}

export {OffersList};
