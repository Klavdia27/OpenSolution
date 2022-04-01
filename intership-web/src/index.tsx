import React from 'react';
import ReactDOM from 'react-dom';

import './normalize.css';
import './index.css';
import './variables.scss';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('#root'),
);
