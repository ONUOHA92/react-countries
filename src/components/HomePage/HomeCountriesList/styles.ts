import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { COUNTRY_PAGE_ROUTE } from '../../../constants/routes';

export const CardList = styled.section`
  width: 100%;
  padding: 2rem 0;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;

    padding: 2.5rem 0;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  }
`;

const CardWrapper = styled.article`
  border-radius: var(--radii);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

const CardLink = styled(Link).attrs<{ to: string }>((props) => ({
  to: `${COUNTRY_PAGE_ROUTE}/${props.to}`,
}))`
  text-decoration: none;
  color: var(--colors-text);
`;

const CardImage = styled.img`
  height: 150px;
  width: 100%;
  object-fit: contain;
  object-position: center;
  box-shadow: var(--shadow);
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`;

const CardTitle = styled.h3`
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
`;

const CardInfoList = styled.ul`
  list-style: none;
  padding: 1rem 0 0;
`;

const CardInfoListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);

  & > b {
    font-weight: var(--fw-bold);
  }
`;

export default {
  CardList,
  CardWrapper,
  CardLink,
  CardImage,
  CardBody,
  CardTitle,
  CardInfoList,
  CardInfoListItem,
};
