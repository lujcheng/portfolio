import React, { Component } from 'react'
import Typist from 'react-typist-updated'
import TypistLoop from 'react-typist-loop'

class Banner extends Component {
  render () {
    return (
      <div className='container align-items-center'> 
        <div className='row align-self-center'>
          <img src='./ebrastij.svg' className='col-md-6 col-sm-12'/>
          <div className='col-md-6 col-sm-12 row align-self-center'>
            <div className='typing'>
              <h3 id='name' className='row'>Lucas Cheng</h3>
              <div className='row'> 
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
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner