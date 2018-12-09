import React, { Component } from 'react';

import './DrumPad.scss';

class DrumPad extends Component {

  constructor(props){
    super(props);

    this.playSoundHandler = this.playSoundHandler.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  playSoundHandler = () => {
    const audio = document.getElementById(this.props.keyPushed);
    this.props.displayGrandParent(audio.id, audio.innerText);

    if (this.props.dataFromDeck){
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
      this.playSoundHandler();
    }
  }

  render() {
    return (
      <button id={this.props.keyId} className="drum-pad btn-drum" onClick={this.playSoundHandler}>{this.props.keyPushed}
        <audio className="clip" id={this.props.keyPushed} src={this.props.url}>{this.props.keyName}
        </audio>
      </button>

    );
  }
}

export default DrumPad;
