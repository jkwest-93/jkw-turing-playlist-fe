import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songName: '',
      artistName: '',
      link: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitForm = (event) => {
    event.preventDefault();
    const newSong = {
      id: Date.now(),
      songName: this.state.songName,
      artistName: this.state.artistName,
      link: this.state.link
    }

    this.props.addSong(newSong)
    this.clearForm()
  }

  clearForm() {
    document.getElementById('songName-input').value=''
    document.getElementById('artistName-input').value=''
    document.getElementById('link-input').value=''
    this.setState({ songName: '', artistName: '', link: '' })
  }

  render() {
    return(
      <div className='form-container'>
        <form aria-label='form'>
          <input id='songName-input' name='songName' placeholder='Song Name' onChange={this.handleChange}/>
          <input id='artistName-input' name='artistName' placeholder='Artist Name' onChange={this.handleChange}/>
          <input id='link-input' name='link' placeholder='Link' onChange={this.handleChange}/>
          <button onClick={this.submitForm}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
