import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { topbar } from 'react-router-loading';

import 'scss/main.css';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

topbar.config({
  autoRun: false,
  barThickness: 5,
  barColors: {
    0: 'black',
    0.3: 'white',
    1.0: '#c1c1c1',
  },
  shadowBlur: 5,
  shadowColor: 'red',
  className: 'topbar',
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

