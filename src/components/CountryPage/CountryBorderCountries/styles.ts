import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { COUNTRY_PAGE_ROUTE } from '../../../constants/routes';

const Container = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;

  & > b {
    font-weight: var(--fw-bold);
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Country = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
`;

const CountryLink = styled(Link).attrs<{ to: string }>((props) => ({
  to: `${COUNTRY_PAGE_ROUTE}/${props.to}`,
}))`
  color: inherit;
`;

const ErrorMessageText = styled.p`
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

export default {
  Container,
  Wrapper,
  Country,
  ErrorMessageText,
  CountryLink,
};
