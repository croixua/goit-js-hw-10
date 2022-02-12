const BASE_URL_NAME = 'https://restcountries.com/v3.1/';

export const fetchCountries = name => {
  fetch(`${BASE_URL_NAME}name/${name}`)
    .then(response => response.json())
    .then(country => {
      const markup = countryCard(country);
      countryInfoRef.innerHTML = markup;
    });
};
