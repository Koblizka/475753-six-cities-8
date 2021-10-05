const MAX_PERCENTAGE = 100 as const;
const MAX_OFFER_RATING = 5 as const;

enum PlaceType {
  Apartment = 'Apartment',
  PrivateRoom = 'Private room',
}

enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

enum AuthorizationStatus {
  IsAuth = 'IS_AUTH',
  NotAuth = 'NOT_AUTH',
}

const Setting = {
  PlaceAmount: 132,
} as const;

export {
  MAX_PERCENTAGE,
  MAX_OFFER_RATING,
  AppRoute,
  PlaceType,
  AuthorizationStatus,
  Setting
};
