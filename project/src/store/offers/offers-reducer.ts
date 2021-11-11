import {DataStatus} from '../../common/const';
import {createReducer} from '@reduxjs/toolkit';
import {OffersData} from '../../types/state';

import {
  loadNearbyOffers,
  loadOffers,
  updateOffer,
  requireOffers,
  requireNearbyOffers,
  requireOfferDetails,
  loadFavorites
} from '../actions';


const initialState: OffersData = {
  offers: [],
  nearbyOffers: null,
  offersLoadStatus: DataStatus.Default,
  offerDetailsLoadStatus: DataStatus.Default,
  nearbyOffersLoadStatus: DataStatus.Default,
  favoriteOffers: [],
};

const offersReducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(loadOffers, (state, action) => {
        state.offers = action.payload;
        state.offersLoadStatus = DataStatus.IsLoaded;
      })
      .addCase(requireOffers, (state, action) => {
        state.offersLoadStatus = action.payload;
      })
      .addCase(updateOffer, (state, action) => {
        state.offers = state.offers.map((offer) => offer.id === action.payload.id ? action.payload : offer);
      })
      .addCase(requireOfferDetails, (state, action) => {
        state.offerDetailsLoadStatus = action.payload;
      })
      .addCase(loadFavorites, (state, action) => {
        state.favoriteOffers = action.payload;
      })
      .addCase(loadNearbyOffers, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(requireNearbyOffers, (state, action) => {
        state.nearbyOffersLoadStatus = action.payload;
      });
  },
);

export {offersReducer};
