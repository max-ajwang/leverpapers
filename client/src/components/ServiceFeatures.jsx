import Wrapper from '../assets/wrappers/ServiceFeatures';

const ServiceFeatures = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="serviceFeatures">
          <h1>Service Features</h1>
          <div className="serviceInfo">
            <div className="feature">
              <h3>24/7 Support</h3>
              <p>
                Our support works around the clock for the best customer
                experience. You can make an inquiry at any time.
              </p>
            </div>

            <div className="feature">
              <h3>Plagiarism Report</h3>
              <p>
                Request a plagiarism report for your paper and we will provide
                it instantly at zero cost.
              </p>
            </div>

            <div className="feature">
              <h3>Unlimited Revisions</h3>
              <p>
                Our writers work on unlimited revision at no extra charges. We
                will make the necessary changes on your paper in the shortest
                time possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default ServiceFeatures;
