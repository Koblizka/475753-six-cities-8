import {DataStatus} from '../../common/const';
import {Offer} from '../../types/offer';
import {State} from '../../types/state';
import {NameSpace} from '../root-reducer';

const getOffers = (state: State): Offer[] => state[NameSpace.Offers].offers;
const getNearbyOffers = (state: State): Offer[] | null => state[NameSpace.Offers].nearbyOffers;
const getOffersDetailsLoadStatus = (state: State): DataStatus => state[NameSpace.Offers].offerDetailsLoadStatus;
const getNearbyOffersLoadStatus = (state: State): DataStatus => state[NameSpace.Offers].nearbyOffersLoadStatus;
const getOffersLoadStatus = (state: State): DataStatus => state[NameSpace.Offers].offersLoadStatus;
const getFavoriteOffers = (state: State): Offer[] | null => state[NameSpace.Offers].favoriteOffers;

export {
  getOffers,
  getOffersDetailsLoadStatus,
  getNearbyOffers,
  getNearbyOffersLoadStatus,
  getOffersLoadStatus,
  getFavoriteOffers
};
