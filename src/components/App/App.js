import React, { Component } from 'react';
import './App.css';
import SongController from '../SongController/SongController';
import Playlist from '../Playlist/Playlist';

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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Playlist</h1>
        </header>
        <div className="App-background">
          <main>
            <Playlist songQueue={this.state.songQueue}/>
          </main>
        </div>
      </div>
    )
  }
}

export default App;
