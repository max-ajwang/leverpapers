import Wrapper from '../assets/wrappers/Hero';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero">
        <div className="info">
          <h1>
            HIRE A <span>PROFESSIONAL</span> <br /> WRITER.
          </h1>
          <p>
            Our Professional Writers will Help you Write your Customized Essays
            and Research Papers at Affordable Rates
          </p>
          <Link to="/login" className="btn register-link">
            Order Now
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
export default Hero;
