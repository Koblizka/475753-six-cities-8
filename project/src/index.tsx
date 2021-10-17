import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Setting} from './common/const';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';

ReactDOM.render(
  <React.StrictMode>
    <App
      amountPlacesToLive={Setting.PlaceAmount}
      offers={offers}
      reviews={reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));
