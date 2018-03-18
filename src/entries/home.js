import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
// data
import data from '../api.json';

const container = document.getElementById('app');

render(<Home data={data} />, container);
