import React from 'react'
import twitter from '../images/Twitter.png'
import facebook from '../images/Facebook.png'
import instagram from '../images/Instagram.png'
import github from '../images/GitHub.png'


const Footer = () => {
  return (
    <div>
        <div className='footer-title'>My Social Media Handles!</div>
        <div className='footer'>
        <a href='https://twitter.com/sriram_2k03'><img src={twitter}/></a>
        <a href='https://www.facebook.com/sriram.ramkrishnan.31'><img src={facebook}/></a>
        <a href='https://www.instagram.com/sriram_2k03_/'><img src={instagram}/></a>
        <a href='https://github.com/Sriram-Ramakrishnan'><img src={github}/></a>
    </div>
    </div>
  )
}

export default Footer
