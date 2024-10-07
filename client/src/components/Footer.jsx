import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Footer';
import Logo from './Logo';

const Footer = () => {
  return (
    <Wrapper>
      <section className="footer">
        <div>
          <h3>Company</h3>
          <p>
            <Link to="" className="">
              Company Profile
            </Link>
          </p>
          <p>
            <Link to="" className="">
              Careers
            </Link>
          </p>
          <p>
            <Link to="" className="">
              Privacy
            </Link>
          </p>
        </div>

        <div>
          <h3>More</h3>
          <p>
            <Link to="" className="">
              Blog
            </Link>
          </p>
          <p>
            <Link to="" className="">
              Privacy
            </Link>
          </p>
          <p>
            <Link to="" className="">
              Subscribe
            </Link>
          </p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>566 Main Street, Illinois</p>
          <p>+1(516)2346 124</p>
          <p>support@leverpapers.com</p>
          <div className="footerLogoContainer">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <p>LeverPapers Inc. © 2024</p>
        </div>
      </section>
    </Wrapper>
  );
};
export default Footer;
