import React, { useCallback, useMemo, useState } from 'react';

import { ErrorMessage } from '../../components/ErrorMessage';
import { HomeCountriesList } from '../../components/HomePage/HomeCountriesList';
import { HomeRegionSelector } from '../../components/HomePage/HomeRegionSelector';
import { HomeSearchInput } from '../../components/HomePage/HomeSearchInput';
import { Loader } from '../../components/Loader';
import { countriesApi } from '../../services/api/countries';
import { getFilteredAndSortedCountries } from '../../services/helpers/getFilteredAndSortedCountries';
import styles from './styles';

export const HomePage: React.FC = () => {
  const {
    data: countries,
    isLoading,
    isError,
  } = countriesApi.useGetCountriesQuery();
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [regionSelectValue, setRegionSelectValue] =
    useState<null | IReactSelectValue>(null);

  const options = useMemo(
    () => [
      { value: 'Africa', label: 'Africa' },
      { value: 'America', label: 'America' },
      { value: 'Asia', label: 'Asia' },
      { value: 'Europe', label: 'Europe' },
      { value: 'Oceania', label: 'Oceania' },
    ],
    []
  );

  const handleChangeSearchInputValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setSearchInputValue(e.currentTarget.value);
    },
    []
  );

  const handleChangeRegionSelectValue = (event: IReactSelectValue): void => {
    setRegionSelectValue(event);
  };

  const filteredAndSortedCountries = getFilteredAndSortedCountries(
    countries,
    searchInputValue,
    regionSelectValue
  );

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <styles.ControlsWrapper>
            <HomeSearchInput
              searchValue={searchInputValue}
              onChangeSearchInputValue={handleChangeSearchInputValue}
            />
            <HomeRegionSelector
              options={options}
              placeholder="Filter by Region"
              value={regionSelectValue}
              onChange={(e) =>
                handleChangeRegionSelectValue(e as IReactSelectValue)
              }
              isSearchable={false}
              isClearable
            />
          </styles.ControlsWrapper>
          <HomeCountriesList countries={filteredAndSortedCountries} />
        </>
      )}
    </>
  );
};
