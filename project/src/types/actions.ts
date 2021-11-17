import {AxiosInstance} from 'axios';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Offer} from './offer';
import {State} from './state';
import {UserComment} from './user-comment';
import {Action} from 'redux';

import {
  AuthorizationStatus,
  DataStatus,
  SortType
} from '../common/const';
import { UserAuthData } from './user';


enum ActionType {
  ChangeActiveCity = 'cities/changeActiveCity',
  ChooseActiveOffer = 'cities/chooseActiveOffer',
  FillOffersList = 'cities/fillOffersList',
  ChangeSortType = 'cities/changeSortType',
  LoadOfferDetails = 'details/loadOfferDetails',
  LoadNearbyOffers = 'data/loadNearbyOffers',
  LoadOffers = 'data/loadOffers',
  LoadOfferComments = 'data/loadOfferComments',
  RequireOffers = 'data/requireOffers',
  RequireOfferComments = 'data/requireOfferComments',
  RequireOfferDetails = 'details/requireOfferDetails',
  RequireNearbyOffers = 'data/requireNearbyOffers',
  RequireAuthorization = 'user/requireAuthorization',
  SetCommentPostStatus = 'user/setCommentPostStatus',
  RequireLogout = 'user/requireLogout',
  UpdateOffer = 'cities/updateOffer',
  LoadFavorites = 'favorites/loadFavorites',
  LoginUser = 'user/loginUser',
  UpdateFavoriteOffer = 'favorites/updateFavoriteOffer',
  UpdateOfferDetails = 'details/updateOfferDetails',
  UpdateNearbyOffer = 'details/updateNearbyOffer',
}

type ChangeActiveCityAction = {
  type: ActionType.ChangeActiveCity;
  payload: string;
}

type FillOffersListAction = {
  type: ActionType.FillOffersList;
}

type RequireOffersAction = {
  type: ActionType.RequireOffers;
  payload: DataStatus;
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

type LoadFavoritesAction = {
  type: ActionType.LoadFavorites;
  payload: Offer[];
}

type UpdateOfferAction = {
  type: ActionType.UpdateOffer;
  payload: Offer;
}

type UpdateNearbyOfferAction = {
  type: ActionType.UpdateNearbyOffer;
  payload: Offer;
}

type UpdateFavoriteOfferAction = {
  type: ActionType.UpdateFavoriteOffer;
  payload: Offer;
}

type UpdateOfferDetailsAction = {
  type: ActionType.UpdateOfferDetails;
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

type LoginUserAction = {
  type: ActionType.LoginUser;
  payload: UserAuthData;
}

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;

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
  RequireOffersAction,
  SetCommentPostStatusAction,
  LoadOfferDetailsAction,
  LoadOfferCommentsAction,
  LoadFavoritesAction,
  LoadNearbyOffersAction,
  UpdateOfferAction,
  UpdateOfferDetailsAction,
  UpdateNearbyOfferAction,
  UpdateFavoriteOfferAction,
  LoadOffersAction,
  LoginUserAction,
  ThunkActionResult,
  ThunkAppDispatch
};
