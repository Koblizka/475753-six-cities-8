import {UserData} from '../../types/state';
import {AuthorizationStatus} from '../../common/const';
import {loginUser, requireAuthorization, requireLogout} from '../actions';
import {createReducer} from '@reduxjs/toolkit';


const initialState: UserData = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userAuthData: null,
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
      })
      .addCase(loginUser, (state, action) => {
        state.userAuthData = action.payload;
      });
  },
);


export {userReducer};
