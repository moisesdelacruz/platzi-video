import React from 'react';
import { render } from 'react-dom';
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json';

const container = document.getElementById('app');

render(<Playlist data={data} />, container)
