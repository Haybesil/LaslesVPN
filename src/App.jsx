import React from 'react'
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Signin from './components/signin/Signin'
import Signup from './components/signup/Signup'




const App = () => {

  return (
    <div>
       <BrowserRouter>
         <Routes>
            <Route path='/' exact  element= {<Home/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/signin' element = {<Signin/>}/>
            <Route path='/signup' element = {<Signup/>}/>
         </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
