import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Home from '../pages/containers/home';
// data
import data from '../api.json';
import reducer from '../reducers/data';

const initialState = {
  data: {
    ...data
  },
  search: []
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

const container = document.getElementById('home-container');



render(
  <Provider store={store}>
    <Home />
  </Provider>, container);
