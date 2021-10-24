import {Offer} from '../types/offer';
import {Review} from '../types/review';
import {City} from '../types/city';
import {cities} from '../mocks/cities';
import {
  MAX_PERCENTAGE,
  MAX_OFFER_RATING,
  TimeGap,
  SortType
} from '../common/const';

const ONE_GUEST = 1;

const percentageRating = (rating: number): number => (Math.round(rating) / MAX_OFFER_RATING) * MAX_PERCENTAGE;
const sortFavoritesPlaces = (place: Offer): boolean => place.isFavorite;
const getFavoritesPlaces = (places: Offer[]): Offer[] => places.filter(sortFavoritesPlaces);

const getRandomIntInclusive = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomeDate = (): Date => {
  const date = new Date();

  return new Date(date.setDate(date.getDate() - getRandomIntInclusive(TimeGap.Zero, TimeGap.Week)));
};

const getOfferRank = (offerId: string, reviews: Review[]): number => {
  const offerReviews = reviews.filter((review) => review.offerId === offerId);

  const reducer = (accumulator: number, currentValue:Review): number => accumulator + currentValue.rank;

  return offerReviews.reduce(reducer, 0);
};

const getDateMonthYear = (date: Date): string => date.toLocaleDateString('En-en', {month: 'long', year: 'numeric'});

const getCity = (cityName: string): City => cities.find((city) => cityName === city.name) as City;
const getCityOffers = (cityName: string, offers: Offer[]): Offer[] => offers.filter((offer) => offer.city.name === cityName);

const getOfferCapacity = (capacity: number): string => capacity === ONE_GUEST ? `${capacity} adult` : `${capacity} adults`;

const applySort = (sortType: string, offers: Offer[]): Offer[] => {
  switch (sortType) {
    case (SortType.LowToHigh): {
      return offers.sort((firstOffer, anotherOffer) => firstOffer.price - anotherOffer.price);
    }
    case (SortType.HighToLow): {
      return offers.sort((firstOffer, anotherOffer) => anotherOffer.price - firstOffer.price);
    }
    case (SortType.TopRated): {
      return offers.sort((firstOffer, anotherOffer) => anotherOffer.rating - firstOffer.rating);
    }
    default: {
      return offers;
    }
  }
};

export {
  percentageRating,
  sortFavoritesPlaces,
  getFavoritesPlaces,
  getRandomeDate,
  getOfferRank,
  getDateMonthYear,
  getCity,
  getOfferCapacity,
  getCityOffers,
  applySort
};
