import React, { Component } from 'react';

import Deck from './components/Deck/Deck';
import Controls from './components/Controls/Controls';

import './App.scss';

class App extends Component {

  constructor(props) {
   super(props)
   this.state = {
     audio: 'pause',
     dataFromGP: 'g-p'
   }

    this.audioToggle = this.audioToggle.bind(this);
  }

  audioToggle() {
    // console.log('App.js is the grandparent');

    if (this.state.audio === 'pause'){
      this.setState({
        audio: 'play'
      });
      console.log('Power is on, play');
    } else {
      this.setState({
        audio: 'pause'
      });
      console.log('Power is off, pause');
    }
  }

  render() {
    return (
      <div className="App" id="drum-machine">
      <header>
       <h1>Pad Controller</h1>
      </header>
        <div className="pad-controller">
          <div className="left-flex">
            <Controls onControlsClick={this.audioToggle}/>
          </div>
          <div className="right-flex">
            <Deck dataFromApp={this.state.audio}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
