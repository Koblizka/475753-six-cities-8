import {Offer} from '../types/offer';
import {SortType} from '../common/const';

import {
  ActionType,
  ChangeActiveCityAction,
  ChooseActiveOfferAction,
  ChangeSortTypeAction,
  FillOffersListAction
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


export {
  changeActiveCity,
  fillOffersList,
  chooseActiveOffer,
  changeSortType
};
