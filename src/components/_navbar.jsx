import React, { Component } from 'react'
import ReactFitText from 'react-fittext'

class Navbar extends Component {
  render () {
    return (
      <div id='navbar' className='row justify-content-around'>
        <span className='col-4'>
          <a className='headers' onClick={(e) => {this.props.onClick(e, 'projects')}}>
            Projects
          </a>
        </span>
        <span className='col-4'>
          <a className='headers' onClick={(e) => {this.props.onClick(e, 'skills')}}>
            Skills
          </a>
        </span>
        <span className='col-4'>
          <a className='headers link' href='https://resume.creddle.io/resume/6kv0z12yze3' >
            Resume
          </a>
        </span>
      </div>
    )
  }
}

export default Navbar