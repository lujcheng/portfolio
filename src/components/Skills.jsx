import React, { Component } from 'react'

class Skills extends Component {
  render () {
    return (
      <span> 
        <div>
          <h3>Web Front End</h3>
          <i class="fab fa-react">React</i>
        </div>
        <div>
          <h3>Web Back End</h3>
        </div>
        <div>
          <h3>Databases</h3>
        </div>
        <div>
          <h3>Languages</h3>
          <i class="fab fa-js"></i>
          <i class="fab fa-html5"></i>
          <i class="devicon-css3-plain-wordmark colored">CSS</i>
        </div>
        <div>
          <h3>Source Control Management</h3>
        </div>
      </span>
    )
  }
}

export default Skills