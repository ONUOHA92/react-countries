import { useParams } from 'react-router';

import { CountryAdditionalDescription } from '../../components/CountryPage/CountryAdditionalDescription';
import { CountryBorderCountries } from '../../components/CountryPage/CountryBorderCountries';
import { CountryButtonBack } from '../../components/CountryPage/CountryButtonBack';
import { CountryMainDescription } from '../../components/CountryPage/CountryMainDescription';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Loader } from '../../components/Loader';
import { countriesApi } from '../../services/api/countries';
import styles from './styles';

export const CountryPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { data, isLoading, isError } = countriesApi.useGetCountryQuery(name);

  const country = data?.[0];

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CountryButtonBack />
          {country && (
            <styles.Wrapper>
              <styles.InfoImage src={country.flag} alt={`Flag of ${name}`} />

              <div>
                <styles.InfoTitle>{name}</styles.InfoTitle>
                <styles.Description>
                  <CountryMainDescription
                    nativeName={country.nativeName}
                    population={country.population.toLocaleString()}
                    region={country.region}
                    subregion={country.subregion}
                    capital={country.capital}
                  />
                  <CountryAdditionalDescription
                    topLevelDomain={country.topLevelDomain}
                    currencies={country.currencies}
                    languages={country.languages}
                  />
                </styles.Description>
                <CountryBorderCountries borders={country.borders} />
              </div>
            </styles.Wrapper>
          )}
        </>
      )}
    </>
  );
};
