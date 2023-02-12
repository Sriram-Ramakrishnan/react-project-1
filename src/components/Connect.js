import React from 'react'
import email from '../images/Email.png'
import linkedin from '../images/Linkedin.png'


const Connect = () => {
  return (
    <div className='buttons'>
        <div className='email'>
            <img src={email}/>
            <p>Email</p>
        </div>
        <div className='linkedin'>
            <a href='https://www.linkedin.com/in/sriram-ramakrishnan-110347224/'><img src={linkedin}/></a>
            <p>LinkedIn</p>
        </div>
    </div>
  )
}

export default Connect
