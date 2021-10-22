import styled from 'styled-components';

const ThemeSwitcher = styled.div`
  display: flex;
  column-gap: 10px;

  color: var(--colors-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  text-transform: capitalize;
  cursor: pointer;
`;

export default { ThemeSwitcher };
