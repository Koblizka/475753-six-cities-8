import {UserData} from '../../types/state';
import {AuthorizationStatus} from '../../common/const';
import {requireAuthorization, requireLogout} from '../actions';
import {createReducer} from '@reduxjs/toolkit';


const initialState: UserData = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

const userReducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(requireAuthorization, (state, action) => {
        state.authorizationStatus = action.payload;
      })
      .addCase(requireLogout, (state) => {
        state.authorizationStatus =  AuthorizationStatus.NotAuth;
      });
  },
);


export {userReducer};
