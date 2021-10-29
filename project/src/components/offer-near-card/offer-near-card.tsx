import {CardClassType} from '../../common/const';
import {Offer} from '../../types/offer';
import {OfferCard} from '../offer-card/offer-card';

type OfferNearCardProps = {
  offer: Offer;
  className: CardClassType;
  onOfferChoose: (offer: Offer | null) => void;
}

function OfferNearCard({offer, className, onOfferChoose}: OfferNearCardProps): JSX.Element{
  const handleMouseEnter = () => onOfferChoose(offer);
  const handleMouseLeave = () => onOfferChoose(null);

  return(
    <article
      className="near-places__card place-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <OfferCard offer={offer} className={className} />
    </article>
  );
}

export {OfferNearCard};
