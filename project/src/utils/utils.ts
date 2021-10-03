import {LivePlaceProps} from '../types/live-place';

const sortFavoritesPlaces = (place: LivePlaceProps): boolean => place.isBookmarked;

const getFavoritesPlaces = (places: LivePlaceProps[]): LivePlaceProps[] => places.filter(sortFavoritesPlaces);

export {
  sortFavoritesPlaces,
  getFavoritesPlaces
};
