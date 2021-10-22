import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL, COUNTRIES_URI } from '../../constants/api';
import { getCountryByCode, getCountryUrl } from '../../utils/network';

export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Countries', 'Country', 'Borders'],
  endpoints: (build) => ({
    getCountries: build.query<ICountryBase[], void>({
      query: () => ({
        url: `/${COUNTRIES_URI}`,
      }),
      providesTags: ['Countries'],
    }),
    getCountry: build.query<[IExtendedCountry], string>({
      query: (name) => ({
        url: `/${getCountryUrl(name)}`,
      }),
      providesTags: ['Country'],
    }),
    getBorders: build.query<{ name: string }[], string[]>({
      query: (borders) => ({
        url: `/${getCountryByCode(borders)}`,
      }),
      providesTags: ['Borders'],
    }),
  }),
});
