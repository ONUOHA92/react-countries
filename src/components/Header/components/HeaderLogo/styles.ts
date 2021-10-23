import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { HOME_PAGE_ROUTE } from '../../../../constants/routes';

const Title = styled.h1`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
`;

const TitleLink = styled(Link).attrs({
  to: `${HOME_PAGE_ROUTE}`,
})`
  color: inherit;
  text-decoration: none;
`;

export default { Title, TitleLink };
