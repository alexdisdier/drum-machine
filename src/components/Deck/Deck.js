import React, { Component } from 'react';

import DrumPad from './DrumPad/DrumPad';

import './Deck.scss';

class Deck extends Component {

  render() {
    return (
      <div className="deck">
        <DrumPad />
      </div>
    );
  }
}

export default Deck;
