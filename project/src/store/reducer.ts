import {State} from '../types/state';
import {Actions, ActionType} from '../types/actions';
import {getCity} from '../utils/utils';
import {
  AuthorizationStatus,
  City,
  DataStatus,
  SortType
} from '../common/const';

const initialState = {
  activeCity: getCity(City.Paris),
  offers: [],
  currentOffer: null,
  activeOffer: null,
  nearbyOffers: null,
  reviews: null,
  activeSort: SortType.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersLoaded: DataStatus.Default,
  isOfferDetailsLoaded: DataStatus.Default,
  isNearbyOffersLoaded: DataStatus.Default,
  isOfferCommnetsLoaded: DataStatus.Default,
  isCommentPosted: DataStatus.Default,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case (ActionType.ChangeActiveCity): {
      return {...state, activeCity: getCity(action.payload)};
    }
    case (ActionType.ChooseActiveOffer): {
      return {...state, activeOffer: action.payload};
    }
    case (ActionType.ChangeSortType): {
      return {...state, activeSort: action.payload};
    }
    case (ActionType.LoadOffers): {
      return {...state, offers: action.payload, isOffersLoaded: DataStatus.IsLoaded};
    }
    case (ActionType.LoadOfferDetails): {
      return {...state, currentOffer: action.payload};
    }
    case (ActionType.RequireOfferDetails): {
      return {...state, isOfferDetailsLoaded: action.payload};
    }
    case (ActionType.LoadNearbyOffers): {
      return {...state, nearbyOffers: action.payload};
    }
    case (ActionType.SetCommentPostStatus): {
      return {...state, isCommentPosted: action.payload};
    }
    case (ActionType.RequireNearbyOffers): {
      return {...state, isNearbyOffersLoaded: action.payload};
    }
    case (ActionType.LoadOfferComments): {
      return {...state, reviews: action.payload};
    }
    case (ActionType.RequireOfferComments): {
      return {...state, isOfferCommnetsLoaded: action.payload};
    }
    case (ActionType.RequireAuthorization): {
      return {...state, authorizationStatus: action.payload};
    }
    case (ActionType.RequireLogout): {
      return {...state, authorizationStatus: AuthorizationStatus.NotAuth};
    }
    default: {
      return state;
    }
  }
};

export {reducer};
