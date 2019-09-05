import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <div className="dropleft">
        <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          hamburger
        </button>
        <div className="dropdown-menu">
          <a className='dropdown-item' href='#'>About Me</a>
          <a className='dropdown-item' href='#'>Projects/Skills</a>
          <a className='dropdown-item' href='#'>Contact Me</a>
        </div>
    </div>
    )
  }
}

export default Header