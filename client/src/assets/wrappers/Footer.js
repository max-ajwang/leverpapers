import styled from 'styled-components';

const Wrapper = styled.section`
  .footer {
    background-color: var(--grey-900);
    color: var(--white);
    padding: 3rem;

    display: grid;
    gap: 2rem;
  }

  h3 {
    margin-bottom: 1.5rem;
  }

  p {
    line-height: 2;
  }

  .footerLogoContainer {
    height: 4.015em;
    width: 15.5em;
    background-color: black;
  }

  .logo {
    height: 4.015em;
    width: 15.5em;
    object-fit: cover;
  }

  @media (min-width: 992px) {
    .footer {
      grid-template-columns: repeat(3, 1fr);
      text-align: justify;
    }

    h3 {
      font-size: 24px;
    }
  }
`;
export default Wrapper;
