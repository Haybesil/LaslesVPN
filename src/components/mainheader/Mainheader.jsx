import React from 'react'
import './Mainheader.css'
import Mark from '../../assets/images/mainheader/mark.png'
import Box from '../../assets/images/mainheader/box.png'

const Mainheader = () => {
    

  const Pricing = (prop) => {
    return (
      <div className="pricing">
        <img className='box' src={Box} alt="" />
        <h1 className='first'>{prop.title}</h1>
        <ul>
          <li><img src={Mark} alt="" /> {prop.first}</li>
          <li><img src={Mark} alt="" /> {prop.second}</li>
          <li><img src={Mark} alt="" /> {prop.third}</li>
          <li><img src={Mark} alt="" /> {prop.fourth}</li>
          <li><img src={Mark} alt="" /> {prop.fifth}</li>
          <li><img src={Mark} alt="" /> {prop.sixth}</li>
      </ul>

       <h1>{prop.price} <span>{prop.time}</span></h1>

        <button>Select</button>
      </div>
    )
  }
  

  return (
    <div className='main-header'>
       <div>
         <h1>Choose Your Plan</h1>
         <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
       </div>

       <div className='flex'>
            
             <Pricing title = 'Free Plan' first = 'Unlimited Bandwitch ' second = 'Encrypted Connection' third = 'No Traffic Logs' fourth = 'Works on All Devices' price ='Free'>
             </Pricing>
             
          
             <Pricing title = 'Standard Plan' first = 'Unlimited Bandwitch ' second = 'Encrypted Connection' third = 'Yes Traffic Logs' fourth = 'Works on All Devices' fifth = 'Connect Anywhere' price ='$9' time ='/ mo'>
             </Pricing>
             
            
             <Pricing title = 'Premium Plan' first = 'Unlimited Bandwitch ' second = 'Encrypted Connection' third = 'Yes Traffic Logs' fourth = 'Works on All Devices' fifth = 'Connect Anywhere' sixth ='Get New Features' price ='$12' time ='/ mo'>
             </Pricing>
             
        </div>
    </div>
  )
}

export default Mainheader
