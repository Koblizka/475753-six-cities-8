import {Offer} from '../types/offer';
import {UserComment} from '../types/user-comment';
import {AuthorizationStatus, DataStatus, SortType} from '../common/const';

import {
  ActionType,
  ChangeActiveCityAction,
  ChooseActiveOfferAction,
  ChangeSortTypeAction,
  FillOffersListAction,
  RequireAuthorizationAction,
  LoadOffersAction,
  LoadNearbyOffersAction,
  RequireLogoutAction,
  LoadOfferDetailsAction,
  RequireOfferDetailsAction,
  RequireNearbyOffersAction,
  LoadOfferCommentsAction,
  RequireOfferCommentsAction,
  SetCommentPostStatusAction
} from '../types/actions';


const changeActiveCity = (activeCity: string): ChangeActiveCityAction => (
  {
    type: ActionType.ChangeActiveCity,
    payload: activeCity,
  }
);

const fillOffersList = (): FillOffersListAction => (
  {
    type: ActionType.FillOffersList,
  }
);

const chooseActiveOffer = (offer: Offer | null): ChooseActiveOfferAction => (
  {
    type: ActionType.ChooseActiveOffer,
    payload: offer,
  }
);

const changeSortType = (sortType: SortType): ChangeSortTypeAction => (
  {
    type: ActionType.ChangeSortType,
    payload: sortType,
  }
);

const loadOfferComments = (comments: UserComment[]): LoadOfferCommentsAction => (
  {
    type: ActionType.LoadOfferComments,
    payload: comments,
  }
);

const loadOfferDetails = (offer: Offer): LoadOfferDetailsAction => (
  {
    type: ActionType.LoadOfferDetails,
    payload: offer,
  }
);

const loadNearbyOffers = (offers: Offer[]): LoadNearbyOffersAction => (
  {
    type: ActionType.LoadNearbyOffers,
    payload: offers,
  }
);

const loadOffers = (offers: Offer[]): LoadOffersAction => (
  {
    type: ActionType.LoadOffers,
    payload: offers,
  }
);

const requireLogout = (): RequireLogoutAction => (
  {
    type: ActionType.RequireLogout,
  }
);

const requireOfferDetails = (isOfferDetailsLoaded: DataStatus): RequireOfferDetailsAction => (
  {
    type: ActionType.RequireOfferDetails,
    payload: isOfferDetailsLoaded,
  }
);

const requireOfferComments = (isOfferCommentsLoaded: DataStatus): RequireOfferCommentsAction => (
  {
    type: ActionType.RequireOfferComments,
    payload: isOfferCommentsLoaded,
  }
);

const requireNearbyOffers = (isNearbyOffersLoaded: DataStatus): RequireNearbyOffersAction => (
  {
    type: ActionType.RequireNearbyOffers,
    payload: isNearbyOffersLoaded,
  }
);

const setCommentPostStatus = (isCommentSended: DataStatus): SetCommentPostStatusAction => (
  {
    type: ActionType.SetCommentPostStatus,
    payload: isCommentSended,
  }
);

const requireAuthorization = (authorizationStatus: AuthorizationStatus): RequireAuthorizationAction => (
  {
    type: ActionType.RequireAuthorization,
    payload: authorizationStatus,
  }
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
