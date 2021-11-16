import {Offer, OfferServerside} from '../types/offer';
import {UserComment, UserCommentServerside} from '../types/user-comment';
import {City} from '../types/city';
import {cities} from '../mocks/cities';
import {
  MAX_PERCENTAGE,
  MAX_OFFER_RATING,
  TimeGap,
  SortType
} from '../common/const';
import { UserAuthData, UserAuthDataServerside } from '../types/user';

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

const getDateMonthYear = (date: Date): string => date.toLocaleDateString('En-en', {month: 'long', year: 'numeric'});

const getCity = (cityName: string): City => cities.find((city) => cityName === city.name) as City;
const getCityOffers = (cityName: string, offers: Offer[]): Offer[] => offers.filter((offer) => offer.city.name === cityName);

const getOfferCapacity = (capacity: number): string => capacity === ONE_GUEST ? `${capacity} adult` : `${capacity} adults`;

const applySort = (sortType: string, offers: Offer[]): Offer[] => {
  switch (sortType) {
    case (SortType.LowToHigh): {
      return offers.slice().sort((firstOffer, anotherOffer) => firstOffer.price - anotherOffer.price);
    }
    case (SortType.HighToLow): {
      return offers.slice().sort((firstOffer, anotherOffer) => anotherOffer.price - firstOffer.price);
    }
    case (SortType.TopRated): {
      return offers.slice().sort((firstOffer, anotherOffer) => anotherOffer.rating - firstOffer.rating);
    }
    default: {
      return offers;
    }
  }
};

const getAdaptedOffer = (adapteeOffer: OfferServerside): Offer => (
  {
    id: adapteeOffer.id,
    isPremium: adapteeOffer.is_premium,
    isFavorite: adapteeOffer.is_favorite,
    placeType: adapteeOffer.type,
    price: adapteeOffer.price,
    rating: adapteeOffer.rating,
    title: adapteeOffer.title,
    description: adapteeOffer.description,
    images: adapteeOffer.images,
    city: {
      location: {
        latitude: adapteeOffer.city.location.latitude,
        longitude: adapteeOffer.city.location.longitude,
        zoom: adapteeOffer.city.location.zoom,
      },
      name: adapteeOffer.city.name,
    },
    bedrooms: adapteeOffer.bedrooms,
    goods: adapteeOffer.goods,
    host: {
      id: adapteeOffer.host.id,
      userName: adapteeOffer.host.name,
      userAvatar: adapteeOffer.host.avatar_url,
      isPro: adapteeOffer.host.is_pro,
    },
    location: {
      latitude: adapteeOffer.location.latitude,
      longitude: adapteeOffer.location.longitude,
      zoom: adapteeOffer.location.zoom,
    },
    maxAdults: adapteeOffer.max_adults,
    previewImage: adapteeOffer.preview_image,
  }
);

const getAdaptedOffers = (adapteeOffers: OfferServerside[]): Offer[] => adapteeOffers.map(getAdaptedOffer);

const getAdaptedComment = (adapteeComment: UserCommentServerside): UserComment => (
  {
    reviewId: adapteeComment.id,
    user: {
      userAvatar: adapteeComment.user.avatar_url,
      id: adapteeComment.user.id,
      isPro: adapteeComment.user.is_pro,
      userName: adapteeComment.user.name,
    },
    review: adapteeComment.comment,
    rank: adapteeComment.rating,
    date:adapteeComment.date,
  }
);

const getAdaptedComments = (adapteeComments: UserCommentServerside[]): UserComment[] => adapteeComments.map(getAdaptedComment);

const getAdaptedUserAuthData = (userAuthData: UserAuthDataServerside): UserAuthData => (
  {
    id: userAuthData.id,
    userName: userAuthData.name,
    userAvatar: userAuthData.avatar_url,
    isPro: userAuthData.is_pro,
    email: userAuthData.email,
    token: userAuthData.token,
  }
);


export {
  percentageRating,
  sortFavoritesPlaces,
  getFavoritesPlaces,
  getRandomeDate,
  getDateMonthYear,
  getCity,
  getOfferCapacity,
  getCityOffers,
  applySort,
  getAdaptedOffer,
  getAdaptedOffers,
  getAdaptedComment,
  getAdaptedComments,
  getAdaptedUserAuthData
};
