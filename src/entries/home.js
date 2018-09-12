import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Map as map } from 'immutable';
import Home from '../pages/containers/home';
import reducer from '../reducers';
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';


// const logger = ({ getState, dispatch }) => next => action => {
//   console.log('old state: ', getState().toJS());
//   console.log('action: ', action);
//   const value = next(action);
//   console.log('new state: ', getState().toJS());
//   return value;
// }

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(logger)
  )
);

const container = document.getElementById('home-container');



render(
  <Provider store={store}>
    <Home />
  </Provider>, container);
