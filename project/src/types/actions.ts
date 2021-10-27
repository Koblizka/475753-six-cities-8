import {SortType} from '../common/const';
import {Offer} from './offer';


enum ActionType {
  ChangeActiveCity = 'cities/changeActiveCity',
  ChooseActiveOffer = 'cities/chooseActiveOffer',
  FillOffersList = 'cities/fillOffersList',
  ChangeSortType = 'cities/changeSortType',
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

type ChangeSortTypeAction = {
  type: ActionType.ChangeSortType;
  payload: SortType;
}

type Actions = ChangeActiveCityAction | FillOffersListAction | ChooseActiveOfferAction | ChangeSortTypeAction;

export {ActionType};
export type {
  ChangeActiveCityAction,
  FillOffersListAction,
  ChooseActiveOfferAction,
  ChangeSortTypeAction,
  Actions
};
