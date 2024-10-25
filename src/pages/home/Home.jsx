 import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Heroheader from '../../components/heroheader/Heroheader'
import Headersection from '../../components/headersection/Headersection'
import Mainheader from '../../components/mainheader/Mainheader'
import Headermain from '../../components/headermain/Headermain'
import Body from '../../components/body/Body'
import Bodymain from '../../components/bodymain/Bodymain'
import Footer from '../../components/footer/Footer'
import Mainfooter from '../../components/mainfooter/Mainfooter'

const Home = () => {
  return (
    <div>
      <Navbar/>
       <Heroheader/>
       <Headersection/>
       <Headermain/> {/*Do something here*/}
       <Mainheader/>
       <Body/>
       <Bodymain/>
       <Footer/>
       <Mainfooter/>
    </div>
  )
}

export default Home
