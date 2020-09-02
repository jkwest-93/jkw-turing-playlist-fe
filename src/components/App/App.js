import React, { Component } from 'react';
import './App.css';
import SongController from '../SongController/SongController';
import Playlist from '../Playlist/Playlist';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      songQueue: [],
      error: '',
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/v1/playlist')
      .then(response => response.json())
      .then(playlist => this.setState({ songQueue: playlist }))
      .catch(error => this.setState({ error: error }))
  }

  addSong = (newSong) => {
    fetch('http://localhost:8080/api/v1/playlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newSong)
    })
    .then(response => {
      if(response.ok) {
        return response.json()
      }
    })
    .then(postedSong => {
      this.setState({ songQueue: [...this.state.songQueue, postedSong]})
    })
    .catch(err => console.log(err))
  }

  removeSong = () => {
    const firstSong = this.state.songQueue[0]
    const remainingSongs = this.state.songQueue.filter(song => song.id !== firstSong.id)
    fetch('http://localhost:8080/api/v1/playlist', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {id: firstSong} )
    })
    .then(response => {
      if(response.ok) {
        return response.json()
      }
    })
    .then(deletedSong => {
      this.setState({ songQueue: remainingSongs})
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Playlist</h1>
        </header>
        <div className="App-background">
          <main>
            <Form addSong={this.addSong}/>
            <Playlist songQueue={this.state.songQueue}/>
            <SongController changeSong={this.removeSong}/>
          </main>
        </div>
      </div>
    )
  }
}

export default App;
