import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/main.css'
import App from './pages/Router';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
