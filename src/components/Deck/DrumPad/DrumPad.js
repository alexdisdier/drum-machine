import React, { Component } from 'react';

import './DrumPad.scss';

class DrumPad extends Component {
  constructor(props){
    super(props);
    this.state = {
      pad : [
        {
          key: 'Q',
          name: 'heater 1',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        },
        {
          key: 'W',
          name: 'heater 2',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        },
        {
          key: 'E',
          name: 'heater 3',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        },
        {
          key: 'A',
          name: 'heater 4',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        },
        {
          key: 'S',
          name: 'heater 5',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        },
        {
          key: 'D',
          name: 'heater 6',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        },
        {
          key: 'Z',
          name: 'heater 7',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        },
        {
          key: 'X',
          name: 'heater 8',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        },
        {
          key: 'C',
          name: 'heater 9',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        }
      ]
    }

    this.playSound = this.playSound.bind(this);
  }

  playSound(){
    var audio = document.getElementById("Q");
    // console.log(audio);
    audio.play();
  }

  render() {
    return (
    this.state.pad.map(e =>
        <button className="drum-pad btn-drum" onClick={this.playSound}>{e.key}
          <audio key={e+1} className="clip" id={e.key} src={e.url}>
          </audio>
        </button>
      )
    );
  }
}

export default DrumPad;
