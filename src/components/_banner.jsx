import React, { Component } from 'react'
import Typist from 'react-typist'
import TypistLoop from 'react-typist-loop'

class Banner extends Component {
  render () {
    return (
      <div id='banner'> 
        <img src='./ebrastij.svg' width='500px' height='500px' />
        <span>
          <p id='name'>Lucas Cheng</p>
          I am a: 
          <TypistLoop interval={3000}>
            {[
              'Problem Solver',
              'Developer',
              'Good Person',
            ].map(text => <Typist key={text} startDelay={1000}>{text}</Typist>)}
          </TypistLoop>
        </span>
      </div>
    )
  }
}

export default Banner