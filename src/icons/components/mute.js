import React from 'react';
import Icon from './icon';

function Mute (props) {
  return (
    <Icon {...props}>
      <path d="M7 9v6h4l5 5V4l-5 5H7z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
    </Icon>
  )
}

export default Mute;
