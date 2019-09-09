import React, { Component } from 'react'

const bold = { fontWeight: 'bold' }
class Contact extends Component {
  render () {
    return (
      <div id='contact' className='text' >
        <p style={bold}>If you would like to collaborate, you're very welcome to contact me. </p>
        <p>I'm available for employment.</p>
        <h5 style={bold}>Lucas Cheng</h5>
        <p className='col-12'>
          Full-stack Developer
          <br></br>
          <i class="fab fa-github fa-2x"></i>
          <i class="fab fa-linkedin fa-2x"></i>
          <i class="fas fa-file fa-2x"></i>
        </p>
      </div>
    )
  }
}

export default Contact