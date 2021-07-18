import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {priceTables} from './priceTables'

ReactDOM.render(
  <React.StrictMode>
    <App priceTables={priceTables}/>
  </React.StrictMode>,
  document.getElementById('root')
);