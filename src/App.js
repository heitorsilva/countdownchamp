import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="App">
        <h1 class="App-title">Countdown to December 25, 2018</h1>
        <div class="Clock">
          <div class="Clock-element Clock-days">14 days</div>
          <div class="Clock-element Clock-hours">30 hours</div>
          <div class="Clock-element Clock-minutes">15 minutes</div>
          <div class="Clock-element Clock-seconds">20 seconds</div>
        </div>
        <div>
          <input placeholder="new date" />
          <button>Submit</button>
        </div>
      </div>
    )
  }
}

export default App;
