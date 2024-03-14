import React from 'react'
import './Heroheader.css'
import Hero from '../../assets/images/heroheader/Illustration 1.png'
import Button from '../button/Button'

const heroheader = () => {
  return (
    <div className='hero-header'>
       <div>
          <h1>
          Want anything to be easy with <strong>LaslesVPN.</strong>
          </h1>
          <p>
          Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.
          </p>

          {/* Local button */}
          {/* <button>Get Started</button> */}

          {/* Calling a button props */}
          <Button text = {'Get Started'}/>
       </div>

       <div>
        <img src={Hero} alt="" />
       </div>
    </div>
  )
}

export default heroheader
