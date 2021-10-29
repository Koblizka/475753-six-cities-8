import {ApiRoute, AuthorizationStatus} from '../common/const';
import {ThunkActionResult} from '../types/actions';
import {AuthData} from '../types/auth-data';
import {OfferServerside} from '../types/offer';
import {removeToken, saveToken, Token} from '../utils/token';
import {getAdaptedOffers} from '../utils/utils';
import {loadOffers, requireAuthorization, requireLogout} from './actions';


const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OfferServerside[]>(ApiRoute.Hotels);
    dispatch(loadOffers(getAdaptedOffers(data)));
  };

const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(ApiRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.IsAuth));
      });
  };

const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(ApiRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.IsAuth));
  };


const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(ApiRoute.Logout);
    removeToken();
    dispatch(requireLogout());
  };

export {
  fetchOffersAction,
  checkAuthAction,
  loginAction,
  logoutAction
};
