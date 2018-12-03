import React, { Component } from 'react';

import Display from './Display/Display';
import Power from './Power/Power';
import Volume from './Volume/Volume';

import './Controls.scss';

class Controls extends Component {
  render(){
    return (
      <div id="controls">
        <Display />
        <Power />
        <Volume />
      </div>
    );
  }
}

export default Controls;
