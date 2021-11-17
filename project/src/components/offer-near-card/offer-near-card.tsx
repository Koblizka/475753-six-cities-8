import {useDispatch} from 'react-redux';
import {CardClassType} from '../../common/const';
import {updateNearbyOffer} from '../../store/actions';
import {Offer} from '../../types/offer';
import {OfferCard} from '../offer-card/offer-card';

type OfferNearCardProps = {
  offer: Offer;
  className: CardClassType;
}

function OfferNearCard({offer, className}: OfferNearCardProps): JSX.Element{
  const dispatch = useDispatch();

  const handleBookmark = () => {
    dispatch(updateNearbyOffer(offer));
  };

  return(
    <article
      className="near-places__card place-card"
    >
      <OfferCard
        offer={offer}
        className={className}
        onBookmark={handleBookmark}
      />
    </article>
  );
}

export {OfferNearCard};
