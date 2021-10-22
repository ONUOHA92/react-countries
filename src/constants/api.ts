const BASE_URL = 'https://restcountries.com/v2';

const REQUIRED_FIELDS_FOR_COUNTRIES =
  'fields=name,capital,flags,population,region';

const COUNTRIES_URI = `all?${REQUIRED_FIELDS_FOR_COUNTRIES}`;

const REQUIRED_FIELDS_FOR_COUNTRY =
  'fields=name,nativeName,flag,capital,population,region,subregion,topLevelDomain,currencies,languages,borders';

const COUNTRY_URI = `name`;

export { BASE_URL, COUNTRIES_URI, COUNTRY_URI, REQUIRED_FIELDS_FOR_COUNTRY };
