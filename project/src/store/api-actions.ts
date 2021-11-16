import {ThunkActionResult} from '../types/actions';
import {AuthData} from '../types/auth-data';
import {OfferServerside} from '../types/offer';
import {removeToken, saveToken} from '../utils/token';

import {
  ApiRoute,
  AuthorizationStatus,
  DataStatus
} from '../common/const';
import {
  NewComment,
  UserCommentServerside
} from '../types/user-comment';
import {
  getAdaptedComments,
  getAdaptedOffer,
  getAdaptedOffers,
  getAdaptedUserAuthData
} from '../utils/utils';
import {
  loadNearbyOffers,
  loadOfferComments,
  loadOfferDetails,
  loadOffers,
  requireAuthorization,
  requireOffers,
  requireLogout,
  requireOfferComments,
  requireOfferDetails,
  setCommentPostStatus,
  updateOffer,
  loadFavorites,
  loginUser
} from './actions';
import { UserAuthDataServerside } from '../types/user';


const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(requireOffers(DataStatus.IsLoading));

    try {
      const {data} = await api.get<OfferServerside[]>(ApiRoute.Hotels);
      dispatch(loadOffers(getAdaptedOffers(data)));
    }
    catch {
      dispatch(requireOffers(DataStatus.NotLoaded));
    }
  };

const fetchOfferDetailsAction = (offerId: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<OfferServerside>(`${ApiRoute.Hotels}/${offerId}`);
      dispatch(loadOfferDetails(getAdaptedOffer(data)));
      dispatch(requireOfferDetails(DataStatus.IsLoaded));
    }
    catch {
      dispatch(requireOfferDetails(DataStatus.NotLoaded));
    }
  };

const fetchNearbyOffersAction = (offerId: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<OfferServerside[]>(`${ApiRoute.Hotels}/${offerId}/nearby`);
      dispatch(loadNearbyOffers(getAdaptedOffers(data)));
      dispatch(requireOfferDetails(DataStatus.IsLoaded));
    }
    catch {
      dispatch(requireOfferDetails(DataStatus.NotLoaded));
    }
  };

const fetchOfferCommentsAction = (offerId: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<UserCommentServerside[]>(`${ApiRoute.Comments}/${offerId}`);

      dispatch(loadOfferComments(getAdaptedComments(data)));
      dispatch(requireOfferComments(DataStatus.IsLoaded));
    }
    catch {
      dispatch(requireOfferDetails(DataStatus.NotLoaded));
    }
  };

const postCommentAction = ({comment, rating}: NewComment, offerId: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setCommentPostStatus(DataStatus.IsSending));

    try {
      const {data} = await api.post<UserCommentServerside[]>(`${ApiRoute.Comments}/${offerId}`, {comment, rating});

      dispatch(loadOfferComments(getAdaptedComments(data)));
      dispatch(setCommentPostStatus(DataStatus.IsSended));
    }
    catch {
      dispatch(setCommentPostStatus(DataStatus.NotSended));
    }
  };

const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get<UserAuthDataServerside>(ApiRoute.Login)
      .then(({data}) => {
        dispatch(loginUser(getAdaptedUserAuthData(data)));
        dispatch(requireAuthorization(AuthorizationStatus.IsAuth));
      })
      .catch(() => {
        dispatch(requireAuthorization(AuthorizationStatus.NotAuth));
      });
  };

const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.post<UserAuthDataServerside>(ApiRoute.Login, {email, password});

      saveToken(data.token);
      dispatch(loginUser(getAdaptedUserAuthData(data)));
      dispatch(requireAuthorization(AuthorizationStatus.IsAuth));
    }
    catch {
      dispatch(requireAuthorization(AuthorizationStatus.NotAuth));
    }
  };

const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    api.delete(ApiRoute.Logout);
    removeToken();
    dispatch(requireLogout());
  };

const bookmarkAction = (offerId: string, status: boolean): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.post<OfferServerside>(`${ApiRoute.Favorite}/${offerId}/${Number(!status)}`);

    dispatch(updateOffer(getAdaptedOffer(data)));
  };

const fetchFavoritesAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OfferServerside[]>(ApiRoute.Favorite);

    dispatch(loadFavorites(getAdaptedOffers(data)));
  };

export {
  fetchOffersAction,
  fetchOfferDetailsAction,
  fetchNearbyOffersAction,
  fetchOfferCommentsAction,
  postCommentAction,
  fetchFavoritesAction,
  bookmarkAction,
  checkAuthAction,
  loginAction,
  logoutAction
};
