import styled from 'styled-components';

const Text = styled.p`
  width: 600px;
  margin: auto;
  margin-top: 100px;
  line-height: 1.7;
  color: var(--colors-text);
  font-size: var(--fz-md);
  font-weight: var(--fw-normal);
  text-align: center;
  text-shadow: var(--shadow);

  -webkit-text-stroke-color: var(--colors-text);
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: transparent;
`;

export default { Text };
