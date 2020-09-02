import React from 'react';
import './Playlist.css'
import Song from '../Song/Song'

const Playlist = () => {
  return (
    <div>
      <h1>Songs go here!</h1>
      <div className='song-container'>
        <Song />
        <Song />
        <Song />
      </div>
    </div>
  )
}

export default Playlist
