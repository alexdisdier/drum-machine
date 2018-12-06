import React, { Component } from 'react';

import './DrumPad.scss';

class DrumPad extends Component {

  constructor(props){
    super(props);

    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  playSound(){
    const audio = document.getElementById(this.props.keyPushed);
    this.props.displayGrandParent(audio.id, audio.innerText);

    if (this.props.dataFromDeck === 'play'){

      audio.play();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }

  render() {
    return (
      <button id={this.props.keyId} className="drum-pad btn-drum" onClick={this.playSound}>{this.props.keyPushed}
        <audio className="clip" id={this.props.keyPushed} src={this.props.url}>{this.props.keyName}
        </audio>
      </button>

    );
  }
}

export default DrumPad;
