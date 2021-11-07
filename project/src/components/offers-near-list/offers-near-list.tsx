import React from 'react';
import {CardClassType} from '../../common/const';
import {Offer} from '../../types/offer';
import {OfferNearCard} from '../offer-near-card/offer-near-card';

type OffersNearListProps = {
  offers: Offer[];
  className: CardClassType;
  onOfferChoose: (offer: Offer | null) => void;
}


function OffersNearList({offers, className, onOfferChoose}: OffersNearListProps): JSX.Element {
  return (
    <div className="near-places__list places__list">
      {
        offers.map((offer): JSX.Element =>
          (
            <OfferNearCard
              offer={offer}
              key={offer.id}
              className={className}
              onOfferChoose={onOfferChoose}
            />
          ),
        )
      }
    </div>
  );
}

export default React.memo(OffersNearList);
