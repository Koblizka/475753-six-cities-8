import {PlaceType} from '../common/const';

type Place = {
  id: string;
  isPremium: boolean;
  isBookmarked: boolean;
  placeType: PlaceType;
  price: number;
  rating: number;
  name: string;
  photoSrc: string;
  city: string;
}

export type {Place};
