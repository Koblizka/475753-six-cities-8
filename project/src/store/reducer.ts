import {offers} from '../mocks/offers';
import {reviews} from '../mocks/reviews';
import {State} from '../types/state';
import {City, SortType} from '../common/const';
import {Actions, ActionType} from '../types/actions';
import {applySort, getCity, getCityOffers} from '../utils/utils';

const initialState = {
  activeCity: getCity(City.Paris),
  offers: getCityOffers(City.Paris, offers),
  activeOffer: null,
  reviews: reviews,
  activeSort: SortType.Popular,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case (ActionType.ChangeActiveCity): {
      return {...state, activeCity: getCity(action.payload)};
    }
    case (ActionType.FillOffersList): {
      return {...state, offers: getCityOffers(state.activeCity.name, offers)};
    }
    case (ActionType.ChooseActiveOffer): {
      return {...state, activeOffer: action.payload};
    }
    case (ActionType.ChangeSortType): {
      return {...state, activeSort: action.payload, offers: applySort(action.payload, state.offers)};
    }
    default: {
      return state;
    }
  }
};

export {reducer};
