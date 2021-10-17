import {Place} from '../types/place';
import {getCity } from '../utils/utils';
import {users} from './users';
import {
  City,
  PlaceType
} from '../common/const';

const offers: Place[] = [
  {
    id: '1',
    isPremium: true,
    isFavorite: false,
    title: 'Beautiful & luxurious apartment at great location',
    description: 'Nice and cozyaadada aaa',
    placeType: PlaceType.Apartment,
    price: 120,
    rating: 4,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/room.jpg', 'img/room.jpg', 'img/apartment-02.jpg'],
    previewImage: 'img/apartment-small-01.jpg',
    city: getCity(City.Amsterdam),
    bedrooms: 3,
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: users[0],
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 8,
    },
    maxAdults: 4,
  },
  {
    id: '2',
    isPremium: false,
    isFavorite: true,
    title: 'Wood and stone place',
    description: 'What eto da',
    placeType: PlaceType.Room,
    price: 80,
    rating: 4,
    images: ['img/room.jpg', 'img/room.jpg', 'img/room.jpg', 'img/room.jpg', 'img/room.jpg'],
    previewImage: 'img/room-small.jpg',
    city: getCity(City.Amsterdam),
    bedrooms: 2,
    goods: ['Heating', 'Cable TV', 'Coffee machine', 'Dishwasher'],
    host: users[1],
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 8,
    },
    maxAdults: 2,
  },
  {
    id: '3',
    isPremium: false,
    isFavorite: false,
    title: 'Canal View Prinsengracht',
    description: 'luchsee predlozenije',
    placeType: PlaceType.Apartment,
    price: 132,
    rating: 4,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-04.jpg'],
    previewImage: 'img/apartment-small-01.jpg',
    city: getCity(City.Amsterdam),
    bedrooms: 1,
    goods: ['Heating', 'Kitchen'],
    host: users[0],
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 8,
    },
    maxAdults: 1,
  },
  {
    id: '4',
    isPremium: true,
    isFavorite: false,
    title: 'Nice, cozy, warm big bed apartment',
    description: 'Not nice, not cozy',
    placeType: PlaceType.Apartment,
    price: 180,
    rating: 5,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-04.jpg'],
    previewImage: 'img/apartment-small-01.jpg',
    city: getCity(City.Amsterdam),
    bedrooms: 3,
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: users[0],
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 8,
    },
    maxAdults: 4,
  },
  {
    id: '5',
    isPremium: false,
    isFavorite: true,
    title: 'Wood and stone place',
    description: 'Nice and wood and stone place',
    placeType: PlaceType.Hotel,
    price: 160,
    rating: 3,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-04.jpg'],
    previewImage: 'img/apartment-small-01.jpg',
    city: getCity(City.Amsterdam),
    bedrooms: 3,
    goods: ['Washing machine', 'Coffee machine', 'Dishwasher'],
    host: users[2],
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 8,
    },
    maxAdults: 4,
  },
  {
    id: '6',
    isPremium: false,
    isFavorite: true,
    title: 'Not Wood and stone place',
    description: 'Nice and cozyaadada not Wood and stone place aaa',
    placeType: PlaceType.Apartment,
    price: 80,
    rating: 4,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-04.jpg'],
    previewImage: 'img/apartment-small-01.jpg',
    city: getCity(City.Paris),
    bedrooms: 3,
    goods: ['Heating', 'Kitchen', 'Coffee machine', 'Dishwasher'],
    host: users[1],
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 8,
    },
    maxAdults: 4,
  },
];

export {offers};