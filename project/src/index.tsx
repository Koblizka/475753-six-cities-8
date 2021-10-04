import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Setting} from './common/const';

ReactDOM.render(
  <React.StrictMode>
    <App
      amountPlacesToLive = {Setting.PlaceAmount}
    />
  </React.StrictMode>,
  document.getElementById('root'));
