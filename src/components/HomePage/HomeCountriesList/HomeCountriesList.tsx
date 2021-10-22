import styles from './styles';

interface IHomeCountriesListProps {
  countries: ICountryBase[] | null;
}

export const HomeCountriesList: React.FC<IHomeCountriesListProps> = ({
  countries,
}) => {
  return (
    <styles.CardList>
      {countries &&
        countries.map(
          ({ name, flags: { png }, population, region, capital }) => (
            <styles.CardWrapper key={name}>
              <styles.CardLink to={name}>
                <styles.CardImage src={png} alt={`Flag of ${name}`} />
                <styles.CardBody>
                  <styles.CardTitle>{name}</styles.CardTitle>
                  <styles.CardInfoList>
                    <styles.CardInfoListItem>
                      <b>Population: </b> {population.toLocaleString()}
                    </styles.CardInfoListItem>
                    <styles.CardInfoListItem>
                      <b>Region: </b> {region}
                    </styles.CardInfoListItem>
                    <styles.CardInfoListItem>
                      <b>Capital: </b> {capital}
                    </styles.CardInfoListItem>
                  </styles.CardInfoList>
                </styles.CardBody>
              </styles.CardLink>
            </styles.CardWrapper>
          )
        )}
    </styles.CardList>
  );
};
