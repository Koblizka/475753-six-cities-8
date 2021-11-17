import {ProcessesData} from '../../types/state';
import {getCity} from '../../utils/utils';
import {createReducer} from '@reduxjs/toolkit';

import {
  City,
  SortType
} from '../../common/const';
import {
  changeActiveCity,
  changeSortType,
  chooseActiveOffer,
  loadOfferDetails,
  updateOfferDetails
} from '../actions';

const initialState: ProcessesData = {
  activeCity: getCity(City.Paris),
  currentOffer: null,
  activeOffer: null,
  activeSort: SortType.Popular,
};

const processesReducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(changeActiveCity, (state, action) => {
        state.activeCity = getCity(action.payload);
      })
      .addCase(chooseActiveOffer, (state, action) => {
        state.activeOffer = action.payload;
      })
      .addCase(changeSortType, (state, action) => {
        state.activeSort = action.payload;
      })
      .addCase(loadOfferDetails, (state, action) => {
        state.currentOffer = action.payload;
      })
      .addCase(updateOfferDetails, (state, action) => {
        Object.assign(
          state.currentOffer,
          {
            isFavorite: !(action.payload.isFavorite),
          },
        );
      });
  },
);

export {processesReducer};
