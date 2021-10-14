import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Setting} from './common/const';
import {LivePlaces} from './mocks/offers';
import {Reviews} from './mocks/reviews';

ReactDOM.render(
  <React.StrictMode>
    <App
      amountPlacesToLive={Setting.PlaceAmount}
      offers={LivePlaces}
      reviews={Reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));
