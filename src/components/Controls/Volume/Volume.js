import React, { Component } from 'react';

import './Volume.scss';

class Volume extends Component {
  render(){
    return (
      <input type="range" step="0.01" min="0" max="1"/>
    );
  }
}

export default Volume;
