import React, { Component } from 'react';
import Header from './components/_header'
import Banner from './components/_banner'
import About from './components/About'
import Navbar from './components/_navbar'
import Skills from './components/Skills'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <Banner />
        <About />
        <div>
          <Navbar/>
          <Skills />
        </div>
      </div>
    );
  }
}

export default App;
