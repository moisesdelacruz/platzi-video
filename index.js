import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/components/media';

const container = document.getElementById('app');

render(<Media type="videos" title="¿Qué es responsive designe?" author="Moises de la Cruz." image="./images/covers/responsive.jpg"/>, container)
