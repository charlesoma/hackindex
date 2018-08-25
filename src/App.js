import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
      </div>
    );
  }
}

export default App;
