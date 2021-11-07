import {UserCommentsData} from '../../types/state';
import {DataStatus} from '../../common/const';
import {createReducer} from '@reduxjs/toolkit';

import {
  loadOfferComments,
  requireOfferComments,
  setCommentPostStatus
} from '../actions';


const initialState: UserCommentsData = {
  reviews: null,
  offerCommnetsLoadStatus: DataStatus.Default,
  commentPostStatus: DataStatus.Default,
};

const userCommentsReducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(setCommentPostStatus, (state, action) => {
        state.commentPostStatus = action.payload;
      })
      .addCase(loadOfferComments, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(requireOfferComments, (state, action) => {
        state.offerCommnetsLoadStatus = action.payload;
      });
  },
);


export {userCommentsReducer};
