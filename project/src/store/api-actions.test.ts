import { createApi } from '../utils/api';
import MockAdapter from 'axios-mock-adapter';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { State } from '../types/state';
import {Action} from 'redux';
import { ApiRoute, AuthorizationStatus, DataStatus } from '../common/const';
import { AuthData } from '../types/auth-data';
import {offersServerside} from '../mocks/offers';
import {userCommentPost, userCommentsServerside} from '../mocks/user-comment';
import {getAdaptedComments, getAdaptedOffer, getAdaptedOffers, getAdaptedUserAuthData } from '../utils/utils';
import {
  bookmarkAction,
  checkAuthAction,
  fetchFavoritesAction,
  fetchNearbyOffersAction,
  fetchOfferCommentsAction,
  fetchOfferDetailsAction,
  fetchOffersAction,
  loginAction,
  logoutAction,
  postCommentAction
} from './api-actions';
import {
  loadFavorites,
  loadNearbyOffers,
  loadOfferComments,
  loadOfferDetails,
  loadOffers,
  loginUser,
  requireAuthorization,
  requireLogout,
  requireOfferComments,
  requireOfferDetails,
  requireOffers,
  setCommentPostStatus,
  updateOffer
} from './actions';


describe('Async actions', () => {
  const onFakeUnauthorized = jest.fn();
  const fakeUserAuthData = {
    'avatar_url': 'img/avatar-angelina.jpg',
    'email': 'test@test.test',
    'id': '1',
    'is_pro': true,
    'name': 'Vasja',
    'token': 'secret',
  };
  const api = createApi(onFakeUnauthorized());
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const offerId = '1';

  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();

    mockAPI
      .onGet(ApiRoute.Login)
      .reply(200, fakeUserAuthData);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    expect(store.getActions()).toEqual([
      loginUser(getAdaptedUserAuthData(fakeUserAuthData)),
      requireAuthorization(AuthorizationStatus.IsAuth),
    ]);
  });

  it('should dispatch RequriedAuthorization when POST /login', async () => {
    const fakeUser: AuthData = {login: 'test@test.ru', password: '123456'};

    mockAPI
      .onPost(ApiRoute.Login)
      .reply(200, fakeUserAuthData);

    const store = mockStore();

    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    expect(store.getActions()).toEqual([
      loginUser(getAdaptedUserAuthData(fakeUserAuthData)),
      requireAuthorization(AuthorizationStatus.IsAuth),
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('six-cities-token', 'secret');
  });

  it('should dispatch Logout when Delete /logout', async () => {
    mockAPI
      .onDelete(ApiRoute.Logout)
      .reply(204);

    const store = mockStore();

    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    expect(store.getActions()).toEqual([requireLogout()]);
    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('six-cities-token');
  });

  it('should dispatch fetchOffersAction when GET /hotels', async () => {

    mockAPI
      .onGet(ApiRoute.Hotels)
      .reply(200, offersServerside);

    const store = mockStore();
    await store.dispatch(fetchOffersAction());

    expect(store.getActions()).toEqual([
      requireOffers(DataStatus.IsLoading),
      loadOffers(getAdaptedOffers(offersServerside)),
    ]);
  });

  it('should dispatch fetchOfferDetailsAction when GET /hotels/:id', async () => {


    mockAPI
      .onGet(`${ApiRoute.Hotels}/${offerId}`)
      .reply(200, offersServerside[0]);

    const store = mockStore();
    await store.dispatch(fetchOfferDetailsAction(offerId));

    expect(store.getActions()).toEqual([
      loadOfferDetails(getAdaptedOffer(offersServerside[0])),
      requireOfferDetails(DataStatus.IsLoaded),
    ]);
  });

  it('should dispatch fetchNearbyOffersAction when GET /hotels/:id/nearby', async () => {

    mockAPI
      .onGet(`${ApiRoute.Hotels}/${offerId}/nearby`)
      .reply(200, offersServerside);

    const store = mockStore();
    await store.dispatch(fetchNearbyOffersAction(offerId));

    expect(store.getActions()).toEqual([
      loadNearbyOffers(getAdaptedOffers(offersServerside)),
      requireOfferDetails(DataStatus.IsLoaded),
    ]);
  });

  it('should dispatch fetchOfferCommentsAction when GET /comments/:id', async () => {

    mockAPI
      .onGet(`${ApiRoute.Comments}/${offerId}`)
      .reply(200, userCommentsServerside);

    const store = mockStore();
    await store.dispatch(fetchOfferCommentsAction(offerId));

    expect(store.getActions()).toEqual([
      loadOfferComments(getAdaptedComments(userCommentsServerside)),
      requireOfferComments(DataStatus.IsLoaded),
    ]);
  });

  it('should dispatch postCommentAction when POST /comments/:id', async () => {

    mockAPI
      .onPost(`${ApiRoute.Comments}/${offerId}`, userCommentPost)
      .reply(200, userCommentsServerside);

    const store = mockStore();
    await store.dispatch(postCommentAction(userCommentPost, offerId));

    expect(store.getActions()).toEqual([
      setCommentPostStatus(DataStatus.IsSending),
      loadOfferComments(getAdaptedComments(userCommentsServerside)),
      setCommentPostStatus(DataStatus.IsSended),
    ]);
  });

  it('should dispatch bookmarkAction when POST /favorite/:id/:(1 | 0)', async () => {
    const status = false;

    mockAPI
      .onPost(`${ApiRoute.Favorite}/${offerId}/${Number(!status)}`)
      .reply(200, offersServerside[0]);

    const store = mockStore();
    await store.dispatch(bookmarkAction(offerId, status));

    expect(store.getActions()).toEqual([
      updateOffer(getAdaptedOffer(offersServerside[0])),
    ]);
  });

  it('should dispatch fetchFavoritesAction when GET /favorite/:id/:(1 | 0)', async () => {

    mockAPI
      .onGet(ApiRoute.Favorite)
      .reply(200, offersServerside);

    const store = mockStore();
    await store.dispatch(fetchFavoritesAction());

    expect(store.getActions()).toEqual([
      loadFavorites(getAdaptedOffers(offersServerside)),
    ]);
  });
});


