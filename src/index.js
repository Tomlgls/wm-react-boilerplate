/**
 * REACT
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

/**
 * REDUX
 */
import { Provider } from 'react-redux';
import store from './redux/store';

/**
 * IE 9 Polyfill for classList IE & Android
 */
import 'classlist-polyfill/src/index.js';

/**
 * APP
 */
import AppContainer from './containers/AppContainer';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <AppContainer />
    </BrowserRouter>
  </Provider>
  ,document.getElementById('root')
);
