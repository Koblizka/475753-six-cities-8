import {City} from './city';
import {Offer} from './offer';
import {UserComment} from './user-comment';
import {
  AuthorizationStatus,
  DataStatus,
  SortType
} from '../common/const';

type State = {
  activeCity: City;
  offers: Offer[];
  currentOffer: Offer | null;
  nearbyOffers: Offer[] | null;
  activeOffer: Offer | null;
  reviews: UserComment[] | null;
  activeSort: SortType;
  authorizationStatus: AuthorizationStatus;
  isOffersLoaded: DataStatus;
  isOfferDetailsLoaded: DataStatus;
  isNearbyOffersLoaded: DataStatus;
  isOfferCommnetsLoaded: DataStatus;
  isCommentPosted: DataStatus;
};

export type {State};
