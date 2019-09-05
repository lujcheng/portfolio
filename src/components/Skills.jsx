import React, { Component } from 'react'
class Skills extends Component {
  render () {
    return (
      <div className='container' id='skills'> 
        <div className='row'>
          <h4 className='col-5 padded'>Web Front End</h4>
          <div className='row container justify-content-start'>
            <div className='container icon-bg'>
              <div className='hexagon float-left'></div>
              <img className='icon float-left' src='./react-original.svg'  alt='react' />
            </div>
            <div className='container icon-bg'>
              <div className='hexagon float-left'></div>
              <img className='icon' src='./jquery-original.svg'  alt='jquery' />  
            </div>
            <div className='container icon-bg'>
              <div className='hexagon float-left'></div>
              <img className='icon' src='./sass-original.svg'  alt='sass' />   
            </div>
          </div>
        </div>
        <div className='row'>
          <h4 className='col-5  padded'>Web Back End</h4>
          <div className='row container justify-content-start'>
            <div className='container icon-bg'>
              <div className='hexagon float-left'></div>
              <img className='icon' src='./nodejs-original.svg'  alt='node' />
                
            </div>
            <div className='container icon-bg'>
              <div className='hexagon float-left'></div>
              <img className='icon' src='./rails-original-wordmark.svg'  alt='rails' />
               
            </div>
            <div className='container icon-bg'>
              <div className='hexagon float-left'></div>
              <img className='icon' src='./express-original.svg'  alt='express' />
               
            </div>
            <div className='container icon-bg'>
              <div className='hexagon float-left'></div>
              <img className='icon' src='./docker-original.svg'  alt='docker' /> 
               
            </div>
            <div className='container icon-bg'>
              <div className='hexagon float-left'></div>
              <img className='icon' src='./mocha-plain.svg'  alt='mocha' />
               
            </div>
            <div className='container icon-bg'>
              <div className='hexagon float-left'></div>
              <img className='icon' src='./socket-io.svg'  alt='socket-io'/>
               
            </div>
            <div className='container icon-bg'>
              <div className='hexagon float-left'></div>
              <img className='icon' src='./babel-original.svg'  alt='babel' /> 
               
            </div>
          </div>
        </div>
        <div className='row'>
          <h4 className='col-5  padded'>Databases</h4>
          <div className='row container justify-content-start'>
            <div className='container icon-bg'>
              <div className='hexagon float-left'></div>
              <img className='icon' src='./postgresql-original.svg'  alt='psql' />
               
            </div>
            <div className='container icon-bg'>
              <div className='hexagon float-left'></div>
              <img className='icon' src='./mongodb-original.svg'  alt='mongodb' />
               
            </div>
          </div>
        </div>
        <div className='row'>
          <h4 className='col-5  padded'>Languages</h4>
          <div className='row container justify-content-start'>
            <div className='container icon-bg'>
              <div className='hexagon float-left'></div>
              <img className='icon' src='./javascript-original.svg'  alt='javascript' />
               
            </div>
            <div className='container icon-bg'>
              <div className='hexagon float-left'></div>
              <img className='icon' src='./html5-original.svg'  alt= 'html5' />
               
            </div>
            <div className='container icon-bg'>
              <div className='hexagon float-left'></div>
              <img className='icon' src='./css3-original.svg'  alt='CSS' />
               
            </div>
          </div>
        </div>
        <div className='row'>
          <h4 className='col-5  padded'>Source Control Management</h4>
          <div className='row container justify-content-start'>
            <div className='container icon-bg'>
              <div className='hexagon float-left'></div>
              <img className='icon' src='./git-original.svg'  alt='git' />
               
            </div>
            <div className='container icon-bg'>
              <div className='hexagon float-left'></div>
              <img className='icon' src='./github-original.svg'  alt='github' />
               
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills