import React, { Component } from 'react'

class Navbar extends Component {
  render () {
    return (
      <div id='navbar'>
        <span>
          <a className='headers' onClick={(e) => {this.props.onClick(e, 'projects')}}>
            Projects
          </a>
        </span>
        <span>
          <a className='headers' onClick={(e) => {this.props.onClick(e, 'skills')}}>
            Skills
          </a>
        </span>
        <span>
          <a className='headers' href='https://resume.creddle.io/resume/8i9hdd0b4la' >
            Resume
          </a>
        </span>
      </div>
    )
  }
}

export default Navbar