import React from 'react'
import './Headermain.css'
import Header from '../../assets/images/headermain/Illustration 2.png'
import Check from '../../assets/images/headermain/check.png'

const Headermain = () => {


    const Mark = (prop) => {
        return (
            <div className="mark">
                <div className="mark-body">
                    
                        <img src={prop.image} alt="" />
                       <p className="mark-title">{prop.title}</p>
                   
                
                   
                   
                </div>
            </div>
        )
    }


  return (
    <div className='header-main'>
        <div>
            <img className="image" src={Header} alt="" />
        </div>
        <div>
            <h1>We Provide Many Features You Can Use</h1>
            <p>You can explore the features that we provide with fun and have their own functions each feature.</p>

            <ul>
                <li><Mark image = {Check} title = {'Powerful online protection.'} /></li>

                <li><Mark image = {Check} title = {'Internet without Borders.'} /></li>

                <li><Mark image = {Check} title = {'Supercharged VPN.'} /></li>

                <li><Mark image = {Check} title = {'No specific time limits.'} /></li>
            </ul>
        </div>
        
    </div>
  )
}

export default Headermain
