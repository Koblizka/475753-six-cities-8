import {CardClassType} from '../../common/const';
import {Offer} from '../../types/offer';
import {OfferCard} from '../offer-card/offer-card';

type OfferNearCardProps = {
  offer: Offer;
  className: CardClassType;
}

function OfferNearCard({offer, className}: OfferNearCardProps): JSX.Element{
  return(
    <article className="near-places__card place-card">
      <OfferCard offer={offer} className={className} />
    </article>
  );
}

export {OfferNearCard};
