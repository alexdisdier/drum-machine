import React, { Component } from 'react';

import './Display.scss';

class Display extends Component {
  render(){
    return (
      <div id="display">
        <ul className={this.props.dataFromControl}>
         <li>id: 1</li>
         <li>clip name: pad name</li>
        </ul>
      </div>
    );
  }
}

export default Display;
