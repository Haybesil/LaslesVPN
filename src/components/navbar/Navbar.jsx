import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../../assets/images/navbar-logo/Logo.png'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import Button from '../button/Button'

const Navbar = () => {

   const [showModal, setShowModal] = useState(false);

   const toggle = () => {
         setShowModal(!showModal) 
   }

   const closeModal = () => {
     setShowModal(false); 
   }

  return (
    <div className='navbar'>
      <Link to='/'>
          <img src={Logo} alt="" />
      </Link>
      <ul>
        <li>
          <Link to = '/about'>About</Link>
        </li>
        <li>
          <Link to = '/about'>Features</Link>
        </li>
        <li>
          <Link to = '/about'>Services</Link>
        </li>
        <li>
          <Link to = '/about'>Testimonials</Link>
        </li>
      
      </ul>

      <ol>
        <li>
          <Link to = '/signin'>Sign In</Link>
        </li>
        <li>
        <Link to = '/signup'>Sign Up</Link>
        </li>
      </ol>
      <div>
         <GiHamburgerMenu size= '40' color='red' onClick={toggle}/>
      
       {showModal && (
          <div className="fixed my-auto right-0 left-0 flex flex-col justify-center items-center z-50 backdrop:blur">
          <div className="bg-white p-6 rounded-lg border-2">
            <h2 className="text-xl font-bold mb-4">Modal Content</h2>
            <p>This is some text in the modal.</p>
            <p>Another paragraph of text.</p>
            <p>This is some text in the modal.</p>
            <p>Another paragraph of text.</p>
            <p>This is some text in the modal.</p>
            <p>Another paragraph of text.</p>
            <p>This is some text in the modal.</p>
            <p>Another paragraph of text.</p>
            <p>This is some text in the modal.</p>
            <p>Another paragraph of text.</p>
            <button onClick={closeModal} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Close Modal
            </button>
          </div>
        </div>
      )} 
     </div>
    </div> 
    
  )
}

export default Navbar
