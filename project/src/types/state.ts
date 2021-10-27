import {SortType} from '../common/const';
import {City} from './city';
import {Offer} from './offer';
import {Review} from './review';

type State = {
  activeCity: City;
  offers: Offer[];
  activeOffer: Offer | null;
  reviews: Review[];
  activeSort: SortType;
};

export type {State};
