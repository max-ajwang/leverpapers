import {
  LandingNavbar,
  Hero,
  ServiceFeatures,
  Milestones,
  CustomerReviews,
  HowItWorks,
  PricingGuide,
} from '../components';

const Landing = () => {
  return (
    <>
      <LandingNavbar />
      <Hero />
      <ServiceFeatures />
      <HowItWorks />
      <Milestones />
      <CustomerReviews />
      {/*<PricingGuide />
       */}
    </>
  );
};
export default Landing;
