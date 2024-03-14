import React from 'react'
import './Body.css'
import Map from '../../assets/images/body/Huge Global.png'
import Netflix from '../../assets/images/body/Netflix.png' 
import Amazon from '../../assets/images/body/amazon.png' 
import Discord from '../../assets/images/body/discord.png' 
import Reddit from '../../assets/images/body/reddit.png' 
import Spotify from '../../assets/images/body/spotify.png' 

const Body = () => {
  return (
    <div className='body'>
        <div>
            <h1>Huge Global Network of Fast VPN</h1>
            <p>See LaslesVPN everywhere to make it easier for you when you move locations.</p>
        </div>
        
        <div>
            <img src={Map} alt="" />
        </div>
        
        <div>
           <img src={Netflix} alt="" />
           <img src={Reddit} alt="" />
           <img className='amazon' src={Amazon} alt="" />
           <img src={Discord} alt="" />
           <img src={Spotify} alt="" />
        </div>
    </div>
  )
}

export default Body
