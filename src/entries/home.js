import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Map as map } from 'immutable';
import Home from '../pages/containers/home';
import reducer from '../reducers';

const store = createStore(
  reducer,
  map(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const container = document.getElementById('home-container');



render(
  <Provider store={store}>
    <Home />
  </Provider>, container);
