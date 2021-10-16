import {useState} from 'react';
import {Place} from '../../types/place';
import {OfferCityCard} from '../offer-city-card/offer-city-card';

type OffersListProps = {
  offers: Place[];
}

function OffersList({offers}: OffersListProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Place | null>(null);

  const handleOfferChoose = (offer: Place | null):void => {
    setActiveOffer(offer);

    // eslint-disable-next-line
    console.log(activeOffer);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer): JSX.Element =>
        (
          <OfferCityCard
            key={offer.id}
            offer={offer}
            onOfferChoose={handleOfferChoose}
          />
        ),
      )}
    </div>
  );
}

export {OffersList};
