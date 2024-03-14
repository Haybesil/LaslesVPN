import React from 'react'
import './Button.css'

const Button = (prop) => {

        return (
            <div className="button-b">
              <button>{prop.text}</button>  
            </div>
        )
    }

export default Button
