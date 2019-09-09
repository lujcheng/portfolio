import React, { Component } from 'react'

class Contact extends Component {
  render () {
    return (
      <div id='contact' className='text' >
        <p>If you would like to collaborate, you're very welcome to contact me. </p>
        <p>I'm available for employment</p>
        <h5>Lucas Cheng</h5>
        <p className='col-12'>
          Full-stack Developer
          <br></br>
          <i class="fab fa-github"></i>
          <i class="fab fa-linkedin"></i>
          <i class="fas fa-file"></i>
        </p>
      </div>
    )
  }
}

export default Contact