import React, { Component } from 'react';
import Header from './components/_header'
import Banner from './components/_banner'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <Banner />
      </div>
    );
  }
}

export default App;
