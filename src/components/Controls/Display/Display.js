import React, { Component } from 'react';

import './Display.scss';

class Display extends Component {
  render(){
    return (
      <div id="display">
        <ul className={this.props.dataFromControl}>
         <li>key: {this.props.displayId}</li>
         <li>sound: {this.props.displayName}</li>
        </ul>
      </div>
    );
  }
}

export default Display;
