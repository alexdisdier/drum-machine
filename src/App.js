import React, { Component } from 'react';

import Deck from './components/Deck/Deck';
import Controls from './components/Controls/Controls';

import './App.scss';

class App extends Component {

  constructor(props) {
   super(props)
   this.state = {
     power: false,

     // the data will be received from Deck.js
     displayName: '',
     displayId: ''
   }

    this.togglePowerHandler = this.togglePowerHandler.bind(this);
    this.displayHandler = this.displayHandler.bind(this);
  }

  togglePowerHandler = () => {
    // console.log('power');
    const doesPower = this.state.power;
    this.setState({ power: !doesPower });
  }

  displayHandler = (id, name) => this.setState({
      displayId: id,
      displayName: name
  });
  
  render() {
    return (
      <div className="App" id="drum-machine">
      <header>
       <h1>Pad Controller</h1>
      </header>
        <div className="pad-controller">
          <div className="left-flex">
            <Controls onControlsClick={this.togglePowerHandler}
                      onDisplayName = {this.state.displayName}
                      onDisplayId = {this.state.displayId}/>
          </div>
          <div className="right-flex">
            {/* passing a callback as a prop to a child */}
            <Deck dataFromApp = {this.state.power}
                  handlerDisplayFromGrandParent = {this.displayHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
