import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers/index';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(
  createStore
);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
