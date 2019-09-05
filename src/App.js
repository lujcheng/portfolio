import React, { Component } from 'react';
import Header from './components/_header'
import Banner from './components/_banner'
import About from './components/About'
import ProSkiRes from './components/pro-ski-res'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <About />
        <ProSkiRes />
          <Header />
      </div>
    );
  }
}

export default App;
