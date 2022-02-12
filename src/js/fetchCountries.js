import countryCard from '../template/country-card.hbs';
const BASE_URL_NAME = 'https://restcountries.com/v3.1/name/';

export const fetchCountries = (name, countryInfoRef) => {
  fetch(`${BASE_URL_NAME}${name}`)
    .then(response => response.json())
    .then(country => {
      const markup = countryCard(country);
      countryInfoRef.innerHTML = markup;
    });
};
