import React, { Component } from 'react';

import Deck from './components/Deck/Deck';
import Power from './components/Deck/Power/Power';

import './utils/_helpers.scss';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App" id="drum-machine">
      <header>
       <h1>Pad Controller</h1>
      </header>
        <div id="display" className="pad-controller">
          <div className="left-flex">
            <div id="screen">
              <ul>
               <li>id: 1</li>
               <li>clip name: pad name</li>
              </ul>
            </div>
            <Power/>
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
