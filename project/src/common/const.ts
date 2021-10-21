const MAX_PERCENTAGE = 100 as const;
const MAX_OFFER_RATING = 5 as const;

enum UrlMarker {
  Default = 'img/pin.svg',
  Custom = 'img/pin-active.svg',
}

enum TimeGap {
  Zero = 0,
  Week = 7,
}

enum PlaceType {
  Apartment = 'Apartment',
  Room = 'Private room',
  House = 'House',
  Hotel = 'Hotel',
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

enum OfferCardPhotoSize {
  smallWidth = '150',
  smallHeight = '110',
  bigWidth = '260',
  bigHeight = '200',
}

enum City {
  Amsterdam = 'Amsterdam',
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

enum CardClassType {
  Cities = 'cities',
  NearPlaces = 'near-places',
}

export {
  TimeGap,
  MAX_PERCENTAGE,
  MAX_OFFER_RATING,
  AppRoute,
  PlaceType,
  AuthorizationStatus,
  Setting,
  OfferCardPhotoSize,
  City,
  UrlMarker,
  CardClassType
};
