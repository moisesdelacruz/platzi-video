import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Map as map } from 'immutable';
import Home from '../pages/containers/home';
import reducer from '../reducers';


const logger = ({ getState, dispatch }) => next => action => {
  console.log('old state: ', getState().toJS());
  console.log('action: ', action);
  const value = next(action);
  console.log('new state: ', getState().toJS());
  return value;
}

const store = createStore(
  reducer,
  map(),
  applyMiddleware(logger)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const container = document.getElementById('home-container');



render(
  <Provider store={store}>
    <Home />
  </Provider>, container);
