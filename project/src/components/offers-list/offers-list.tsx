import {useState} from 'react';
import {CardType} from '../../common/const';
import {Place} from '../../types/place';
import {PlaceCard} from '../place-card/place-card';

type OffersListProps = {
  offers: Place[];
}

function OffersList({offers}: OffersListProps): JSX.Element {
  const [, setActiveOffer] = useState<Place | null>(null);

  const handleOfferChoose = (offer: Place | null):void => {
    offer ? setActiveOffer(offer) : setActiveOffer(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer): JSX.Element =>
        (
          <PlaceCard
            key={offer.id}
            offer={offer}
            cardType={CardType.Cities}
            onOfferChoose={handleOfferChoose}
          />
        ),
      )}
    </div>
  );
}

export {OffersList};
