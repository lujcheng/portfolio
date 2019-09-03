import React, { Component } from 'react'

class Skills extends Component {
  render () {
    return (
      <span> 
        <div>
          <h3>Web Front End</h3>
          <img src='../../public/react.svg' alt='react' />
          <img src='../../public/jquery.svg' alt='jquery' />
          <img src='../../public/sass.svg' alt='sass' /> 
        </div>
        <div>
          <h3>Web Back End</h3>
          <img src='../../public/node.svg' alt='node' />
          <img src='../../public/rails.svg' alt='rails' />
          <img src='../../public/express.svg' alt='express' />
          <img src='../../public/socket-io.svg' alt='socket-io' />
          <img src='../../public/docker.svg' alt='docker' /> 
          <img src='../../public/mocha.svg' alt='mocha' />
          <img src='../../public/babel.svg' alt='babel' /> 
        </div>
        <div>
          <h3>Databases</h3>
          <img src='../../public/psql.svg' alt='psql' />
          <img src='../../public/mongo.svg' alt='mongodb' />
        </div>
        <div>
          <h3>Languages</h3>
          <img src='../../public/js.svg' alt='javascript' />
          <img src='../../public/html.svg' alt= 'html5' />
          <img src='../../public/css.svg' alt='CSS' />
        </div>
        <div>
          <h3>Source Control Management</h3>
          <img src='../../public/git.svg' alt='git' />
          <img src='../../public/github.svg' alt='github' />
        </div>
      </span>
    )
  }
}

export default Skills