import React, { Component } from 'react';

import './Power.scss';

class Power extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: false
    }

    this.powerToggle = this.powerToggle.bind(this);
  }

  // functions which switch power light on and off
  powerToggle() {
    // console.log('Power.js is the child');

    // This props interact with parent component (Control.js)
    this.props.onPowerClick();

    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {

    return (
      <div id="btn-power-container">
        <label htmlFor="btn-power">Power</label>
        <input type="button" id="btn-power" className={this.state.isToggleOn ? 'power-on' : 'power-off'} onClick={this.powerToggle}/>
        <span />
      </div>
    );
  }
}

export default Power;
