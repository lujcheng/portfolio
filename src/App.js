import React, { Component } from 'react';
import Header from './components/_header'
import Banner from './components/_banner'
import About from './components/About'
import ProSkiRes from './components/pro-ski-res'
import Contact from './components/contact'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div id='banner'>
          <Banner />
        </div>
        <div className='row' id='main'>
          <About />
          <div id='proskires' className='col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12'>
            <ProSkiRes />
          </div>
          <Contact />
        </div>
          <Header />
      </div>
    );
  }
}

export default App;
