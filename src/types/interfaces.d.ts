interface ICountryFlag {
  png: string;
  svg: string;
}

interface ICountryBase {
  capital: string;
  flags: ICountryFlag;
  name: string;
  population: number;
  region: string;
}

interface ICurrency {
  code: string;
  name: string;
  symbol: string;
}

interface ILanguage {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

interface IExtendedCountry {
  borders: string[];
  capital: string;
  currencies: ICurrency[];
  flag: string;
  languages: ILanguage[];
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  topLevelDomain: string[];
}

interface IReactSelectValue {
  value: string;
  label: string;
}
