import React, { Component } from 'react';
import { createStore } from 'redux'

import logo from './logo.svg';
import './App.css';

import Counter from './components/counter'
import counterReducer from './reducers/counterReducer'

const store = createStore(counterReducer);

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          < Counter value={store.getState()}/>
        </p>
      </div>
    );
  }
}

export default App;
