import {Offer} from '../types/offer';
import {UserComment} from '../types/user-comment';
import {AuthorizationStatus, DataStatus, SortType} from '../common/const';

import {ActionType} from '../types/actions';
import {createAction} from '@reduxjs/toolkit';


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

const requireLogout = createAction(ActionType.RequireLogout);

const requireOfferDetails = createAction(
  ActionType.RequireOfferDetails,
  (isOfferDetailsLoaded: DataStatus) => ({
    payload: isOfferDetailsLoaded,
  }),
);

const requireOfferComments = createAction(
  ActionType.RequireOfferComments,
  (isOfferCommentsLoaded: DataStatus) => ({
    payload: isOfferCommentsLoaded,
  }),
);

const requireNearbyOffers = createAction(
  ActionType.RequireNearbyOffers,
  (isNearbyOffersLoaded: DataStatus) => ({
    payload: isNearbyOffersLoaded,
  }),
);

const setCommentPostStatus = createAction(
  ActionType.SetCommentPostStatus,
  (isCommentSended: DataStatus) => ({
    payload: isCommentSended,
  }),
);

const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authorizationStatus: AuthorizationStatus) => ({
    payload: authorizationStatus,
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
  setCommentPostStatus,
  requireOfferDetails,
  requireAuthorization
};
