import { Container } from '../../styles/common/Container';
import { HeaderLogo } from './components/HeaderLogo';
import { HeaderThemeSwitcher } from './components/HeaderThemeSwitcher';
import styles from './styles';

export const Header: React.FC = () => (
  <styles.HeaderEl>
    <Container>
      <styles.Wrapper>
        <HeaderLogo />
        <HeaderThemeSwitcher />
      </styles.Wrapper>
    </Container>
  </styles.HeaderEl>
);
