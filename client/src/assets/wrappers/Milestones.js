import styled from 'styled-components';

const Wrapper = styled.section`
  .mileStonesContainer {
    display: grid;
    background-color: var(--primary-200);
  }

  h1 {
    padding: 0.5em 0;
    font-weight: 600;
    text-align: center;
  }

  ul {
    padding-top: 0.1em;
    padding-right: 2em;
    padding-left: 2em;
    padding-bottom: 2em;
    margin: 0 auto;
    align-items: center;
  }

  .mileStonesSections li {
    background-color: var(--primary-200);
    border-radius: var(--border-radius);
    width: 100%;
    margin: 1em;
    border: solid;
    padding: 1em 0;
    font-weight: 600;
    text-align: center;
  }

  @media (min-width: 992px) {
    ul {
      display: flex;
    }
  }
`;

export default Wrapper;
