import {reviews} from '../mocks/reviews';
import {State} from '../types/state';
import {AuthorizationStatus, City, SortType} from '../common/const';
import {Actions, ActionType} from '../types/actions';
import {getCity} from '../utils/utils';

const initialState = {
  activeCity: getCity(City.Paris),
  offers: [],
  activeOffer: null,
  reviews: reviews,
  activeSort: SortType.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersLoaded: false,
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
      return {...state, offers: action.payload, isOffersLoaded: true};
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
