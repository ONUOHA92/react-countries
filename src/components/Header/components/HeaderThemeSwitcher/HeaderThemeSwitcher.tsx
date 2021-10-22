import { IoMoon, IoMoonOutline } from 'react-icons/io5';

import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { toggleTheme } from '../../../../store/reducers/theme.slice';
import styles from './styles';

export const HeaderThemeSwitcher: React.FC = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(({ themeReducer }) => themeReducer);

  const handleToggleTheme = (): void => {
    dispatch(toggleTheme(theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <styles.ThemeSwitcher onClick={handleToggleTheme}>
      {theme === 'light' ? (
        <IoMoonOutline size="14px" />
      ) : (
        <IoMoon size="14px" />
      )}
      {theme} Theme
    </styles.ThemeSwitcher>
  );
};
