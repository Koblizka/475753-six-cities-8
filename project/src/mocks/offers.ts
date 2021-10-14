import {Place} from '../types/place';
import {PlaceType} from '../common/const';

const LivePlaces: Place[] = [
  {
    id: '1',
    isPremium: true,
    isBookmarked: false,
    name: 'Beautiful & luxurious apartment at great location',
    placeType: PlaceType.Apartment,
    price: 120,
    rating: 4,
    photoSrc: {
      big: ['img/apartment-01.jpg'],
      small: ['img/apartment-small-01.jpg'],
    },
    city: 'Amsterdam',
  },
  {
    id: '2',
    isPremium: false,
    isBookmarked: true,
    name: 'Wood and stone place',
    placeType: PlaceType.PrivateRoom,
    price: 80,
    rating: 4,
    photoSrc: {
      big: ['img/room.jpg'],
      small: ['img/room-small.jpg'],
    },
    city: 'Amsterdam',
  },
  {
    id: '3',
    isPremium: false,
    isBookmarked: false,
    name: 'Canal View Prinsengracht',
    placeType: PlaceType.Apartment,
    price: 132,
    rating: 4,
    photoSrc: {
      big: ['img/apartment-02.jpg'],
      small: ['img/apartment-small-02.jpg'],
    },
    city: 'Amsterdam',
  },
  {
    id: '4',
    isPremium: true,
    isBookmarked: false,
    name: 'Nice, cozy, warm big bed apartment',
    placeType: PlaceType.Apartment,
    price: 180,
    rating: 5,
    photoSrc: {
      big: ['img/apartment-03.jpg'],
      small: ['img/apartment-small-03.jpg'],
    },
    city: 'Amsterdam',
  },
  {
    id: '5',
    isPremium: false,
    isBookmarked: true,
    name: 'Wood and stone place',
    placeType: PlaceType.PrivateRoom,
    price: 160,
    rating: 4,
    photoSrc: {
      big: ['img/apartment-03.jpg'],
      small: ['img/apartment-small-03.jpg'],
    },
    city: 'Amsterdam',
  },
  {
    id: '6',
    isPremium: false,
    isBookmarked: true,
    name: 'Not Wood and stone place',
    placeType: PlaceType.PrivateRoom,
    price: 80,
    rating: 4,
    photoSrc: {
      big: ['img/room.jpg'],
      small: ['img/room-small.jpg'],
    },
    city: 'Paris',
  },
];

export {LivePlaces};
