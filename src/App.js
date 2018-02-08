import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline: ''
    };
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline})
  }

  render() {
    return (
      <div class="App">
        <h1 class="App-title">Countdown to {this.state.deadline}</h1>
        <div class="Clock">
          <div class="Clock-element Clock-days">14 days</div>
          <div class="Clock-element Clock-hours">30 hours</div>
          <div class="Clock-element Clock-minutes">15 minutes</div>
          <div class="Clock-element Clock-seconds">20 seconds</div>
        </div>
        <div>
          <input onChange={event => this.setState({newDeadline: event.target.value})} placeholder="new date" />
          <button onClick={() => this.changeDeadline()}>Submit</button>
        </div>
      </div>
    )
  }
}

export default App;
