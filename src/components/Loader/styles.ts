import styled from 'styled-components';

const Loader = styled.div`
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 3px solid var(--colors-loader);
  border-top-color: var(--colors-ui-base);
  animation: 0.5s spin infinite linear;
  display: flex;
  margin: auto;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (min-width: 767px) {
    width: 50px;
    height: 50px;
  }
`;

export default { Loader };
