import { DataStatus } from '../../common/const';
import { offers, offersWithFalsyBooleans } from '../../mocks/offers';
import { loadFavorites, loadNearbyOffers, loadOffers, requireNearbyOffers, requireOfferDetails, requireOffers, updateOffer } from '../actions';
import { offersReducer } from './offers-reducer';


describe('Reducer: offersReducer', () => {
  const state = {
    offers: [],
    nearbyOffers: [],
    offersLoadStatus: DataStatus.Default,
    offerDetailsLoadStatus: DataStatus.Default,
    nearbyOffersLoadStatus: DataStatus.Default,
    favoriteOffers: [],
  };

  it('Should get offers and change offersLoadStatus to IS_LOADED', () => {
    expect(offersReducer(state, loadOffers(offers)))
      .toStrictEqual({
        ...state,
        offers: offers,
        offersLoadStatus: DataStatus.IsLoaded,
      });
  });

  it('Should change offersLoadStatus to "IS_LOADED"', () => {
    expect(offersReducer(state, requireOffers(DataStatus.IsLoaded)))
      .toStrictEqual({
        ...state,
        offersLoadStatus: DataStatus.IsLoaded,
      });
  });

  it('Should update offers with new offers', () => {
    const stateWithOffers = {
      ...state,
      offers: [offers[0]],
    };

    expect(offersReducer(stateWithOffers, updateOffer(offersWithFalsyBooleans[0])))
      .toStrictEqual({
        ...stateWithOffers,
        offers: [offersWithFalsyBooleans[0]],
      });
  });

  it('Should update requireOfferDetails status', () => {
    expect(offersReducer(state, requireOfferDetails(DataStatus.IsLoaded)))
      .toStrictEqual({
        ...state,
        offerDetailsLoadStatus: DataStatus.IsLoaded,
      });
  });

  it('Should get offers as favoriteOffers', () => {
    expect(offersReducer(state, loadFavorites(offers)))
      .toStrictEqual({
        ...state,
        favoriteOffers: offers,
      });
  });

  it('Should get offers as nearbyOffers', () => {
    expect(offersReducer(state, loadNearbyOffers(offers)))
      .toStrictEqual({
        ...state,
        nearbyOffers: offers,
      });
  });

  it('Should update nearbyOffersLoadStatus', () => {
    expect(offersReducer(state, requireNearbyOffers(DataStatus.IsLoaded)))
      .toStrictEqual({
        ...state,
        nearbyOffersLoadStatus: DataStatus.IsLoaded,
      });
  });
});
