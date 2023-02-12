import React from 'react'
import profile_img from '../images/profile_image.png'

const Header = () => {
  return (
    <div>
      <img className='profile-img' src={profile_img}/>
      <div className='dev'>
        <div className='name'>Sriram Ramakrishnan</div>
        <div className='role'>Frontend Developer</div>
        <div className='website'></div>
      </div>
    </div>
  )
}

export default Header;
