import {ThunkActionResult} from '../types/actions';
import {AuthData} from '../types/auth-data';
import {OfferServerside} from '../types/offer';
import {removeToken, saveToken, Token} from '../utils/token';

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
  getAdaptedOffers
} from '../utils/utils';
import {
  loadNearbyOffers,
  loadOfferComments,
  loadOfferDetails,
  loadOffers,
  requireAuthorization,
  requireLogout,
  requireOfferComments,
  requireOfferDetails,
  setCommentPostStatus
} from './actions';


const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OfferServerside[]>(ApiRoute.Hotels);
    dispatch(loadOffers(getAdaptedOffers(data)));
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
  async (dispatch, _getState, api): Promise<void> => {
    await api.get(ApiRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.IsAuth));
      });
  };

const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data: {token}} = await api.post<{token: Token}>(ApiRoute.Login, {email, password});

      saveToken(token);
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

export {
  fetchOffersAction,
  fetchOfferDetailsAction,
  fetchNearbyOffersAction,
  fetchOfferCommentsAction,
  postCommentAction,
  checkAuthAction,
  loginAction,
  logoutAction
};
