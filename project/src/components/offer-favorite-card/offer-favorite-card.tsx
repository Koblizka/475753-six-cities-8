import {Offer} from '../../types/offer';
import {OfferCard} from '../offer-card/offer-card';

type FavoriteOfferCardProps = {
  offer: Offer;
}

function OfferFavoriteCard({offer}: FavoriteOfferCardProps): JSX.Element {
  return (
    <article
      className="favorites__card place-card"
    >
      <OfferCard
        offer={offer}
      />
    </article>
  );
}

export {OfferFavoriteCard};
