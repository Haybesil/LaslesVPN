import {React, useState} from 'react'
import './Bodymain.css'
import Slider from '../slider/Slider'

const Bodymain = () => {


    // const Carousel = ({ items }) => {
    //   const [currentIndex, setCurrentIndex] = useState(0);
    
    //   const goToNextSlide = () => {
    //     const nextIndex = (currentIndex + 1) % items.length;
    //     setCurrentIndex(nextIndex);
    //   };
    
    //   const goToPrevSlide = () => {
    //     const prevIndex = (currentIndex - 1 + items.length) % items.length;
    //     setCurrentIndex(prevIndex);
    //   };
    
    //   return (
    //     <div className="carousel">
    //       <button onClick={goToPrevSlide}>Previous</button>
    //       <div className="carousel-items">
    //         {items.map((item, index) => (
    //           <div key={index} className={index === currentIndex ? 'active' : ''}>
    //             <img src={item.src} alt={item.alt} />
    //           </div>
    //         ))}
    //       </div>
    //       <button onClick={goToNextSlide}>Next</button>
    //     </div>
    //   );
    // };
    
    


  return (
    <div className='body-main'>
       <div>
         <h1>Trusted by Thousands of Happy Customer</h1>
         <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
       </div>
       <div>
        <div>
           <Slider/>
        </div>
       </div>
    </div>
  )
}

export default Bodymain
