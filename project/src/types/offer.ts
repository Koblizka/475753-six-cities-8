import {City} from './city';
import {Place} from './place';
import {UserServerside, User} from './user';

type Offer = {
  id: string;
  isPremium: boolean;
  isFavorite: boolean;
  placeType: string;
  price: number;
  rating: number;
  title: string;
  description: string;
  images: string[];
  city: City;
  bedrooms: number;
  goods: string[];
  host: User;
  location: Place;
  maxAdults: number;
  previewImage: string;
}

type OfferServerside =
  Omit<Offer,
    | 'isPremium'
    | 'isFavorite'
    | 'placeType'
    | 'maxAdults'
    | 'previewImage'
    | 'host'
  >
  & {
    'is_premium': boolean,
    'is_favorite': boolean,
    'type': string,
    'max_adults': number,
    'preview_image': string,
    'host': UserServerside,
  }

export type {Offer, OfferServerside};
