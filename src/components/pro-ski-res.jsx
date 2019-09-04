import React, { Component } from 'react'
import Navbar from './_navbar'
import Skills from './Skills'
import Projects from './Projects'

class ProSkiRes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'skills'
    }
  }
  handleOnClick = (e, target) => {
    e.preventDefault()
    this.setState({view: target})
  }

  render () {
    let page
    if (this.state.view === 'skills') {
      page = <Skills />
    } else if (this.state.view === 'projects') {
      page = <Projects />
    }
    return (
      <div>
      <Navbar onClick={this.handleOnClick} />
      {page}
      </div>
    )
  }
}

export default ProSkiRes