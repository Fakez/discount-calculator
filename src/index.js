import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {priceTables} from './priceTables'
import {vipClients} from './vipClients'

ReactDOM.render(
  <React.StrictMode>
    <App priceTables={priceTables} vipClients={vipClients}/>
  </React.StrictMode>,
  document.getElementById('root')
);