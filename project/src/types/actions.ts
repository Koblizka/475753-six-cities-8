import {Offer} from './offer';


enum ActionType {
  ChangeActiveCity = 'cities/changeActiveCity',
  ChooseActiveOffer = 'cities/chooseActiveOffer',
  FillOffersList = 'cities/fillOffersList',
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

type Actions = ChangeActiveCityAction | FillOffersListAction | ChooseActiveOfferAction

export {ActionType};
export type {
  ChangeActiveCityAction,
  FillOffersListAction,
  ChooseActiveOfferAction,
  Actions
};
