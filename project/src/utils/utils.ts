import {Place} from '../types/place';
import {Review} from '../types/review';
import {
  MAX_PERCENTAGE,
  MAX_OFFER_RATING,
  Gap
} from '../common/const';

const percentageRating = (rating: number): number => (Math.round(rating) / MAX_OFFER_RATING) * MAX_PERCENTAGE;
const sortFavoritesPlaces = (place: Place): boolean => place.isBookmarked;
const getFavoritesPlaces = (places: Place[]): Place[] => places.filter(sortFavoritesPlaces);

const getRandomIntInclusive = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomeDate = (): Date => {
  const date = new Date();

  return new Date(date.setDate(date.getDate() - getRandomIntInclusive(Gap.Zero, Gap.Week)));
};

const getOfferRank = (offerId: string, reviews: Review[]): number => {
  const offerReviews = reviews.filter((review) => review.offerId === offerId);

  const reducer = (accumulator: number, currentValue:Review): number => accumulator + currentValue.rank;

  return offerReviews.reduce(reducer, 0);
};

const getDateMonthYear = (date: Date): string => date.toLocaleDateString('En-en', {month: 'long', year: 'numeric'});

export {
  percentageRating,
  sortFavoritesPlaces,
  getFavoritesPlaces,
  getRandomeDate,
  getOfferRank,
  getDateMonthYear
};
