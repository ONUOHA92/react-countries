import { IoArrowBack } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';

import styles from './styles';

export const CountryButtonBack: React.FC = () => {
  const history = useHistory();

  const handleGoBack = (): void => {
    history.goBack();
  };

  return (
    <styles.Button onClick={handleGoBack}>
      <IoArrowBack /> Back
    </styles.Button>
  );
};
