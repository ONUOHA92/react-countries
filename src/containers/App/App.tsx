import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header } from '../../components/Header';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { publicRoutes } from '../../router/routerConfiig';
import { setTheme } from '../../store/reducers/theme.slice';
import { Container } from '../../styles/common/Container';
import { getLocalStorage } from '../../utils/localStorage';
import styles from './styles';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const { isReady, theme } = useAppSelector(({ themeReducer }) => themeReducer);

  useEffect(() => {
    const themeFromLocalStorage = getLocalStorage<ThemeTypes>('theme');

    if (themeFromLocalStorage) {
      dispatch(setTheme(themeFromLocalStorage));
    } else {
      dispatch(setTheme('light'));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (theme) {
      document.body.setAttribute('data-theme', theme);
    }
  }, [theme]);

  if (!isReady) {
    return null;
  }

  return (
    <>
      <Header />
      <styles.Wrapper>
        <Container>
          <Switch>
            {publicRoutes.map(({ path, component, exact }) => (
              <Route
                key={path}
                path={path}
                component={component}
                exact={exact}
              />
            ))}
          </Switch>
        </Container>
      </styles.Wrapper>
    </>
  );
};
