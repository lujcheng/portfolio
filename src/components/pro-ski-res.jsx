import React, { Component } from 'react'
import Navbar from './_navbar'
import Skills from './Skills'

class ProSkiRes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'skills'
    }
  }
  handleOnClick = () => {
    this.setState({view: 'skills'})
  }

  render () {
    let page
    if (this.state.view === 'skills') {
      page = <Skills />
    }
    return (
      <div>
      <Navbar onClick={handleOnClick} />
      {page}
      </div>
    )
  }
}

export default ProSkiRes