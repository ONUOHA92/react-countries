import { COUNTRY_URI, REQUIRED_FIELDS_FOR_COUNTRY } from '../constants/api';

const getCountryUrl = (name: string): string =>
  `${COUNTRY_URI}/${name}?${REQUIRED_FIELDS_FOR_COUNTRY}`;

const getCountryByCode = (codes: string[]): string => {
  if (codes.length) {
    return `alpha?codes=${codes.join(',')}&fields=name`;
  }
  return 'alpha';
};

export { getCountryByCode, getCountryUrl };
