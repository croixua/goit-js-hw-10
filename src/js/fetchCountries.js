const BASE_URL_NAME = 'https://restcountries.com/v3.1/name/';

export const fetchCountries = country => {
  return fetch(`${BASE_URL_NAME}${country}?fields=name,flags,capital,population,languages`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    },
  );
};
