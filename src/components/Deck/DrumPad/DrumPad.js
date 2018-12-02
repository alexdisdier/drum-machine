import React, { Component } from 'react';

import '../../../utils/_helpers.scss';
import './DrumPad.scss';

class DrumPad extends Component {
  constructor(props){
    super(props);
    this.state = {
      padTxt : ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
    }

    this.playSound = this.playSound.bind(this);
  }

  playSound(){
    console.log('playing sound');
  }

  render() {
    return (
    this.state.padTxt.map(e =>
        <button key={e} className="drum-pad btn-drum" onClick={this.playSound}>{e}
          <audio key={e} className="clip" id={e} src="/media/examples/t-rex-roar.mp3">
          </audio>
        </button>
      ))
  }
}

export default DrumPad;
