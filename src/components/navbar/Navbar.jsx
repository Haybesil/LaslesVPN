import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/images/navbar-logo/Logo.png';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from "react-icons/io5";
import Button from '../button/Button';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggle = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <div className="hidden md:block">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/about">Features</Link>
          </li>
          <li>
            <Link to="/about">Services</Link>
          </li>
          <li>
            <Link to="/about">Testimonials</Link>
          </li>
        </ul>
      </div>

      <div className="hidden md:block">
        <ol>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ol>
      </div>
      <div>
        <GiHamburgerMenu
          className="mt-4"
          size="40"
          color="red"
          onClick={toggle}
        />

        {showModal && (
          <div className="fixed right-0 left-20 bottom-10  z-50 backdrop:blur">
            <div className="bg-red-500 p-6 rounded-lg border-2">
              <div className="">
                <ul className="flex flex-col items-center">
                  <li className='text-[30px]'>
                    <Link to="/about" className='text-white hover:text-gray-700'>About</Link>
                  </li>
                  <li className='text-[30px]'>
                    <Link to="/about" className='text-white hover:text-gray-700'>Features</Link>
                  </li>
                  <li className='text-[30px]'>
                    <Link to="/about" className='text-white hover:text-gray-700'>Services</Link>
                  </li>
                  <li className='text-[30px]'>
                    <Link to="/about" className='text-white hover:text-gray-700'>Testimonials</Link>
                  </li>
                </ul>
              </div>

              <div className="">
                <ol className='flex flex-col'>
                  <li className='text-[20px] hover:bg-white'>
                    <Link to="/signin " className='text-white p-10 hover:text-red-700'>Sign In</Link>
                  </li>
                  <li className='text-[18px] hover:bg-white'>
                    <Link to="/signup" className='text-white p-10 hover:text-red-700'>Sign Up</Link>
                  </li>
                </ol>
              </div>
              <IoClose 
                size="40"
                color="red"
                onClick={closeModal}
                className="ml-[28vw] bg-red-200 rounded mt-[10px]"
              />
        
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
