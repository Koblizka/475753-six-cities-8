import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {rootReducer} from './store/root-reducer';
import {createApi} from './utils/api';
import {requireAuthorization} from './store/actions';
import {AuthorizationStatus} from './common/const';
import {checkAuthAction, fetchOffersAction} from './store/api-actions';
import { configureStore } from '@reduxjs/toolkit';

const api = createApi(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NotAuth)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
