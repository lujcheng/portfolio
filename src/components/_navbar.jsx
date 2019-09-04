import React, { Component } from 'react'

class Navbar extends Component {
  render () {
    return (
      <div>
        <span>
          <a onClick={(e) => {this.props.onClick(e, 'projects')}}>
            Projects
          </a>
        </span>
        <span>
          <a onClick={(e) => {this.props.onClick(e, 'skills')}}>
            Skills
          </a>
        </span>
        <span>
          <a href='' >
            Resume
          </a>
        </span>
      </div>
    )
  }
}

export default Navbar