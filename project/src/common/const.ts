const MAX_PERCENTAGE = 100 as const;
const MAX_OFFER_RATING = 5 as const;

enum Gap {
  Zero = 0,
  Week = 7,
}

enum PlaceType {
  Apartment = 'Apartment',
  PrivateRoom = 'Private room',
}

enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Offers = '/offer/:id',
  Offer = '/offer/',
  NotFound = '/404',
}

enum AuthorizationStatus {
  IsAuth = 'IS_AUTH',
  NotAuth = 'NOT_AUTH',
}

const Setting = {
  PlaceAmount: 132,
} as const;

enum CardType {
  Favorites = 'favorites',
  Cities = 'cities'
}

enum photoSize {
  smallWidth = '150',
  smallHeight = '110',
  bigWidth = '260',
  bigHeight = '200',
}

export {
  Gap,
  MAX_PERCENTAGE,
  MAX_OFFER_RATING,
  AppRoute,
  PlaceType,
  AuthorizationStatus,
  Setting,
  CardType,
  photoSize
};
