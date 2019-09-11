import React, { Component } from 'react'
import ReactFitText from 'react-fittext'

class About extends Component {
  render () {
    return (
      <div id='about' className='text container col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12' > 
        <a name='about'></a>
        <ReactFitText compressor={2.5}>
          <p>
            I'm Lucas Cheng, a full-stack developer based in Toronto. Before I became a developer I was licensed Physical Therapist, working with a mixed caseload of patients. When I discovered coding I was drawn to the possibilities and found a tech bootcamp called Lighthouse Labs. I learned about cutting edge tech stacks, best coding practices, and met alot of passionate people that work in the field. Now I'm looking for opportunities to expand on my knowledge, and work with great teams. I thrive in challenging environments and I love learning new languages/stacks and building great projects.
          </p>

        </ReactFitText>
       
      </div>
    )
  }
}
// const blah = () => {
//   return (
//     <p className='col-12'>
//     I've always liked to break things down and put them back together again. 
//     </p>
//     <p  className='col-12'>
//     It started at an early age with whatever I could get my hands on.
//     <br></br> 
//     Sometimes beds turned into forts, sometimes toys turned into little Frankensteinian monsters, sometimes newspapers turned into tanks.
//     <br></br>
//     </p>
//     <p  className='col-12'>
//     As I got older, I started breaking things down in other ways.
//     <br></br>
//     I developed an interest in sports and the human body, and that lead me to a career in Physical Therapy. 
//     </p>
//     <p  className='col-12'>
//     One day I started to try some online coding exercises, and it was everything I love to do, while be accessible and powerful at the same time. I enrolled and graduated from a coding bootcamp and so begins my programming career...
//     </p>
//   )
// }



export default About