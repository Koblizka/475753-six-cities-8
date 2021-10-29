import {AxiosInstance} from 'axios';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AuthorizationStatus, SortType} from '../common/const';
import {Offer} from './offer';
import {State} from './state';


enum ActionType {
  ChangeActiveCity = 'cities/changeActiveCity',
  ChooseActiveOffer = 'cities/chooseActiveOffer',
  FillOffersList = 'cities/fillOffersList',
  ChangeSortType = 'cities/changeSortType',
  LoadOffers = 'data/loadOffers',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
}

type ChangeActiveCityAction = {
  type: ActionType.ChangeActiveCity;
  payload: string;
}

type FillOffersListAction = {
  type: ActionType.FillOffersList;
}

type ChooseActiveOfferAction = {
  type: ActionType.ChooseActiveOffer;
  payload: Offer | null;
}

type ChangeSortTypeAction = {
  type: ActionType.ChangeSortType;
  payload: SortType;
}

type RequireLogoutAction = {
  type: ActionType.RequireLogout;
}

type RequireAuthorizationAction = {
  type: ActionType.RequireAuthorization;
  payload: AuthorizationStatus;
}

type LoadOffersAction = {
  type: ActionType.LoadOffers;
  payload: Offer[];
}

type Actions =
  | ChangeActiveCityAction
  | FillOffersListAction
  | ChooseActiveOfferAction
  | ChangeSortTypeAction
  | LoadOffersAction
  | RequireLogoutAction
  | RequireAuthorizationAction;

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export {ActionType};
export type {
  ChangeActiveCityAction,
  FillOffersListAction,
  ChooseActiveOfferAction,
  ChangeSortTypeAction,
  RequireAuthorizationAction,
  RequireLogoutAction,
  LoadOffersAction,
  Actions,
  ThunkActionResult,
  ThunkAppDispatch
};
