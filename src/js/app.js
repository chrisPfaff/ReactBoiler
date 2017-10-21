import React, { Component } from 'react';
import { render } from 'react-dom';
import '../css/style.css';
import OsuLogo from '../assets/Buckeyes_logo.svg.png'

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from react
        <img src={ OsuLogo } alt="Osu Logo" />
      </div>
    );
  }
}


render(<Hello />, document.getElementById('app'));
