import React from 'react';
import './Headersection.css';
import User from '../../assets/images/headersection/user.png';
import Location from '../../assets/images/headersection/location.png';
import Server from '../../assets/images/headersection/Server.png';

const Headersection = () => {
  const Card = (prop) => {
    return (
      <div className="card">
        <div className="card-body">
          <img src={prop.image} alt="" />

          <div className="title">
            <h1 className="card-title">{prop.title}</h1>

            <p className="card-text">{prop.text}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="hero-section">
      <Card className="first" image={User} title={'90+'} text={'User'} />
      <div className="borderlr">
        <Card image={Location} title={'30+'} text={'Locations'} />
      </div>
      <Card image={Server} title={'50+'} text={'Servers'} />
    </div>
  );
};

export default Headersection;
