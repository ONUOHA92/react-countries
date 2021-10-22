export const getFilteredAndSortedCountries = (
  countries: ICountryBase[] | undefined,
  search: string,
  region: IReactSelectValue | null
): ICountryBase[] | null => {
  if (!countries) return null;

  let data = [...countries];

  if (region) {
    const { value: regionName } = region;

    data = data.filter((country) => country.region.includes(regionName));
  }

  if (search) {
    data = data.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return data;
};
