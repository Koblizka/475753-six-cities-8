import {Offer} from '../../types/offer';
import {OfferCityCard} from '../offer-city-card/offer-city-card';
import {CardClassType} from '../../common/const';
import {City} from '../../types/city';

type OffersCitiesListProps = {
  offers: Offer[];
  activeCity: City;
  onOfferChoose: (offer: Offer | null) => void;
  className: CardClassType
}

function OffersCitiesList({offers, onOfferChoose, activeCity, className}: OffersCitiesListProps): JSX.Element {
  const activeCityName = activeCity.name;
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.filter((offer) => offer.city.name === activeCityName).map((offer): JSX.Element =>
          (
            <OfferCityCard
              key={offer.id}
              offer={offer}
              onOfferChoose={onOfferChoose}
              className={className}
            />
          ),
        )
      }
    </div>
  );
}

export {OffersCitiesList};
