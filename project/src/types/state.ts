import {City} from './city';
import {Offer} from './offer';
import {UserComment} from './user-comment';
import {RootState} from '../store/root-reducer';

import {
  AuthorizationStatus,
  DataStatus,
  SortType
} from '../common/const';


type OffersData = {
  offers: Offer[];
  nearbyOffers: Offer[] | null;
  offersLoadStatus: DataStatus;
  offerDetailsLoadStatus: DataStatus;
  nearbyOffersLoadStatus: DataStatus;
  favoriteOffers: Offer[];
};

type ProcessesData = {
  activeCity: City;
  currentOffer: Offer | null;
  activeOffer: Offer | null;
  activeSort: SortType;
};

type UserCommentsData = {
  reviews: UserComment[] | null;
  offerCommnetsLoadStatus: DataStatus;
  commentPostStatus: DataStatus;
};

type UserData = {
  authorizationStatus: AuthorizationStatus;
};

type State = RootState;

export type {
  OffersData,
  ProcessesData,
  UserCommentsData,
  UserData,
  State
};
