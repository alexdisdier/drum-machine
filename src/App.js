import React, { Component } from 'react';

import Deck from './components/Deck/Deck';
import Controls from './components/Controls/Controls';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App" id="drum-machine">
      <header>
       <h1>Pad Controller</h1>
      </header>
        <div className="pad-controller">
          <div className="left-flex">
            <Controls />
          </div>
          <div className="right-flex">
            <Deck />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
