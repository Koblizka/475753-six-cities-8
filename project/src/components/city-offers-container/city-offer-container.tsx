import {useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chooseActiveOffer } from '../../store/actions';
import {getOffers } from '../../store/offers/selectors';
import { getActiveCity, getActiveSort } from '../../store/processes/selectors';
import { Offer } from '../../types/offer';
import { applySort, getCityOffers } from '../../utils/utils';
import CitiesOffersEmpty from '../cities-offers-empty/cities-offers-empty';
import CitiesOffers from '../cities-offers/cities-offers';

type CityOffersContainerProps = {
  isOffers: boolean
}

function CityOffersContainer({isOffers}: CityOffersContainerProps): JSX.Element {
  const dispatch = useDispatch();

  const activeCity = useSelector(getActiveCity);
  const activeSort = useSelector(getActiveSort);
  const offers = useSelector(getOffers);

  const handleOfferChoose = (offer: Offer | null) => dispatch(chooseActiveOffer(offer));

  const cityOffers = useMemo(
    () => getCityOffers(activeCity.name, offers),
    [offers, activeCity.name],
  );

  const sortedOffers = useMemo(
    () => applySort(activeSort, cityOffers),
    [activeSort, cityOffers],
  );


  return (
    isOffers
      ?
      (
        <CitiesOffers
          offers={sortedOffers}
          offersAmount={cityOffers.length}
          cityOffers={cityOffers}
          activeCity={activeCity.name}
          onOfferChoose={handleOfferChoose}
        />
      )
      :
      (
        <CitiesOffersEmpty
          activeCity={activeCity.name}
        />
      )
  );
}


export default CityOffersContainer;
