import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  line-height: 1.8;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

export default { List, ListItem };
