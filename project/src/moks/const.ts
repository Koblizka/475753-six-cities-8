import {LivePlaceProps} from '../types/live-place';

const PlaceType: {APARTMENT: string, PRIVATE_ROOM: string} = {
  APARTMENT: 'Apartment',
  PRIVATE_ROOM: 'Private room',
};

const LivePlaces: LivePlaceProps[] = [
  {
    isPremium: true,
    isBookmarked: false,
    name: 'Beautiful &amp; luxurious apartment at great location',
    placeType: PlaceType.APARTMENT,
    price: 120,
    rating: 4,
    photoSrc: 'img/apartment-01.jpg',
    city: 'Amsterdam',
  },
  {
    isPremium: false,
    isBookmarked: true,
    name: 'Wood and stone place',
    placeType: PlaceType.PRIVATE_ROOM,
    price: 80,
    rating: 4,
    photoSrc: 'img/room.jpg',
    city: 'Amsterdam',
  },
  {
    isPremium: false,
    isBookmarked: false,
    name: 'Canal View Prinsengracht',
    placeType: PlaceType.APARTMENT,
    price: 132,
    rating: 4,
    photoSrc: 'img/apartment-02.jpg',
    city: 'Amsterdam',
  },
  {
    isPremium: true,
    isBookmarked: false,
    name: 'Nice, cozy, warm big bed apartment',
    placeType: PlaceType.APARTMENT,
    price: 180,
    rating: 5,
    photoSrc: 'img/apartment-03.jpg',
    city: 'Amsterdam',
  },
  {
    isPremium: false,
    isBookmarked: true,
    name: 'Wood and stone place',
    placeType: PlaceType.PRIVATE_ROOM,
    price: 80,
    rating: 4,
    photoSrc: 'img/room.jpg',
    city: 'Amsterdam',
  },
];

export {LivePlaces};
