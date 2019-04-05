import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StickersScreen from "./StickersScreen";

class App extends Component {
  render() {
    return (
      <div className="App">
            <StickersScreen/>
      </div>
    );
  }
}

export default App;
