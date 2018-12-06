import React, { Component } from 'react';

import Deck from './components/Deck/Deck';
import Controls from './components/Controls/Controls';

import './App.scss';

class App extends Component {

  constructor(props) {
   super(props)
   this.state = {
     audio: 'pause',

     // the data will be received from Deck.js
     displayName: '',
     displayId: ''
   }

    this.audioToggle = this.audioToggle.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
  }

  audioToggle() {
    // console.log('App.js is the grandparent');

    if (this.state.audio === 'pause'){
      this.setState({
        audio: 'play'
      });
      // console.log('Power is on');
    } else {
      this.setState({
        audio: 'pause'
      });
      // console.log('Power is off');
    }
  }

  handleDisplay(id, name) {
    this.setState({
      displayId: id,
      displayName: name
    })
  }

  render() {
    return (
      <div className="App" id="drum-machine">
      <header>
       <h1>Pad Controller</h1>
      </header>
        <div className="pad-controller">
          <div className="left-flex">
            <Controls onControlsClick={this.audioToggle}
                      onDisplayName = {this.state.displayName}
                      onDisplayId = {this.state.displayId}/>
          </div>
          <div className="right-flex">
            {/* passing a callback as a prop to a child */}
            <Deck dataFromApp = {this.state.audio}
                  handlerDisplayFromGrandParent = {this.handleDisplay}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
