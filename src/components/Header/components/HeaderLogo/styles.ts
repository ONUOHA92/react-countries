import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { HOME_PAGE_ROUTE } from '../../../../constants/routes';

const Title = styled(Link).attrs({
  to: `${HOME_PAGE_ROUTE}`,
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  text-decoration: none;
`;

export default { Title };
