import { memo } from 'react';

import styles from './styles';

interface IHomeSearchInputProps {
  searchValue: string;
  onChangeSearchInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const HomeSearchInput: React.FC<IHomeSearchInputProps> = memo(
  ({ searchValue, onChangeSearchInputValue }) => (
    <styles.InputContainer>
      <styles.SearchIcon />
      <styles.Input value={searchValue} onChange={onChangeSearchInputValue} />
    </styles.InputContainer>
  )
);
