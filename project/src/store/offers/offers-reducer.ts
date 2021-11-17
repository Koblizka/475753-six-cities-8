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
  loadFavorites,
  updateFavoriteOffer,
  updateNearbyOffer
} from '../actions';


const initialState: OffersData = {
  offers: [],
  nearbyOffers: [],
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
      .addCase(updateNearbyOffer, (state, action) => {
        state.nearbyOffers = state.nearbyOffers.map((offer) => {
          if (offer.id === action.payload.id) {
            return Object.assign(
              offer,
              {
                isFavorite: !(action.payload.isFavorite),
              },
            );
          }

          return offer;
        });
      })
      .addCase(updateFavoriteOffer, (state, action) => {
        state.favoriteOffers = state.favoriteOffers.filter((offer) => offer.id !== action.payload.id);
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
