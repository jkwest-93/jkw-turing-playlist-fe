import React from 'react';
import './Playlist.css'
import Song from '../Song/Song'

const Playlist = ({songQueue}) => {
  const songCards = songQueue.map(song => {
    return <Song key={song.id} song={song}/>
  })

  return (
    <div>
      <h1>Your Playlist</h1>
      <div className='song-container'>
        {songCards}
      </div>
    </div>
  )
}

export default Playlist
