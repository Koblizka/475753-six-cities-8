import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  PLACES_AMOUNT: 132,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      AmountPlacesToLive = {Setting.PLACES_AMOUNT}
    />
  </React.StrictMode>,
  document.getElementById('root'));
