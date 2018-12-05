import React, { Component } from 'react';

import DrumPad from './DrumPad/DrumPad';

import './Deck.scss';

class Deck extends Component {

  constructor(props){
    super(props);
    this.state = {
      pad : [
        {
          keyPushed: 'Q',
          keyCode: 81,
          name: 'heater 1',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
        },
        {
          keyPushed: 'W',
          keyCode: 87,
          name: 'heater 2',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
        },
        {
          keyPushed: 'E',
          keyCode: 82,
          name: 'heater 3',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
        },
        {
          keyPushed: 'A',
          keyCode: 65,
          name: 'Chord_1',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
        },
        {
          keyPushed: 'S',
          keyCode: 83,
          name: 'clap',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
        },
        {
          keyPushed: 'D',
          keyCode: 68,
          name: 'Open-HH',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
        },
        {
          keyPushed: 'Z',
          keyCode: 90,
          name: 'Chord_2',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
        },
        {
          keyPushed: 'X',
          keyCode: 88,
          name: 'Kick',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
        },
        {
          keyPushed: 'C',
          keyCode: 67,
          name: 'Closed-HH',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
        }
      ]
    }
  }

  render() {
    return (
      <div className="deck">{
        this.state.pad.map(sound =>
          <DrumPad
            dataFromDeck={this.props.dataFromApp}
            soundId={sound.id}
						url={sound.url}
						keyPushed={sound.keyPushed}
          />
        )}
      </div>
    );
  }
}

export default Deck;
