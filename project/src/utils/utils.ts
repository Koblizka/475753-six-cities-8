import {Place} from '../types/live-place';
import {
  MAX_PERCENTAGE,
  MAX_OFFER_RATING
} from '../common/const';

const percentageRating = (rating: number): number => (Math.round(rating) / MAX_OFFER_RATING) * MAX_PERCENTAGE;
const sortFavoritesPlaces = (place: Place): boolean => place.isBookmarked;

const getFavoritesPlaces = (places: Place[]): Place[] => places.filter(sortFavoritesPlaces);

export {
  percentageRating,
  sortFavoritesPlaces,
  getFavoritesPlaces
};
