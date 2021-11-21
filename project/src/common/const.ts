const MAX_PERCENTAGE = 100 as const;
const MAX_OFFER_RATING = 5 as const;
const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;
const REVIEWS_LIMIT_ON_PAGE = 10;

const RatingsToValuesMap = {
  'perfect': '5',
  'good': '4',
  'not bad': '3',
  'badly': '2',
  'terribly': '1',
};

enum FailMessage {
  NotAuth = 'Вы не авторизированы',
  NotPostedReview = 'Отзыв не отправлен',
  NotLoadedComments = 'Отзыв не отправлен',
  NotLoadedOffers = 'Предложения не загружены',
  NotLoadedOfferDetails = 'Предложение не загружено',
  NotLoadedNearbyOffers = 'Отзывы пососедству не загружены',
  LoginError = 'Ошибка входа: Проверьте корректность введённых данных',
}

enum UrlMarker {
  Default = 'img/pin.svg',
  Custom = 'img/pin-active.svg',
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
  IsLoading = 'IS_LOADING',
  NotLoaded = 'NOT_LOADED',
  IsSended = 'IS_SENDED',
  IsSending = 'IS_SENDING',
  NotSended = 'NOT_SENDED',
  Default = 'DEFAULT',
}

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
  MAX_PERCENTAGE,
  MAX_OFFER_RATING,
  AppRoute,
  PlaceType,
  AuthorizationStatus,
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
  RatingsToValuesMap,
  REVIEWS_LIMIT_ON_PAGE,
  FailMessage
};
