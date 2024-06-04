import React from 'react';
import main from '../assets/images/main-alternative.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>

      <div className="container page">
        <div className="info">
          <h1>
            HIRE A <span>PROFESSIONAL</span> WRITER
          </h1>
          <p>
            Our professional Writers will Help you Write your Customized Essays
            at Affordable Rates
          </p>
          <Link to="/register" className="btn register-link">
            Register / Order Now
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>

        {/*<img src={main} alt="writing" className="img main-img" />*/}
      </div>
    </Wrapper>
  );
};

export default Landing;
