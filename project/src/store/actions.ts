import {Offer} from '../types/offer';
import {UserComment} from '../types/user-comment';
import {AuthorizationStatus, DataStatus, SortType} from '../common/const';

import {ActionType} from '../types/actions';
import {createAction} from '@reduxjs/toolkit';
import {UserAuthData} from '../types/user';


const changeActiveCity = createAction(
  ActionType.ChangeActiveCity,
  (activeCity: string) => ({
    payload: activeCity,
  }),
);

const fillOffersList = createAction(ActionType.FillOffersList);

const chooseActiveOffer = createAction(
  ActionType.ChooseActiveOffer,
  (offer: Offer | null) => ({
    payload: offer,
  }),
);

const changeSortType = createAction(
  ActionType.ChangeSortType,
  (sortType: SortType) => ({
    payload: sortType,
  }),
);

const loadOfferComments = createAction(
  ActionType.LoadOfferComments,
  (comments: UserComment[]) => ({
    payload: comments,
  }),
);

const loadOfferDetails = createAction(
  ActionType.LoadOfferDetails,
  (offer: Offer) => ({
    payload: offer,
  }),
);

const loadNearbyOffers = createAction(
  ActionType.LoadNearbyOffers,
  (offers: Offer[]) => ({
    payload: offers,
  }),
);

const loadOffers = createAction(
  ActionType.LoadOffers,
  (offers: Offer[]) => ({
    payload: offers,
  }),
);

const updateOffer = createAction(
  ActionType.UpdateOffer,
  (offer: Offer) => ({
    payload: offer,
  }),
);

const updateNearbyOffer = createAction(
  ActionType.UpdateNearbyOffer,
  (offer: Offer) => ({
    payload: offer,
  }),
);

const updateFavoriteOffer = createAction(
  ActionType.UpdateFavoriteOffer,
  (offer: Offer) => ({
    payload: offer,
  }),
);

const updateOfferDetails = createAction(
  ActionType.UpdateOfferDetails,
  (offer: Offer) => ({
    payload: offer,
  }),
);

const loadFavorites = createAction(
  ActionType.LoadFavorites,
  (offers: Offer[]) => ({
    payload: offers,
  }),
);

const requireOffers = createAction(
  ActionType.RequireOffers,
  (offersLoadStatus: DataStatus) => ({
    payload: offersLoadStatus,
  }),
);

const requireLogout = createAction(ActionType.RequireLogout);

const requireOfferDetails = createAction(
  ActionType.RequireOfferDetails,
  (offerDetailsLoadStatus: DataStatus) => ({
    payload: offerDetailsLoadStatus,
  }),
);

const requireOfferComments = createAction(
  ActionType.RequireOfferComments,
  (offerCommentsLoadStatus: DataStatus) => ({
    payload: offerCommentsLoadStatus,
  }),
);

const requireNearbyOffers = createAction(
  ActionType.RequireNearbyOffers,
  (nearbyOffersLoadStatus: DataStatus) => ({
    payload: nearbyOffersLoadStatus,
  }),
);

const setCommentPostStatus = createAction(
  ActionType.SetCommentPostStatus,
  (commentPostStatus: DataStatus) => ({
    payload: commentPostStatus,
  }),
);

const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authorizationStatus: AuthorizationStatus) => ({
    payload: authorizationStatus,
  }),
);

const loginUser = createAction(
  ActionType.LoginUser,
  (userAuthData: UserAuthData) => ({
    payload: userAuthData,
  }),
);


export {
  changeActiveCity,
  fillOffersList,
  chooseActiveOffer,
  changeSortType,
  loadOfferDetails,
  loadNearbyOffers,
  loadOffers,
  loadOfferComments,
  requireLogout,
  requireNearbyOffers,
  requireOfferComments,
  requireOffers,
  updateOffer,
  updateOfferDetails,
  updateFavoriteOffer,
  updateNearbyOffer,
  loadFavorites,
  setCommentPostStatus,
  requireOfferDetails,
  requireAuthorization,
  loginUser
};
