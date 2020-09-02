import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      songName: '',
      artistName: '',
      link: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return(
      <div className='form-container'>
        <form>
          <input name='songName' placeholder='Song Name' onChange={this.handleChange}/>
          <input name='artistName' placeholder='Artist Name' onChange={this.handleChange}/>
          <input name='link' placeholder='Link' onChange={this.handleChange}/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
