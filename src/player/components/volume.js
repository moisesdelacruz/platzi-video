import React from 'react';
import VolumeIcon from '../../icons/components/volume';
import MuteIcon from '../../icons/components/mute';

import './volume.css';

function Volume (props) {
  return (
    <button
      className="Volume"
      onClick={props.handleVolumeClick}
    >
      {
        props.muted ?
          <MuteIcon
            color="white"
            size={43}
          />
        :
          <VolumeIcon
            color="white"
            size={25}
          />
      }
      <div className="Volume-range">
        <input
          type="range"
          min={0}
          max={1}
          step={.05}
          onChange={props.handleVolumeChange}
        />
      </div>
    </button>
  )
}

export default Volume;
