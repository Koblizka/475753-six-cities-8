const MAX_PERCENTAGE = 100 as const;
const MAX_OFFER_RATING = 5 as const;
const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;

const Ratings = [
  {
    rank: '5',
    title: 'perfect',
  },
  {
    rank: '4',
    title: 'good',
  },
  {
    rank: '3',
    title: 'not bad',
  },
  {
    rank: '2',
    title: 'badly',
  },
  {
    rank: '1',
    title: 'terribly',
  },
];

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

enum ApiRoute {
  Hotels = '/hotels',
  Hotel = '/hotels/:id',
  HotelsNearby = '/hotels/:hotel_id/nearby',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite',
  FavoriteStatus = '/favorite/:hotel_id/:status',
}

enum AuthorizationStatus {
  IsAuth = 'IS_AUTH',
  NotAuth = 'NOT_AUTH',
  Unknown = 'Unknown',
}

enum DataStatus {
  IsLoaded = 'IS_LOADED',
  NotLoaded = 'NOT_LOADED',
  IsSended = 'IS_SENDED',
  NotSended = 'NOT_SENDED',
  Default = 'DEFAULT',
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

enum SortType {
  Popular = 'Popular',
  LowToHigh = 'LowToHigh',
  HighToLow = 'HighToLow',
  TopRated = 'TopRated',
}

const sortTypeMap: Record<SortType, string> = {
  [SortType.Popular]: 'Popular',
  [SortType.LowToHigh]: 'Price: low to high',
  [SortType.HighToLow]: 'Price: high to low',
  [SortType.TopRated]: 'Top rated first',
};

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
  CardClassType,
  sortTypeMap,
  SortType,
  ApiRoute,
  DataStatus,
  MIN_COMMENT_LENGTH,
  MAX_COMMENT_LENGTH,
  Ratings
};
