import {DataStatus} from '../../common/const';
import {createReducer} from '@reduxjs/toolkit';
import {OffersData} from '../../types/state';

import {
  loadNearbyOffers,
  loadOffers,
  requireNearbyOffers,
  requireOfferDetails
} from '../actions';


const initialState: OffersData = {
  offers: [],
  nearbyOffers: null,
  offersLoadStatus: DataStatus.Default,
  offerDetailsLoadStatus: DataStatus.Default,
  nearbyOffersLoadStatus: DataStatus.Default,
};

const offersReducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(loadOffers, (state, action) => {
        state.offers = action.payload;
        state.offersLoadStatus = DataStatus.IsLoaded;
      })
      .addCase(requireOfferDetails, (state, action) => {
        state.offerDetailsLoadStatus = action.payload;
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
