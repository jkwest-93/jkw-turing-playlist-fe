import React from 'react';
import './Song.css'
import SongController from '../SongController/SongController'

const Song = ({song}) => {
  return (
      <div className='song-card'>
        <h1>{song.songName}</h1>
        <p>{song.artistName}</p>
        <a href={song.link}>Watch video!</a>
      </div>
  )
}

export default Song
