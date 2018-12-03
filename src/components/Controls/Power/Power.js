import React, { Component } from 'react';

import './Power.scss';

class Power extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: false
    }

    this.powerSwitch = this.powerSwitch.bind(this);
  }

  powerSwitch() {
    if (!this.state.switch) {
      this.setState({
        switch: true
      });
    } else {
      this.setState({
        switch: false
      });
    }
  }

  render() {

    let inputStyle = {
      background: '#7B7C78'
    };
    if (this.state.switch){
      inputStyle.background = 'linear-gradient(orange, 80%, yellow)';
    }

    return (
      <div id="btn-power-container">
        <label htmlFor="btn-power">Power</label>
        <input type="button" id="btn-power" style={inputStyle} onClick={this.powerSwitch}/>
      </div>
    );
  }
}

export default Power;
