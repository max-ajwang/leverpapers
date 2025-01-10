import Wrapper from '../assets/wrappers/AboutUs';
import { LandingNavbar, Logo } from '../components';
import simplicity from '../assets/images/simplicity.jpg';
import innovation from '../assets/images/innovation.jpg';
import discipline from '../assets/images/discipline.jpg';
import empowerment from '../assets/images/empowerment.jpg';

const AboutUs = () => {
  return (
    <Wrapper>
      <LandingNavbar />
      <div className="aboutUsContainer">
        <div className="aboutUsHeroSection"></div>
        <div className="whatIsLeverPapers">
          <div className="whoWeAre">
            <h3 className="title">
              <b>Who We Are</b>
            </h3>
            <p>
              LeverPapers is a technology company that operates a marketplace
              where you can connect with the best (<b>99th percentile</b>)
              freelance writers to get anything written on your schedule.
              LeverPapers is the trusted provider of content solutions for
              consumers around the world. Since 2010, we have helped clients
              from around the world connect with the best American writers for
              custom writing services, editing help, and business document
              preparation services while offering 24/7 world-class client
              support.
            </p>
            <h5>
              <b>We are:</b>
            </h5>
            <ol>
              <li>The global leader in consumer writing services</li>
              <li>
                Obsessed with customer satisfaction (and customer outcomes)
              </li>
              <li>People focused on driving technological innovation</li>
              <li>
                An American company dedicated to important social causes like
                helping eliminate student loan debt and bringing jobs back to
                America
              </li>
            </ol>
            <p>
              We set out to become the most trusted provider in our industry
              while supporting causes we believe in. Our mission is simple: to
              conveniently deliver high-quality content and offer tremendous
              client support.
            </p>
            <h5>
              <b>What we do:</b>
            </h5>
            <ol>
              <li>
                Build web and mobile applications to connect consumers (normal
                people) with freelance writers in the most convenient way
                possible
              </li>
              <li>
                Drive the knowledge economy by hiring expert American writers
                and helping them monetize their writing skills
              </li>
              <li>
                Focus on building trust with our customers above everything else
                by putting their needs first
              </li>
            </ol>
            <p>
              In less than a decade, we’ve revolutionized our unique industry
              through continued innovation and a relentless focus on putting
              client trust as a main priority. The features and standards we
              have carefully crafted over the years have been copied, but never
              replicated. We're excited to delight you with what we're building
              next.
            </p>
          </div>

          <div className="nameBlock">
            <h4 className="title">
              <b>What We're About</b>
            </h4>
            <Logo />
            <p>
              <em>Leverpapers </em>
              comes from the root word
              <em> Lever</em>, meaning to elevate.
            </p>
            <p>
              We picked this name because we believe Leverpapers should put
              academicians on level terms, regardless of the existing
              challenges. We strive to help everyone achieve their academic
              dreams without much hussle.
            </p>

            <h5 className="title">
              <b>What We Offer</b>
            </h5>
            <div className="colors">
              <ol>
                <li>Top-Class Essays</li>
                <li>24/7 Customer Support</li>
                <li>FREE revisions</li>
              </ol>
            </div>

            <div className="clear">&nbsp;</div>
          </div>
        </div>

        <div className="culture">
          <div className="top">
            <h3 className="title">
              <b>Our culture</b>
            </h3>
            <h4 className="title">
              <b>mission:</b>
            </h4>
            <p>
              To conveniently deliver high-quality content while offering
              world-class client support. Our mission drives us to innovate
              every day. Every piece of technology we’ve built and update we’ve
              made goes back to our basics: great content through great writers,
              a fast and smooth website or mobile app experience, and friendly
              support staff.
            </p>
            <h4 className="title">
              <b>vision:</b>
            </h4>
            <p>
              We aspire to be the most trusted provider of content solutions for
              consumers around the world.
            </p>
            <h4 className="title">
              <b>Core values:</b>
            </h4>
            <p>
              <b>S</b>implicity. <b>I</b>nnovation. <b>D</b>iscipline. <b>E</b>
              mpowerment. We wanted our values to reflect one thing: LeverPapers
              is on your <b>SIDE.</b> Whether you’re a customer, writer, or
              vendor, LeverPapers is designed to be a trusted partner you can
              depend on. We chose these company values because we think they're
              the most fitting for making great technology that serves all
              people, not just our company.
            </p>
          </div>

          <div className="values">
            <ul>
              <li>
                <h5 className="val">Simplicity</h5>
                <div className="val-img-desc">
                  <img src={simplicity} alt="LeverPapers simplicity" />
                  <p className="desc">
                    LeverPapers is here to simplify everything for you. To us,
                    simplicity means fast, easy to use, and nonintimidating.
                  </p>
                </div>
              </li>

              <li>
                <h5 className="val">Innovation</h5>
                <div className="val-img-desc">
                  <img src={innovation} alt="LeverPapers innovation" />
                  <p className="desc">
                    Innovation means constantly updating our technologies and
                    practices to make things better.
                  </p>
                </div>
              </li>

              <li>
                <h5 className="val">Discipline</h5>
                <div className="val-img-desc">
                  <img src={discipline} alt="LeverPapers discipline" />
                  <p className="desc">
                    We stay focused on our mission. Discipline means ignoring
                    distractions and being steadfast.
                  </p>
                </div>
              </li>
              <li>
                <h5 className="val">Empowerment</h5>
                <div className="val-img-desc">
                  <img src={empowerment} alt="LeverPapers empowerment" />
                  <p className="desc">
                    When you work with LeverPapers you are empowered to solve
                    problems and reach your potential.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="midText">
            <h4 className="title">
              LeverPapers is focused on empowering freelance writers to be the
              entrepreneurs of their own lives, to make their own fortune.
            </h4>
            <p>
              Our company culture is different because the freelance writers
              working for LeverPapers are remote - they have the freedom to work
              whenever, wherever. We are dedicated to hiring the most talented
              writers in the United States and want to keep them with us, so we
              build our company around their needs.
            </p>
            <p>
              Our Writer Success department is directly responsible for
              welcoming and orienting new writers and helping existing writers
              in regard to LeverPapers policies and best practices. Even though
              you may work alone, as a writer, you are never alone when you work
              with LeverPapers. We have built our company around you and have a
              number of resources to help you succeed, including 24/7 support
              personnel, an amazing Helpdesk with self-service resources, an AI
              powered chatbot named
              <em> Dantes</em>, and writing resources like templates, guides,
              and samples.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default AboutUs;
