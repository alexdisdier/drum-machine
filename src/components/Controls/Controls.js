import React, { Component } from 'react';

import Display from './Display/Display';
import Power from './Power/Power';
import Volume from './Volume/Volume';

import './Controls.scss';

class Controls extends Component {
  constructor() {
    super()
    this.state = {
      controlData: "hide"
    }

    this.powerClicked = this.powerClicked.bind(this);
  }

  powerClicked = () => {
    // console.log('Controls.js is the parent');

    // This props interact with parent component (App.js)
    this.props.onControlsClick();

    if (this.state.controlData === 'hide'){
      this.setState({
        controlData: 'show'
      });
    } else {
      this.setState({
        controlData: 'hide'
      });
    }
  }

  render(){
    return (
      <div id="controls">
        <Display dataFromControl={this.state.controlData}/>
        <Power onPowerClick={this.powerClicked} />
        <Volume />
      </div>
    );
  }
}

export default Controls;
