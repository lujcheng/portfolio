import React, { Component } from 'react'
import ReactFitText from 'react-fittext'
class Skills extends Component {
  render () {
    return (
      <div id='projects'>
        <ReactFitText compressor= {2}>
          <p>
            My most recent project is a social media page built on microservices architecture and a MERN tech stack linked <a href='https://github.com/Renkinjutsu/Fudigram'>here</a>. 
            <br></br>
          </p>
        </ReactFitText>
        <ReactFitText compressor= {2}>
          <p>
            I've also built a UI for SQL data in Entity-Relationship-Diagram format that can be queried hosted <a href='http://myschemaql.netlify.com'>here</a> and linked <a href='https://github.com/Renkinjutsu/My-Schema-QL' className='link'>here</a>. 
            <br></br>
          </p>
        </ReactFitText>
        <ReactFitText compressor= {2}>
          <p>
            This is an e-commerce app built on Ruby on Rails linked <a href='https://github.com/Renkinjutsu/jungle-rails'>here</a>. 
            <br></br>
          </p>
        </ReactFitText>
        <ReactFitText compressor= {2}>
          <p>
            This is a chatting app built with websockets linked <a href='https://github.com/Renkinjutsu/Chatty-App'>here</a>.
            <br></br>
          </p>
        </ReactFitText>
      </div>
    )
  }
}

export default Skills