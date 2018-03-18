import React from 'react';
import Media from './media';
import Play from '../../icons/components/play';

import './playlist.css';

function Playlist (props) {
  const playlist = props.data.categories[0].playlist;
  return (
    <div className="Playlist">
      <Play size={50} color='red' />
      {
        playlist.map((item) => {
          return <Media {...item} key={item.id} />
        })
      }
    </div>
  )
}

export default Playlist;
