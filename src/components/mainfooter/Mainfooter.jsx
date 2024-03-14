import React from 'react';
import './Mainfooter.css';
import Logo from '../../assets/images/navbar-logo/Logo.png';
import Facebook from '../../assets/images/mainfooter/facebook.png';
import Twitter from '../../assets/images/mainfooter/twitter.png';
import Instagram from '../../assets/images/mainfooter/instagram.png';

const Mainfooter = () => {
  const Link = (prop) => {
    return (
      <div className="link">
        <h1 className="title">{prop.title}</h1>
        <ul>
          <li>{prop.first}</li>
          <li>{prop.second}</li>
          <li>{prop.third}</li>
          <li>{prop.fourth}</li>
          <li>{prop.fifth}</li>
          <li>{prop.sixth}</li>
        </ul>
      </div>
    );
  };

  return (
    <div className="main-footer">
      <div className="link-container">
        <img src={Logo} alt="" />
        <p>
          <span>LaslesVPN</span>is a private virtual network that has unique
          features and has high security.
        </p>

        <div className="social-icons">
          <img src={Facebook} alt="" />
          <img src={Twitter} alt="" />
          <img src={Instagram} alt="" />
        </div>

        <p>©2020LaslesVPN</p>
      </div>

      <div className="product">
        <Link
          title={'Product'}
          first={'Download'}
          second={'Pricing'}
          third={'Location'}
          fourth={'Server'}
          fifth={'Countries'}
          sixth={'Blog'}
        />
      </div>

      <div className="engage">
        <Link
          title={'Engage'}
          first={'LaslesVPN ?'}
          second={'FAQ'}
          third={'Tutorials'}
          fourth={'About Us'}
          fifth={'Privacy Policy'}
          sixth={'Terms of Service'}
        />
      </div>

      <div className="earn">
        <Link title={'Earn'} first={'Affiliate'} second={'Become Partner'} />
      </div>
    </div>
  );
};

export default Mainfooter;
