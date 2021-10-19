import {Offer} from '../../types/offer';
import {OfferCard} from '../offer-card/offer-card';

type FavoriteOfferCardProps = {
  offer: Offer;
  className: null
}

function OfferFavoriteCard({offer, className}: FavoriteOfferCardProps): JSX.Element {
  return (
    <article
      className="favorites__card place-card"
    >
      <OfferCard offer={offer} className={className} />
    </article>
  );
}

export {OfferFavoriteCard};
