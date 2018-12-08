import React, { Component } from 'react';

import DrumPad from './DrumPad/DrumPad';

import './Deck.scss';

class Deck extends Component {
// source for javascript event keyCodes: https://keycode.info/

  constructor(props){
    super(props);
    this.state = {
      pad : [
        {
          id: 1,
          keyPushed: 'Q',
          keyCode: 81,
          name: 'heater 1',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
        },
        {
          id: 2,
          keyPushed: 'W',
          keyCode: 87,
          name: 'heater 2',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
        },
        {
          id: 3,
          keyPushed: 'E',
          keyCode: 69,
          name: 'heater 3',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
        },
        {
          id: 4,
          keyPushed: 'A',
          keyCode: 65,
          name: 'Chord_1',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
        },
        {
          id: 5,
          keyPushed: 'S',
          keyCode: 83,
          name: 'clap',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
        },
        {
          id: 6,
          keyPushed: 'D',
          keyCode: 68,
          name: 'Open-HH',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
        },
        {
          id: 7,
          keyPushed: 'Z',
          keyCode: 90,
          name: 'Chord_2',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
        },
        {
          id: 8,
          keyPushed: 'X',
          keyCode: 88,
          name: 'Kick',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
        },
        {
          id: 9,
          keyPushed: 'C',
          keyCode: 67,
          name: 'Closed-HH',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
        }
      ]
    }

    this.handleParentProps = this.handleParentProps.bind(this);
  }

  handleParentProps = () => this.props.handlerDisplayFromParent();
  
  render() {
    return (
      <div className="deck">{
        this.state.pad.map(sound =>

          // passing my state data to props
          <DrumPad  key={sound.id}
                    keyId={sound.id}
                    keyName={sound.name}
                    dataFromDeck={this.props.dataFromApp}
						        url={sound.url}
						        keyPushed={sound.keyPushed}
                    keyCode = {sound.keyCode}
                    displayGrandParent = {this.props.handlerDisplayFromGrandParent}

          />
        )}
      </div>

    );
  }
}

export default Deck;
