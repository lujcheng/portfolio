import React, { Component } from 'react'
class Skills extends Component {
  render () {
    return (
      <div className='container' id='skills'> 
        <div className='row'>
          <h4 className='col-5 padded'>Web Front End</h4>
          <div className='row container justify-content-start'>
            <img className='col-3 icon' src='./react-original.svg'  alt='react' />
            <img className='col-3 icon' src='./jquery-original.svg'  alt='jquery' />
            <img className='col-3 icon' src='./sass-original.svg'  alt='sass' /> 
          </div>
        </div>
        <div className='row'>
          <h4 className='col-5  padded'>Web Back End</h4>
          <div className='row container justify-content-start'>

            <img className='col-3 icon' src='./nodejs-original.svg'  alt='node' />
            <img className='col-3 icon' src='./rails-original-wordmark.svg'  alt='rails' />
            <img className='col-3 icon' src='./express-original.svg'  alt='express' />
            <img className='col-3 icon' src='./docker-original.svg'  alt='docker' /> 
            <img className='col-3 icon' src='./mocha-plain.svg'  alt='mocha' />
            <img className='col-3 icon' src='./socket-io.svg'  alt='socket-io'/>
            <img className='col-3 icon' src='./babel-original.svg'  alt='babel' /> 
          </div>
        </div>
        <div className='row'>
          <h4 className='col-5  padded'>Databases</h4>
          <div className='row container justify-content-start'>
            <img className='col-3 icon' src='./postgresql-original.svg'  alt='psql' />
            <img className='col-3 icon' src='./mongodb-original.svg'  alt='mongodb' />
          </div>
        </div>
        <div className='row'>
          <h4 className='col-5  padded'>Languages</h4>
          <div className='row container justify-content-start'>
            <img className='col-3 icon' src='./javascript-original.svg'  alt='javascript' />
            <img className='col-3 icon' src='./html5-original.svg'  alt= 'html5' />
            <img className='col-3 icon' src='./css3-original.svg'  alt='CSS' />
          </div>
        </div>
        <div className='row'>
          <h4 className='col-5  padded'>Source Control Management</h4>
          <div className='row container justify-content-start'>
            <img className='col-3 icon' src='./git-original.svg'  alt='git' />
            <img className='col-3 icon' src='./github-original.svg'  alt='github' />
          </div>
        </div>
      </div>
    )
  }
}

export default Skills