import React, { Component } from 'react'
import Hml from '../icons/html'
class Skills extends Component {
  render () {
    return (
      <span> 
        <div>
          <h3>Web Front End</h3>
          <img src='./react-original.svg' className='icon' alt='react' />
          <img src='./jquery-original.svg' className='icon' alt='jquery' />
          <img src='./sass-original.svg' className='icon' alt='sass' /> 
        </div>
        <div>
          <h3>Web Back End</h3>
          <img src='./nodejs-original.svg' className='icon' alt='node' />
          <img src='./rails-original-wordmark.svg' className='icon' alt='rails' />
          <img src='./express-original.svg' className='icon' alt='express' />
          <img src='./socket-io.svg' className='icon' alt='socket-io'  />
          <img src='./docker-original.svg' className='icon' alt='docker' /> 
          <img src='./mocha-plain.svg' className='icon' alt='mocha' />
          <img src='./babel-original.svg' className='icon' alt='babel' /> 
        </div>
        <div>
          <h3>Databases</h3>
          <img src='./postgresql-original.svg' className='icon' alt='psql' />
          <img src='./mongodb-original.svg' className='icon' alt='mongodb' />
        </div>
        <div>
          <h3>Languages</h3>
          <img src='./javascript-original.svg' className='icon' alt='javascript' />
          <img src='./html5-original.svg' className='icon' alt= 'html5' />
          <img src='./css.svg' className='icon' alt='CSS' />
        </div>
        <div>
          <h3>Source Control Management</h3>
          <img src='./git-original.svg' className='icon' alt='git' />
          <img src='./github-original.svg' className='icon' alt='github' />
        </div>
      </span>
    )
  }
}

export default Skills