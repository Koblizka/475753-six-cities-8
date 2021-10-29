import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createApi} from './utils/api';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {requireAuthorization} from './store/actions';
import {AuthorizationStatus} from './common/const';
import {ThunkAppDispatch} from './types/actions';
import {fetchOffersAction} from './store/api-actions';

const api = createApi(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NotAuth)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

// (store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchOffersAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
