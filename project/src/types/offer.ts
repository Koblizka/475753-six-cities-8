import {City} from './city';
import {Place} from './place';
import {User} from './user';

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

export type {Offer};
