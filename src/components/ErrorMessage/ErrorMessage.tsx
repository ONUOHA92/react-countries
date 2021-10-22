import styles from './styles';

export const ErrorMessage: React.FC = () => {
  return (
    <styles.Text>
      O-o-ops! Something went wrong
      <br />
      We cannot display data.
      <br />
      Come back when we fix everything
    </styles.Text>
  );
};
