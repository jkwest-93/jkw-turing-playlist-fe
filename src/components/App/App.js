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
    this.setState({ songQueue: [...this.state.songQueue, newSong]})
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
            <SongController />
          </main>
        </div>
      </div>
    )
  }
}

export default App;
