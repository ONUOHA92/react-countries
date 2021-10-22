import { useLocation } from 'react-router-dom';

import { useAppSelector } from '../../hooks/useAppSelector';
import notFoundImageDark from './img/not-found-dark.png';
import notFoundImageLight from './img/not-found-light.png';
import styles from './styles';

export const NotFoundPage: React.FC = () => {
  const { pathname } = useLocation();

  const { theme } = useAppSelector(({ themeReducer }) => themeReducer);

  return (
    <styles.Wrapper>
      <styles.Image
        src={theme === 'light' ? notFoundImageLight : notFoundImageDark}
        alt="Not Found"
      />
      <styles.Text>
        No match for <u>{pathname}</u>
        <br />
        <styles.NotFoundPageLink>
          <u>Return to home page</u>
        </styles.NotFoundPageLink>
      </styles.Text>
    </styles.Wrapper>
  );
};
