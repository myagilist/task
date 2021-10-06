import React, { Component } from 'react';
import { render } from 'react-dom';

import './style.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
    	message: "Hello world !"
    }

    
  }

  handleMessage() {
    this.setState({message: "Hi nico !"});
  }
  
  render() {
    let {message} = this.state;

    return (
      <div>
        <h1>{message}</h1>
        <button onClick={this.handleMessage.bind(this)}>Changer de message</button>
      </div>
    )
  }
}

  render(
    <App />,
    document.getElementById('wrapper')
  )

