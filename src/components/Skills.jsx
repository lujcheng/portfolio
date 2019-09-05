import React, { Component } from 'react'
class Skills extends Component {
  render () {
    return (
      <div className='container'> 
        <div className='row justify-content-around'>
          <h3 className='col-12'>Web Front End</h3>
          <img className='col-4 icon' src='./react-original.svg'  alt='react' />
          <img className='col-4 icon' src='./jquery-original.svg'  alt='jquery' />
          <img className='col-4 icon' src='./sass-original.svg'  alt='sass' /> 
        </div>
        <div className='row justify-content-around'>
          <h3 className='col-12'>Web Back End</h3>
          <img className='col-4 icon' src='./nodejs-original.svg'  alt='node' />
          <img className='col-4 icon' src='./rails-original-wordmark.svg'  alt='rails' />
          <img className='col-4 icon' src='./express-original.svg'  alt='express' />
          <img className='col-4 icon' src='./docker-original.svg'  alt='docker' /> 
          <img className='col-4 icon' src='./mocha-plain.svg'  alt='mocha' />
          <img className='col-4 icon' src='./socket-io.svg'  alt='socket-io'/>
          <img className='col-4 icon' src='./babel-original.svg'  alt='babel' /> 
        </div>
        <div className='row justify-content-around'>
          <h3 className='col-12'>Databases</h3>
          <img className='col-4 icon' src='./postgresql-original.svg'  alt='psql' />
          <img className='col-4 icon' src='./mongodb-original.svg'  alt='mongodb' />
        </div>
        <div className='row justify-content-around'>
          <h3 className='col-12'>Languages</h3>
          <img className='col-4 icon' src='./javascript-original.svg'  alt='javascript' />
          <img className='col-4 icon' src='./html5-original.svg'  alt= 'html5' />
          <img className='col-4 icon' src='./css3-original.svg'  alt='CSS' />
        </div>
        <div className='row justify-content-around'>
          <h3 className='col-12'>Source Control Management</h3>
          <img className='col-4 icon' src='./git-original.svg'  alt='git' />
          <img className='col-4 icon' src='./github-original.svg'  alt='github' />
        </div>
      </div>
    )
  }
}

export default Skills