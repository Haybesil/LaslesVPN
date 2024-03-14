import React, { useRef } from 'react';
import './Slider.css'
import Image1 from '../../assets/images/slider/image 1.png'
import Image2 from '../../assets/images/slider/image 2.png'
import Image3 from '../../assets/images/slider/image 3.png'
import Star from '../../assets/images/slider/star.png'
import Right from '../../assets/images/slider/right.png'
import Left from '../../assets/images/slider/left.png'


const data = [
  {
    src: Image1,
    name: 'Viezh Robert',
    country: 'Warsaw, Poland',
    rating: 4.5,
    ratingStar: Star,
    comment: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.'
  },
  {
    src: Image2,
    name: 'Yessica Christy',
    country: 'Warsaw, Poland',
    rating: 4.5,
    ratingStar: Star,
    comment: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.'
  },
  {
    src: Image3,
    name: 'Kim Young Jou',
    country: 'Warsaw, Poland',
    rating: 4.5,
    ratingStar: Star,
    comment: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.'
  },
  {
    src: Image2,
    name: 'Yessica Christy',
    country: 'Warsaw, Poland',
    rating: 4.5,
    ratingStar: Star,
    comment: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.'
  },
  {
    src: Image3,
    name: 'Kim Young Jou',
    country: 'Warsaw, Poland',
    rating: 4.5,
    ratingStar: Star,
    comment: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.'
  },
  {
    src: Image2,
    name: 'Yessica Christy',
    country: 'Warsaw, Poland',
    rating: 4.5,
    ratingStar: Star,
    comment: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.'
  },
  {
    src: Image3,
    name: 'Kim Young Jou',
    country: 'Warsaw, Poland',
    rating: 4.5,
    ratingStar: Star,
    comment: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.'
  }
];

const Slider = ({ items }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
  };

  const scrollRight = () => {
    const slider = sliderRef.current;
    const newPosition = slider.scrollLeft + slider.offsetWidth;
    if (newPosition >= slider.scrollWidth) {
      // If reaching the end, scroll to the beginning
      slider.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      slider.scrollLeft += slider.offsetWidth;
    }
  };

  return (
    <>
    <div className="slider-container">
      
      <div className="slider" ref={sliderRef}>
        {data.map((data, index) => (
          <div key={index} className="cards">
            <div className='flexy'>
              <img className='icon' src={data.src} alt="" />
              <div>
                <h2 className='name'>{data.name}</h2>
                <p className='country'>{data.country}</p>
              </div>
                <h3>{data.rating}</h3>
              <img className='star' src={data.ratingStar} alt="" />
            </div>
            <p className='comment'>{data.comment}</p>
          </div>
        ))}
      </div>
      
    </div>
    <div className='button'>
       
       <img src={Left} className='left' onClick={scrollLeft} alt="" />
       <img src={Right} className='right' onClick={scrollRight} alt="" />
      </div>
      
    </>

  );
};

export default Slider;

