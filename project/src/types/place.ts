import {City} from './city';
import {User} from './user';

type Place = {
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
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  maxAdults: number;
  previewImage: string;
}

export type {Place};
