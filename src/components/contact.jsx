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
          <a href='https://github.com/Renkinjutsu'>
            <i class="fab fa-github fa-2x"></i>
          </a>
          <a href='https://www.linkedin.com/in/luccheng'>
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
          <a href='https://resume.creddle.io/resume/8i9hdd0b4la'>
            <i class="fas fa-file fa-2x"></i>
          </a>
        </p>
      </div>
    )
  }
}

export default Contact