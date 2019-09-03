import React, { Component } from 'react'
import Hml from '../icons/html'
class Skills extends Component {
  render () {
    return (
      <span> 
        <div>
          <h3>Web Front End</h3>
          <img src='./react.svg' alt='react' />
          <img src='./jquery.svg' alt='jquery' />
          <img src='./sass.svg' alt='sass' /> 
        </div>
        <div>
          <h3>Web Back End</h3>
          <img src='./node.svg' alt='node' />
          <img src='./rails.svg' alt='rails' />
          <img src='./express.svg' alt='express' />
          <img src='./socket-io.svg' alt='socket-io' className='icon' />
          <img src='./docker.svg' alt='docker' /> 
          <img src='./mocha.svg' alt='mocha' />
          <img src='./babel.svg' alt='babel' /> 
        </div>
        <div>
          <h3>Databases</h3>
          <img src='./psql.svg' alt='psql' />
          <img src='./mongo.svg' alt='mongodb' />
        </div>
        <div>
          <h3>Languages</h3>
          <img src='./js.svg' alt='javascript' />
          <img src='./html.svg' alt= 'html5' />
          <Hml className='icon'/>
          <img src='./css.svg' alt='CSS' />
        </div>
        <div>
          <h3>Source Control Management</h3>
          <img src='./git.svg' alt='git' />
          <img src='./github.svg' alt='github' />
        </div>
      </span>
    )
  }
}

export default Skills