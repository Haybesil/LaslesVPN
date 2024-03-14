import React from 'react'
import './Footer.css'
import Button from '../button/Button'

const Footer = () => {
  return (
    <div className='gray'>
      <div className='footer'>
      <div>
        <h1 className='text-primary-500'>Subscribe Now for Get Special Features!</h1>
        <p>Lets subscribe with us and find the fun.</p>
      </div>
      <div>
        {/* Calling button prop */}
        <Button text = {'Subscribe Now'}/>
       </div>
      </div>
    </div>
  )
}

export default Footer
