import React, { Component } from 'react'
import Navbar from './_navbar'
import Skills from './Skills'

class ProSkiRes extends Component {
  constructor() {
    this.state = {
      view: 'skills'
    }
  }
  handleOnClick = () => {
    this.setState({view: 'skills'})
  }

  render () {
    return (
      <span> 
        <img src='./ebrastij.svg' width='500px' height='500px' />
        <span>
          I am a: Developer
        </span>
      </span>
    )
  }
}

export default ProSkiRes