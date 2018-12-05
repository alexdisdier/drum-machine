import React, { Component } from 'react';

import './DrumPad.scss';

class DrumPad extends Component {
// source for javascript event keyCodes: https://keycode.info/
  constructor(props){
    super(props);

    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }


  playSound(){
    const audio = document.getElementById(this.props.keyPushed);
    console.log(audio);

    console.log(this.props.dataFromDeck);
    if (this.props.dataFromDeck === 'play'){
      // console.log("I'm listening to my parent Deck.js and Deck.js is listening to my grandparents App.js. Power.js hasn't been clicked so I'm on pause");
      audio.play();
    }
  }

  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }

  render() {
    return (
      <button id={this.props.soundId} className="drum-pad btn-drum" onClick={this.playSound}>{this.props.keyPushed}
        <audio className="clip" id={this.props.keyPushed} src={this.props.url} >
        </audio>
      </button>

    );
  }
}

export default DrumPad;
