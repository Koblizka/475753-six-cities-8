import {Offer} from '../types/offer';
import {AuthorizationStatus, SortType} from '../common/const';

import {
  ActionType,
  ChangeActiveCityAction,
  ChooseActiveOfferAction,
  ChangeSortTypeAction,
  FillOffersListAction,
  RequireAuthorizationAction,
  LoadOffersAction,
  RequireLogoutAction
} from '../types/actions';


const changeActiveCity = (activeCity: string): ChangeActiveCityAction => (
  {
    type: ActionType.ChangeActiveCity,
    payload: activeCity,
  }
);

const fillOffersList = (): FillOffersListAction => (
  {
    type: ActionType.FillOffersList,
  }
);

const chooseActiveOffer = (offer: Offer | null): ChooseActiveOfferAction => (
  {
    type: ActionType.ChooseActiveOffer,
    payload: offer,
  }
);

const changeSortType = (sortType: SortType): ChangeSortTypeAction => (
  {
    type: ActionType.ChangeSortType,
    payload: sortType,
  }
);

const loadOffers = (offers: Offer[]): LoadOffersAction => (
  {
    type: ActionType.LoadOffers,
    payload: offers,
  }
);

const requireLogout = (): RequireLogoutAction => (
  {
    type: ActionType.RequireLogout,
  }
);

const requireAuthorization = (authorizationStatus: AuthorizationStatus): RequireAuthorizationAction => (
  {
    type: ActionType.RequireAuthorization,
    payload: authorizationStatus,
  }
);


export {
  changeActiveCity,
  fillOffersList,
  chooseActiveOffer,
  changeSortType,
  loadOffers,
  requireLogout,
  requireAuthorization
};
