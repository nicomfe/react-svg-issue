import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ReactSVG
            className="App-svg"
            height={80}
            width={80}
            path='/static/media/logo.5d5d9eef.svg'
          />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
