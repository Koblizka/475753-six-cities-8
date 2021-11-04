import {AxiosInstance} from 'axios';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Offer} from './offer';
import {State} from './state';
import {UserComment} from './user-comment';
import {
  AuthorizationStatus,
  DataStatus,
  SortType
} from '../common/const';


enum ActionType {
  ChangeActiveCity = 'cities/changeActiveCity',
  ChooseActiveOffer = 'cities/chooseActiveOffer',
  FillOffersList = 'cities/fillOffersList',
  ChangeSortType = 'cities/changeSortType',
  LoadOfferDetails = 'data/loadOfferDetails',
  LoadNearbyOffers = 'data/loadNearbyOffers',
  LoadOffers = 'data/loadOffers',
  LoadOfferComments = 'data/loadOfferComments',
  RequireOfferComments = 'data/requireOfferComments',
  RequireOfferDetails = 'data/requireOfferDetails',
  RequireNearbyOffers = 'data/requireNearbyOffers',
  RequireAuthorization = 'user/requireAuthorization',
  SetCommentPostStatus = 'user/setCommentPostStatus',
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

type LoadOfferCommentsAction = {
  type: ActionType.LoadOfferComments;
  payload: UserComment[];
}

type RequireOfferCommentsAction = {
  type: ActionType.RequireOfferComments;
  payload: DataStatus;
}

type LoadOfferDetailsAction = {
  type: ActionType.LoadOfferDetails;
  payload: Offer;
}

type RequireOfferDetailsAction = {
  type: ActionType.RequireOfferDetails;
  payload: DataStatus;
}

type SetCommentPostStatusAction = {
  type: ActionType.SetCommentPostStatus;
  payload: DataStatus;
}

type LoadNearbyOffersAction = {
  type: ActionType.LoadNearbyOffers;
  payload: Offer[];
}

type RequireNearbyOffersAction = {
  type: ActionType.RequireNearbyOffers;
  payload: DataStatus;
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
  | RequireAuthorizationAction
  | LoadOfferDetailsAction
  | LoadNearbyOffersAction
  | LoadOfferCommentsAction
  | RequireOfferDetailsAction
  | RequireNearbyOffersAction
  | SetCommentPostStatusAction
  | RequireOfferCommentsAction;

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
  RequireOfferDetailsAction,
  RequireNearbyOffersAction,
  RequireOfferCommentsAction,
  SetCommentPostStatusAction,
  LoadOfferDetailsAction,
  LoadOfferCommentsAction,
  LoadNearbyOffersAction,
  LoadOffersAction,
  Actions,
  ThunkActionResult,
  ThunkAppDispatch
};
