import React, { Component } from 'react'
import Typist from 'react-typist-updated'
import TypistLoop from 'react-typist-loop'

class Banner extends Component {
  render () {
    return (
      <div id='banner'> 
        <img src='./ebrastij.svg' />
        <span>
          <h3 id='name'>Lucas Cheng</h3>
          <span> 
            <p>I am a: </p>
            <TypistLoop interval={1000}>
              
              {[
                'Problem Solver',
                'Developer',
                'Good Person',
              ].map(text =>
                <Typist  avgTypingSpeed={40} key={text} startDelay={1000}>{text}
                <Typist.Delay ms={1000} />
                <Typist.Backspace count={text.length}/>
                </Typist>
              )}
            </TypistLoop>
          </span>
        </span>
      </div>
    )
  }
}

export default Banner