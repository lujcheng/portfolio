import React, { Component } from 'react'
import Typist from 'react-typist'
import TypistLoop from 'react-typist-loop'

class Banner extends Component {
  render () {
    return (
      <div id='banner'> 
        <img src='./ebrastij.svg' />
        <span>
          <p id='name'>Lucas Cheng</p>
          <span> 
            <p>I am a: </p>
            <TypistLoop interval={3000}>
              
              {[
                'Problem Solver',
                'Developer',
                'Good Person',
              ].map(text => <Typist key={text} startDelay={1000}>{text}</Typist>)}
            </TypistLoop>
          </span>
        </span>
      </div>
    )
  }
}

export default Banner