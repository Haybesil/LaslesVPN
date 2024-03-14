import React from 'react'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
import Mainfooter from '../mainfooter/Mainfooter';

const Signup = () => {
  
   return (
    <>
    <Navbar/>
    <div className="my-1 justify-center">
      <form className="flex flex-col gap-1 max-w-lg mx-auto p-6 bg-white border border-gray-300 shadow-lg rounded-lg">
        <h1 className="text-xl bg-red-500 text-white p-4 rounded-t-lg">Sign Up</h1>
        <label htmlFor="firstName" className="text-gray-700 font-medium mb-1">
          First Name
        </label>
        <input
          id="firstName"
          className="border border-gray-400 p-2 rounded"
          type="text"
          placeholder="Enter your first name"
        />

        <label htmlFor="lastName" className="text-gray-700 font-medium mb-1">
          Last Name
        </label>
        <input
          id="lastName"
          className="border border-gray-400 p-2 rounded"
          type="text"
          placeholder="Enter your last name"
        />

        <label htmlFor="email" className="text-gray-700 font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          className="border border-gray-400 p-2 rounded"
          type="email"
          placeholder="Enter your email"
        />

        <label htmlFor="password" className="text-gray-700 font-medium mb-1">
          Phone
        </label>
        <input
          id="password"
          className="border border-gray-400 p-2 rounded"
          type="text"
          placeholder="Enter your password"
        />

        <label htmlFor="confirmPassword" className="text-gray-700 font-medium mb-1">
          Password
        </label>
        <input
          id="confirmPassword"
          className="border border-gray-400 p-2 rounded"
          type="password"
          placeholder="Password"
        />

         <label htmlFor="confirmPassword" className="text-gray-700 font-medium mb-1">
          Postal Code
        </label>
        <input
          id="confirmPassword"
          className="border border-gray-400 p-2 rounded"
          type="number"
          placeholder="Postal Code"
        />

        <input
          className="border border-gray-400 p-2 rounded bg-red-500 text-white hover:bg-red-600 cursor-pointer"
          type="submit"
          value="Sign Up"
        />

        <p className="text-gray-700 mt-2">
          Already have an account? <Link to = '/signin' className = 'text-red-500 hover:text-red-600'>Sign In</Link>
        </p>
      </form>
    </div>
    <Mainfooter/>
    </>
  );
};


export default Signup
