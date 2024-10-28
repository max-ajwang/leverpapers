import styled from 'styled-components';

const Wrapper = styled.section`
  .howItWorkscontainer {
    background-color: var(--grey-400);
  }

  .howItWorksSections {
    padding-top: 0.1em;
    padding-right: 2em;
    padding-left: 2em;
    padding-bottom: 2em;
    margin: 0 auto;
    align-items: center;
  }

  h1 {
    padding: 0.5em 0;
    font-weight: 600;
    text-align: center;
  }

  h3 {
    color: var(--primary-1000);
    margin: 1em auto;
    font-weight: 600;
  }

  p {
    line-height: 1.5;
    /* letter-spacing: var(--letter-spacing); */
  }

  ul {
    line-height: 1.5;
    list-style-type: upper-roman;
  }

  li {
  }

  @media (min-width: 992px) {
    .howItWorksSections {
      padding-top: 0;
      padding-right: 6em;
      padding-left: 6em;
      padding-bottom: 2em;
    }
  }
`;

export default Wrapper;
