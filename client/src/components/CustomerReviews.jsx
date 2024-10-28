import Wrapper from '../assets/wrappers/CustomerReviews';

const CustomerReviews = () => {
  return (
    <Wrapper>
      <div className="customerReviewsContainer">
        <h1>Customer Reviews</h1>
        <div className="reviewsSection">
          <div className="reviews">
            <img
              src="../assets/images/Can You Lie in Your College Admission Essay.jpg"
              alt="Client Picture"
            />
            <figcaption>"Excellent Services. Top class!"</figcaption>
          </div>
          <div className="reviews">
            <img src="images/Sneaky.jpg" alt="Client Picture" />
            <figcaption>"Excellent Services. Top class!"</figcaption>
          </div>
          <div className="reviews">
            <img
              src="images/pexels-andrea-piacquadio-3762806.jpg"
              alt="Client Picture"
            />
            <figcaption>"Excellent Services. Top class!"</figcaption>
          </div>
          <div className="reviews">
            <img
              src="images/Is Chegg Reliable for Answers.jpg"
              alt="Client Picture"
            />
            <figcaption>"Excellent Services. Top class!"</figcaption>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default CustomerReviews;
