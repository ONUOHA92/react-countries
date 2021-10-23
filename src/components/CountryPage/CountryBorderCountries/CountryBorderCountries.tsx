import { countriesApi } from '../../../services/api/countries';
import { Loader } from '../../Loader';
import styles from './styles';

interface ICountryBorderCountriesProps {
  borders: string[];
}

export const CountryBorderCountries: React.FC<ICountryBorderCountriesProps> = ({
  borders,
}) => {
  const { data: countries, isLoading } =
    countriesApi.useGetBordersQuery(borders);

  return (
    <>
      <styles.Container>
        {isLoading ? (
          <Loader />
        ) : !countries ? (
          <span>There is no border countries</span>
        ) : (
          <styles.Wrapper>
            {countries?.map((country) => (
              <styles.Country key={country.name}>
                <styles.CountryLink to={country.name}>
                  {country.name}
                </styles.CountryLink>
              </styles.Country>
            ))}
          </styles.Wrapper>
        )}
      </styles.Container>
    </>
  );
};
