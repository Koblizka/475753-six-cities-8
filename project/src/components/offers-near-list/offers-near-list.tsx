import {CardClassType} from '../../common/const';
import {Offer} from '../../types/offer';
import {OfferNearCard} from '../offer-near-card/offer-near-card';

const OFFERS_LENGTH_CONSTRAINT = 3;

type OffersNearListProps = {
  offers: Offer[];
  className: CardClassType;
}

function OffersNearList({offers, className}: OffersNearListProps): JSX.Element {
  return (
    <div className="near-places__list places__list">
      {
        offers.slice(0, OFFERS_LENGTH_CONSTRAINT).map((offer): JSX.Element =>
          (
            <OfferNearCard offer={offer} key={offer.id} className={className}/>
          ),
        )
      }
    </div>
  );
}

export {OffersNearList};
