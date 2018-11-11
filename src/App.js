import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RedLight from './RedLight';
import GreenLight from './GreenLight';
import YellowLight from './YellowLight';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: 'stop'
    };
  }
  render() {
    return (
      <div className="container">
        <div>
          <RedLight direction={this.state.direction} />
          <YellowLight direction={this.state.direction} />
          <GreenLight direction={this.state.direction} />
        </div>
        <div className="buttonContainer">
          <button onClick={() => this.setState({ direction: 'stop' })}>
            stop
          </button>
          <button onClick={() => this.setState({ direction: 'yield' })}>
            yield
          </button>
          <button onClick={() => this.setState({ direction: 'go' })}>go</button>
        </div>
      </div>
    );
  }
}

export default App;
