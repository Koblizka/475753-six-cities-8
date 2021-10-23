import {Offer} from '../types/offer';

import {
  ActionType,
  ChangeActiveCityAction,
  ChooseActiveOfferAction,
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


export {
  changeActiveCity,
  fillOffersList,
  chooseActiveOffer
};
