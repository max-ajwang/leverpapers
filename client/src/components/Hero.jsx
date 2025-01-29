import Wrapper from '../assets/wrappers/Hero';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero">
        <div className="info">
          <h1>
            MY SAMPLE <span>E-COMMERCE</span> <br /> WEB APPLICATION.
          </h1>
          <p>Create an account to explore.</p>
          <Link to="/login" className="btn register-link">
            Order Now
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
export default Hero;
