import React, { Component } from 'react';

import './Power.scss';

class Power extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
  }

  render() {

    return (
      <div id="btn-power-container">
        <label htmlFor="btn-power">Power</label>
        <input type="button" id="btn-power" className={this.state.isToggleOn ? 'power-on' : 'power-off'} onClick={this.handleClick}/>
      </div>
    );
  }
}

export default Power;
