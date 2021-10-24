import {City} from '../common/const';
import {offers} from '../mocks/offers';
import {reviews} from '../mocks/reviews';
import {State} from '../types/state';
import {Actions, ActionType} from '../types/actions';
import {getCity, getCityOffers} from '../utils/utils';

const initialState = {
  activeCity: getCity(City.Paris),
  offers: getCityOffers(City.Paris, offers),
  activeOffer: null,
  reviews: reviews,
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
    default: {
      return state;
    }
  }
};

export {reducer};
