import styles from './styles';

interface ICountryMainDescriptionProps {
  nativeName: string;
  population: string;
  region: string;
  subregion: string;
  capital: string;
}

export const CountryMainDescription: React.FC<ICountryMainDescriptionProps> = ({
  nativeName,
  population,
  region,
  subregion,
  capital,
}) => {
  return (
    <styles.List>
      <styles.ListItem>
        <b>Native name: </b> {nativeName}
      </styles.ListItem>
      <styles.ListItem>
        <b>Population: </b> {population}
      </styles.ListItem>
      <styles.ListItem>
        <b>Region: </b> {region}
      </styles.ListItem>
      <styles.ListItem>
        <b>Sub Region: </b> {subregion}
      </styles.ListItem>
      <styles.ListItem>
        <b>Capital: </b> {capital}
      </styles.ListItem>
    </styles.List>
  );
};
