import {CardClassType} from '../../common/const';
import {Offer} from '../../types/offer';
import {OfferCard} from '../offer-card/offer-card';

type CityPlaceCardProps = {
  offer: Offer;
  onOfferChoose: (offer: Offer | null) => void;
  className: CardClassType;
}

function OfferCityCard({offer, onOfferChoose, className}: CityPlaceCardProps): JSX.Element {

  const handleMouseEnter = () => onOfferChoose(offer);
  const handleMouseLeave = () => onOfferChoose(null);

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <OfferCard offer={offer} className={className}/>
    </article>
  );
}

export {OfferCityCard};
