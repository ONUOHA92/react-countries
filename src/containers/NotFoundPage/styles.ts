import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { HOME_PAGE_ROUTE } from '../../constants/routes';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-size: var(--fz-sm);
  font-weight: var(--fw-normal);
  color: var(--colors-text);
  line-height: 1.7;
`;

const Image = styled.img`
  width: 300px;
  object-fit: contain;
  object-position: center center;
  margin-bottom: 20px;
`;

const NotFoundPageLink = styled(Link).attrs({
  to: `${HOME_PAGE_ROUTE}`,
})`
  color: inherit;
  text-decoration: underline;
`;

export default { Text, Image, Wrapper, NotFoundPageLink };
