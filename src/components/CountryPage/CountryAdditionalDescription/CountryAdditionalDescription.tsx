import styles from './styles';

interface ICountryAdditionalDescriptionProps {
  topLevelDomain: string[];
  currencies: ICurrency[];
  languages: ILanguage[];
}

export const CountryAdditionalDescription: React.FC<ICountryAdditionalDescriptionProps> =
  ({ topLevelDomain, currencies, languages }) => {
    return (
      <styles.List>
        <styles.ListItem>
          <b>Top Level Domain</b>{' '}
          {topLevelDomain.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </styles.ListItem>
        <styles.ListItem>
          <b>Currency</b>{' '}
          {currencies.map((c) => (
            <span key={c.code}>{c.name} </span>
          ))}
        </styles.ListItem>
        <styles.ListItem>
          <b>Languages</b>{' '}
          {languages.map((l) => (
            <span key={l.name}>{l.name}</span>
          ))}
        </styles.ListItem>
      </styles.List>
    );
  };
