import React, { Component } from 'react'
import Hml from '../icons/html'
class Skills extends Component {
  render () {
    return (
      <span> 
        <div>
          <h3>Web Front End</h3>
          <img src='../../public/react-original.svg' alt='react' />
          <img src='../../public/jquery-original.svg' alt='jquery' />
          <img src='../../public/sass-original.svg' alt='sass' /> 
        </div>
        <div>
          <h3>Web Back End</h3>
          <img src='../../public/nodejs-original.svg' alt='node' />
          <img src='../../public/rails-original-wordmark.svg' alt='rails' />
          <img src='../../public/express-original.svg' alt='express' />
          <img src='./socket-io.svg' alt='socket-io' className='icon' />
          <img src='./docker.svg' alt='docker' /> 
          <img src='./mocha.svg' alt='mocha' />
          <img src='./babel-original.svg' alt='babel' className='icon'/> 
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
          <Hml />
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