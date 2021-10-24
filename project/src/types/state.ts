import {City} from './city';
import {Offer} from './offer';
import {Review} from './review';

type State = {
  activeCity: City;
  offers: Offer[];
  activeOffer: Offer | null;
  reviews: Review[];
  activeSort: string;
};

export type {State};
