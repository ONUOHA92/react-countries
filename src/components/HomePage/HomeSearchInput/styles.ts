import { IoSearch } from 'react-icons/io5';
import styled from 'styled-components';

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--colors-text);

  background-color: var(--colors-ui-base);
`;

const SearchIcon = styled(IoSearch)`
  width: 16px;
  height: 16px;
  position: absolute;
  object-fit: cover;
  object-position: center;
`;

export default {
  InputContainer,
  Input,
  SearchIcon,
};
