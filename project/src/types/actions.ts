import {AxiosInstance} from 'axios';
import {ThunkAction} from 'redux-thunk';
import {State} from './state';
import {Action} from 'redux';


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

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export {ActionType};
export type {ThunkActionResult};
