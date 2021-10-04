const MAX_PERCENTAGE = 100 as const;
const MAX_OFFER_RATING = 5 as const;

enum PlaceType {
  Apartment = 'Apartment',
  PrivateRoom = 'Private room',
}

const Setting = {
  PlaceAmount: 132,
} as const;

export {
  MAX_PERCENTAGE,
  MAX_OFFER_RATING,
  PlaceType,
  Setting
};
