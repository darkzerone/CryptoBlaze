import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap-grid.min.css";
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
