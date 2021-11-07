import {Offer} from '../../types/offer';
import {OfferCityCard} from '../offer-city-card/offer-city-card';
import {CardClassType} from '../../common/const';
import React from 'react';

type OffersCitiesListProps = {
  offers: Offer[];
  onOfferChoose: (offer: Offer | null) => void;
  className: CardClassType
}

function OffersCitiesList({offers, onOfferChoose, className}: OffersCitiesListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer): JSX.Element =>
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

export default React.memo(OffersCitiesList);
